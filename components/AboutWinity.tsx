"use client";

import Image from "next/image";
import Winity from "./Winity";
import { motion } from "framer-motion";
import React from "react";

const AboutWinity: React.FC = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        <Image
          src="/bg-2.jpg"
          alt="Background"
          fill
          className="rounded-3xl h-[90%] w-full"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-start px-30 py-65">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: -100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <button className="font-medium rounded-full border border-green-500 py-1 px-6 mb-5 transition">
              About Winity Life
            </button>
          </motion.div>

          <motion.h1
            className="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: -95 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            FREEDOM IN MOTION
          </motion.h1>

          <motion.p
            className="max-w-2xl text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: -90 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          >
            Winity Life represents “Winning over Infinity” — a philosophy that
            celebrates limitless progress and the pursuit of true financial
            <br /> freedom.
          </motion.p>
        </div>
      </div>

      <section className="flex flex-col md:flex-row px-9 md:px-20 py-12 bg-black text-white">
        <div className="md:w-1/2 space-y-6 mt-28 px-9">
          <h1 className="text-5xl font-extrabold">Free Beyond Limits</h1>
          <p>
            Built by people who live and work across countries, Winity was
            designed for a generation that values mobility, clarity, and
            control. We believe financial freedom isn’t just about spending – it’s
            about the ability to move your life, your value, and your opportunities
            anywhere in the world. Winity bridges traditional finance and digital
            innovation, empowering creators, travelers, and professionals to manage
            everything that matters – globally, simply, and securely.
          </p>

          <p>
            Built for a globally connected generation, Winity bridges the worlds
            of traditional finance and digital assets. Balances are maintained in
            USD, with funding options including cash, USDT, USDC, and other
            supported assets such as WCO, BNB, ETH, Polygon, and TRX – all
            converted securely within the platform into spendable USD for global
            use.
          </p>
        </div>

        <div className="md:w-1/2 mt-20 md:mt-0 flex justify-center">
          <div className="relative w-[350px] h-[250px] md:w-[430px] md:h-[646px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/Exclusive.jpeg"
              alt="Winity Life Card"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 bg-black text-white">

        <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
          <div className="relative w-[350px] h-[250px] md:w-[456px] md:h-[456px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/Exclusive2.jpeg"
              alt="Winity Life Card"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="md:w-1/2 space-y-6 md:pl-8">
          <h1 className="text-5xl font-extrabold">
            One Ecosystem, Endless Motion
          </h1>
          <p>
            Winity brings your lifestyle into one connected platform – combining
            cards, loyalty, and partnerships into a unified experience. Manage your
            Winity cards directly through the app, enjoy round-the-clock support
            via WhatsApp and Telegram, and access rewards that grow with every
            move. With multi-network funding options including USDT, USDC, ETH,
            BNB, TRX, Polygon, and WCO, and an expanding network of global
            partners, Winity is building an ecosystem designed for the world in
            motion – where innovation, access, and freedom move as one.
          </p>
        </div>
      </section>

      <div className="bg-black pt-16 pb-10 px-4 sm:px-8">
        <Winity />

        <h2 className="text-center mt-8 text-gray-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
          Cards are issued in Hong Kong and available for use globally wherever
          <span className="text-white font-medium"> Visa® </span>
          is accepted.
          <br className="hidden sm:block" />
          Rewards subject to eligibility and program conditions.
          <span className="text-white font-medium"> Google Pay™ </span> is a
          trademark of Google LLC.
          <br className="hidden sm:block" />
          <span className="text-white font-medium"> Visa® </span> is a
          registered trademark of Visa International Service Association.
        </h2>
      </div>
    </>
  );
};

export default AboutWinity;
