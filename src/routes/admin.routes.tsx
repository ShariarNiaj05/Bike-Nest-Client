import AddBulkBike from "@/pages/admin/adminBikeManagement/AddBulkBike";
import AddSingleBike from "@/pages/admin/adminBikeManagement/AddSingleBike";
import AdminDashboard from "@/pages/admin/AdminDashboard";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Bike Management",
    children: [
      {
        name: "Add Single Bike",
        path: "add-single-bike",
        element: <AddSingleBike />,
      },
      {
        name: "Add Bulk Bike",
        path: "add-bulk-bike",
        element: <AddBulkBike />,
      },
    ],
  },
];
