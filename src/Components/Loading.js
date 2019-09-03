import React from "react";
import loadingGif from "../images/gif/loading-arrow.gif";

const Loading = () => {
  return (
    <div className="loading">
      <h6>fetching rooms data...</h6>
      <img src={loadingGif} alt="wait a few seconds" />
    </div>
  );
};

export default Loading;
