import React, { useContext } from "react";
import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs";
import { appContext } from "../useContext/ToggleContext";
import { FaSun } from "react-icons/fa";

const Topbar = () => {
  const { togg, setTogg, night, setNight } = useContext(appContext);
  return (
    <>
      <div
        className={`${
          togg ? "w-full ml-0" : "w-[calc(100%-256px)] ml-[256px]"
        }  ${
          night ? "bg-[#1A202C] text-white border-white" : "bg-white"
        }  h-16  border-gray-300 border-b-[1px] fixed top-0 z-50 max-sm:ml-0 max-sm:w-full`}
      >
        <div className="flex h-16 justify-between px-6 items-center">
          <div
            className="cursor-pointer text-3xl"
            onClick={() => setTogg((prev) => !prev)}
          >
            {togg ? <IoArrowForward /> : <IoArrowBackOutline />}
          </div>
          <div
            className="flex items-center gap-4 font-feixenSansM"
            onClick={() => setNight((prev) => !prev)}
          >
            <p>Super Admin</p>
            {night ? (
              <FaSun className="cursor-pointer text-2xl text-white" />
            ) : (
              <BsMoonStars className="cursor-pointer text-2xl" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
