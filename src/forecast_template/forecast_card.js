import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
/*import styles from "./styles/weather-icons.css";
import iconStyles from "./styles/weather-icons-wind.min.css";*/

import { ForecastHeader } from "./forecast_header";
import { ForecastTemp } from "./forecast_temp";
import { ForecastWindHumidity } from "./forecast_windHum";

class ForecastCard extends Component {
  render() {
    const { forecastDataObj, icon, error } = this.props;
    //props for diff comps
    const tempData = forecastDataObj.main;
    const windData = forecastDataObj.wind;

    //if forecastDataObj is empty
    if (!forecastDataObj || error) {
      return null;
    }
    return (
      <div className="forecast-card">
        <ForecastHeader {...this.props} />
        <ForecastTemp {...this.props} />
        <ForecastWindHumidity
          {...this.props}
          tempData={tempData}
          windData={windData}
        />
      </div>
    );
  }
}

ForecastCard.propTypes = {
  forecastDataObj: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  tempF: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  temp_minF: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  temp_maxF: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  checked: PropTypes.bool.isRequired
};

export default ForecastCard;
