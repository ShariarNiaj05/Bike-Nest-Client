import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
  const token = "token";
  let user;
  if (!token) {
    return <Navigate to={"/login"} replace={true} />;
  }
  /* if (token) {
        user = 
    } */

  /*   if (role !== undefined || role !== (user as TUser)?.role) {
    dispatch(logout());
    return <Navigate to={"/login"} replace={true} />;
  } */
  return children;
};

type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
};

export default ProtectedRoute;
