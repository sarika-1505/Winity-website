"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Winity from "./Winity";
import ExclusiveCardSection from "./ExclusiveCardSection";

const Exclusive: React.FC = () => {
  interface Feature {
    img: string;
    span: string;
    p: string;
  }

  const features: Feature[] = [
    {
      img: "/ATM-Access.webp",
      span: "Deposit Digital Assets, Spend in USD",
      p: "Global use with transparent USD balance management.",
    },
    {
      img: "/Apple-Pay.webp",
      span: "Manage Everything in one Place",
      p: "Manage everything in the Winity App - from balances to benefits.",
    },
    {
      img: "/Apple-Pay.webp",
      span: "Digital Wallet Compatibility",
      p: "Add to supported wallets for secure, contactless payments.",
    },
    {
      img: "/ATM-Access.webp",
      span: "ATM Withdrawals",
      p: "Access fiat currency at ATMs where Visa® is accepted, subject to programme limits.",
    },
    {
      img: "/Spend-Online.webp",
      span: "Earn WinBack Points",
      p: "Earn WinBack Points on every purchase through the W-DRIP program.",
    },
    {
      img: "/Seamless.webp",
      span: "Customer Support",
      p: "Priority access included for all Exclusive Card owners.",
    },
  ];

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen text-white flex px-6 md:px-16 py-20 overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-60"
        >
          <source src="/Winity-Card.mp4" type="video/mp4" />
        </video>

        {/* Content */}
        <motion.div
          initial={{ y: 250 }}
          animate={{ y: -10 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative max-w-6xl grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="p-8 rounded-2xl">
            <button className="font-medium rounded-full border border-green-500 py-1 px-6 mb-5 transition">
              Sign Ups Live Now
            </button>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Freedom in Motion for the Modern Lifestyle
            </h2>

            <p className="text-lg md:text-lg leading-relaxed mb-4">
              The Winity Exclusive Card is designed for creators, travelers, and
              professionals who live without borders. It’s a smarter way to
              manage spending, earn rewards, and stay connected through one
              unified lifestyle platform.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ===== TWO CARD SECTION ===== */}
      <section className="w-full bg-black text-white flex justify-center py-40">
        <div
          className="max-w-[1240px] w-full grid grid-cols-1 md:grid-cols-2 gap-10 justify-center"
          style={{ minHeight: "432.05px" }}
        >
          {/* Virtual Card */}
          <div
            className="relative bg-[#0B1421]/90 backdrop-blur-md border border-gray-800 hover:border-gray-600 
                     rounded-2xl p-6 flex flex-col items-center text-center 
                     shadow-xl transition-all duration-300"
            style={{ width: "600px", maxWidth: "100%", height: "372.05px" }}
          >
            <motion.div
              initial={{ x: -120, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute -top-28 left-1/2 transform -translate-x-1/2"
            >
              <Image
                src="/Card-Visa.jpg"
                alt="Exclusive Virtual Card"
                width={396.83}
                height={251.05}
                className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </motion.div>

            <div className="mt-32">
              <h3 className="text-2xl font-bold mb-3">
                Exclusive Virtual Card
              </h3>
              <p className="text-gray-400 text-sm md:text-base mb-6">
                Instant access, compatible with supported digital wallets for
                contactless payments and online transactions.
              </p>

              <button
                className="bg-gradient-to-b from-green-300 via-emerald-500 to-blue-900 
              hover:bg-gradient-to-b hover:from-blue-900 hover:via-emerald-500 hover:to-green-300
              text-white font-semibold px-10 py-2 rounded-full transition-all duration-300"
              >
                Apply Now
              </button>
            </div>
          </div>

          {/* Physical Card */}
          <div
            className="relative bg-[#0B1421]/90 backdrop-blur-md border border-gray-800 hover:border-gray-600 
                     rounded-2xl p-6 flex flex-col items-center text-center 
                     shadow-xl transition-all duration-300"
            style={{ width: "600px", maxWidth: "100%", height: "372.05px" }}
          >
            <motion.div
              initial={{ x: 120, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute -top-28 left-1/2 transform -translate-x-1/2"
            >
              <Image
                src="/Card-exe.webp"
                alt="Exclusive Physical Card"
                width={396.83}
                height={251.05}
                className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </motion.div>

            <div className="mt-32">
              <h3 className="text-2xl font-bold mb-3">
                Exclusive Physical Card
              </h3>
              <p className="text-gray-400 text-sm md:text-base mb-6">
                Optional PVC card for in-store purchases and ATM withdrawals.
              </p>

              <button
                className="bg-gradient-to-b from-green-300 via-emerald-500 to-blue-900 
              hover:bg-gradient-to-b hover:from-blue-900 hover:via-emerald-500 hover:to-green-300
              text-white font-semibold px-10 py-2 rounded-full transition-all duration-300"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURE SECTION ===== */}
      <section className="w-full flex justify-center items-center bg-black text-white">
        <div
          className="max-w-[1442.4px] w-full flex flex-col md:flex-row justify-between gap-2"
          style={{ minHeight: "1129.4px" }}
        >
          {/* Left Text */}
          <div
            className="flex flex-col items-start text-left md:w-[620px] w-full px-22"
            style={{ height: "189px" }}
          >
            <h2 className="text-4xl md:text-5xl font-[50px] leading-tight max-w-[550px]">
              THE WINITY EXCLUSIVE
              <br />
              CARD IN ACTION
            </h2>
          </div>

          {/* Right Features */}
          <div
            className="flex flex-col justify-between md:w-[620px] w-full space-y-2"
            style={{ height: "989px" }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-6 p-4 border border-gray-800 rounded-2xl bg-[#0B1421]/80 backdrop-blur-md hover:border-gray-600 transition-all duration-300"
                style={{ height: "153px", width: "100%", maxWidth: "570px" }}
              >
                <div className="flex-shrink-0">
                  <Image
                    src={feature.img}
                    alt={feature.span}
                    width={56}
                    height={55}
                    className="rounded-xl object-cover"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <span className="text-lg font-semibold">{feature.span}</span>
                  <p className="text-gray-400 text-sm">{feature.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXTRA SECTIONS ===== */}
      <section>
        <ExclusiveCardSection />
      </section>

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
};

export default Exclusive;
