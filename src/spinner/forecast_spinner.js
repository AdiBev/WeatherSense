import React, { Fragment } from "react";
import { CircleLoader } from "react-spinners";
import { css } from "emotion";

export const ForecastSpinner = ({ loading, error }) => {
  const loaderStyle = css`
    display: block;
    margin: auto;
    bordercolor: red;
  `;

  return (
    <Fragment>
      {loading && !error ? (
        <div style={{ margin: "auto" }}>
          <CircleLoader
            sizeUnit="px"
            size={50}
            className={loaderStyle}
            color={"#123abc"}
            loading={loading}
          />
        </div>
      ) : null}
    </Fragment>
  );
};
