import React from "react";
import HeaderDashboard from "../Components/HeaderDashboard";
import { useParams } from "react-router-dom";
import Packages from "../Components/Packages";
function Dashboard() {
  const { path } = useParams();
  return (
    <div className="dashboard__main">
      <HeaderDashboard />
      {path === "home" || path === "packages" ? <Packages /> : <h1></h1>}
    </div>
  );
}

export default Dashboard;
