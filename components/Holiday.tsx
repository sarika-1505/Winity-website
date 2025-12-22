"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Holiday() {
  const [offset, setOffset] = useState(0);

  // Parallax background effect
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">

      {/* Background with parallax */}
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

      {/* Dark overlay + vignette */}
      <div className="absolute inset-0 bg-black/70 vignette z-10"></div>

      {/* ❄️ Snowfall */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="absolute top-[-10%] rounded-full bg-white opacity-80 animate-snow"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDuration: `${10 + Math.random() * 12}s`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-30 flex min-h-screen items-center justify-center px-6 text-center">
        <div className="max-w-3xl">

          {/* Ribbon */}
          <div className="inline-block mb-6 mt-16">
            <span className="px-10 py-4 bg-[#2F5D43] text-white uppercase tracking-widest text-lg font-semibold skew-x-[-10deg] inline-block">
              THE CHRISTMAS THAT KEEPS GIVING
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-7xl md:text-7xl font-extrabold">
            Unwrap Your{" "}
            <span className="block mt-1 bg-gradient-to-r from-[#2EE59D] to-[#1FC8A0] bg-clip-text text-transparent">
              $5 Holiday Gift
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-8 text-3xl md:text-2xl text-gray-200">
            Get an instant cash bonus on your next deposit.
            <br />
            Spend it anywhere Visa® is accepted until March 2026.
          </p>

          {/* Store Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Image
              src="/App-store.svg"
              alt="Download on App Store"
              width={180}
              height={55}
              className="cursor-pointer hover:opacity-90 transition"
            />
            <Image
              src="/Google-play.svg"
              alt="Get it on Google Play"
              width={180}
              height={55}
              className="cursor-pointer hover:opacity-90 transition"
            />
          </div>

          {/* Footer */}
          <p className="mt-10 text-lg text-gray-400">
            Valid until March 31, 2026 · One bonus per user
          </p>
        </div>
      </div>
      
    </main>
  );
}
