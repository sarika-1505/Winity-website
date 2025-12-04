"use client";

import Image from "next/image";
import Link from "next/link";

export default function WinityJoinSection() {
  return (
    <section className="relative w-full h-[90vh] md:h-[100vh] overflow-hidden bg-black">
      
      {/* BG VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source src="/Hero-Video-Second.mp4" type="video/mp4" />
      </video>

      {/* CONTENT */}
     <div className="relative max-w-8xl mx-auto h-full flex flex-col md:flex-row items-center justify-between px-8 md:px-12">

  {/* LEFT SIDE TEXT */}
  <div className="text-white max-w-3xl mt-32 md:mt-0">
    <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
      Join the Winity Life Experience
    </h2>
    <h3 className="text-4xl md:text-5xl font-semibold leading-tight">
 Live Global. Spend Smarter.
    </h3>
 
  <div className="flex items-center gap-6 mt-8">
  <Link
    href="https://apps.apple.com/us/app/winity-life/id6752761057"
    target="_blank"
  >
    <Image
      src="/App-store.svg"
      width={150}
      height={44}
      alt="App Store"
      className="cursor-pointer rounded-xl hover:scale-105 transition"
    />
  </Link>

  <Link
    href="https://play.google.com/store/apps/details?id=com.winity.life"
    target="_blank">
    <Image
      src="/Google-play.svg"
      width={150}
      height={44}
      alt="Google Play"
      className="cursor-pointer rounded-xl hover:scale-105 transition"
    />
  </Link>
     </div>
     </div>
   </div>
 </section>
  );
}
