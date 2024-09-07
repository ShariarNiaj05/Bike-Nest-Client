import { useState } from "react";
import { Wheel } from "react-spinning-wheel";
import "react-spinning-wheel/dist/index.css";

const SpinTheWheel = () => {
  const [result, setResult] = useState<number | null>(null);

  const handleSpin = (winner: number) => {
    setResult(winner);
    // Add logic to apply the discount or save it to the user's account
  };

  const segments = [10, 20, 30, 5, 15]; // Discount percentages
  const segColors = ["#FFD700", "#FF6347", "#90EE90", "#87CEEB", "#FFB6C1"];

  return (
    <div className="text-center">
      <Wheel
        segments={segments}
        segColors={segColors}
        onFinished={handleSpin}
        primaryColor="black"
        contrastColor="white"
        buttonText="Spin"
      />
      {result !== null && <p className="mt-4">You won {result}% off!</p>}
    </div>
  );
};

export default SpinTheWheel;
