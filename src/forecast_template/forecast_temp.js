import React, { Fragment } from "react";
import { ToggleTempUnits } from "../toggle_tempUnits/toggle_tempUnits";

export const ForecastTemp = props => {
  const { temp_maxF, temp_minF, checked, forecastDataObj } = props;
  const { temp_min } = forecastDataObj.main;
  const { temp_max } = forecastDataObj.main;

  return (
    <div id="tempMinMax">
      <h2>
        <i className="wi wi-direction-up" /> {" "}
        <ToggleTempUnits checked={checked} tempF={temp_maxF} tempC={temp_max} />
      </h2>
      <h2>
        <i className="wi wi-direction-down" /> {" "}
        <ToggleTempUnits checked={checked} tempF={temp_minF} tempC={temp_max} />
      </h2>
    </div>
  );
};
