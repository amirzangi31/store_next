import React from "react";
import { ThreeDots } from "react-loader-spinner";

function LoadingComponent() {
  return (
    <ThreeDots
      height="30"
      width="30"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName="text-white"
      visible={true}
    />
  );
}

export default LoadingComponent;
