import axios from "axios";
import React from "react";

const Refetch = async (url) => {
  const accessToken = localStorage.getItem("accessToken");
  const config = {
    headers: {
      accessToken,
    },
  };
  try {
    const res = await axios.get(
      `https://backend.pps507.com/admin/${url}`,
      config
    );

    return res;
  } catch (error) {
    console.log(error);
  }
};

export default Refetch;
