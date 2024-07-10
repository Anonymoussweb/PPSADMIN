import React, { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import Loader from "./Loader";

const ProtectedRoutes = (props) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const login = localStorage.getItem("accessToken");
    if (login) {
      navigate("/");
      setIsLoading(false);
    }
    if (!login) {
      navigate("/login");
      setIsLoading(false);
    }
  }, []);
  if (isLoading) {
    // Show a loading spinner or blank screen while checking authentication
    return <Loader />;
  }
  return <>{props.component}</>;
};

export default ProtectedRoutes;
