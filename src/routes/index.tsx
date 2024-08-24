import UpdateProduct from "@/components/custom/UpdateProduct";
import MainLayout from "@/layout/MainLayout";
import About from "@/pages/About";
import AllProduct from "@/pages/AllProduct";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import Home from "@/pages/Home";
import Manage from "@/pages/Manage";
import PaymentSuccess from "@/pages/PaymentSuccess";
import SingleProduct from "@/pages/SingleProduct";
import SportsCategory from "@/pages/SportsCategory";
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
        path: "/products",
        element: <AllProduct />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
      {
        path: "products/product/:id",
        element: <SingleProduct />,
      },
      {
        path: "update/:id",
        element: <UpdateProduct />,
      },
      {
        path: "/category/:sportsCategory",
        element: <SportsCategory />,
      },
      {
        path: "/manage",
        element: <Manage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/payment-success",
        element: <PaymentSuccess />,
      },
    ],
  },
]);

export default router;
