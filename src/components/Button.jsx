import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <>
      <div className="bg-[#202053] px-12 py-3 rounded-md inline-block text-white border-black border-[1px] font-feixenSansM hover:bg-white hover:text-black">
        <Link to={props.to}>{props.text}</Link>
      </div>
    </>
  );
};

export default Button;
