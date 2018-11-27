import React from "react";

export const ForecastWindHumidity = ({ windData, tempData }) => {
  const windIcon = `wi wi-wind towards-${windData.deg}-deg`;

  return (
    <div id="humWind">
      <h2>
        <i className="wi wi-strong-wind" /> {windData.speed} m/sec{" "}
        <i className={windIcon} />
      </h2>
      <h2>
        <i className="wi wi-humidity" /> {tempData.humidity}%
      </h2>
    </div>
  );
};
