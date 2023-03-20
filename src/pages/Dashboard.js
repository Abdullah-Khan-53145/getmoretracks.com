import React from "react";
import HeaderDashboard from "../Components/HeaderDashboard";
import { useParams } from "react-router-dom";
import Packages from "../Components/Packages";
import UsedTracking from "../Components/UsedTracking";
import Tutorial from "../Components/Tutorial";
function Dashboard() {
  const { path } = useParams();
  return (
    <div className="dashboard__main">
      <HeaderDashboard path={path} />
      {path === "home" && <Packages path={"home"} />}
      {path === "packages" && <Packages path={"packages"} />}
      {path === "used-tracking" && <UsedTracking />}
      {path === "tutorials" && <Tutorial />}
    </div>
  );
}

export default Dashboard;
