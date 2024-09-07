import BikeCard from "@/components/custom/BikeCard";
import { TBike } from "@/types";
import React, { useState, useEffect } from "react";

// Example Bike Data - Replace with real API data
const bikesData: TBike[] = [
  {
    _id: "1",
    name: "Mountain Bike",
    brand: "Brand A",
    model: "M1",
    cc: 250,
    year: 2021,
    pricePerHour: 10,
    imageUrl: "/images/bike1.jpg",
    description: "destinations",
    isAvailable: true,
  },
  {
    _id: "2",
    name: "Road Bike",
    brand: "Brand B",
    model: "R1",
    cc: 150,
    year: 2020,
    pricePerHour: 8,
    imageUrl: "/images/bike2.jpg",
    isAvailable: false,
  },
  // Add more bikes here
];

const Bikes = () => {
  const [filteredBikes, setFilteredBikes] = useState<TBike[]>(bikesData);
  const [filters, setFilters] = useState({
    brand: "",
    model: "",
    available: false,
  });

  // Handle Filter Change
  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Filter Bikes
  useEffect(() => {
    const filtered = bikesData.filter((bike) => {
      const isBrandMatch = filters.brand
        ? bike.brand.includes(filters.brand)
        : true;
      const isModelMatch = filters.model
        ? bike.model.includes(filters.model)
        : true;
      const isAvailableMatch = filters.available
        ? bike.available === true
        : true;
      return isBrandMatch && isModelMatch && isAvailableMatch;
    });
    setFilteredBikes(filtered);
  }, [filters]);

  return (
    <div className="max-w-7xl mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Bike Listing</h1>

      {/* Filter Section */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <input
          type="text"
          name="brand"
          placeholder="Search by Brand"
          className="border rounded p-2"
          value={filters.brand}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="model"
          placeholder="Search by Model"
          className="border rounded p-2"
          value={filters.model}
          onChange={handleFilterChange}
        />
        <label className="flex items-center">
          <input
            type="checkbox"
            name="available"
            checked={filters.available}
            onChange={handleFilterChange}
          />
          <span className="ml-2">Available</span>
        </label>
      </div>

      {/* Bike Listing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBikes.map((bike) => (
          <BikeCard key={bike._id} bike={bike} />
        ))}
      </div>
    </div>
  );
};

export default Bikes;
