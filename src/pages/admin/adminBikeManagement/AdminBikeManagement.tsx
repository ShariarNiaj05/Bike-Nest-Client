import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Sample Data
const bikes = [
  {
    id: 1,
    name: "Yamaha R15",
    description: "Sport Bike",
    price: 1500,
    cc: 150,
    year: 2021,
    model: "R15",
    brand: "Yamaha",
    availability: "Available",
  },
  {
    id: 2,
    name: "Honda CBR600",
    description: "Racing Bike",
    price: 3000,
    cc: 600,
    year: 2019,
    model: "CBR600",
    brand: "Honda",
    availability: "Not Available",
  },
];

const AdminBikeManagement = () => {
  const [selectedBike, setSelectedBike] = useState(null);

  // Handle Delete with Confirmation
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this bike?"
    );
    if (confirmDelete) {
      // Perform delete operation
      console.log("Deleted bike with ID:", id);
    }
  };

  // Handle Update (prefill the modal with bike data)
  const handleUpdate = (bike) => {
    setSelectedBike(bike); // Set the selected bike to be updated
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">
        Bike Management
      </h1>

      <Card className="max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle>Bikes List</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Brand</th>
                <th className="px-4 py-2 text-left">Model</th>
                <th className="px-4 py-2 text-left">Year</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left">Availability</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {bikes.map((bike) => (
                <tr key={bike.id} className="bg-white border-b">
                  <td className="px-4 py-2">{bike.name}</td>
                  <td className="px-4 py-2">{bike.brand}</td>
                  <td className="px-4 py-2">{bike.model}</td>
                  <td className="px-4 py-2">{bike.year}</td>
                  <td className="px-4 py-2">{bike.price}</td>
                  <td className="px-4 py-2">{bike.availability}</td>
                  <td className="px-4 py-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleUpdate(bike)}
                        >
                          Update
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            {selectedBike
                              ? `Update ${selectedBike.name}`
                              : "Add New Bike"}
                          </DialogTitle>
                        </DialogHeader>
                        <form className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                              id="name"
                              defaultValue={selectedBike?.name || ""}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Input
                              id="description"
                              defaultValue={selectedBike?.description || ""}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="price">Price</Label>
                            <Input
                              id="price"
                              type="number"
                              defaultValue={selectedBike?.price || ""}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cc">CC</Label>
                            <Input
                              id="cc"
                              type="number"
                              defaultValue={selectedBike?.cc || ""}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="year">Year</Label>
                            <Input
                              id="year"
                              type="number"
                              defaultValue={selectedBike?.year || ""}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="brand">Brand</Label>
                            <Input
                              id="brand"
                              defaultValue={selectedBike?.brand || ""}
                              required
                            />
                          </div>
                        </form>
                        <DialogFooter>
                          <Button type="submit">
                            {selectedBike ? "Update Bike" : "Add Bike"}
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(bike.id)}
                      className="ml-2"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminBikeManagement;
