import Title from "@/components/custom/Title";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <Container>
      <div className="my-28">
        <Title>Payment Successful</Title>

        <div className=" mt-16 flex justify-center items-center">
          <Link to={"/"}>
            {" "}
            <Button>Back To Home</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default PaymentSuccess;
