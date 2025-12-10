"use client";

import { useState } from "react";
import Image from "next/image";
import { CreditCard, Coins, Smartphone, Nfc, Headphones } from "lucide-react";

export default function ChooseYourWinityCard() {
  const [cardType, setCardType] = useState<"Exclusive" | "Executive">("Exclusive");
  const [cardMode, setCardMode] = useState<"virtual" | "physical">("virtual");

  const data = {
    Exclusive: {
      image: "/Exclusive.webp",
      title: "Exclusive",
      subtitle: "Perfect for creators and everyday spenders",
      virtualFeatures: [
        "Annual Fee: USD 0 (for instant Virtual)",
        "Earn 1 Winity Point for every USD 10 spent",
        "Instant Virtual Card included",
        "Google Pay® ready (Apple Pay® coming soon)",
        "Priority member support via WhatsApp",
      ],
      physicalFeatures: [
        
         "Annual Fee: USD 0 (for instant Virtual)",
        "Earn 1 Winity Point for every USD 10 spent",
        "Instant Virtual Card included",
        "Google Pay® ready (Apple Pay® coming soon)",
        "Priority member support via WhatsApp",
      ],
      button: "Get Exclusive Card",
    },

    Executive: {
      image: "/ExecutiveMetalNoVisa.webp",
      title: "Executive",
      subtitle: "Designed for business leaders and high-volume users",
      virtualFeatures: [
        "Annual Fee: USD 1,000",
        "Earn 1 Winity Point for every USD 8 spent",
        "1 premium metal card included (Up to 5 additional cards at USD 250)",
        "Google Pay® ready (Apple Pay® coming soon)",
        "Priority member support via WhatsApp",
      ],
      physicalFeatures: [
        "Metal card included",
        "Complimentary lounge access",
        "ATM withdrawals worldwide",
      ],
      button: "Get Executive Card",
    },
  };

  const iconMap = [CreditCard, Coins, Smartphone, Nfc, Headphones];

  return (
    <section className="relative w-full py-16 md:py-28 text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Dark-BG.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-10">
          Choose Your Winity Card
        </h2>

        {/* Card Type Selector */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-black/40 border border-[#3E6D61] rounded-full p-1">
            <button
              className={`px-6 md:px-8 py-2 rounded-full transition-all text-sm md:text-base ${
                cardType === "Exclusive"
                  ? "bg-[#3E6D61] text-white"
                  : "text-gray-300"
              }`}
              onClick={() => {
                setCardType("Exclusive");
                setCardMode("virtual");
              }}
            >
              Exclusive
            </button>

            <button
              className={`px-6 md:px-8 py-2 rounded-full transition-all text-sm md:text-base ${
                cardType === "Executive"
                  ? "bg-[#3E6D61] text-white"
                  : "text-gray-300"
              }`}
              onClick={() => {
                setCardType("Executive");
                setCardMode("virtual");
              }}
            >
              Executive
            </button>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

          {/* LEFT SIDE */}
          <div>
            {/* Virtual / Physical buttons */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
              <button
                className={`px-22 py-3 rounded-full border w-full sm:w-auto transition ${
                  cardMode === "virtual"
                    ? "bg-black/50 border-gray-500 text-white"
                    : "bg-black/20 border-gray-500 text-gray-300"
                }`}
                onClick={() => setCardMode("virtual")}
              >
                Virtual Card
                {cardMode === "virtual" && (
                  <span className="inline-block ml-2 w-3 h-3 bg-[#3E6D61] rounded-full" />
                )}
              </button>

              <button
                className={`px-22 py-3 rounded-full border w-full sm:w-auto transition ${
                  cardMode === "physical"
                    ? "bg-black/50 border-gray-500 text-white"
                    : "bg-black/20 border-gray-500 text-gray-300"
                }`}
                onClick={() => setCardMode("physical")}
              >
                Physical Card
                {cardMode === "physical" && (
                  <span className="inline-block ml-2 w-3 h-3 bg-[#3E6D61] rounded-full" />
                )}
              </button>
            </div>

            {/* Card Image */}
            <div className="rounded-3xl overflow-hidden shadow-xl bg-black/20 border border-white/10">
              <Image
                src={data[cardType].image}
                alt={data[cardType].title}
                width={470}
                height={290}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="rounded-3xl bg-black/30 border border-[#3E6D61] p-2 md:p-8 text-left">
            <h3 className="text-2xl md:text-3xl font-extrabold">{data[cardType].title}</h3>
            <p className="mt-1 text-gray-300 text-sm md:text-base">{data[cardType].subtitle}</p>

            {/* FEATURES */}
            {cardMode === "virtual" && (
              <ul className="mt-4 space-y-4">
                {data[cardType].virtualFeatures.map((item, index) => {
                  const Icon = iconMap[index];
                  return (
                    <li key={index} className="flex gap-4 items-start">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-[#3E6D61]/20 border border-[#3E6D61] flex items-center justify-center">
                        <Icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                      </div>
                      <span className="text-gray-200 text-sm md:text-lg">{item}</span>
                    </li>
                  );
                })}
              </ul>
            )}

            {cardMode === "physical" && (
              <>
                <h4 className="mt-10 text-base md:text-lg font-bold text-gray-300">
                  PHYSICAL CARD PERKS
                </h4>

                <ul className="mt-4 space-y-6">
                  {data[cardType].physicalFeatures.map((item, index) => {
                    const Icon = iconMap[index];
                    return (
                      <li key={index} className="flex gap-4 items-start">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#3E6D61]/20 border border-[#3E6D61] flex items-center justify-center">
                          <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <span className="text-gray-200 text-sm md:text-lg">{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}

            {/* CTA BUTTON */}
            <button className="w-full mt-10 py-4 rounded-full bg-[#3E6D61] hover:bg-[#2d594f] transition text-base md:text-lg font-semibold">
              {data[cardType].button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
