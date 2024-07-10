import axios from "axios";

const PostApi = async (url, data) => {
  const accessToken = localStorage.getItem("accessToken");
  const config = {
    headers: {
      accessToken,
    },
  };
  let res = await axios.post(
    `https://backend.pps507.com/admin/${url}`,
    data,
    config
  );
  return res.data;
};

export default PostApi;
