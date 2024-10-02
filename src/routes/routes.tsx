import MainLayout from "@/layout/MainLayout";
import ProtectedRoute from "@/layout/ProtectedRoute";
import About from "@/pages/About";

import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { routeGenerator } from "@/utils/routeGenerator";

import { createBrowserRouter } from "react-router-dom";
import { adminPaths } from "./admin.routes";
import DashboardLayout from "@/layout/DashboardLayout";
import DashboardLanding from "@/pages/DashboardLanding";
import UpdateProfile from "@/pages/UpdateProfile";
import { userPaths } from "./user.routes";
import Bikes from "@/pages/Bikes";
import BikeDetails from "@/pages/BikeDetails";
import ContactPage from "@/pages/Contact";
import PrivacyPolicyPage from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import PaymentPage from "@/pages/PaymentPage";
import CheckoutForm from "@/components/custom/Checkout";
import StripePaymentPage from "@/components/custom/PaymentPage";
import CompletePage from "@/components/custom/PaymentComplete";

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
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "/terms-of-service",
        element: <TermsOfService />,
      },
      {
        path: "/bikes",
        element: <Bikes />,
      },
      {
        path: "bikes/:id",
        element: (
          <ProtectedRoute>
            <BikeDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "payment/:bookingId",
        element: <PaymentPage />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <DashboardLanding />,
      },
      {
        path: "update-profile",
        element: <UpdateProfile />,
      },

      ...routeGenerator(adminPaths),
    ],
  },

  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <DashboardLanding />,
      },
      {
        path: "update-profile",
        element: <UpdateProfile />,
      },
      ...routeGenerator(userPaths),
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/pay-money/:bookingId",
    element: <StripePaymentPage />,
  },
  {
    path: "/complete/:bookingId",
    element: <CompletePage />,
  },
]);

export default router;
