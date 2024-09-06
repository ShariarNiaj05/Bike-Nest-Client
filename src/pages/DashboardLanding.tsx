import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const DashboardLanding = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 234 567 890",
    address: "123 Main St, Springfield",
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Welcome, {user.name}!
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Here’s your profile information.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">Name</h3>
              <p className="text-gray-600">{user.name}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">Email</h3>
              <p className="text-gray-600">{user.email}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">Phone</h3>
              <p className="text-gray-600">{user.phone}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">Address</h3>
              <p className="text-gray-600">{user.address}</p>
            </div>
          </div>

          {/* Drawer Trigger for Update Profile */}
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline" className="mt-6">
                Update Profile
              </Button>
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Update Profile</DrawerTitle>
                <DrawerDescription>
                  Update your profile information below.
                </DrawerDescription>
              </DrawerHeader>

              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    defaultValue={user.name}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="email"
                    defaultValue={user.email}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="phone" className="text-right">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    defaultValue={user.phone}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="address" className="text-right">
                    Address
                  </Label>
                  <Input
                    id="address"
                    defaultValue={user.address}
                    className="col-span-3"
                  />
                </div>
              </div>

              <DrawerFooter>
                <Button type="submit">Save changes</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default DashboardLanding;
