import { useState } from 'react';
import ReactConfetti from 'react-confetti';
import { Button } from "@/components/ui/button";

const Confetti = () => {
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  const handleConfetti = () => {
    setIsConfettiActive(true);
    setTimeout(() => setIsConfettiActive(false), 5000); // Stop confetti after 5 seconds
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <h1 className="text-4xl font-bold text-white mb-8">Confetti Celebration!</h1>
      <Button
        onClick={handleConfetti}
        className="bg-white text-purple-600 hover:bg-purple-100 transition-colors"
      >
        Celebrate!
      </Button>
      {isConfettiActive && <ReactConfetti />}
    </div>
  );
};

export default Confetti;
