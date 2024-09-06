export const userPaths = [
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
