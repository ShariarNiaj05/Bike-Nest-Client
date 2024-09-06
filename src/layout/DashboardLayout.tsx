import SideBar from "@/components/shared/SideBar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white flex-shrink-0">
        <SideBar />
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 overflow-auto">
        {/* Outlet to render content */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
