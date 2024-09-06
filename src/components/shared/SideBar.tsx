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
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="relative pt-2">
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
          className="w-64 bg-accent"
          onCloseAutoFocus={(e) => e.preventDefault()} // Prevents autofocus on close
        >
          <SheetHeader>
            <SheetTitle className="text-xl font-bold">Dashboard</SheetTitle>
            <SheetDescription className="text-sm text-gray-500">
              Navigate through the dashboard options.
            </SheetDescription>
          </SheetHeader>
          {/* Menu Links */}
          <div className="flex flex-col gap-4 py-6">
            <SheetClose asChild>
              <Link
                to="/dashboard"
                className="text-lg font-semibold px-1 rounded hover:bg-primary hover:text-white"
              >
                Home
              </Link>
            </SheetClose>

            {/* ========================================admin routes from dashboard ========================== */}
            <SheetClose asChild>
              <Link
                to="/dashboard/admin-bike-management"
                className="text-lg font-semibold px-1 rounded hover:bg-primary hover:text-white"
              >
                Manage Bike (Admin)
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                to="/dashboard/add-single-bike"
                className="text-lg font-semibold px-1 rounded hover:bg-primary hover:text-white"
              >
                Add Single Bike
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                to="/dashboard/add-bulk-bike"
                className="text-lg font-semibold px-1 rounded hover:bg-primary hover:text-white"
              >
                Add Bulk Bike
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                to="/dashboard/return-bike"
                className="text-lg font-semibold px-1 rounded hover:bg-primary hover:text-white"
              >
                Return Bike
              </Link>
            </SheetClose>
            {/* ========================================admin routes from dashboard ========================== */}

            {/* ========================================user routes from dashboard ========================== */}
            <SheetClose asChild>
              <Link
                to="/dashboard/my-rentals"
                className="text-lg font-semibold px-1 rounded hover:bg-primary hover:text-white"
              >
                My Rentals
              </Link>
            </SheetClose>
            {/* ========================================user routes from dashboard ========================== */}
          </div>
          {/* Close Button */}
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline" className="w-full mt-4">
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
