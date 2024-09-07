import BikeCard from "@/components/custom/BikeCard";
import { TBike } from "@/types";
import React, { useState, useEffect } from "react";

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
    const { name, value, type } = e.target;

    // For checkbox, handle `checked` specifically
    if (type === "checkbox") {
      const target = e.target as HTMLInputElement; // Type guard for checkbox
      setFilters((prev) => ({
        ...prev,
        [name]: target.checked,
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Filter Bikes
  useEffect(() => {
    const filtered = bikesData.filter((bike) => {
      const isBrandMatch = filters.brand
        ? bike.brand.toLowerCase().includes(filters.brand.toLowerCase())
        : true;
      const isModelMatch = filters.model
        ? bike.model.toLowerCase().includes(filters.model.toLowerCase())
        : true;
      const isAvailableMatch = filters.available
        ? bike.isAvailable === true
        : true;
      return isBrandMatch && isModelMatch && isAvailableMatch;
    });
    setFilteredBikes(filtered);
  }, [filters]);

  return (
    <div className="max-w-7xl mx-auto py-10 flex gap-8">
      {/* Filter Section - Sticky on scroll */}
      <div className="w-1/5 h-fit sticky top-4 bg-white/30 shadow-primary shadow-sm p-6 rounded-lg backdrop-blur-sm border border-white/30">
        <h2 className="text-2xl font-bold mb-4">Filters</h2>
        <div className="flex flex-col gap-4">
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
      </div>

      {/* Bike Listing */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBikes.map((bike) => (
          <BikeCard key={bike._id} bike={bike} />
        ))}
      </div>
    </div>
  );
};

const bikesData: TBike[] = [
  {
    _id: "1",
    brand: "Trek",
    model: "FX 3 Disc",
    imageUrl:
      "https://media.cnn.com/api/v1/images/stellar/prod/230419133455-velotric-thunder-1-ebike-lead-cnnu.jpg?c=original",
    pricePerHour: 1200,
    isAvailable: true,
    cc: 250,
    year: 2022,
    name: "Trek FX 3 Disc",
    description:
      "A versatile hybrid bike with a lightweight frame, hydraulic disc brakes, and durable tires.",
  },
  {
    _id: "2",
    brand: "Giant",
    model: "Escape 3",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-IwvCRddjz_yzsQMYz-A7tlGoBbztpcWLFdIYkh-BEBtrUpHCeDszeAXWvf4DpMU0wE4&usqp=CAU",
    pricePerHour: 800,
    isAvailable: false,
    cc: 200,
    year: 2021,
    name: "Giant Escape 3",
    description:
      "A lightweight and durable bike, perfect for commuting and casual rides.",
  },
  {
    _id: "3",
    brand: "Specialized",
    model: "Sirrus X 4.0",
    imageUrl: "https://ride1up.com/wp-content/uploads/2024/06/3Q5A04482-2.webp",
    pricePerHour: 1500,
    isAvailable: true,
    cc: 300,
    year: 2023,
    name: "Specialized Sirrus X 4.0",
    description:
      "An advanced hybrid bike designed for fitness and adventure rides, offering excellent control.",
  },
];

export default Bikes;
