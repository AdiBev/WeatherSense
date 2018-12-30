import React, { Fragment } from "react";
import ReactDom from "react-dom";

import SearchBar from "./search_bar/search_bar";
/*styles imported here*/
import windIconsStyles from "../node_modules/weathericons/css/weather-icons-wind.min.css";
import iconsStyles from "../node_modules/weathericons/css/weather-icons.min.css";
import style from "./styles/main.min.css";

const Index = () => {
  return (
    <Fragment>
      <SearchBar />
    </Fragment>
  );
};

ReactDom.render(<Index />, document.querySelector(".container"));
