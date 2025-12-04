"use client";

import { useState } from "react";
import Image from "next/image";
import { Calculator, Coins } from "lucide-react";

export default function WinityCardSelector() {
  const [selected, setSelected] = useState("exclusive");

  const cards = {
    exclusive: {
      label: "Exclusive",
      rate: 10,
      img: "/ExclusiveCard3D.webp",
    },
    executive: {
      label: "Executive",
      rate: 8,
      img: "/ExecutiveCard3D.webp",
    },
  };

  const [amount, setAmount] = useState(1000);
  const rate = 10; // 1 point per $10 USD
  const points = Math.floor(amount / rate);


  return (
    <>
      <section className="w-full bg-black text-white px-6">

        <div className="text-center py-22">
          <h1 className="text-4xl font-bold text-white">
            Winity Loyalty
          </h1>
          <h4 className="text-xl text-white mt-2">
            Loyalty That Stays With You
          </h4>
        </div>
        {/* TOP CARD SELECTOR */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center gap-12">

          {Object.entries(cards).map(([key, card]) => {
            const isSelected = selected === key;

            return (

              <div
                key={key}
                onClick={() => setSelected(key)}
                className="cursor-pointer flex flex-col items-center"
              >
                {/* IMAGE WRAPPER */}
                <div
                  className={`
                  rounded-2xl p-[1px] transition-all duration-500
                  ${isSelected
                      ? "border- border-emerald-400 shadow-[0_0_40px_#00ffcc80]"
                      : "border border-transparent opacity-80"
                    }
                `}
                >
                  {/* IMAGE ONLY gets hover & movement */}
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src={card.img}
                      alt={card.label}
                      width={330}
                      height={220}
                      className={`
                      rounded-2xl transition-all duration-500    `}
                    />
                  </div>
                </div>

                {/* HEADING UNDER IMAGE */}
                <div className="mt-4 text-center">
                  <p
                    className={`font-semibold ${isSelected ? "text-emerald-400" : "text-gray-300"
                      }`}
                  >
                    {card.label}
                  </p>

                  <p className="text-sm opacity-60">
                    1 point per ${card.rate} USD
                  </p>
                </div>
              </div>

            );
          })}
        </div>

      </section>

      <section className="w-full bg-black text-white py-8 px-6">

        {/* MAIN GLASS CARD CONTAINER */}
        <div className="
        max-w-6xl mx-auto 
        rounded-3xl 
        bg-[#071412]/50 
        border border-emerald-800/40 
        shadow-[0_0_120px_#00ffcc10] 
        px-10 py-14 
        backdrop-blur-xl
      ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

            {/* LEFT SIDE — SLIDER */}
            <div className="space-y-8">

              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="
                w-14 h-14 rounded-xl 
                bg-emerald-900/30 
                border border-emerald-600/40 
                flex items-center justify-center 
                shadow-[0_0_20px_#00ffcc20]
              ">
                  <Calculator className="w-8 h-8 text-emerald-300" />
                </div>

                <h2 className="text-3xl font-bold">Calculate Your Earnings</h2>
              </div>

              {/* Slider Label */}
              <p className="text-lg font-bold opacity-80">Amount You Spend (USD)</p>

              {/* Slider */}
              <input
                type="range"
                min={100}
                max={10000}
                value={amount}
                step={50}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full accent-emerald-500 h-2 rounded-full cursor-pointer"
              />

              <div className="flex justify-between text-xs opacity-60">
                <span>$100</span>
                <span>$10,000</span>
              </div>

              {/* YOU SPEND BOX */}
              <div className="
              p-6 rounded-2xl 
              bg-[#0b1e1a]/60 
              border border-emerald-900/40 
              shadow-[0_0_30px_#00ffcc15]
            ">
                <p className="text-emerald-400 text-sm mb-1">You Spend</p>
                <p className="text-5xl font-extrabold">
                  ${amount.toLocaleString()}
                </p>
              </div>

            </div>

            {/* RIGHT SIDE — POINTS */}
            <div className="
            rounded-3xl 
            bg-[#0c231f]/50 
            border border-emerald-700/60 
            shadow-[0_0_98px_#00ffcc20] 
            flex flex-col items-center justify-center 
            text-center
          ">
              {/* Icon */}
              <div
                className="flex items-center justify-center mb-4">
                <Coins className="h-12 w-12 text-emerald-300 spin-slow" />
              </div>

              <p className="text-lg opacity-80">You Earn</p>

              <p className="text-7xl font-bold text-emerald-400 mt-2">
                {points}
              </p>

              <p className="text-xl mt-1">Winity Points</p>

              {/* Rate Badge */}
              <div className="
              mt-5 px-5 py-1 
              rounded-full 
              bg-black/30 
              border border-emerald-600/40 
              text-sm 
              opacity-80
            ">
                1 point per ${rate} USD
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
