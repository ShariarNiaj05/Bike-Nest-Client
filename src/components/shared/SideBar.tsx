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
    <div className="relative">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="m-4">
            Open Dashboard Menu
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 bg-gray-100">
          <SheetHeader>
            <SheetTitle className="text-xl font-bold">Dashboard</SheetTitle>
            <SheetDescription className="text-sm text-gray-500">
              Navigate through the dashboard options.
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-4 py-6">
            <Link
              to="/dashboard"
              className="text-lg font-semibold hover:underline"
            >
              Home
            </Link>
            <Link
              to="/dashboard/add-single-bike"
              className="text-lg font-semibold hover:underline"
            >
              Add Single Bike
            </Link>
            <Link
              to="/dashboard/add-bulk-bike"
              className="text-lg font-semibold hover:underline"
            >
              Add Bulk Bike
            </Link>
          </div>
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
