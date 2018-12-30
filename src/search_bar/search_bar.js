import React, { Component, Fragment } from "react";
import axios from "axios";
import Switch from "react-switch";

import ForecastCard from "../forecast_template/forecast_card";
import { API_KEY } from "../config/api_keys";
import { GlobalStylesComp } from "../styled-comps/globalStyle";
import { ErrorHandler } from "../error_handler/error_handler";
import { Logo } from "../logo/logo";
import { AppDescription } from "../app_desc/app_desc";

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
    this.setState({ checked: checked });
  };

  getWeatherdata = term => {
    const root_url = `https://api.openweathermap.org/data/2.5/weather?q=${term}&units=metric&appid=${API_KEY}`;
    return axios
      .get(root_url)
      .then(resp =>
        this.setState({
          forecastDataObj: resp.data,
          tempF: resp.data.main.temp * 9 / 5 + 32,
          temp_minF: resp.data.main.temp_min * 9 / 5 + 32,
          temp_maxF: resp.data.main.temp_max * 9 / 5 + 32,
          error: ""
        })
      )
      .catch(error => this.setState({ error }));
  };

  render() {
    const { search_term, forecastDataObj, checked, error } = this.state;

    return (
      <Fragment>
        <Logo />
        <div className="form-container">
          {<GlobalStylesComp data={forecastDataObj} />}
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
            <div style={{ marginTop: 10 + "px" }}>
              {forecastDataObj && !error ? (
                <Switch
                  checked={checked}
                  onChange={this.handleSwitchChange}
                  checkedIcon={<i className="wi wi-celsius" />}
                  uncheckedIcon={<i className="wi wi-fahrenheit" />}
                  onColor="#849186"
                  offColor="#7e6a8b"
                />
              ) : null}
            </div>
          </form>
          <AppDescription {...this.state} />
          <ForecastCard {...this.state} />
          <ErrorHandler error={error} />
        </div>
      </Fragment>
    );
  }
}

export default SearchBar;
