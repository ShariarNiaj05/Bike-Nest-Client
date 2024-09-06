import SideBar from "@/components/shared/SideBar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <SideBar />
      <Outlet></Outlet>
    </>
  );
};

export default DashboardLayout;
