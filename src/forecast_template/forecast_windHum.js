import React from "react";
import ReactTooltip from "react-tooltip";

export const ForecastWindHumidity = ({
  windData,
  tempData,
  checked,
  windSpeedM
}) => {
  const windIcon = `wi wi-wind towards-${windData.deg}-deg`;
  const windUnit = `${checked} ?  : `;
  const windMiles = `${windSpeedM} miles/hour`;
  const windMeter = `${Math.round(windData.speed)} m/sec`;

  return (
    <div id="humWind">
      <h2>
        <i className="wi wi-strong-wind" data-tip="Wind speed" />{" "}
        {checked ? windMiles : windMeter}{" "}
        <i className={windIcon} data-tip="Wind direction" />
      </h2>
      <h2>
        {/*data-tip is props for ReactTooltip*/}
        <i className="wi wi-humidity" data-tip="Humidity" /> {tempData.humidity}
        %
      </h2>
      <ReactTooltip place="top" type="light" effect="float" />
    </div>
  );
};
