import React, { Fragment } from "react";

export const ConvertToC = ({ temp }) => {
  return (
    <Fragment>
      {Math.ceil(temp - 273)}
      <i className="wi wi-celsius" />
    </Fragment>
  );
};
