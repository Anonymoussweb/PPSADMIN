import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import DataTable from "react-data-table-component";
import axios from "axios";
import { MdEdit } from "react-icons/md";
import PutApi from "../utilities/PutApi";
import { toast } from "react-toastify";
import Refetch from "../utilities/Refetch";
import AddDistrict from "./District/AddDistrict";
import { UpdateDistrict } from "./District/UpdateDistrict";
import { useDisclosure } from "@chakra-ui/react";

const Districts = () => {
  const [district, setDistrict] = useState([]);
  const [render, setRender] = useState(false);
  const [create, setCreate] = useState(false);
  const [dcreate, setDCreate] = useState(false);
  const [selectDistrict, setSelectedDistrict] = useState({
    title: "",
    districtId: "",
    provinceId: "",
    key: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const statusChange = async (id, status) => {
    const dets = {
      status: status ? false : true,
      districtId: id,
    };
    const changing = async () => {
      const res = await PutApi("deletedistrict", dets);
      if (res.data.status === "1") {
        const response = await Refetch("getdistricts");
        setDistrict(response.data);
        toast(res.data.message);
      }
    };
    changing();
  };
  const column = [
    { name: "#", selector: (row) => row.number },
    { name: "Action", selector: (row) => row.action },
    { name: "District Name", selector: (row) => row.dname },
    { name: "Province", selector: (row) => row.province },
    { name: "District Id", selector: (row) => row.dId },
    { name: "Status", selector: (row) => row.status },
  ];
  const data = district.data?.map((item, idx) => {
    return {
      number: item?.id,
      action: (
        <div
          className="text-black cursor-pointer border-black border-[1px] rounded-full p-1"
          onClick={() => {
            setSelectedDistrict({
              ...selectDistrict,
              title: item.title,
              districtId: item.key,
              provinceId: item.provinceId,
              key: item.key,
            });

            setDCreate(true);
            onOpen();
          }}
        >
          <MdEdit />
        </div>
      ),
      dname: item?.title,
      province: item?.province.title,
      dId: item?.key,
      status:
        item?.status === true ? (
          <div
            className="text-green-500 border-green-500 border-[1px] py-1 px-4 cursor-pointer rounded-md"
            onClick={() => statusChange(item.id, item.status)}
          >
            Active
          </div>
        ) : (
          <div
            className="text-red-500 border-red-500 border-[1px] py-1 px-4 cursor-pointer rounded-md"
            onClick={() => statusChange(item.id, item.status)}
          >
            Inactive
          </div>
        ),
    };
  });

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const getData = async () => {
      const res = await axios.get(
        "https://backend.pps507.com/admin/getdistricts",
        {
          headers: {
            accessToken,
          },
        }
      );
      setDistrict(res.data);
    };
    getData();
  }, [render]);

  return (
    <Layout
      content={
        <>
          <div>
            <h3 className="font-feixenSansB text-2xl">Districts</h3>
            <div
              className="text-right w-48 ml-auto mb-10 cursor-pointer"
              onClick={() => setCreate(true)}
            >
              <Button text="Add District" />
            </div>
            {district.data ? (
              <DataTable columns={column} data={data} pagination={true} />
            ) : (
              "Loading..."
            )}
          </div>
          {create && (
            <AddDistrict setCreate={setCreate} setRender={setRender} />
          )}

          <UpdateDistrict
            isOpen={isOpen}
            onClose={onClose}
            setDCreate={setDCreate}
            setRender={setRender}
            setSelectedDistrict={setSelectedDistrict}
            selectDistrict={selectDistrict}
          />
        </>
      }
    />
  );
};

export default Districts;
