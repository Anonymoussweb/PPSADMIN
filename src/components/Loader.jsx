import React from "react";
import { CirclesWithBar } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      <div className="w-full h-screen bg-[#232364] flex justify-center items-center">
        <div>
          {" "}
          <CirclesWithBar
            height="100"
            width="100"
            color="#4fa94d"
            outerCircleColor="#fff"
            innerCircleColor="#fff"
            barColor="#fff"
            ariaLabel="circles-with-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
        <div className="absolute w-full h-screen  top-0 pointer-events-none left-0">
          <img
            className="w-full h-screen object-cover"
            src="/images/auth/bg.webp"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Loader;
