import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();
  const [eye, setEye] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleLogin = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
      dvToken: "2121-pkl-pll",
    };
    try {
      const response = await axios.post(
        "https://backend.pps507.com/admin/signin",
        data
      );
      console.log("Response:", response.data);
      const accessToken = response.data.data.accessToken;
      localStorage.setItem("accessToken", accessToken);

      if (
        response.data.message === "Login Successful" &&
        localStorage.getItem("accessToken")
      ) {
        navigate("/");
        const notify = () => toast.success("Login Successfull");
        notify();
      } else {
        navigate("/login");
        const notify = () => toast.error("Login Failed");
        notify();
        console.error("Login failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return (
    <>
      <div className="w-full h-screen flex items-center bg-[#232364] max-lg:flex-col">
        <div className="absolute w-full h-screen top-0 pointer-events-none left-0">
          <img
            className="w-full h-screen object-cover"
            src="/images/auth/bg.webp"
            alt=""
          />
        </div>
        <div className="w-1/2 h-screen flex flex-col justify-center items-center gap-12 max-lg:w-full">
          <div className="w-60 mx-auto max-lg:w-40">
            <img src="/images/auth/logo_orange.webp" alt="logo" />
          </div>
          <h2 className="text-white text-2xl font-feixenSansM max-lg:hidden">
            Taglines goes here
          </h2>
        </div>
        <div className="w-[.5px] h-[55vh] bg-gray-500 max-lg:hidden"></div>
        {/* ================================ */}
        <div className="w-1/2 h-screen flex flex-col justify-center items-center gap-5 max-lg:w-full">
          <h2 className="text-white text-[48px] font-feixenSansB mb-2 max-sm:text-[30px]">
            Sign in
          </h2>
          <form
            className="w-full flex flex-col justify-center items-center gap-5"
            action=""
            onSubmit={HandleLogin}
          >
            <div className="w-[50%] max-md:w-[70%]">
              <input
                className="w-full px-4 py-[10px] rounded-md outline-none"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email..."
              />
            </div>
            <div className="w-[50%] relative max-md:w-[70%]">
              <input
                className="w-full px-4 py-[10px] rounded-md outline-none"
                type={`${eye ? "text" : "Password"}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password..."
              />
              <div
                className="absolute top-[50%] right-4 translate-y-[-50%] text-2xl text-gray-400 cursor-pointer"
                onClick={() => setEye((prev) => !prev)}
              >
                {eye ? <FiEye /> : <FiEyeOff />}
              </div>
            </div>
            <div className="w-[50%] mt-5 max-md:w-[70%]">
              <input
                className="w-full text-white font-feixenSansM text-xl bg-[#FF745A] py-3 cursor-pointer rounded-md border-[1px] hover:bg-transparent hover:border-[1px] border-[#FF745A] hover:text-[#FF745A] max-sm:text-[15px]"
                type="submit"
                value="Sign In"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
