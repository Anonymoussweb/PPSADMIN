import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import DataTable from "react-data-table-component";
import Button from "../components/Button";
import axios from "axios";
import { MdEdit } from "react-icons/md";
import PutApi from "../utilities/PutApi";
import { toast } from "react-toastify";
import Refetch from "../utilities/Refetch";
import AddCorregi from "./Corregimientos/AddCorregi";
import { UpdateCorregi } from "./Corregimientos/UpdateCorregi";
import { useDisclosure } from "@chakra-ui/react";

const Corregimientos = () => {
  const [corregimientos, setCorregimientos] = useState([]);
  const [create, setCreate] = useState(false);
  const [render, setRender] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectCorregimientos, setSelectCorregimientos] = useState({
    title: "",
    value: "",
    districtId: "",
    provinceId: "",
  });
  console.log("checking corregis", corregimientos);
  // ===============Passing data to put API====================
  const StatusChange = async (id, status) => {
    const dets = {
      status: status ? false : true,
      corregimientoId: id,
    };
    console.log(dets);
    const changing = async () => {
      const res = await PutApi("deletecorregimiento", dets);

      if (res.data.status === "1") {
        const response = await Refetch("getcorregimiento");
        setCorregimientos(response.data.data);
        toast(res.data.message);
      }
    };
    changing();
  };
  console.log("corregimientosjaskj");
  // ====================================
  const column = [
    { name: "#", selector: (row) => row.number },
    { name: "Action", selector: (row) => row.action },
    { name: "Name", selector: (row) => row.name },
    { name: "Key", selector: (row) => row.key },
    { name: "Value", selector: (row) => row.value },
    { name: "Nomenclature", selector: (row) => row.nomenclature },
    { name: "District", selector: (row) => row.district },
    { name: "Province", selector: (row) => row.province },
    { name: "Status", selector: (row) => row.status },
  ];
  const data = corregimientos?.map((item, idx) => {
    return {
      number: item?.id,
      action: (
        <div
          className="text-black cursor-pointer border-black border-[1px] rounded-full p-1"
          onClick={() => {
            setSelectCorregimientos({
              ...selectCorregimientos,
              title: item.title,
              value: item.value,
              districtId: item.districtId,
              provinceId: item.provinceId,
            });
            onOpen();
          }}
        >
          <MdEdit />
        </div>
      ),
      name: item?.title,
      key: item?.key,
      value: item?.value,
      nomenclature: item?.nomenclature,
      district: item?.district.title,
      province: item?.title,
      status:
        item?.status === true ? (
          <div
            className="text-green-500 border-green-500 border-[1px] py-1 px-4 cursor-pointer rounded-md"
            onClick={() => StatusChange(item.id, item.status)}
          >
            Active
          </div>
        ) : (
          <div
            className="text-red-500 border-red-500 border-[1px] py-1 px-4 cursor-pointer rounded-md"
            onClick={() => StatusChange(item.id, item.status)}
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
        "https://backend.pps507.com/admin/getcorregimiento",
        {
          headers: {
            accessToken,
          },
        }
      );
      setCorregimientos(res.data.data);
    };
    getData();
  }, [render]);

  return (
    <Layout
      content={
        <>
          <div className="pb-5">
            <h3 className="font-feixenSansB text-2xl">Corregimientos</h3>
            <div
              className="text-right mb-10 cursor-pointer w-64 ml-auto"
              onClick={() => setCreate(true)}
            >
              <Button text="Add Corregimientos" />
            </div>
            {corregimientos.length > 0 ? (
              <DataTable columns={column} data={data} pagination={true} />
            ) : (
              "Loading..."
            )}
          </div>
          {create && <AddCorregi setCreate={setCreate} setRender={setRender} />}
          <UpdateCorregi
            isOpen={isOpen}
            onClose={onClose}
            setSelectCorregimientos={setSelectCorregimientos}
            selectCorregimientos={selectCorregimientos}
          />
        </>
      }
    />
  );
};

export default Corregimientos;
