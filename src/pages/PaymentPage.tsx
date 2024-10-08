/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";
// import { useParams } from "react-router-dom";

// Load your Stripe public key
const stripePromise = loadStripe("stripe-public-key");

const PaymentPage: React.FC = () => {
  // const { bookingId } = useParams<{ bookingId: string }>();

  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">
          Complete Your Payment
        </h2>
        <p className="text-center mb-6">
          You need to pay Tk 100 to confirm your rental.
        </p>

        <Elements stripe={stripePromise}>
          <PaymentForm
            // isProcessing={isProcessing}
            setIsProcessing={setIsProcessing}
            setPaymentError={setPaymentError}
            setPaymentSuccess={setPaymentSuccess}
          />
        </Elements>

        {isProcessing && (
          <p className="text-center mt-4 text-blue-500">
            Processing payment...
          </p>
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

interface PaymentFormProps {
  setIsProcessing: React.Dispatch<React.SetStateAction<boolean>>;
  setPaymentError: React.Dispatch<React.SetStateAction<string>>;
  setPaymentSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PaymentForm: React.FC<PaymentFormProps> = ({
  setIsProcessing,
  setPaymentError,
  setPaymentSuccess,
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsProcessing(true);

    if (!stripe || !elements) {
      setPaymentError("Stripe is not properly initialized.");
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (cardElement) {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error) {
        setPaymentError(error.message || "An error occurred");
        setIsProcessing(false);
      } else {
        // Call your backend to create the payment intent and handle confirmation
        console.log("Payment successful:", paymentMethod);
        setPaymentSuccess(true);
        setIsProcessing(false);
      }
    } else {
      setPaymentError("Card element not found");
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="border p-4 rounded-lg">
        <CardElement className="p-2" />
      </div>
      <Button type="submit" className="w-full" disabled={!stripe}>
        Pay Tk 100
      </Button>
    </form>
  );
};

export default PaymentPage;
