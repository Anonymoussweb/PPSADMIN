import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const PutApi = async (url, data) => {
  const accessToken = localStorage.getItem("accessToken");
  const config = {
    headers: {
      accessToken,
    },
  };
  try {
    const res = await axios.put(
      `https://backend.pps507.com/admin/${url}`,
      data,
      config
    );

    return res;
  } catch (error) {
    console.log(error);
  }

  return res;
};

export default PutApi;
