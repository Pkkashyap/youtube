import React from "react";
import { Sidebar } from "./Sidebar";
import { MainContainer } from "./MainContainer";
import { Outlet } from "react-router-dom";

export const Body = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <Outlet className="mx-20" />
    </div>
  );
};
