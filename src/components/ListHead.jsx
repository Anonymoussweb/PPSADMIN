import React from "react";

const ListHead = (props) => {
  return (
    <div>
      <div className="font-feixenSansB text-md text-[16px]">{props.title}</div>
      <hr className="bg-gray-300 border-none h-[2px] mr-2 " />
    </div>
  );
};

export default ListHead;
