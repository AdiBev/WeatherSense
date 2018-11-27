import React, { Fragment } from "react";

import { ConvertToC } from "./utility/convertToC";

export const ForecastTemp = ({ tempData }) => {
  return (
    <div id="tempMinMax">
      <h2>
        <i className="wi wi-direction-up" />{" "}
        <ConvertToC temp={tempData.temp_max} />
      </h2>
      <h2>
        <i className="wi wi-direction-down" />{" "}
        <ConvertToC temp={tempData.temp_min} />
      </h2>
    </div>
  );
};
