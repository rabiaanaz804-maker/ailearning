"use client";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

export default function ConfettiWrapper({ trigger }: { trigger: boolean }) {
  const [fired, setFired] = useState(false);

  useEffect(() => {
    if (trigger && !fired) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
      });
      setFired(true);
    }
  }, [trigger, fired]);

  return null;
}
