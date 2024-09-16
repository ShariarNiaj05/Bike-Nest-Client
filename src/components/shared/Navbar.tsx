import { Menubar, MenubarMenu } from "@radix-ui/react-menubar";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import NavbarItem from "../custom/NavbarItem";
import { useAppSelector } from "@/redux/hooks";
import {
  logout,
  TUser,
  // useCurrentToken,
  useCurrentUser,
} from "@/redux/features/authSlice";
import { useDispatch } from "react-redux";
import { useContext } from "react";
import { ThemeContext } from "@/lib/ThemeContext";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
const Navbar = () => {
  const dispatch = useDispatch();
  // const token = useAppSelector(useCurrentToken);

  const user: TUser | null = useAppSelector(useCurrentUser);
  const { theme, toggleTheme } = useContext(ThemeContext);
  // console.log("user from navbar", user);
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

      {/* Dark Mode Toggle */}
      <div className="flex items-center space-x-3">
        <Switch
          onClick={toggleTheme}
          id="theme-switcher"
          className={`${
            theme === "dark"
              ? "bg-gray-600 border-gray-500"
              : "bg-gray-200 border-gray-300"
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        >
          <span
            className={`${
              theme === "dark"
                ? "translate-x-6 bg-white"
                : "translate-x-1 bg-black"
            } inline-block h-4 w-4 transform rounded-full transition-transform`}
          />
        </Switch>
        <Label
          htmlFor="theme-switcher"
          className="cursor-pointer text-gray-800 dark:text-gray-300 text-sm"
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </Label>
      </div>

      <div>
        {user ? (
          <Link to={"/"}>
            <h2 onClick={() => dispatch(logout())}>logout</h2>
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
