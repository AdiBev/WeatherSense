import React, { Fragment } from "react";
import PropTypes from "prop-types";

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

AppDescription.propTypes = {
  forecastDataObj: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
};
