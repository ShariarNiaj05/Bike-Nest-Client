import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  useGetAllBikeToBeReturnQuery,
  useReturnBikeMutation,
} from "@/redux/features/rentals";
import Loading from "@/components/shared/Loading";
import { formatDate } from "@/utils/formatDate";

const ReturnBike = () => {
  const { data, isLoading } = useGetAllBikeToBeReturnQuery(undefined);
  const [returnBike] = useReturnBikeMutation();
  // const [rentals, setRentals] = useState([]);
  // const [selectedRental, setSelectedRental] = useState(null);
  // const [endTime, setEndTime] = useState("");

  const rentals = data?.data?.filter((rental) => rental?.isReturned === false);

  const handleReturnBike = (id) => {
    console.log("return bike id", id);
    returnBike(id);
    // alert("Bike returned successfully!");
  };
  if (isLoading) return <Loading />;
  console.log(rentals);
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Return Bike</h1>
      {rentals?.map((rental) => (
        <Card key={rental._id} className="mb-4">
          <CardHeader>
            <CardTitle>{rental?.bikeId?.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Start Time: {formatDate(rental.startTime)}</p>
            {/* <Label htmlFor={`end-time-${rental.id}`} className="block mt-2">
              End Time
            </Label> */}
            {/*  <Input
              id={`end-time-${rental._id}`}
              type="datetime-local"
              onChange={(e) => setEndTime(e.target.value)}
            /> */}
            <div className="mt-2">
              <Button
                onClick={() => handleReturnBike(rental._id)}
                className="mt-2"
              >
                Return Bike
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ReturnBike;
