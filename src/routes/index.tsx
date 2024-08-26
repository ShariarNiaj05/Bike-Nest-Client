import MainLayout from "@/layout/MainLayout";
import About from "@/pages/About";

import Home from "@/pages/Home";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
