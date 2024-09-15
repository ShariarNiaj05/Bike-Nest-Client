import { Menubar, MenubarMenu } from "@radix-ui/react-menubar";
import { Link, Navigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import NavbarItem from "../custom/NavbarItem";
import { useAppSelector } from "@/redux/hooks";
import {
  logout,
  // useCurrentToken,
  useCurrentUser,
} from "@/redux/features/authSlice";
import { useDispatch } from "react-redux";
const Navbar = () => {
  const dispatch = useDispatch();
  // const token = useAppSelector(useCurrentToken);

  const user = useAppSelector(useCurrentUser);

  console.log("user from navbar", user);
  return (
    <div className=" max-w-7xl mx-auto flex justify-between py-5 font-bold">
      {/* logo div  */}
      <div>
        {" "}
        <Link to={"/"}>
          {/* Bike Nest */}
          <img className="h-10 rounded" src={logo} alt="Bike Nest Logo" />
        </Link>
      </div>

      {/* pages div  */}
      <div className="z-50">
        <Menubar>
          <MenubarMenu>
            <NavbarItem user={user} />
            {/* 
            <div className=" flex gap-5">
              <Link to={"/about"}>
                <MenubarTrigger>About</MenubarTrigger>
              </Link>
            </div> */}
          </MenubarMenu>
        </Menubar>
      </div>

      {/* Cart icon  */}

      <div>
        {user ? (
          <Link to={"/"}>
            <h2 onClick={() => dispatch(logout())}> logout</h2>
          </Link>
        ) : (
          <Link to={"/login"}>
            <h2>Login</h2>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
