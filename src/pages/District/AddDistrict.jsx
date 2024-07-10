import React, { useState } from "react";
import PostApi from "../../utilities/PostApi";
import { toast } from "react-toastify";

const AddDistrict = ({ setCreate, setRender }) => {
  const [formData, setFormData] = useState({
    title: "",
    provinceId: "",
    key: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await PostApi("adddistrict", formData);
    console.log(res);
    if (res.message === "District Added") {
      setCreate(false);
      setRender(true);
      toast(res.message);
    } else if (res.message === "Already exists") {
      setCreate(false);
      toast(res.message);
    }
  };
  return (
    <>
      <div
        className="w-full h-screen bg-[#0007] fixed top-0 left-0 z-50 text-black"
        onClick={() => setCreate(false)}
      ></div>
      <div className="w-1/3 h-max absolute top-[50%] p-5 left-[50%] translate-x-[-50%] translate-y-[-90%] z-[51] rounded-md bg-white">
        <h2 className="font-feixenSansM text-xl">Add Province</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-full gap-5 my-6">
            <div className="flex flex-col w-full">
              <label className="font-medium mb-2" htmlFor="">
                District Name
              </label>
              <input
                className="border-gray-300 p-3 border-[1px] rounded-lg outline-blue-400"
                type="text"
                placeholder="Title"
                required
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="font-medium mb-2" htmlFor="">
                District Id
              </label>
              <input
                className="border-gray-300 p-3 border-[1px] rounded-lg outline-blue-400"
                type="text"
                placeholder="Key"
                required
                name="provinceId"
                onChange={handleChange}
                value={formData.provinceId}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="font-medium mb-2" htmlFor="">
                Province
              </label>
              <input
                className="border-gray-300 p-3 border-[1px] rounded-lg outline-blue-400"
                type="text"
                placeholder="Key"
                required
                name="key"
                onChange={handleChange}
                value={formData.key}
              />
            </div>
            <div className="ml-auto mt-6">
              <button
                className=" px-4 py-1 text-lg bg-slate-200 rounded-md"
                onClick={() => setCreate(false)}
              >
                Cancel
              </button>{" "}
              <button
                className=" px-6 py-1 text-white text-lg bg-[#1F1F54] rounded-md"
                type="submit"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
      ;
    </>
  );
};

export default AddDistrict;
