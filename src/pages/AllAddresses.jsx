import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import DataTable from "react-data-table-component";
import Button from "../components/Button";
import axios from "axios";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import AddressDetails from "./AddressDetails";
import UpdateAdress from "./UpdateAdress";
import PutApi from "../utilities/PutApi";
import { toast } from "react-toastify";
import GetApi from "../utilities/GetApi";

const AllAddresses = () => {
  const [apiData, setApiData] = useState([]);
  const [model, setModel] = useState(false);
  const [selAddres, setSelAddres] = useState({
    addressId: "",
    lat: "",
    lng: "",
  });

  const navigate = useNavigate();
  const column = [
    { name: "#", selector: (row) => row.id },
    { name: "Action", selector: (row) => row.action },
    { name: "DBS", selector: (row) => row.dbs },
    { name: "Building", selector: (row) => row.building },
    { name: "Building Type", selector: (row) => row.buildingType },
    { name: "Date", selector: (row) => row.date },
    { name: "User Name", selector: (row) => row.userName },
    { name: "Corregimiento", selector: (row) => row.corregimiento },
    { name: "Province", selector: (row) => row.province },
    { name: "District", selector: (row) => row.district },
    { name: "Status", selector: (row) => row.status },
  ];

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    const getData = async () => {
      const res = await axios.get(
        "https://backend.pps507.com/admin/alladdresses",
        {
          headers: {
            accessToken,
          },
        }
      );
      setApiData(res.data.data);
    };
    getData();
  }, []);

  // ===============handleDelete====================
  const handleDelete = async (id) => {
    let data = {
      addressId: id,
    };

    let res = await PutApi("deleteaddress", data);
    console.log(res.data.message);
    if (res.data.message === "Address deleted") {
      toast(res.data.message);
      setApiData((prevApiData) => prevApiData.filter((item) => item.id !== id));
    }
  };

  const data = apiData.map((item, idx) => {
    return {
      id: item?.id,
      action: (
        <div className="flex gap-2 text-lg">
          <div className="cursor-pointer text-green-600">
            <Link
              className="inline"
              to="https://wa.me/+50769481198?text=Hello%20this%20is%20pps%20location%20team%20we%20are%20here%20to%20verify%20the%20direction%20of%20your%20house."
            >
              <IoLogoWhatsapp />
            </Link>
          </div>
          <div className="cursor-pointer text-gray-500">
            <Link
              to="Addresses"
              className="inline"
              onClick={(e) => {
                e.preventDefault();
                navigate("/addresses/dbs", { state: { id: item.id } });
              }}
            >
              <IoMdEye />
            </Link>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              setModel(true);
              setSelAddres((prev) => {
                return {
                  ...prev,
                  addressId: item.id,
                  lat: item.lat,
                  lng: item.lng,
                };
              });
            }}
          >
            <MdModeEdit />
          </div>
          <div
            className="cursor-pointer text-red-500"
            onClick={() => handleDelete(item.id)}
          >
            <RiDeleteBinLine />
          </div>
        </div>
      ),
      dbs: `${item?.postalCode} ${item?.secondPostalCode}`,
      building: item?.buildingName,
      buildingType: item?.structureType.title,
      date: item?.date,
      userName: item?.warehouse.name,
      corregimiento: item?.corregimiento.title,
      province: item?.province.title,
      district: item?.district.title,
      status:
        item?.verified === true ? (
          <div className=" text-blue-500 border-blue-500 text-sm border-[1px] px-4 py-1 rounded-md cursor-pointer">
            VERIFIED
          </div>
        ) : (
          "unverified"
        ),
    };
  });

  // =========customStyles===========
  const customStyles = {
    table: {
      style: {
        width: "1800px", // Set the table width to 1800px
        padding: "20px",
      },
    },
    headCells: {
      style: {
        fontSize: "15px",
        color: "gray",
      },
    },
    rows: {
      style: {
        paddingTop: "15px", // Increase the padding for each row
        paddingBottom: "15px",
      },
    },
    cells: {
      style: {
        fontSize: "18px", // Increase the text size in each cell
      },
    },
  };

  return (
    <Layout
      content={
        <>
          <div className="pb-[50vh] w-full">
            <h3 className="font-feixenSansB text-2xl">DBS Addresses</h3>
            <div className="text-right mb-10 space-x-2">
              <Button text="Import Data" />
              <Button text="Add DBS" />
            </div>
            {apiData.length > 0 ? (
              <DataTable
                columns={column}
                data={data}
                customStyles={customStyles}
              />
            ) : (
              "Loading..."
            )}
          </div>
          {model && <UpdateAdress selAddres={selAddres} setModel={setModel} />}
        </>
      }
    />
  );
};

export default AllAddresses;
