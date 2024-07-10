import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import ToggleContext, { appContext } from "../useContext/ToggleContext";

const ListItem = (props) => {
  const { togg, setTogg, night, setNight } = useContext(appContext);
  const { Icon } = props;
  return (
    <>
      <Link to={props.to} className="w-full">
        <div
          className={`flex items-center text-gray-400 my-3 py-2 mr-2 rounded-md duration-150 ${
            location.pathname === props.to
              ? `${
                  night
                    ? "bg-white text-orange-500"
                    : "bg-[#1F1F54] text-orange-500"
                }`
              : ""
          } hover:bg-[#1F1F54] hover:text-orange-500`}
        >
          <div className={`px-4 text-[24px]`}>{Icon}</div>

          <h3 className="font-feixenSansM">{props.title}</h3>
        </div>
      </Link>
    </>
  );
};

export default ListItem;
