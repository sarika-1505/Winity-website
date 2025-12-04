"use client";

import { motion } from "framer-motion";
import Winity from "./Winity";
import Image from "next/image";
import React from "react";

// ✅ Define TypeScript interface for feature items
interface Feature {
  title: string;
  desc: string;
  icon: string;
}

 const Executive = () => {
  const features: Feature[] = [
    {
      title: "Effortless Spending",
      desc: "Enhanced global limits with secure USD management.",
      icon: "/Apple-Pay.webp",
    },
    {
      title: "Rewards",
      desc: "Premium rewards tier – earn faster with every spend via W-DRIP.",
      icon: "/Configurable.webp",
    },
    {
      title: "Metal Card with Digital Wallet",
      desc: "Complimentary metal card with digital wallet integration.",
      icon: "/doller-logo.webp",
    },
    {
      title: "ATM Access",
      desc: "Global withdrawals available (subject to enhanced limits).",
      icon: "/ATM-Access.webp",
    },
    {
      title: "Priority Support",
      desc: "Exclusive lifestyle support anytime, anywhere.",
      icon: "/Seamless.webp",
    },
    {
      title: "Curated Subscriptions",
      desc: "Seamlessly manage funds across global currencies.",
      icon: "/Seamless.webp",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen text-white overflow-hidden">
        <img
          src="Exclusive2.jpeg"
          alt="Executive Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-3xl px-6 md:px-20 lg:px-32 py-20 mt-16 md:mt-28"
        >
          <button className="font-medium rounded-full border border-green-500 py-1 px-6 mb-5 transition">
            Sign Ups Live Now
          </button>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            The Pinnacle of Payment Innovation
          </h1>
          <p className="mt-6 text-gray-200 leading-relaxed text-sm md:text-base">
            The Winity Executive Card represents the highest tier of lifestyle
            access – combining premium design, global flexibility, and
            concierge-level service within one intelligent ecosystem.
          </p>
          <button className="mt-10 bg-gradient-to-r from-emerald-600 to-teal-400 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition">
            Apply For Your Card
          </button>
        </motion.div>
      </section>

      {/* CARD OPTIONS */}
      <section className="bg-black text-white py-16 px-4 md:px-12">
        <div className="flex flex-col items-center justify-center text-start">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-10">
            CARD OPTIONS
          </h1>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {[
              {
                title: "Virtual Card",
                desc: "Instant access, compatible with supported digital wallets for contactless payments and online transactions.",
              },
              {
                title: "Metal Card",
                desc: "Optional metal card for in-store purchases and ATM withdrawals.",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="bg-gray-950 hover:bg-gray-900 rounded-2xl p-6 flex flex-col justify-start items-start border border-[#9a7663] w-full md:w-[600px] h-auto md:h-[147px] transition-all"
              >
                <h1 className="text-xl mb-2">{card.title}</h1>
                <p className="text-gray-400 text-md">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="w-full bg-black text-white py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
          {/* LEFT SIDE */}
          <div className="w-full md:w-1/2 flex justify-start items-start mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight p-10">
              THE WINITY <br /> EXECUTIVE <br /> CARD IN ACTION
            </h1>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-[#0a0f1a] rounded-2xl p-6 flex flex-col justify-start w-full max-w-[290px] h-auto md:h-[303px] mx-auto hover:bg-[#121826] transition-all duration-300"
              >
                <div className="w-10 h-10 mb-4">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-md leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXECUTIVE CARD DETAILS */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between py-20 px-6 md:px-20 bg-black text-white gap-12">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src="/Sample-Image.webp"
            alt="Sample"
            className="w-full max-w-[500px] h-auto rounded-2xl object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Executive</h1>
          <h2 className="mb-10 text-lg md:text-xl">$1,000 Annual Fee</h2>

          <div className="flex flex-col gap-3 w-full">
            {[
              {
                icon: "/doller-logo.webp",
                title: "Exclusive",
                desc: "Premium lifestyle benefits for achievers.",
              },
              {
                icon: "/Reward.webp",
                title: "Executive",
                desc: "Elite rewards and global flexibility.",
              },
              {
                icon: "/doller-logo.webp",
                title: "Signature",
                desc: "Top-tier privileges and dedicated services.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-950 rounded-3xl p-4 w-full shadow-2xl"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={46}
                  height={46}
                  className="mb-3"
                />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER INFO SECTION */}
      <section className="bg-black pb-24 px-4 md:px-0">
        <Winity />
        <h2 className="text-center mt-10 text-gray-100 text-sm md:text-base leading-relaxed">
          Cards are issued in Hong Kong and available for use globally wherever
          Visa® is accepted.
          <br /> Rewards subject to eligibility and program conditions. Google
          Pay™ is a trademark of Google LLC.
          <br /> Visa® is a registered trademark of Visa International Service
          Association.
        </h2>
      </section>
    </>
  );
}

export default Executive;