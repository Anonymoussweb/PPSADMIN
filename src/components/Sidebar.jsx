import React, { useContext } from "react";
import ListHead from "./ListHead";
import ListItem from "./ListItem";
import {
  FaAddressBook,
  FaCity,
  FaUserNurse,
  FaUserTie,
  FaUnity,
  FaCar,
  FaPlus,
  FaQuestion,
} from "react-icons/fa";
import { GiModernCity } from "react-icons/gi";
import {
  MdOutlineLocationCity,
  MdPeopleAlt,
  MdPayment,
  MdCategory,
} from "react-icons/md";
import { VscSymbolStructure } from "react-icons/vsc";
import { SiGooglelens } from "react-icons/si";
import { MdDashboard } from "react-icons/md";
import { FiUserX } from "react-icons/fi";
import { RiUserReceivedLine, RiCoupon4Fill } from "react-icons/ri";
import { FaWarehouse } from "react-icons/fa6";
import { GiPriceTag } from "react-icons/gi";
import { LiaPowerOffSolid } from "react-icons/lia";
import {
  TbTextSize,
  TbFlag3Filled,
  TbBellRinging,
  TbCopyCheckFilled,
} from "react-icons/tb";
import { AiOutlineDollar } from "react-icons/ai";
import { CgSandClock } from "react-icons/cg";
import { BiSolidBookOpen } from "react-icons/bi";
import { appContext } from "../useContext/ToggleContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Sidebar = () => {
  const navigate = useNavigate();
  const { togg, setTogg, night, setNight } = useContext(appContext);
  const HandleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
    const notify = () => toast.success("Logout Successfully");
    notify();
  };
  return (
    <>
      <div
        className={`${
          togg ? "left-[-400px]" : ""
        } w-64  h-screen pl-6 border-gray-300 ${
          night ? "bg-[#1A202C] text-white" : "bg-white"
        } border-r-[1px] fixed top-0 z-40 overflow-hidden max-sm:mt-10`}
      >
        {/* =========SidebarLogo========== */}
        <div className="w-full pt-8">
          <Link to="/">
            <img
              className="w-36 mx-auto"
              src={`/images/${night ? "logoD.webp" : "logo.webp"}`}
              alt="logo"
            />
          </Link>
        </div>
        {/* =========SidebarList========== */}
        <div className="w-full h-[calc(100vh-230px)] overflow-y-scroll c_Scrollbar">
          <ListHead title="DASHBOARD" />
          <ListItem title="Home" to="/" Icon={<MdDashboard />} />
          <div className="mt-4">
            <ListHead title="ADDRESS DBS" />
            <ListItem
              title="All Addresses"
              to="/Addresses"
              Icon={<FaAddressBook />}
            />
            <ListItem title="Province" to="/provinces" Icon={<FaCity />} />
            <ListItem
              title="Districts"
              to="/districts"
              Icon={<GiModernCity />}
            />
            <ListItem
              title="Corregimientos"
              to="/corregimientos"
              Icon={<MdOutlineLocationCity />}
            />
            <ListItem
              title="Structure System"
              to="/structureSystem"
              Icon={<VscSymbolStructure />}
            />
          </div>
          <div className="mt-4">
            <ListHead title="LIVE TRACKING" />
            <ListItem
              title="Track Order"
              to="trackOrder"
              Icon={<SiGooglelens />}
            />
          </div>
          <div className="mt-4">
            <ListHead title="USER MANAGEMENT" />
            <ListItem title="Customers" to="customers" Icon={<MdPeopleAlt />} />
            <ListItem title="Drivers" to="/drivers" Icon={<FaUserNurse />} />
            <ListItem
              title="Expired Drivers"
              to="/expiredDrivers"
              Icon={<FiUserX />}
            />
            <ListItem
              title="Payment Requests"
              to="paymentRequests"
              Icon={<MdPayment />}
            />
            <ListItem
              title="Transporters"
              to="/transporters"
              Icon={<RiUserReceivedLine />}
            />
            <ListItem title="Employees" to="/employees" Icon={<FaUserTie />} />
          </div>
          <div className="mt-4">
            <ListHead title="WAREHOUSE" />
            <ListItem
              title="Warehouses"
              to="/warehouses"
              Icon={<FaWarehouse />}
            />
          </div>
          <div className="mt-4">
            <ListHead title="APPLICATIONS" />
            <ListItem title="Charges" to="/charges" Icon={<GiPriceTag />} />
            <ListItem
              title="Categories"
              to="/categories"
              Icon={<MdCategory />}
            />
            <ListItem title="Coupons" to="/coupons" Icon={<RiCoupon4Fill />} />
            <ListItem
              title="Size System"
              to="/Size System"
              Icon={<TbTextSize />}
            />
            <ListItem title="Unit System" to="/unitSystem" Icon={<FaUnity />} />
            <ListItem
              title="Payment System"
              to="/paymentSystem"
              Icon={<AiOutlineDollar />}
            />
            <ListItem
              title="Vehicle Types"
              to="/vehicleTypes"
              Icon={<FaCar />}
            />
            <ListItem title="ETA" to="/eta" Icon={<CgSandClock />} />
            <ListItem title="Banners" to="/banners" Icon={<TbFlag3Filled />} />
            <ListItem
              title="Notifications"
              to="/notifications"
              Icon={<TbBellRinging />}
            />
          </div>
          <div className="mt-4">
            <ListHead title="ROLES" />
            <ListItem
              title="Roles & Permission"
              to="/rolesPermission"
              Icon={<TbCopyCheckFilled />}
            />
          </div>
          <div className="mt-4">
            <ListHead title="BOOKINGS" />
            <ListItem
              title="Bookings"
              to="/bookings"
              Icon={<BiSolidBookOpen />}
            />
          </div>
          <div className="mt-4">
            <ListHead title="GENERAL SETTINGS" />
            <ListItem title="Support" to="/support" Icon={<FaPlus />} />
            <ListItem title="FAQ's" to="/faq" Icon={<FaQuestion />} />
          </div>
        </div>
        {/* =========SidebarBottom========== */}
        <div
          className="absolute bottom-0 h-20 w-[100%] pr-7"
          onClick={HandleLogout}
        >
          <ListItem title="Logout" to="/login" Icon={<LiaPowerOffSolid />} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
