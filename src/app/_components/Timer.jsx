import Image from "next/image";
import React, { useState, useEffect } from "react";
import content from "@/app/_data/content.json";

const Timer = ({ setIsTimerDown }) => {
  if (!content.time) return;

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(content.time).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference <= 0) {
        clearInterval(timer);
        setIsTimerDown(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [setIsTimerDown]);

  return (
    <div className="w-full h-screen bg-[var(--color-primary)] grid place-content-center">
      <div className="flex flex-col items-center gap-2">
        <Image
          src={"/images/logo/mbf-white-stylised.png"}
          alt="Ma Boucherie Française Logo Stylisé"
          width={196}
          height={124}
          className=""
        />
        <p className="text-white pt-5 pb-2.5 font-light text-center">
          {content.time_subtitle}
        </p>
        <div className="grid grid-cols-4 gap-4 text-white">
          <div className="text-center">
            <div className="text-4xl font-bold">{timeLeft.days}</div>
            <div className="text-sm">Jours</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">{timeLeft.hours}</div>
            <div className="text-sm">Heures</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">{timeLeft.minutes}</div>
            <div className="text-sm">Minutes</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">{timeLeft.seconds}</div>
            <div className="text-sm">Secondes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
