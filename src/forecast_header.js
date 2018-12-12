import React, { Fragment } from "react";

import { weatherIcons } from "./weatherIcons";
import { ShowTemp } from "./show_temp";

const getIcon = data => {
  const prefix = "wi wi-";

  //Check if it's day or night
  const dayOrNight = /[a-zA-Z]+/g.exec(data.weather[0].icon);

  const code = data.weather[0].id;
  let { icon } = weatherIcons[code];
  if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
    if (code === 800 && dayOrNight[0] === "d") {
      icon = "day-sunny";
    } else if (code === 800 && dayOrNight[0] === "n") {
      icon = "night-clear";
    } else if (dayOrNight[0] === "d") {
      icon = "day-" + icon;
    } else if (dayOrNight[0] === "n") {
      icon = "night-" + icon;
    }
  }
  icon = prefix + icon;
  return <i className={icon} />;
};

export const ForecastHeader = ({ forecastDataObj, tempF, checked }) => {
  const { temp } = forecastDataObj.main;

  return (
    <Fragment>
      <div id="header">
        <h1>
          {forecastDataObj.name},{forecastDataObj.sys.country}
        </h1>

        <h1>
          {getIcon(forecastDataObj)}{" "}
          <ShowTemp checked={checked} tempF={tempF} tempC={temp} />
        </h1>
      </div>
    </Fragment>
  );
};
