"use client";

import { useEffect, useState } from "react";

export function CountUpStat({ number, label }) {
  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    // Extract the numeric value from the number string (e.g., "50K+" -> 50)
    const numericValue = parseInt(number.replace(/\D/g, ""));
    const suffix = number.replace(/\d/g, ""); // Get the suffix (K+, %, +, etc.)

    let currentNumber = 0;
    const increment = numericValue / 30; // Animate over 30 frames
    const interval = 30; // ms between frames

    const timer = setInterval(() => {
      currentNumber += increment;
      if (currentNumber >= numericValue) {
        setDisplayNumber(numericValue + suffix);
        clearInterval(timer);
      } else {
        setDisplayNumber(Math.floor(currentNumber) + suffix);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
        {displayNumber}
      </div>
      <div className="text-gray-600 dark:text-gray-400 font-medium">
        {label}
      </div>
    </div>
  );
}
