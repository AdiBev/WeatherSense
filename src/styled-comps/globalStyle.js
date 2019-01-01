import React from "react";
import { createGlobalStyle } from "styled-components";

const nightBgColor = "#4D243D";
const morningBgColor = "#4698f0";
const morningColor = "#FFFFFF";
const nightColor = "#DF928E";

const GlobalStyles = createGlobalStyle`
  html  {
    background: ${props =>
      props.dNdata === "n" ? nightBgColor : morningBgColor};
      color: ${props => (props.dNdata === "d" ? morningColor : nightColor)};
  }`;

export const GlobalStylesComp = props => {
  if (props.data) {
    const data = /[a-zA-Z]+/g.exec(props.data.weather[0].icon);
    var dayOrNight = data[0];
  }

  return <GlobalStyles color={props.color} dNdata={dayOrNight} />;
};
