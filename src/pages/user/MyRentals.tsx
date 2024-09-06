import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MyRentals = () => {
  return (
    <Tabs defaultValue="unpaid" className="w-full max-w-2xl mx-auto">
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
          <CardContent className="space-y-4">
            {/* Unpaid Rental Item 1 */}
            <div className="space-y-1">
              <p className="text-lg font-semibold">Bike Name: Yamaha R15</p>
              <p>Start Time: 10:00 AM, 1st Sept</p>
              <p>Return Time: 10:00 AM, 2nd Sept</p>
              <p>Total Cost: $50</p>
            </div>
            <Button
              variant="outline"
              onClick={() => (window.location.href = "/payment")}
            >
              Pay Now
            </Button>
            {/* Add more unpaid rental items as needed */}
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
          <CardContent className="space-y-4">
            {/* Paid Rental Item 1 */}
            <div className="space-y-1">
              <p className="text-lg font-semibold">Bike Name: Honda CBR600</p>
              <p>Start Time: 9:00 AM, 1st Sept</p>
              <p>Return Time: 9:00 AM, 3rd Sept</p>
              <p>Total Cost: $100</p>
            </div>
            {/* Add more paid rental items as needed */}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default MyRentals;
