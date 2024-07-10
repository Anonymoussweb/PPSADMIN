import axios from "axios";
import React from "react";

const GetApi = async (url, id) => {
  const accessToken = localStorage.getItem("accessToken");
  const config = {
    headers: {
      accessToken,
    },
  };
  try {
    const res = await axios.get(
      `https://backend.pps507.com/admin/${url}?id=${id}`,
      config
    );

    return res;
  } catch (error) {
    console.log(error);
  }

  return res;
};

export default GetApi;
