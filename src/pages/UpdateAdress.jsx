import React, { useState } from "react";
import { toast } from "react-toastify";
import PutApi from "../utilities/PutApi";

const UpdateAdress = ({ selAddres, setModel }) => {
  const [formData, setFormData] = useState({
    addressId: selAddres.addressId,
    lat: selAddres.lat,
    lng: selAddres.lng,
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
    const res = await PutApi("editaddress", formData);
    console.log("update:", res.data.message);
    if (res.data.message === "Address updated") {
      toast(res.data.message);
      setModel(false);
    }
  };
  return (
    <>
      <div
        className="w-full h-screen bg-[#0007] fixed top-0 left-0 z-50 rounded-md text-black"
        onClick={() => setModel(false)}
      ></div>
      <div className="w-1/3 h-[370px] absolute top-[50%] p-5 left-[50%] translate-x-[-50%] translate-y-[-100%] z-[51] rounded-md bg-white">
        <h2 className="font-feixenSansM text-xl">Add Province</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-full gap-5 my-6">
            <div className="flex flex-col w-full">
              <label className="font-medium mb-2" htmlFor="">
                Latitude
              </label>
              <input
                className="border-gray-300 p-3 border-[1px] rounded-lg outline-blue-400"
                type="text"
                placeholder="Latitude"
                required
                name="lat"
                value={formData.lat}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="font-medium mb-2" htmlFor="">
                Langitude
              </label>
              <input
                className="border-gray-300 p-3 border-[1px] rounded-lg outline-blue-400"
                type="text"
                placeholder="Langitude"
                required
                name="lng"
                onChange={handleChange}
                value={formData.lng}
              />
            </div>
            <div className="ml-auto mt-6">
              <button
                className=" px-4 py-1 text-lg bg-slate-200 rounded-md"
                onClick={() => setModel(false)}
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

export default UpdateAdress;
