"use client";

import { useState, useEffect } from "react";

const SINGLE_SINCE = new Date("2000-01-01").getTime(); // He's been single since birth basically

export default function CountdownTimer() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const update = () => {
      const now = Date.now();
      const diff = now - SINGLE_SINCE;
      setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((diff / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((diff / (1000 * 60)) % 60));
      setSeconds(Math.floor((diff / 1000) % 60));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const blocks = [
    { value: days, label: "Days" },
    { value: hours, label: "Hours" },
    { value: minutes, label: "Minutes" },
    { value: seconds, label: "Seconds" },
  ];

  return (
    <div className="text-center">
      <p className="text-accent text-sm uppercase tracking-[0.3em] mb-4">
        Days Ashraf Has Been Single
      </p>
      <div className="flex justify-center gap-3 sm:gap-5">
        {blocks.map((block) => (
          <div
            key={block.label}
            className="bg-primary-light/80 gold-border rounded-lg p-3 sm:p-4 min-w-[70px] sm:min-w-[90px]"
          >
            <div className="text-2xl sm:text-4xl font-bold text-accent font-heading">
              {block.value.toLocaleString()}
            </div>
            <div className="text-[10px] sm:text-xs text-white/60 uppercase tracking-wider mt-1">
              {block.label}
            </div>
          </div>
        ))}
      </div>
      <p className="text-white/40 text-xs mt-3 italic">
        * Timer starts from birth. Accuracy not guaranteed.
      </p>
    </div>
  );
}
