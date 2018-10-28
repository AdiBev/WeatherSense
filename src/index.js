import React from "react";
import ReactDom from "react-dom";
import style from "./main.css";

const Index = () => {
  return <div>React Index page</div>;
};

ReactDom.render(<Index />, document.querySelector(".container"));
