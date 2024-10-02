import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./Checkout";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import "../../styles/stripe.style.css";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

export default function StripePaymentPage() {
  const { bookingId } = useParams();
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("https://bike-rental-service-one.vercel.app/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 100 }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe",
  };

  const options: any = {
    clientSecret,
    appearance,
  };
  return (
    <>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm bookingId={bookingId} />
        </Elements>
      )}
    </>
  );
}
