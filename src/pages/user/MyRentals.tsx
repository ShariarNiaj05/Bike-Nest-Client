import Loading from "@/components/shared/Loading";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetMyRentalsQuery } from "@/redux/features/rentals";
import { IMyRental } from "@/types/myRental.type";
import { formatDate } from "@/utils/formatDate";

const MyRentals = () => {
  const {
    data: myRentals,
    isLoading: isMyRentalsLoading,
    isFetching,
    // refetch,
  } = useGetMyRentalsQuery(undefined);

  if (isMyRentalsLoading || isFetching) {
    return <Loading />;
  }
  console.log(myRentals);

  const unpaidRentals = myRentals?.data.filter(
    (rental: IMyRental) => rental.isReturned === false
  );
  const paidRentals = myRentals?.data.filter(
    (rental: IMyRental) => rental.isReturned === true
  );
  // console.log(unpaidRentals);
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">
        My Rentals
      </h1>

      <Tabs defaultValue="unpaid" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="unpaid">Unpaid</TabsTrigger>
          <TabsTrigger value="paid">Paid</TabsTrigger>
        </TabsList>

        {/* Unpaid Tab */}
        <TabsContent value="unpaid">
          <Card>
            <CardHeader>
              <CardTitle>Unpaid Rentals</CardTitle>
              <CardDescription>
                Here are the rentals you haven't paid for yet. You can complete
                the payment to confirm the booking.
              </CardDescription>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2 text-left">Bike Name</th>
                    <th className="px-4 py-2 text-left">Start Time</th>
                    <th className="px-4 py-2 text-left">Return Time</th>
                    <th className="px-4 py-2 text-left">Total Cost</th>
                    <th className="px-4 py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {unpaidRentals?.map((rental: IMyRental, index: number) => (
                    <tr key={index} className="bg-white border-b">
                      <td className="px-4 py-2">{rental?.bikeId?.name}</td>
                      <td className="px-4 py-2">
                        {formatDate(rental.startTime)}
                      </td>
                      <td className="px-4 py-2">
                        {formatDate(rental.returnTime)}
                      </td>
                      <td className="px-4 py-2">$ {rental.totalCost}</td>
                      <td className="px-4 py-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => (window.location.href = "/payment")}
                        >
                          Pay Now
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Paid Tab */}
        <TabsContent value="paid">
          <Card>
            <CardHeader>
              <CardTitle>Paid Rentals</CardTitle>
              <CardDescription>
                Here are the rentals you've already paid for.
              </CardDescription>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2 text-left">Bike Name</th>
                    <th className="px-4 py-2 text-left">Start Time</th>
                    <th className="px-4 py-2 text-left">Return Time</th>
                    <th className="px-4 py-2 text-left">Total Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {paidRentals?.map((rental: IMyRental, index: number) => (
                    <tr key={index} className="bg-white border-b">
                      <td className="px-4 py-2">{rental?.bikeId?.name}</td>
                      <td className="px-4 py-2">
                        {formatDate(rental.startTime)}
                      </td>
                      <td className="px-4 py-2">
                        {formatDate(rental.returnTime)}
                      </td>
                      <td className="px-4 py-2">$ {rental.totalCost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyRentals;
