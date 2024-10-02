import { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

export default function CheckoutForm({ bookingId }) {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //   const [clientSecret, setClientSecret] = useState("");
  //   const [dpmCheckerLink, setDpmCheckerLink] = useState("");

  //   useEffect(() => {
  //     // Create PaymentIntent as soon as the page loads
  //     fetch("http://localhost:5000/create-payment-intent", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ amount: 100 }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setClientSecret(data.clientSecret);
  //         // [DEV] For demo purposes only
  //         setDpmCheckerLink(data.dpmCheckerLink);
  //       });
  //   }, []);

  /*  const appearance = {
    theme: "stripe",
  }; */
  /*  const options: any = {
    clientSecret,
    appearance,
  }; */

  //   const stripe = useStripe();
  //   const elements = useElements();

  //   const [message, setMessage] = useState(null);
  //   const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `http://localhost:5173/complete/${bookingId}`,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message as any);
    } else {
      setMessage("An unexpected error occurred." as any);
    }

    setIsLoading(false);
  };

  const paymentElementOptions: any = {
    layout: "tabs",
  };

  return (
    <>
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button disabled={isLoading || !stripe || !elements} id="submit">
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay now"
            )}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
      {/* [DEV]: Display dynamic payment methods annotation and integration checker */}
      {/*   <div id="dpm-annotation">
        <p>
          Payment methods are dynamically displayed based on customer location,
          order amount, and currency.&nbsp;
          <a
            href={dpmCheckerLink}
            target="_blank"
            rel="noopener noreferrer"
            id="dpm-integration-checker"
          >
            Preview payment methods by transaction
          </a>
        </p>
      </div> */}
    </>
  );
}
