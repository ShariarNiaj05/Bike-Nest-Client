import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button"; // Replace with your button component

const stripePromise = loadStripe("your-stripe-public-key");

const PaymentPage = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-accent">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">
          Complete Your Booking
        </h2>
        <p className="text-center mb-4">
          You need to pay Tk 100 to confirm your rental.
        </p>

        <Elements stripe={stripePromise}>
          <PaymentForm
            isProcessing={isProcessing}
            setIsProcessing={setIsProcessing}
            setPaymentError={setPaymentError}
            setPaymentSuccess={setPaymentSuccess}
          />
        </Elements>

        {isProcessing && (
          <p className="text-center mt-4">Processing payment...</p>
        )}
        {paymentError && (
          <p className="text-red-500 text-center mt-4">{paymentError}</p>
        )}
        {paymentSuccess && (
          <p className="text-green-500 text-center mt-4">Payment successful!</p>
        )}
      </div>
    </div>
  );
};

const PaymentForm = ({
  isProcessing,
  setIsProcessing,
  setPaymentError,
  setPaymentSuccess,
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setIsProcessing(false);
    } else {
      // Simulate a backend payment confirmation
      console.log("Payment successful", paymentMethod);
      setPaymentSuccess(true);
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="border p-4 rounded-lg mb-4">
        <CardElement className="p-2" />
      </div>
      <Button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full"
      >
        {isProcessing ? "Processing..." : "Pay Tk 100"}
      </Button>
    </form>
  );
};

export default PaymentPage;
