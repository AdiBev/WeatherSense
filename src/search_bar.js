import React, { Component } from "react";
import axios from "axios";
import Switch from "react-switch";

import ForecastCard from "./forecast_card";
import { API_KEY } from "./config/api_keys";
import { GlobalStylesComp } from "./styled-comps/globalStyle";

class SearchBar extends Component {
  state = {
    search_term: "",
    checked: false,
    forecastDataObj: "",
    tempF: "",
    temp_minF: "",
    temp_maxF: "",
    error: ""
  };

  handleInputChange = e => {
    this.setState({ search_term: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { search_term } = this.state;

    this.getWeatherdata(search_term);
    this.setState({ search_term: "" });
  };

  handleSwitchChange = (checked, tem) => {
    this.setState({ checked: checked }, () => console.log(this.state.checked));
  };

  getWeatherdata = term => {
    const root_url = `http://api.openweathermap.org/data/2.5/weather?q=${term}&units=metric&appid=${API_KEY}`;
    return axios
      .get(root_url)
      .then(resp =>
        this.setState({
          forecastDataObj: resp.data,
          tempF: resp.data.main.temp * 9 / 5 + 32,
          temp_minF: resp.data.main.temp_min * 9 / 5 + 32,
          temp_maxF: resp.data.main.temp_max * 9 / 5 + 32
        })
      )
      .catch(error => this.setState({ error }, console.log(error)));
  };

  render() {
    const { search_term, forecastDataObj, checked } = this.state;
    const bgColor = "#a183c9";

    return (
      <div className="form-container">
        <GlobalStylesComp color={bgColor} data={forecastDataObj} />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={search_term}
            onChange={this.handleInputChange}
            required
          />
          <button type="submit" id="submit">
            Search
          </button>
        </form>
        <Switch
          checked={checked}
          onChange={this.handleSwitchChange}
          checkedIcon={<i className="wi wi-celsius" />}
          uncheckedIcon={<i className="wi wi-fahrenheit" />}
        />
        <ForecastCard {...this.state} />
      </div>
    );
  }
}

export default SearchBar;
