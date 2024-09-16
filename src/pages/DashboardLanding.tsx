import Loading from "@/components/shared/Loading";
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
import {
  useGetUserProfileQuery,
  useUpdateProfileMutation,
} from "@/redux/features/user";
import { useEffect, useState } from "react";

const DashboardLanding = () => {
  // const user: TUser | null = useAppSelector(useCurrentUser);
  const {
    data: user,
    isLoading: isUserLoading,
    isFetching,
  } = useGetUserProfileQuery(undefined);
  // const dispatch = useAppDispatch();
  useEffect(() => {
    if (user?.data) {
      setName(user.data.name);
      setEmail(user.data.email);
      setPhone(user.data.phone);
      setAddress(user.data.address);
    }
  }, [user]);

  const [name, setName] = useState(user?.data?.name || "");
  const [email, setEmail] = useState(user?.data?.name || "");
  const [phone, setPhone] = useState(user?.data?.name || "");
  const [address, setAddress] = useState(user?.data?.name || "");

  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Call the updateProfile mutation directly
      const response = await updateProfile({
        name,
        email: user?.data?.email,
        phone,
        address,
      }).unwrap();
      console.log("Profile updated successfully:", response);
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  /* const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 234 567 890",
    address: "123 Main St, Springfield",
  };
 */
  if (isFetching || isUserLoading || isLoading) {
    return <Loading />;
  }
  console.log("name", name);
  console.log(user?.data);
  if (!user?.data) {
    return <p>No user data available</p>; // Handle undefined user data
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-accent p-6">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Welcome, {user?.data?.name}!
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Here’s your profile information.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-accent p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">Name</h3>
              <p className="text-gray-600">{user?.data?.name}</p>
            </div>
            <div className="bg-accent p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">Email</h3>
              <p className="text-gray-600">{user?.data?.email}</p>
            </div>
            <div className="bg-accent p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">Phone</h3>
              <p className="text-gray-600">{user?.data?.phone}</p>
            </div>
            <div className="bg-accent p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">Address</h3>
              <p className="text-gray-600">{user?.data?.address}</p>
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
                      readOnly
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
