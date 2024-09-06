import MyRentals from "@/pages/user/MyRentals";

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
        name: "My Rentals",
        path: "my-rentals",
        element: <MyRentals />,
      },
      {
        name: "Add Bulk Bike",
        path: "add-bulk-bike",
        element: <AddBulkBike />,
      },
    ],
  },
];
