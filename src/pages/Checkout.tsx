import Title from "@/components/custom/Title";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCheckoutMutation } from "@/redux/api/baseApi";
import { clearCart, ICartProduct } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Checkout = () => {
  const cart: ICartProduct[] = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const [checkout, { isLoading }] = useCheckoutMutation();

  const handleCheckout = async () => {
    try {
      const payload = {
        userInfo: {
          name: fullName,
          email,
          phoneNumber,
          deliveryAddress: address,
        },
        productInfo: cart,
      };

      const result = await checkout(payload);
      if (result.data.success) {
        toast.success("Checkout successful");
        // cart will be empty
        dispatch(clearCart());
        navigate("/payment-success");
      }
    } catch (err) {
      toast.error("Checkout failed");
    }
  };

  return (
    <Container>
      <div className="my-28">
        <Title>Check Out</Title>
        <div className="mt-12 flex flex-col md:flex-row gap-8">
          <div className="basis-3/4 space-y-8">
            <Input
              type="text"
              name="name"
              placeholder="Full Name"
              className="lg:w-[70%]"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              className="lg:w-[70%]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="number"
              name="phoneNumber"
              placeholder="Phone Number"
              className="lg:w-[70%]"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Input
              type="text"
              name="address"
              placeholder="Address"
              className="lg:w-[70%]"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="basis-1/4 flex flex-col gap-3">
            <Button onClick={handleCheckout} disabled={isLoading}>
              Cash On Delivery
            </Button>
            <Button className="bg-secondary">Stripe</Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
