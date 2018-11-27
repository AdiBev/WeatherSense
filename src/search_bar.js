import React, { Component } from "react";
import axios from "axios";

import ForecastCard from "./forecast_card";
import { API_KEY } from "./config/api_keys";
import { weatherIcons } from "./weatherIcons";

class SearchBar extends Component {
  state = {
    search_term: "",
    forecastDataObj: "",
    icon: "",
    error: ""
  };

  handleChange = e => {
    this.setState({ search_term: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { search_term } = this.state;

    this.getWeatherdata(search_term);
    this.getForecastData(search_term);
  };

  getWeatherdata = term => {
    const root_url = `http://api.openweathermap.org/data/2.5/weather?q=${term}&appid=${API_KEY}`;
    return axios
      .get(root_url)
      .then(resp =>
        this.setState(
          {
            forecastDataObj: resp.data,
            iconId: resp.data.weather[0].id
          },
          this.getIcons(resp)
        )
      )
      .catch(error => this.setState({ error }));
    this.setState({ search_term: "" });
  };

  getForecastData = (term) => {
    const forecast_url = `https://api.openweathermap.org/data/2.5/forecast?q=${term}&appid=${API_KEY}`;

    return axios
      .get(forecast_url)
      .then(resp => console.log(resp.data))
      .catch(error => this.setState({ error }));
  };

  getIcons = resp => {
    const prefix = "wi wi-";
    const data = resp.data;
    //determine whether location is day or night
    let dayOrNight = /[a-zA-Z]+/g.exec(data.weather[0].icon);
    //get icon id
    const code = data.weather[0].id;
    let { icon } = weatherIcons[code];

    if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
      if (code === 800 && dayOrNight[0] === "d") {
        icon = "day-sunny";
      } else if (code === 800 && dayOrNight[0] === "n") {
        icon = "night-clear";
      } else if (dayOrNight[0] === "d") {
        icon = "day-" + icon;
      } else if (dayOrNight[0] === "n") {
        icon = "night-" + icon;
      }
    }

    icon = prefix + icon;
    this.setState({ icon }, () => {
      console.log(this.state.icon);
    });
  };

  render() {
    const { search_term, forecastDataObj } = this.state;
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={search_term}
            onChange={this.handleChange}
            required
          />
          <button type="submit" id="submit">
            Search
          </button>
        </form>
        <ForecastCard {...this.state} />
      </div>
    );
  }
}

export default SearchBar;
