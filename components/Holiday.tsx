"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Holiday() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.25);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <Image
          src="/Holiday-hero.jpg"
          alt="Christmas Background"
          fill
          priority
          className="object-cover scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-black/82 vignette z-10" />

      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => {
          const size = Math.random() * 3 + 2;
          return (
            <span
              key={i}
              className="absolute top-[-10%] rounded-full bg-white animate-snow"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: Math.random() * 0.6 + 0.4,
                animationDuration: `${Math.random() * 10 + 12}s`,
                animationDelay: `${Math.random() * 6}s`,
              }}
            />
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-30 flex min-h-screen items-start sm:items-center justify-center px-4 text-center">
        <div className="max-w-sm sm:max-w-3xl pt-24 sm:pt-0">

<div className="mb-4 sm:mb-6 flex justify-center">
  <span
    className="
      inline-flex
      items-center
      justify-center
      px-6 sm:px-10
      py-2.5 sm:py-4
      text-white
      uppercase
      tracking-widest
      text-[12px] sm:text-lg
      font-bold
      bg-gradient-to-r from-[#1e3f58] via-[#234a66] to-[#2c5778]
      skew-x-[-12deg]
      shadow-md
    "
  >
    <span className="skew-x-[12deg]">
      Winter Deals • Q1 2026
    </span>
  </span>
</div>

          <h1
            className="
              font-extrabold 
              text-[42px] sm:text-5xl lg:text-7xl
            "
          >
            Exclusive
            <span
              className="
                block mt-0.5
                text-[45px] sm:text-5xl lg:text-7xl
                bg-gradient-to-r from-[#2EE59D] to-[#1FC8A0]
                bg-clip-text text-transparent
              "
            >
              Winter Bonuses
            </span>
          </h1>

        
          <p className="mt-4 sm:mt-6 text-2xl sm:text-2xl text-gray-200 leading-relaxed px-2">
           Your destination for all active Winity offers.<br/>
          Grab your bonus and spend it anywhere Visa® is accepted.
          </p>

<div className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
  <Image
    src="/App-store.svg"
    alt="Download on App Store"
    width={180}
    height={52}
    className="cursor-pointer"
  />
  <Image
    src="/Google-play.svg"
    alt="Get it on Google Play"
    width={180}
    height={52}
    className="cursor-pointer"
  />
</div>

          <p className="mt-5 sm:mt-8 text-[11px] sm:text-base text-gray-400">
            All bonuses valid until March 31, 2026
          </p>
        </div>
      </div>
    </main>
  );
}
