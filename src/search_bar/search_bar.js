import React, { Component, Fragment } from "react";
import Switch from "react-switch";

import ForecastCard from "../forecast_template/forecast_card";
import { API_KEY } from "../config/api_keys";
import { GlobalStylesComp } from "../styled-comps/globalStyle";
import { ErrorHandler } from "../error_handler/error_handler";
import { Logo } from "../logo/logo";
import { AppDescription } from "../app_desc/app_desc";
import { ForecastSpinner } from "../spinner/forecast_spinner";
class SearchBar extends Component {
  state = {
    search_term: "",
    checked: false,
    forecastDataObj: "",
    loading: false,
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
    return fetch(root_url)
      .then(this.setState({ loading: true }))
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          forecastDataObj: data,
          tempF: (data.main.temp * 9) / 5 + 32,
          temp_minF: (data.main.temp_min * 9) / 5 + 32,
          temp_maxF: (data.main.temp_max * 9) / 5 + 32,
          windSpeedM: Math.round(data.wind.speed * 2.237),
          loading: false,
          error: ""
        })
      )
      .catch(error => this.setState({ error }));
  };

  render() {
    const {
      search_term,
      forecastDataObj,
      checked,
      error,
      loading
    } = this.state;

    return (
      <Fragment>
        <Logo />
        <div className="form-container">
          {<GlobalStylesComp data={forecastDataObj} />}
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={search_term.toUpperCase()}
              onChange={this.handleInputChange}
              required
            />
            <button type="submit" id="submit">
              <span>Search</span>
            </button>
            <div style={{ marginLeft: 70, marginTop: 10 }}>
              {forecastDataObj && !error ? (
                <Fragment>
                  <i className="wi wi-celsius switch" />{" "}
                  <Switch
                    checked={checked}
                    onChange={this.handleSwitchChange}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    onColor="#849186"
                    offColor="#7e6a8b"
                  />{" "}
                  <i className="wi wi-fahrenheit switch" />
                </Fragment>
              ) : null}
            </div>
          </form>
          <ForecastSpinner loading={loading} error={error} />
          <AppDescription {...this.state} />
          <ForecastCard {...this.state} />
          <ErrorHandler error={error} />
        </div>
      </Fragment>
    );
  }
}

export default SearchBar;
