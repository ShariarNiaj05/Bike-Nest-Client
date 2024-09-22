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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useBikesQuery } from "@/redux/features/bikes";
import Loading from "@/components/shared/Loading";
import { TBike } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useAddBikeMutation,
  useUpdateBikeMutation,
} from "@/redux/features/adminBike";

const AdminBikeManagement = () => {
  const { data, isLoading } = useBikesQuery(undefined);
  const bikes = data?.data;
  const [addBike] = useAddBikeMutation();
  const [updateBike] = useUpdateBikeMutation();

  const [selectedBike, setSelectedBike] = useState<Partial<TBike> | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    pricePerHour: 0,
    imageUrl: "",
    cc: 0,
    year: 0,
    model: "",
    brand: "",
  });
  console.log(formData);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleBrandChange = (value: string) => {
    setFormData({ ...formData, brand: value });
  };

  // Handle Delete Confirmation
  const handleDelete = (id) => {
    console.log("Deleted bike with ID:", id);
  };

  // Handle Update
  const handleUpdate = (bike: TBike) => {
    setSelectedBike(bike);
    setFormData({
      name: bike.name,
      description: bike.description,
      pricePerHour: bike.pricePerHour,
      imageUrl: bike.imageUrl,
      cc: bike.cc,
      year: bike.year,
      model: bike.model,
      brand: bike.brand,
    });
  };

  const handleAddNewBike = () => {
    setSelectedBike(null);
    setFormData({
      name: "",
      description: "",
      pricePerHour: 0,
      imageUrl: "",
      cc: 0,
      year: 0,
      model: "",
      brand: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Convert the values to numbers before submission
    const bikeData = {
      ...formData,
      pricePerHour: Number(formData.pricePerHour),
      cc: Number(formData.cc),
      year: Number(formData.year),
    };

    try {
      if (selectedBike) {
        // Update bike
        await updateBike({ id: selectedBike._id, data: bikeData }); // Fixing the payload structure here
        alert("Bike updated successfully!");
      } else {
        // Add new bike
        await addBike(bikeData);
        alert("Bike added successfully!");
      }

      // Reset form data
      setFormData({
        name: "",
        description: "",
        pricePerHour: 0,
        imageUrl: "",
        cc: 0,
        year: 0,
        model: "",
        brand: "",
      });
    } catch (error) {
      console.error("Failed to submit bike:", error);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">
        Bike Management
      </h1>

      <div className="mb-6 flex justify-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" onClick={handleAddNewBike}>
              Add New Bike
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {selectedBike ? `Update ${selectedBike.name}` : "Add New Bike"}
              </DialogTitle>
            </DialogHeader>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pricePerHour">Price Per Hour</Label>
                <Input
                  id="pricePerHour"
                  type="number"
                  value={Number(formData.pricePerHour)}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="imageUrl">Image URL</Label>
                <Input
                  id="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cc">CC</Label>
                <Input
                  id="cc"
                  type="number"
                  value={Number(formData.cc)}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Year</Label>
                <Input
                  id="year"
                  type="number"
                  value={Number(formData.year)}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="model">Model</Label>
                <Input
                  id="model"
                  value={formData.model}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="brand">Brand</Label>
                <Select
                  onValueChange={handleBrandChange}
                  defaultValue={formData.brand}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a brand" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Yamaha">Yamaha</SelectItem>
                    <SelectItem value="Honda">Honda</SelectItem>
                    <SelectItem value="Suzuki">Suzuki</SelectItem>
                    <SelectItem value="Kawasaki">Kawasaki</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <DialogFooter>
                <Button type="submit">
                  {selectedBike ? "Update Bike" : "Add Bike"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

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
              {bikes?.map((bike: TBike) => (
                <tr key={bike._id} className="bg-white border-b">
                  <td className="px-4 py-2">{bike.name}</td>
                  <td className="px-4 py-2">{bike.brand}</td>
                  <td className="px-4 py-2">{bike.model}</td>
                  <td className="px-4 py-2">{bike.year}</td>
                  <td className="px-4 py-2">{bike.pricePerHour}</td>
                  <td className="px-4 py-2">{bike.isAvailable}</td>
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
                              defaultValue={selectedBike?.pricePerHour || ""}
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

                    {/* Delete Button with Confirmation Dialog */}
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="destructive"
                          size="sm"
                          className="ml-2"
                          // onClick={() => setBikeToDelete(bike)}
                        >
                          Delete
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete the bike from your inventory.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={handleDelete}>
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
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

// Sample Data
/* const bikes = [
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
]; */

export default AdminBikeManagement;
