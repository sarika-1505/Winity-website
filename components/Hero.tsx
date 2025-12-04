"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      {/* DESKTOP SECTION — video background */}
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

        <div className="absolute inset-0 bg-[linear-gradient(180deg,#0a1614_0%,#0f2e2a_50%,#123b36_100%)] opacity-40"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-8 grid grid-cols-2 gap-10">
          <div className="flex flex-col justify-center text-white">
            <h1 className="text-6xl font-bold leading-tight">Many ways to Move,<br/>One way to Pay</h1>

            <p className="mt-5 text-xl text-gray-300 max-w-xl leading-tight">
              Your lifestyle, powered by Winity Life – the platform that connects
              traditional and emerging payments through a multi-network system.
            </p>

            <div className="flex items-center gap-6 mt-8">
              <Link href="https://apps.apple.com/us/app/winity-life/id6752761057" target="_blank">
                <Image src="/App-store.svg" width={150} height={44} alt="App Store"
                  className="cursor-pointer rounded-xl hover:scale-105 transition" />
              </Link>

              <Link href="https://play.google.com/store/apps/details?id=com.winity.life" target="_blank">
                <Image src="/Google-play.svg" width={150} height={44} alt="Google Play"
                  className="cursor-pointer rounded-xl hover:scale-105 transition" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE SECTION — CENTERED + VIDEO HIDDEN */}
      <section className="
        md:hidden 
        relative 
        w-full 
        h-[100vh] 
        flex 
        flex-col 
        justify-center 
        items-center 
        text-center 
        px-6 
        text-white
      ">

        {/* Same desktop gradient but subtle */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#0a1614_0%,#0f2e2a_70%,#123b36_100%)] opacity-90 -z-10"></div>

        {/* NO VIDEO IN MOBILE */}

        <h1 className="text-4xl font-bold leading-tight">
          Many ways to Move,<br />One way to Pay
        </h1>

        <p className="mt-4 text-lg text-gray-300 max-w-md leading-tight">
          Your lifestyle, powered by Winity Life – the platform that connects
          traditional and emerging payments through a multi-network system.
        </p>

        <div className="flex items-center justify-center gap-4 mt-8">
          <Link href="https://apps.apple.com/us/app/winity-life/id6752761057" target="_blank">
            <Image
              src="/App-store.svg"
              width={140}
              height={40}
              alt="App Store"
              className="cursor-pointer rounded-lg hover:scale-105 transition"
            />
          </Link>

          <Link href="https://play.google.com/store/apps/details?id=com.winity.life" target="_blank">
            <Image
              src="/Google-play.svg"
              width={140}
              height={40}
              alt="Google Play"
              className="cursor-pointer rounded-lg hover:scale-105 transition"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
