import React from "react";
import HeaderDashboard from "../Components/HeaderDashboard";
import { useParams } from "react-router-dom";
import Packages from "../Components/Packages";
import UsedTracking from "../Components/UsedTracking";
import Tutorial from "../Components/Tutorial";
import TopGeo from "../Components/TopGeo";
import ContactUs from "../Components/ContactUs";
import APIComponenet from "../Components/APIComponenet";
import Extension from "../Components/Extension";
import AccountSetting from "../Components/AccountSetting";
function Dashboard() {
  const { path } = useParams();
  return (
    <div
      className="dashboard__main"
      style={{ background: "lightgray", minHeight: "100vh" }}
    >
      <HeaderDashboard path={path} />
      {path === "home" && <Packages path={"home"} />}
      {path === "packages" && <Packages path={"packages"} />}
      {path === "used-tracking" && <UsedTracking />}
      {path === "tutorials" && <Tutorial />}
      {path === "top-geo" && <TopGeo />}
      {path === "contact-us" && <ContactUs />}
      {path === "api" && <APIComponenet />}
      {path === "app" && <Extension />}
      {path === "settings" && <AccountSetting />}
    </div>
  );
}

export default Dashboard;
