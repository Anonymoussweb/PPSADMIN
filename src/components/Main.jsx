import React, { useContext } from "react";
import { appContext } from "../useContext/ToggleContext";

const Main = (props) => {
  const { togg, setTogg, night, setNight } = useContext(appContext);
  return (
    <>
      <div
        className={`${
          togg ? "w-full ml-0" : "w-[calc(100%-256px)] ml-[256px]"
        } ${
          night ? "bg-[#1A202C] text-white" : "bg-[#F4F7FF]"
        } mt-[64px] border-gray-300 border-b-[1px] px-10 py-16 max-sm:ml-0 max-sm:w-full`}
      >
        {props?.content}
      </div>
    </>
  );
};

export default Main;
