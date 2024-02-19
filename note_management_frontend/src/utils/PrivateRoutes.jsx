import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes() {
  let auth = useSelector((state) => state.username);
  return auth.token ? <Outlet /> : <Navigate to="/" />;
}
