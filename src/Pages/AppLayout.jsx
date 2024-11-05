import React from "react";
import Sidebar from "../Components/Sidebar";

import styles from "./AppLayout.module.css";
import Map from "../Components/Map";
import { Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
};

export default AppLayout;
