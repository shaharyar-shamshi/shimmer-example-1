import React from "react";
import { Shimmer } from "react-shimmer-loader";
import "./App.css";

const ShimmerExample = () => {
  return (
    <div className="parentContainer">
      <div className="container">
        <Shimmer width={50} height={50} borderRadius={"50%"}></Shimmer>
        <Shimmer width={200} height={100}>
          <p>Description</p>
        </Shimmer>
        <Shimmer width={300} height={20}>
          <p>Github</p>
        </Shimmer>
        <Shimmer width={300} height={20}>
          <p>Github</p>
        </Shimmer>
        <Shimmer width={200} height={20}>
          <p>Github</p>
        </Shimmer>
      </div>
    </div>
  );
};

export default ShimmerExample;
