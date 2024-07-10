import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Main from "./Main";

const Layout = (props) => {
  return (
    <>
      <Topbar />
      <Sidebar />
      <Main content={props?.content} />
    </>
  );
};

export default Layout;
