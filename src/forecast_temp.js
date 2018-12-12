import React, { Fragment } from "react";
import { ShowTemp } from "./show_temp";

export const ForecastTemp = props => {
  const { temp_maxF, temp_minF, checked, forecastDataObj } = props;
  const { temp_min } = forecastDataObj.main;
  const { temp_max } = forecastDataObj.main;

  return (
    <div id="tempMinMax">
      <h2>
        <i className="wi wi-direction-up" /> {" "}
        <ShowTemp checked={checked} tempF={temp_maxF} tempC={temp_max} />
      </h2>
      <h2>
        <i className="wi wi-direction-down" /> {" "}
        <ShowTemp checked={checked} tempF={temp_minF} tempC={temp_max} />
      </h2>
    </div>
  );
};
