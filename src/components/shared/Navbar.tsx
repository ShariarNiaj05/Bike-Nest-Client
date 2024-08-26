import { Menubar, MenubarMenu, MenubarTrigger } from "@radix-ui/react-menubar";
import { Link } from "react-router-dom";
import logo from "/logo.png";
const Navbar = () => {
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
      <div>
        <Menubar>
          <MenubarMenu>
            <div className=" flex gap-5">
              <Link to={"/products"}>
                <MenubarTrigger>All Product</MenubarTrigger>
              </Link>
              <Link to={"/manage"}>
                <MenubarTrigger>Manage</MenubarTrigger>
              </Link>
              <Link to={"/about"}>
                <MenubarTrigger>About</MenubarTrigger>
              </Link>
            </div>
          </MenubarMenu>
        </Menubar>
      </div>

      {/* Cart icon  */}

      <div>
        <Link to={"/"}>
          <h2>Login logout</h2>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
