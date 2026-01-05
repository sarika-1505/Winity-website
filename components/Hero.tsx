"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="relative hidden md:flex w-full h-[120vh] pt-20 items-center overflow-hidden">

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Hero-video-main.mp4" type="video/mp4" />
        </video>

        {/* overlay */}
        <div className="absolute inset-0 bg-black opacity-5"></div>

        <div className="absolute inset-0 bg-[linear-gradient(180deg,#0a1614_0%,#0f2e2a_50%,#123b36_100%)] opacity-40"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-8 grid grid-cols-2 gap-8">
  <div className="flex flex-col justify-center text-white">

    {/* Heading */}
    <h1
      className="
        max-w-[555px]
        text-[60.8px]
        font-bold
        leading-[1.15]
        tracking-normal
      "
      style={{ fontFamily: "Roboto, sans-serif" }}
    >
      Many ways to Move,
      One way to Pay
    </h1>

    {/* Description */}
    <p
      className="
        mt-5
        max-w-[600px]
        text-[18px]
        leading-[1.55]
        text-[#BFC7C6]
      "
    >
      Your lifestyle, powered by Winity Life – the platform that connects
      traditional and emerging payments through a multi-network system. Move
      your money your way, spend globally in USD, and earn Winity Points with
      every tap – all through one seamless experience.
    </p>

    {/* Store Buttons */}
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
          className="cursor-pointer hover:scale-105 transition-transform"
        />
      </Link>

      <Link
        href="https://play.google.com/store/apps/details?id=com.winity.life"
        target="_blank"
      >
        <Image
          src="/Google-play.svg"
          width={150}
          height={44}
          alt="Google Play"
          className="cursor-pointer hover:scale-105 transition-transform"
        />
      </Link>
    </div>
  </div>


        </div>
      </section>

<section
  className="
    md:hidden
    relative
    w-full
    min-h-[100vh]
    flex
    flex-col
    justify-start
    items-center
    text-center
    pt-20
    px-6
    text-white
  "
>

  <div className="absolute inset-0 bg-[linear-gradient(180deg,#0a1614_0%,#0f2e2a_70%,#123b36_100%)] opacity-95 -z-10"></div>
  <h1 className="text-3xl font-bold leading-snug mt-4">
    Many ways to Move,<br />One way to Pay
  </h1>

  <p className="mt-5 font-medium text-base text-gray-300 leading-snug max-w-md">
  Your lifestyle, powered by Winity Life - the platform that connects traditional 
  and emerging payments through a multi-network system. Move your money your way, 
  spend globally in USD, and earn Winity Points with every tap - all through one
   seamless experience.
  </p>

  <div className="flex items-center justify-center gap-4 mt-8">
    <Link href="https://apps.apple.com/us/app/winity-life/id6752761057" target="_blank">
      <Image
        src="/App-store.svg"
        width={120}
        height={36}
        alt="App Store"
        className="cursor-pointer rounded-lg hover:scale-105 transition"
      />
    </Link>

    <Link href="https://play.google.com/store/apps/details?id=com.winity.life" target="_blank">
      <Image
        src="/Google-play.svg"
        width={120}
        height={36}
        alt="Google Play"
        className="cursor-pointer rounded-lg hover:scale-105 transition"
      />
    </Link>
  </div>

  <div className="relative w-full flex justify-center mt-15 ">

    <Image
      src="/mobile-hero1.png"
      width={180}
      height={320}
      alt="Winity App UI"
      className="object-contain drop-shadow-2xl"
    />

    <Image
      src="/card-visa.png"
      width={148}
      height={185}
      alt="Winity Visa Card"
      className="
        absolute 
        bottom-[-8px] 
        left-[20]
        -translate-x-1/2
        drop-shadow-xl
      "
    />
  </div>

</section>

    </>
  );
}
