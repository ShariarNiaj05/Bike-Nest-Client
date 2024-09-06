import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const DashboardLanding = () => {
  const navigate = useNavigate();
  // Function to navigate to the profile update page
  const handleUpdateProfile = () => {
    navigate("/dashboard/update-profile");
  };

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
          <Button
            onClick={handleUpdateProfile}
            variant="outline"
            className="mt-6"
          >
            Update Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardLanding;
