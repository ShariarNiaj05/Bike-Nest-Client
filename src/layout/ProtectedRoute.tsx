import { logout, TUser, useCurrentUser } from "@/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: TProtectedRoute) => {
  const user: TUser | null = useAppSelector(useCurrentUser);
  const dispatch = useAppDispatch();
  // const token = useAppSelector(useCurrentToken);
  // console.log(user);
  // console.log(token);
  const { role } = user! || "";
  /* if (!token) {
    return <Navigate to={"/login"} replace={true} />;
  } */
  /* if (token) {
        user = 
    } */

  if (role === undefined || role !== user?.role) {
    console.log(role);
    dispatch(logout());
    return <Navigate to={"/login"} replace={true} />;
  }
  return children;
};

type TProtectedRoute = {
  children: ReactNode;
  // role: string | undefined;
};

export default ProtectedRoute;
