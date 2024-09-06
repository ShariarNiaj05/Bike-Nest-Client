import AddBulkBike from "@/pages/admin/adminBikeManagement/AddBulkBike";
import AddSingleBike from "@/pages/admin/adminBikeManagement/AddSingleBike";
// import DashboardLanding from "@/pages/DashboardLanding";

export const adminPaths = [
  /*  {
    name: "",
    path: "",
    element: <DashboardLanding />,
  }, */
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
