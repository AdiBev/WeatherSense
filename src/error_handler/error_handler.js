import React, { Fragment } from "react";
import PropTypes from "prop-types";

export const ErrorHandler = ({ error }) => {
  return (
    <Fragment>
      {error ? (
        <div id="error">
          <h2>Ooops!! {error.toString()} </h2>
          <p>Please type in your place name again.</p>
        </div>
      ) : null}
    </Fragment>
  );
};

ErrorHandler.propTypes = {
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
};
