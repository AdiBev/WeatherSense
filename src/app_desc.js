import React, { Fragment } from "react";



export const AppDescription = ({ forecastDataObj, error }) => {
  return (
    <Fragment>
      {!forecastDataObj && !error ? (
        <div id="app-desc">
          <h2>Find weather forecast for any place!</h2>
          <p>
            For more accurate results please enter place name with country code
            ex: London, UK.
          </p>
        </div>
      ) : null}
    </Fragment>
  );
};
