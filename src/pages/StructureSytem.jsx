import React from "react";
import Layout from "../components/Layout";
import DataTable from "react-data-table-component";

const StructureSytem = () => {
  const column = [
    { name: "#", selector: (row) => row.number },
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
  const data = [
    {
      number: 1,
      action: "Yousaf",
      dbs: "81BV 0002",
      building: "PH Prestige",
      buildingType: "Apartment",
      date: Date(),
      userName: "carlos penna",
      corregimiento: "Bella Vista",
      province: "Panamá",
      district: "Panamá",
      status: "Verified",
    },
    {
      number: 1,
      action: "Yousaf",
      dbs: "81BV 0002",
      building: "PH Prestige",
      buildingType: "Apartment",
      date: Date(),
      userName: "carlos penna",
      corregimiento: "Bella Vista",
      province: "Panamá",
      district: "Panamá",
      status: "Verified",
    },
    {
      number: 1,
      action: "Yousaf",
      dbs: "81BV 0002",
      building: "PH Prestige",
      buildingType: "Apartment",
      date: Date(),
      userName: "carlos penna",
      corregimiento: "Bella Vista",
      province: "Panamá",
      district: "Panamá",
      status: "Verified",
    },
    {
      number: 1,
      action: "Yousaf",
      dbs: "81BV 0002",
      building: "PH Prestige",
      buildingType: "Apartment",
      date: Date(),
      userName: "carlos penna",
      corregimiento: "Bella Vista",
      province: "Panamá",
      district: "Panamá",
      status: "Verified",
    },
  ];
  const customStyles = {
    table: {
      style: {
        backgroundColor: "transparent", // Make the table background transparent
      },
    },
    rows: {
      style: {
        minHeight: "72px",
        borderRadius: "4px",
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
        backgroundColor: "#F4F7FF",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
      },
    },
  };
  return (
    <Layout
      content={
        <>
          <div className="pb-[50vh]">
            <h3 className="font-feixenSansB text-2xl mb-10">
              System Structure
            </h3>
            <DataTable
              customStyles={customStyles}
              columns={column}
              data={data}
            />
          </div>
        </>
      }
    />
  );
};

export default StructureSytem;
