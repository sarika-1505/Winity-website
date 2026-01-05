"use client";

import { useState } from "react";
import { Gift, CreditCard } from "lucide-react";
import { Globe, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { Sparkles, Calendar } from "lucide-react";

export default function ChooseGift() {
  const [tab, setTab] = useState<"new" | "existing">("new");

  return (
    <>
    <section className="relative bg-black py-18 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
          bg-[#06291F] border border-[#1FAF81]/40 text-[#2EE59D]
          text-xs font-semibold tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-[#2EE59D]" />
          LIVE OFFER
        </div>

     
        <h2 className="text-4xl md:text-4xl font-bold text-white">
          Choose Your Bonus
        </h2>
        <p className="mt-4 mb-8 text-lg text-gray-400">
          New or existing user? We’ve got something for both.
        </p>
<div
  className="
    relative
    w-[576px]
    max-w-full
    mx-auto
    p-10
    rounded-3xl
    overflow-hidden
    bg-gradient-to-b from-[#062220] to-[#020F0E]
    border border-[#1FAF81]/40
    shadow-[0_0_80px_rgba(31,175,129,0.25)]
  "
>
          <div className="absolute inset-x-0 top-0 h-1 rounded-t-3xl
            bg-gradient-to-r from-[#2EE59D] to-[#1FC8A0]" />

        
          <div className="flex bg-black/40 rounded-xl p-1 mb-8">
            <button
              onClick={() => setTab("new")}
              className={`flex-1 py-4 rounded-lg text-sm font-semibold transition
                ${tab === "new"
                  ? "bg-[#14B87A] text-black"
                  : "text-gray-400 hover:text-white"}`}
            >
              I’m New Here
            </button>
            <button
              onClick={() => setTab("existing")}
              className={`flex-1 py-4 rounded-lg text-sm font-semibold transition
                ${tab === "existing"
                  ? "bg-[#14B87A] text-black"
                  : "text-gray-400 hover:text-white"}`}
            >
              I’m Already a User
            </button>
          </div>

        
          <div className="rounded-2xl border border-[#1FAF81]/30
            bg-black/40 px-6 py-10 text-center">

            <p className="text-xs tracking-widest text-[#2EE59D] font-semibold">
              DEPOSIT
            </p>

            <h3 className="mt-3 text-4xl font-bold text-white">
              {tab === "new" ? "$10 or more" : "$25 or more"}
            </h3>

            <p className="mt-2 text-lg font-semibold text-[#2EE59D]">
              + Get {tab === "new" ? "$2" : "$5"} Bonus
            </p>
          </div>

          <p className="mt-6 text-gray-300">
            You’ll have{" "}
            <span className="font-semibold text-white">
              ${tab === "new" ? "12+" : "30+"}
            </span>{" "}
            to spend instantly
          </p>

          {/* CTA */}
          <button
            className="mt-8 w-full py-4 rounded-full
              bg-[#0A9B6A] hover:bg-[#12B981]
              text-white font-semibold text-lg transition
              shadow-[0_0_30px_rgba(10,155,106,0.6)]"
          >
            Download Winity Life
          </button>

         
          <p className="mt-4 text-sm text-gray-500">
            First deposit only · KYC required
          </p>
        </div>
      </div>
    </section>

     <section className="relative bg-black py-28 px-6 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-3xl font-bold text-white">
            Infinite Possibilities.
          </h2>

          <p className="mt-5 text-lg text-gray-400 max-w-2xl mx-auto">
            Your bonus is credited instantly. Use it however you like.
          </p>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 ">

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#0E2A28] flex items-center justify-center mb-6">
                <Globe className="text-[#2EE59D]" size={26} />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">
                Shop Globally
              </h4>
              <p className="text-gray-400 leading-relaxed max-w-xs">
                Spend at Amazon, Netflix, or any online store worldwide.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#0E2A28] flex items-center justify-center mb-6">
                <CreditCard className="text-[#2EE59D]" size={26} />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">
                Save on FX
              </h4>
              <p className="text-gray-400 leading-relaxed max-w-xs">
                Enjoy lower fees on international transactions.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#0E2A28] flex items-center justify-center mb-6">
                <ShieldCheck className="text-[#2EE59D]" size={26} />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">
                No Rush
              </h4>
              <p className="text-gray-400 leading-relaxed max-w-xs">
                Your bonus is valid until March 31, 2026. Keep it safe.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section
      className="
        relative
        w-full
        py-28
        flex
        items-center
        justify-center
        text-center
        overflow-hidden
        bg-black
      "
    >
      {/* Background radial gradient */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.18)_0%,rgba(0,0,0,0.9)_65%,#000_100%)]
        "
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Ready to claim your{" "}
          <span className="text-emerald-400">free bonus?</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-base md:text-lg text-gray-400">
          Download now and start spending globally in minutes.
        </p>

        {/* Store Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Image
            src="/App-store.svg"
            alt="Download on App Store"
            width={190}
            height={56}
            className="cursor-pointer hover:scale-105 transition-transform"
          />
          <Image
            src="/Google-play.svg"
            alt="Get it on Google Play"
            width={190}
            height={56}
            className="cursor-pointer hover:scale-105 transition-transform"
          />
        </div>
      </div>
    </section>

   <section className="relative bg-black py-28 px-6 overflow-hidden">
  <div className="absolute inset-0 bg-black" />
  <div className="relative z-10 max-w-7xl mx-auto text-center">
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
      bg-[#3c4450] border border-white/10 text-gray-300
      text-xs font-semibold tracking-widest mb-6">
      <Calendar size={14} />
      COMING SOON
    </div>

    <h2 className="text-3xl md:text-3xl font-bold text-white">
      More on the Way
    </h2>

    <p className="mt-4 text-lg text-gray-400">
      Stay tuned! New offers are coming this quarter.
    </p>
    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

      <div
        className="
          group
          rounded-2xl
          border border-dashed border-white/20
          bg-[#19191f]
          px-6 py-8
          text-center
          backdrop-blur-sm
          transition-all duration-300
          hover:border-[#1d362e]
        "
      >
        <div className="mx-auto mb-5 w-11 h-11 rounded-full bg-white/10
          flex items-center justify-center">
          <Sparkles className="text-gray-300" size={20} />
        </div>

        <h4 className="text-base font-semibold text-gray-200">
          Exclusive Bonus
        </h4>

        <p className="mt-2 text-sm text-gray-400">
          Special rewards coming soon!
        </p>
      </div>

      {/* Card 2 */}
      <div
        className="
          group
          rounded-2xl
          border border-dashed border-white/20
          bg-[#19191f]
          px-6 py-8
          text-center
          backdrop-blur-sm
          transition-all duration-300
          hover:border-[#1d362e]
        "
      >
        <div className="mx-auto mb-5 w-11 h-11 rounded-full bg-white/10
          flex items-center justify-center">
          <Sparkles className="text-gray-300" size={20} />
        </div>

        <h4 className="text-base font-semibold text-gray-200">
          Limited Offer
        </h4>

        <p className="mt-2 text-sm text-gray-400">
          Time-sensitive deals ahead!
        </p>
      </div>

      {/* Card 3 */}
      <div
        className="
          group
          rounded-2xl
          border border-dashed border-white/20
          bg-[#19191f]
          px-6 py-8
          text-center
          backdrop-blur-sm
          transition-all duration-300
          hover:border-[#1d362e]
        "
      >
        <div className="mx-auto mb-5 w-11 h-11 rounded-full bg-white/10
          flex items-center justify-center">
          <Sparkles className="text-gray-300" size={20} />
        </div>

        <h4 className="text-base font-semibold text-gray-200">
          Members Only
        </h4>

        <p className="mt-2 text-sm text-gray-400">
          Perks for our community!
        </p>
      </div>

    </div>

  {/* FULL WIDTH DIVIDER */}
  <div className="mt-24 w-screen border-t border-gray-700/40" />
    {/* Terms */}
    <p className="mt-10 max-w-4xl mx-auto text-sm text-gray-500 leading-relaxed">
      <span className="font-semibold text-gray-400">
        Terms & Conditions:
      </span>{" "}
      Offers valid through March 31, 2026. Bonus funds are strictly for
      card-based transactions (online or point-of-sale). Direct withdrawals
      of bonus funds to external wallets are not supported. Only one bonus
      per category is applicable per user account. Unused bonus funds will
      be forfeited after the validity period. Eligibility criteria may vary
      by jurisdiction and are subject to applicable laws and internal
      policies.{" "}
      <span className="text-emerald-400 hover:underline cursor-pointer">
        Find more details here.
      </span>
    </p>
  </div>
</section>

</>
  );
}
