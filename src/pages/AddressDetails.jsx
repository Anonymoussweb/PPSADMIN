import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { IoArrowBack } from "react-icons/io5";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import GetApi from "../utilities/GetApi";
import { useLocation } from "react-router-dom";

const AddressDetails = () => {
  const [details, setDetails] = useState({});
  const location = useLocation();
  const { id } = location.state || {};
  useEffect(() => {
    const gettingData = async () => {
      const res = await GetApi("addressdetails", id);
      setDetails(res.data.data);
    };
    gettingData();
  }, []);
  console.log(details);
  return (
    <Layout
      content={
        <>
          <div>
            <div className="text-2xl font-feixenSansB">
              <span>DBS</span>{" "}
              <span className="text-gray-500">{`${details?.postalCode} ${details?.secondPostalCode}`}</span>
              <div className="text-sm cursor-pointer my-4 w-28">
                <Button
                  to={"/Addresses"}
                  text={
                    <div className="flex items-center w-4 relative">
                      <IoArrowBack className="text-lg mr-2 absolute top-[1px] left-[-28px]" />
                      <p>Back</p>
                    </div>
                  }
                />
              </div>
              <div className="w-full flex">
                <div className="w-[70%] bg-white rounded-l-md shadow font-feixenSansM p-8">
                  <h2>Postal Code</h2>
                  <div className="flex flex-col justify-between">
                    <div className="w-full flex items-center gap-3 py-4">
                      <div className="w-[40px] h-[40px] rounded-full bg-black text-white justify-center items-center flex p-1">
                        <HiMiniBuildingOffice2 />
                      </div>
                      <div className=" w-1/3 text-sm flex justify-between">
                        <div>
                          <p className="text-[17px]">{`${details?.postalCode} ${details?.secondPostalCode}`}</p>
                          <p className="text-gray-400">
                            {details?.structureType?.title}
                          </p>
                        </div>
                        <div>
                          <button className="text-blue-500 border-blue-500 border-[1px] rounded-sm px-3 py-1">
                            Verified
                          </button>
                        </div>
                      </div>
                    </div>
                    <h2 className="ml-12 text-sm text-gray-500">
                      {`${details?.corregimiento?.title}, ${details?.province?.title}`}
                    </h2>
                  </div>
                  <div className="flex justify-between w-1/2 text-base my-2">
                    <p className="text-gray-500">Structure Type:</p>
                    <p>{details?.structureType?.title}</p>
                  </div>
                  <div className="flex justify-between w-1/2 text-base mb-2">
                    <p className="text-gray-500">Building Name:</p>
                    <p>{details?.buildingName}</p>
                  </div>
                  <div className="flex justify-between w-1/2 text-base mb-2">
                    <p className="text-gray-500">Province:</p>
                    <p>{details?.province?.title}</p>
                  </div>
                  <div className="flex justify-between w-1/2 text-base mb-2">
                    <p className="text-gray-500">District:</p>
                    <p>{details?.district?.title}</p>
                  </div>
                  <div className="flex justify-between w-1/2 text-base mb-2">
                    <p className="text-gray-500">Corregimiento:</p>
                    <p>{details?.corregimiento?.title}</p>
                  </div>
                  <div className="flex justify-between w-1/2 text-base mb-2">
                    <p className="text-gray-500">Latitude:</p>
                    <p>{details?.lat}</p>
                  </div>
                  <div className="flex justify-between w-1/2 text-base mb-2">
                    <p className="text-gray-500">Longitude:</p>
                    <p>{details?.lng}</p>
                  </div>
                  <div className="flex justify-between w-1/2 text-base mb-2">
                    <p className="text-gray-500">Number of Towers:</p>
                    <p>No data</p>
                  </div>
                </div>
                <div className="w-[30%] p-8 bg-white border-gray-300 border-l-[1px] font-feixenSansM shadow rounded-r-md">
                  <h2>Sender Details</h2>
                  <div className="w-full flex items-center gap-3 py-4">
                    <div className="w-[50px] h-[50px] rounded-full bg-black text-white justify-center items-center flex p-1">
                      <FaUser />
                    </div>
                    <div className=" text-sm flex justify-between">
                      <div>
                        <p className="text-[17px]">
                          {details?.senderDetails?.name}
                        </p>
                        <p className="text-gray-400">
                          Member Since: 08/05/
                          {details?.senderDetails?.memberSince}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 space-y-4">
                    <div>
                      <p>Email</p>
                      <p>{details?.senderDetails?.email}</p>
                    </div>
                    <div>
                      <p>Phone</p>
                      <p>{details?.senderDetails?.whatsapp || "no number"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    />
  );
};

export default AddressDetails;
