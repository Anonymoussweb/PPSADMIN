import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import DataTable from "react-data-table-component";
import Button from "../components/Button";
import axios from "axios";
import { MdEdit } from "react-icons/md";
import PutApi from "../utilities/PutApi";
import { toast } from "react-toastify";
import { InitialFocus } from "./Modal";
import { useDisclosure } from "@chakra-ui/react";
import AddModel from "./AddModel";
import Refetch from "../utilities/Refetch";

const Provinces = () => {
  // ==========State to store api response=================
  const [provinceData, setprovinceData] = useState([]);
  const [render, setRender] = useState(false);
  const [create, setCreate] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState({
    title: "",
    key: "",
    provinceId: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  // ==========Data Table Columns=================
  const column = [
    { name: "#", selector: (row) => row.number },
    { name: "Action", selector: (row) => row.action },
    { name: "Title", selector: (row) => row.title },
    { name: "Key", selector: (row) => row.key },
    { name: "Status", selector: (row) => row.status },
  ];
  // ===============Passing data to put API====================
  const StatusChange = async (id, status) => {
    const datt = {
      status: status === true ? false : true,
      provinceId: id,
    };

    let response = await PutApi("deleteprovince", datt);
    if (response.data.status === "1") {
      toast("Status changed successfully");
      const res = await Refetch("getprovinces");
      setprovinceData(res?.data);
    }
  };
  // ====================================
  // ==========loop to show data in dataTable=================
  const data = provinceData.data?.map((item, idx) => {
    return {
      number: item?.id,
      action: (
        <div
          className="text-black cursor-pointer border-black border-[1px] rounded-full p-1"
          onClick={() => {
            setSelectedProvince({
              ...selectedProvince,
              title: item.title,
              key: item.key,
              provinceId: item.id,
            });
            onOpen();
          }}
        >
          <MdEdit />
        </div>
      ),
      title: item?.title,
      key: item?.key,
      status:
        item?.status === true ? (
          <div
            className="text-green-500 border-green-500 border-[1px] px-4 py-1 cursor-pointer rounded-md"
            onClick={() => StatusChange(item.id, item.status)}
          >
            Active
          </div>
        ) : (
          <div
            className="text-red-500 border-red-500 border-[1px] px-4 py-1 cursor-pointer rounded-md"
            onClick={() => StatusChange(item.id, item.status)}
          >
            Inactive
          </div>
        ),
    };
  });

  // ==========Getting data from api=================
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const getData = async () => {
      const res = await axios.get(
        "https://backend.pps507.com/admin/getprovinces",
        {
          headers: {
            accessToken,
          },
        }
      );
      setprovinceData(res.data);
    };
    getData();
  }, [render]);

  return (
    <Layout
      content={
        <>
          <div className="pb-5">
            <h3 className="font-feixenSansB text-2xl">Provinces</h3>
            <div
              className="w-52 text-right ml-auto mb-10 cursor-pointer"
              onClick={() => setCreate((prev) => !prev)}
            >
              <Button text="Add Province" />
            </div>
            {/* ===============Conditional rendering data-table================== */}
            {provinceData?.data ? (
              <DataTable columns={column} data={data} />
            ) : (
              "Loading..."
            )}
            <InitialFocus
              isOpen={isOpen}
              onClose={onClose}
              selectedProvince={selectedProvince}
              setSelectedProvince={setSelectedProvince}
            />
            {create && <AddModel setCreate={setCreate} setRender={setRender} />}
          </div>
        </>
      }
    />
  );
};

export default Provinces;
