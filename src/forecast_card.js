import React, { Component, Fragment } from "react";

/*import styles from "./styles/weather-icons.css";
import iconStyles from "./styles/weather-icons-wind.min.css";*/

import { ConvertToC } from "./utility/convertToC";

import { ForecastHeader } from "./forecast_header";
import { ForecastTemp } from "./forecast_temp";
import {ForecastWindHumidity} from "./forecast_windHum";

class ForecastCard extends Component {
  render() {
    const { forecastDataObj, icon } = this.props;
    //props for diff comps
    const tempData = forecastDataObj.main;
    const windData = forecastDataObj.wind;

    //if forecastDataObj is empty
    if (!forecastDataObj) {
      return null;
    }
    return (
      <div className="forecast-card">
        <ForecastHeader {...this.props} />
        <ForecastTemp tempData={tempData} />
        <ForecastWindHumidity tempData={tempData}
         windData={windData} />
      </div>
    );
  }
}

export default ForecastCard;
