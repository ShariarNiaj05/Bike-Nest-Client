import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TUser, useCurrentUser } from "@/redux/features/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { Link } from "react-router-dom";
import { BikeIcon, HomeIcon } from "lucide-react";

const SideBar = () => {
  const user: TUser | null = useAppSelector(useCurrentUser);
  const { role } = user! || "";

  return (
    <div className="relative">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="m-4 p-2">
            {/* Hamburger SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </Button>
        </SheetTrigger>

        {/* Sheet Content */}
        <SheetContent
          side="left"
          className="w-64 bg-white dark:bg-gray-800 shadow-lg"
        >
          <SheetHeader className="p-4 border-b border-gray-300 dark:border-gray-700">
            <SheetTitle className="text-2xl font-bold text-primary">
              Dashboard
            </SheetTitle>
            <SheetDescription className="text-sm text-gray-500">
              Navigate through the dashboard options.
            </SheetDescription>
          </SheetHeader>

          {/* Menu Links */}
          <div className="flex flex-col py-4 space-y-4 px-4 list-none">
            <SheetClose asChild>
              <Link
                to="/dashboard"
                className="flex items-center text-sm font-semibold px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors"
              >
                <HomeIcon className="w-5 h-5 mr-2" />
                Home
              </Link>
            </SheetClose>

            {/* Admin Routes */}
            {role === "admin" && (
              <>
                <div className="list-none">
                  <SheetClose asChild>
                    <Link
                      to="/dashboard/admin-bike-management"
                      className="flex items-center text-sm font-semibold px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors"
                    >
                      <BikeIcon className="w-5 h-5 mr-2" />
                      Manage Bikes
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      to="/dashboard/add-single-bike"
                      className="flex items-center text-sm font-semibold px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors"
                    >
                      <BikeIcon className="w-5 h-5 mr-2" />
                      Add Single Bike
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      to="/dashboard/add-bulk-bike"
                      className="flex items-center text-sm font-semibold px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors"
                    >
                      <BikeIcon className="w-5 h-5 mr-2" />
                      Add Bulk Bikes
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      to="/dashboard/return-bike"
                      className="flex items-center text-sm font-semibold px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors"
                    >
                      <BikeIcon className="w-5 h-5 mr-2" />
                      Return Bike
                    </Link>
                  </SheetClose>
                </div>
              </>
            )}

            {/* User Routes */}

            {role === "user" && (
              <SheetClose asChild>
                <Link
                  to="/dashboard/my-rentals"
                  className="flex items-center text-sm font-semibold px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors"
                >
                  <BikeIcon className="w-5 h-5 mr-2" />
                  My Rentals
                </Link>
              </SheetClose>
            )}
          </div>

          {/* Close Button */}
          <SheetFooter className="px-4 pb-4">
            <SheetClose asChild>
              <Button variant="outline" className="w-full">
                Close Menu
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SideBar;
