import React, { Fragment, Component } from "react";

class ForecastDays extends Component {
  getForecastData = term => {
    const forecast_url = `https://api.openweathermap.org/data/2.5/forecast?q=${term}&appid=${API_KEY}`;

    return axios
      .get(forecast_url)
      .then(resp => console.log(resp.data))
      .catch(error => this.setState({ error }));
  };

  handleClick = () => {
    this.getForecastData();
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Get 5 days Forecast</button>
      </div>
    );
  }
}
export default ForecastDays;
