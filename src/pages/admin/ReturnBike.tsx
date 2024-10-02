import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  useGetAllBikeToBeReturnQuery,
  useReturnBikeMutation,
} from "@/redux/features/rentals";
import Loading from "@/components/shared/Loading";
import { formatDate } from "@/utils/formatDate";
import { TRental } from "@/types";

const ReturnBike = () => {
  const { data, isLoading } = useGetAllBikeToBeReturnQuery(undefined);
  const [returnBike] = useReturnBikeMutation();

  const rentals = data?.data?.filter(
    (rental: TRental) => rental?.isReturned === false
  );

  const handleReturnBike = (id: string) => {
    console.log("return bike id", id);
    returnBike(id);
  };
  if (isLoading) return <Loading />;
  console.log(rentals);
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Return Bike</h1>
      {rentals?.map((rental: TRental) => (
        <Card key={rental._id} className="mb-4">
          <CardHeader>
            <CardTitle>{rental?.bikeId?.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Start Time: {formatDate(rental.startTime)}</p>

            <div className="mt-2">
              <Button
                onClick={() => handleReturnBike(rental._id)}
                className="mt-2"
              >
                Calculate & Return Bike
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ReturnBike;
