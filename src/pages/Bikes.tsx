import BikeCard from "@/components/custom/BikeCard";
import Loading from "@/components/shared/Loading";
import { useBikesQuery } from "@/redux/features/bikes";
import { TBike } from "@/types";
// import { bikesData } from "@/utils/demoBikes";
import React, { useState, useEffect } from "react";

const Bikes = () => {
  const { data, isLoading } = useBikesQuery(undefined);
  const bikes = data?.data;
  const [filteredBikes, setFilteredBikes] = useState<TBike[]>(bikes);
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
    if (Array.isArray(bikes)) {
      const filtered = bikes.filter((bike: TBike) => {
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
    }
  }, [filters, bikes]);

  if (isLoading) {
    return <Loading />;
  }

  if (!Array.isArray(bikes)) {
    return (
      <p className="text-center text-red-500">
        No bikes available at the moment.
      </p>
    );
  }
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
        {filteredBikes?.map((bike) => (
          <BikeCard key={bike._id} bike={bike} />
        ))}
      </div>
    </div>
  );
};

export default Bikes;
