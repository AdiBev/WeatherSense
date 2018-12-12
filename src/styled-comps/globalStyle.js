import React from "react";

import { createGlobalStyle } from "styled-components";

//saved my ASS!!!
const GlobalStyles = createGlobalStyle`
  html  {
    background: ${props =>
      props.dNdata === "n" ? "rgb(103, 103, 103)" : "rgb(237, 181, 85)"};
  }`;

export const GlobalStylesComp = props => {
  if (props.data) {
    const data = /[a-zA-Z]+/g.exec(props.data.weather[0].icon);
    var dayOrNight = data[0];
    console.log(dayOrNight);
  }

  return <GlobalStyles color={props.color} dNdata={dayOrNight} />;
};
