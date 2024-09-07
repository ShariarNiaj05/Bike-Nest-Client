import React, { useState } from "react";
import { Wheel } from "react-wheel-of-prizes";
import "react-wheel-of-prizes/dist/index.css"; // Make sure the CSS is loaded

const SpinTheWheel = () => {
  const [winner, setWinner] = useState<string | null>(null);

  const segments = ["10% Off", "20% Off", "30% Off", "5% Off", "15% Off"];
  const segColors = ["#FFD700", "#FF6347", "#90EE90", "#87CEEB", "#FFB6C1"];
  const onFinished = (winner: string) => {
    setWinner(winner);
    // Add logic to apply the discount, save it, or show it on the dashboard
  };

  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold mb-6">Spin the Wheel and Win!</h1>
      <Wheel
        segments={segments}
        segColors={segColors}
        onFinished={onFinished}
        primaryColor="black"
        contrastColor="white"
        buttonText="Spin"
        isOnlyOnce={false} // Allows multiple spins
        size={290}
        upDuration={100}
        downDuration={1000}
      />
      {winner && (
        <p className="mt-6 text-2xl font-semibold text-green-500">
          Congratulations! You won {winner}
        </p>
      )}
    </div>
  );
};

export default SpinTheWheel;
