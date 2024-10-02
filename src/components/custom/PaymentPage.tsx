import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./Checkout";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import "../../App.css";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

export default function StripePaymentPage() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
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
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}
