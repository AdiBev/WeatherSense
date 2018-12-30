import React, { Fragment } from "react";

const showTemp = (check, tF, tC) => {
  if (check) {
    return (
      <Fragment>
        {Math.round(tF)}
        <i className="wi wi-fahrenheit" />
      </Fragment>
    );
  } else if (!check) {
    return (
      <Fragment>
        {Math.round(tC)}
        <i className="wi wi-celsius" />
      </Fragment>
    );
  }
};

export const ToggleTempUnits = props => {
  const { checked, tempF, tempC } = props;
  return <Fragment>{showTemp(checked, tempF, tempC)}</Fragment>;
};
