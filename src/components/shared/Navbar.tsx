import { Menubar, MenubarMenu, MenubarTrigger } from "@radix-ui/react-menubar";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa6";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { ICartProduct } from "@/redux/features/cartSlice";
import logo from "/logo.png";
const Navbar = () => {
  const cart: ICartProduct[] = useAppSelector((state: RootState) => state.cart);
  return (
    <div className=" max-w-7xl mx-auto flex justify-between py-5 font-bold">
      {/* logo div  */}
      <div>
        {" "}
        <Link to={"/"}>
          {/* Sports Sphere */}
          <img className="h-10 rounded" src={logo} alt="Sports Sphere Logo" />
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

      <div className="relative">
        <p className="absolute -right-2 -top-3">{cart?.length}</p>
        <Link to={"/cart"}>
          <FaCartPlus className="text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
