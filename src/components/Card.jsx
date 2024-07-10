import React, { useContext } from "react";
import { appContext } from "../useContext/ToggleContext";

const Card = (props) => {
  const { togg, setTogg, night, setNight } = useContext(appContext);
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-y-4">
        <div className="h-[80px] flex items-center">
          <img className={`w-20`} src={`/images/${props.Icon}`} alt="img" />
        </div>
        <h3
          className={`font-feixenSansB ${
            night ? "text-white" : ""
          } text-gray-400 text-xl`}
        >
          {props.title}
        </h3>
        <p className={`${night ? "text-whiet" : ""}font-feixenSansB text-3xl`}>
          {props.count}
        </p>
      </div>
    </>
  );
};

export default Card;
