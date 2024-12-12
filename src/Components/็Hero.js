import React, { useState, useEffect } from 'react';
import satoruImage from '../assets/satoru.png';

// Countdown Timer Component
function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval when the component unmounts
  }, [targetDate]);

  return (
    <div className="text-3xl font-bold text-gray-900">
      {timeLeft.days !== undefined ? (
        <div className='flex gap-10'>
          <span className="text-4xl text-green-400">{timeLeft.days} <br /> <p className='text-sm text-black font-normal'>Days</p> </span>
          <span className="text-4xl  text-green-400">{timeLeft.hours} <br /> <p className='text-sm text-black font-normal'>Hours</p></span>
          <span className="text-4xl  text-green-400">{timeLeft.minutes} <br /> <p className='text-sm text-black font-normal'>Minutes</p></span>
          <span className="text-4xl  text-green-400">{timeLeft.seconds} <br /> <p className='text-sm text-black font-normal'>Seconds</p></span>
        </div>
      ) : (
        <p className="text-xl text-red-500">Time's up!</p>
      )}
    </div>
  );
}

function Hero() {
  const targetDate = '2024-12-31T00:00:00'; // เปลี่ยนเป็นวันที่ที่ต้องการ

  return (
    <div className="bg-gray-100 py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-wrap items-center justify-between">
          {/* Left side: Image as background */}
          <div
            className="w-full sm:w-1/2  h-96 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${satoruImage})`,
              backgroundSize: 'contain', // ใช้ 'contain' เพื่อให้รูปภาพแสดงเต็มในขอบเขตโดยไม่ถูกตัด
            }}
          ></div>

          {/* Right side: Text and Countdown */}
          <div className="w-full sm:w-1/2 sm:pl-12">
            <h1 className="text-lg font-extrabold text-gray-900 sm:text-lg">
              Best Price For You
            </h1>
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Deal of the day
            </h1>
            <p className="mt-4 text-sm text-gray-600">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
            </p>

            {/* Countdown Timer */}
            <div className="mt-6">
              <CountdownTimer targetDate={targetDate} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
