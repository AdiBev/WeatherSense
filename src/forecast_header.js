import React, { Fragment } from "react";

import { ConvertToC } from "./utility/convertToC";

export const ForecastHeader = ({ forecastDataObj, icon }) => {
  const tempData = forecastDataObj.main;

  return (
    <Fragment>
      <div id="header">
        <h1>{forecastDataObj.name}</h1>

        <h1>
          <i className={icon} /> <ConvertToC temp={tempData.temp} />
        </h1>
      </div>
    </Fragment>
  );
};
