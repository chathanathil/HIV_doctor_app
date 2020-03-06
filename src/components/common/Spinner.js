import React from "react";
import Spinner from "./spinner.gif";
export default () => {
  return (
    <div>
      <img src={Spinner} className="spinner" alt="Loading..." />
    </div>
  );
};
