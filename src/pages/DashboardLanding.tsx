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
import { useUpdateProfileMutation } from "@/redux/features/authApi";
import { TUser, useCurrentUser } from "@/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useState } from "react";
// import { Label } from "@/components/ui/label";

const DashboardLanding = () => {
  const user: TUser | null = useAppSelector(useCurrentUser);
  const dispatch = useAppDispatch();

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [address, setAddress] = useState(user?.address || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Dispatch the updateProfile action
    dispatch(useUpdateProfileMutation({ name, email, phone, address }));
  };

  /* const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 234 567 890",
    address: "123 Main St, Springfield",
  };
 */
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-accent p-6">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Welcome, {user?.name}!
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Here’s your profile information.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-accent p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">Name</h3>
              <p className="text-gray-600">{user?.name}</p>
            </div>
            <div className="bg-accent p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">Email</h3>
              <p className="text-gray-600">{user?.email}</p>
            </div>
            <div className="bg-accent p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">Phone</h3>
              <p className="text-gray-600">{user?.phone}</p>
            </div>
            <div className="bg-accent p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">Address</h3>
              <p className="text-gray-600">{user?.address}</p>
            </div>
          </div>

          {/* Drawer Trigger for Update Profile */}
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline" className="mt-6 ">
                Update Profile
              </Button>
            </DrawerTrigger>

            <DrawerContent className="w-full max-w-lg mx-auto">
              <DrawerHeader>
                <DrawerTitle>Update Profile</DrawerTitle>
                <DrawerDescription>
                  Update your profile information below.
                </DrawerDescription>
              </DrawerHeader>

              <form className="p-4" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-4">
                  <div className="items-center space-x-4">
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="flex-1"
                    />
                  </div>
                  <div className="items-center space-x-4">
                    <Input
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1"
                    />
                  </div>
                  <div className="items-center space-x-4">
                    <Input
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="flex-1"
                    />
                  </div>
                  <div className="items-center space-x-4">
                    <Input
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="flex-1"
                    />
                  </div>
                </div>

                <DrawerFooter>
                  <Button type="submit">Save changes</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </form>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default DashboardLanding;
