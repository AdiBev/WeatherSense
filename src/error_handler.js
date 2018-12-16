import React, { Fragment } from "react";

export const ErrorHandler = ({ error, search_term }) => {
  const styles = {
    color: "#931008",
    textAlign: "center"
  };

  return (
    <Fragment>
      {error ? (
        <div style={styles}>
          <h2>Ooops!! {error.toString()} </h2>
          <p>Please type in your place name again.</p>
        </div>
      ) : null}
    </Fragment>
  );
};
