import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import LineChart from "../components/LineChart";
import MyChart from "../components/MyChart";
import { appContext } from "../useContext/ToggleContext";
import GetApi from "../utilities/GetApi";

const Home = () => {
  const { togg, setTogg, night, setNight } = useContext(appContext);
  const [dets, setDets] = useState({});
  const alldets = async () => {
    const res = await GetApi("dashboard/general", 1);
    console.log(res);
    setDets(res.data.data);
  };

  useEffect(() => {
    alldets();
  }, []);

  return (
    <Layout
      content={
        <div>
          <h3 className="font-feixenSansB text-2xl">Dashboard</h3>
          <div className="w-full flex flex-wrap gap-4 justify-center items-center mt-5">
            <div
              className={`flex-1 flex justify-center items-center ${
                night ? "bg-[#333333]" : "bg-white"
              } py-8 cursor-pointer rounded-md shadow min-w-[200px]`}
            >
              <Card
                title="All Users"
                count={`${dets.numOfUsers || 0}`}
                Icon={`${night ? "logo-1D.webp" : "logo-1.webp"}`}
              />
            </div>
            <div
              className={`flex-1 flex justify-center items-center ${
                night ? "bg-[#333333]" : "bg-white"
              } py-8 cursor-pointer rounded-md shadow min-w-[200px]`}
            >
              <Card
                title="All Warehouses"
                count={`${dets.numOfWarehouses || 0}`}
                Icon={`${night ? "logo-2D.webp" : "logo-2.webp"}`}
              />
            </div>
            <div
              className={`flex-1 flex justify-center items-center ${
                night ? "bg-[#333333]" : "bg-white"
              } py-8 cursor-pointer rounded-md shadow min-w-[200px]`}
            >
              <Card
                title="All Drivers"
                count={`${dets.numOfDrivers || 0}`}
                Icon={`${night ? "logo-3D.webp" : "logo-3.webp"}`}
              />
            </div>
            <div
              className={`flex-1 flex justify-center items-center ${
                night ? "bg-[#333333]" : "bg-white"
              }  py-8 cursor-pointer rounded-md shadow min-w-[200px]`}
            >
              <Card
                title="All Orders"
                count="0"
                Icon={`${night ? "logo-4D.webp" : "logo-4.webp"}`}
              />
            </div>
          </div>
          {/* ==============second row============= */}
          <div className="w-full flex flex-wrap gap-4 justify-center items-center mt-4 ">
            <div
              className={`flex-1 flex justify-center items-center ${
                night ? "bg-[#333333]" : "bg-white"
              } py-8 cursor-pointer rounded-md shadow min-w-[200px]`}
            >
              <Card
                title="Totle Earnings"
                count={<>{dets.earnings ?? 0}</>}
                Icon={`${night ? "logo-5D.webp" : "logo-5.webp"}`}
              />
            </div>
            <div
              className={`flex-1 flex justify-center items-center ${
                night ? "bg-[#333333]" : "bg-white"
              } py-8 cursor-pointer rounded-md shadow min-w-[200px]`}
            >
              <Card
                title="Available Balance"
                count={<>${dets.balance || 0}</>}
                Icon={`${night ? "logo-6D.webp" : "logo-6.webp"}`}
              />
            </div>
            <div
              className={`flex-1 flex justify-center items-center ${
                night ? "bg-[#333333]" : "bg-white"
              }  py-8 cursor-pointer rounded-md shadow min-w-[200px]`}
            >
              <Card
                title="Driver's Earnings"
                count={<>${dets.driverEarnings || 0}</>}
                Icon={`${night ? "logo-7D.webp" : "logo-7.webp"}`}
              />
            </div>
            <div
              className={`flex-1 flex justify-center items-center ${
                night ? "bg-[#333333]" : "bg-white"
              }  py-8 cursor-pointer rounded-md shadow min-w-[200px]`}
            >
              <Card
                title="Today's Earnings"
                count={<>${dets.todayEarnings || 0}</>}
                Icon={`${night ? "logo-8D.webp" : "logo-8.webp"}`}
              />
            </div>
          </div>
          <div className="w-full flex gap-10 justify-center items-center mt-10 max-lg:flex-col">
            <div className="w-1/2 max-lg:w-full">
              <LineChart />
            </div>
            <div className="w-1/2 max-lg:w-full">
              <MyChart />
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Home;
