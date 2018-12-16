import React from "react";
//#f6fb98
import { createGlobalStyle } from "styled-components";

//saved my ASS!!!
const GlobalStyles = createGlobalStyle`
  html  {
    background: ${props => (props.dNdata === "n" ? "#676767" : "#feffd6")};
      color: ${props => (props.dNdata === "d" ? "#324597" : "#c4c166")};
  }`;

export const GlobalStylesComp = props => {
  if (props.data) {
    const data = /[a-zA-Z]+/g.exec(props.data.weather[0].icon);
    var dayOrNight = data[0];
  }

  return <GlobalStyles color={props.color} dNdata={dayOrNight} />;
};
