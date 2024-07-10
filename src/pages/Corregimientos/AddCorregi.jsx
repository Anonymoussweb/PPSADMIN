import React, { useState } from "react";
import PostApi from "../../utilities/PostApi";
import { toast } from "react-toastify";

const AddCorregi = ({ setCreate, setRender }) => {
  const [formData, setFormData] = useState({
    title: "",
    value: "",
    districtId: "",
    provinceId: "",
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
    console.log(formData);
    e.preventDefault();
    let res = await PostApi("addcorregimiento", formData);
    console.log(res);
    if (res.message === "Corregimiento Added") {
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
      <div className="w-1/3 h-max absolute top-0 p-5 left-[50%] translate-x-[-50%] z-[51] rounded-md bg-white">
        <h2 className="font-feixenSansM text-xl">Add Province</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-full gap-5 my-6">
            <div className="flex flex-col w-full">
              <label className="font-medium mb-2" htmlFor="">
                Corregimiento's Name
              </label>
              <input
                className="border-gray-300 p-3 border-[1px] rounded-lg outline-blue-400"
                type="text"
                placeholder="Corregimiento's Name"
                required
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="font-medium mb-2" htmlFor="">
                Value
              </label>
              <input
                className="border-gray-300 p-3 border-[1px] rounded-lg outline-blue-400"
                type="text"
                placeholder="Value"
                required
                name="value"
                onChange={handleChange}
                value={formData.value}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="font-medium mb-2" htmlFor="">
                District Id
              </label>
              <input
                className="border-gray-300 p-3 border-[1px] rounded-lg outline-blue-400"
                type="text"
                placeholder="DistrictId"
                required
                name="districtId"
                onChange={handleChange}
                value={formData.districtId}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="font-medium mb-2" htmlFor="">
                Province Id
              </label>
              <input
                className="border-gray-300 p-3 border-[1px] rounded-lg outline-blue-400"
                type="text"
                placeholder="provinceId"
                required
                name="provinceId"
                onChange={handleChange}
                value={formData.provinceId}
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

export default AddCorregi;
