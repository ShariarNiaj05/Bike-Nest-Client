import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const demoRentals = [
  {
    id: 1,
    bikeName: "Mountain Bike",
    startTime: "2024-09-01 08:00",
    returnTime: null,
    cost: 0,
  },
  {
    id: 2,
    bikeName: "Road Bike",
    startTime: "2024-09-05 09:00",
    returnTime: null,
    cost: 0,
  },
];

const ReturnBike = () => {
  const [rentals, setRentals] = useState(demoRentals);
  const [selectedRental, setSelectedRental] = useState(null);
  const [endTime, setEndTime] = useState("");

  const handleCalculateCost = (rentalId) => {
    // Basic cost calculation logic (example: cost per hour is $5)
    const rental = rentals.find((r) => r.id === rentalId);
    if (rental) {
      const start = new Date(rental.startTime);
      const end = new Date(endTime);
      const hours = Math.ceil((end - start) / (1000 * 60 * 60));
      const cost = hours * 5;
      setRentals(
        rentals.map((r) =>
          r.id === rentalId ? { ...r, returnTime: endTime, cost } : r
        )
      );
    }
  };

  const handleReturnBike = () => {
    alert("Bike returned successfully!");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Return Bike</h1>
      {rentals.map((rental) => (
        <Card key={rental.id} className="mb-4">
          <CardHeader>
            <CardTitle>{rental.bikeName}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Start Time: {rental.startTime}</p>
            <Label htmlFor={`end-time-${rental.id}`} className="block mt-2">
              End Time
            </Label>
            <Input
              id={`end-time-${rental.id}`}
              type="datetime-local"
              onChange={(e) => setEndTime(e.target.value)}
            />
            <Button
              className="mt-2"
              onClick={() => handleCalculateCost(rental.id)}
            >
              Calculate Cost
            </Button>
            {rental.cost > 0 && (
              <div className="mt-2">
                <p>Calculated Cost: ${rental.cost}</p>
                <Button onClick={handleReturnBike} className="mt-2">
                  Return Bike
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ReturnBike;