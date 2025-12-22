"use client";

import { Gift, CreditCard } from "lucide-react";
import { Globe,  ShieldCheck } from "lucide-react";


export default function ChooseGift() {
  return (
    <>
    <section className="relative bg-black py-6 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-12">
          Choose Your Gift
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="relative rounded-3xl p-10 bg-gradient-to-b from-[#071C1B] to-[#041413]
            border border-[#1FAF81]/40 shadow-[0_0_60px_rgba(31,175,129,0.15)]">

            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#0E2A28]">
                <Gift className="text-[#2EE59D]" size={28} />
              </div>
            </div>

            <h3 className="text-center text-2xl font-semibold text-white">
              New Here?
            </h3>
            <p className="text-center text-gray-400 mt-2">
              Start your Winity journey with a boost.
            </p>

            {/* Deposit box */}
            <div className="mt-8 rounded-2xl border border-[#1FAF81]/30 bg-black/40 p-8 text-center">
              <p className="text-sm tracking-widest text-[#2EE59D] font-semibold">
                DEPOSIT
              </p>
              <p className="text-4xl font-bold text-white mt-2">
                $10 or more
              </p>
              <p className="mt-2 text-lg text-[#2EE59D] font-semibold">
                + Get $5 Bonus
              </p>
            </div>

            <p className="text-center text-gray-300 mt-6">
              Total Balance: <span className="font-semibold text-white">$15.00+</span>
            </p>

            {/* Button */}
            <button className="mt-8 w-full py-4 rounded-full text-lg font-semibold text-white
              bg-[#0A9B6A] hover:opacity-90 transition shadow-[0_0_25px_rgba(10,155,106,0.45)]">
              Claim New User Bonus
            </button>
          </div>

          {/* RIGHT CARD – Existing User */}
          <div className="relative rounded-3xl p-10 bg-gradient-to-b from-[#071C1B] to-[#041413]
            border border-[#2EE59D]/30 shadow-[0_0_60px_rgba(31,175,129,0.12)]">

            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#0E2A28]">
                <CreditCard className="text-[#2EE59D]" size={28} />
              </div>
            </div>

            <h3 className="text-center text-2xl font-semibold text-white">
              Already with us?
            </h3>
            <p className="text-center text-gray-400 mt-2">
              A holiday thank you for your loyalty.
            </p>

            {/* Deposit box */}
            <div className="mt-8 rounded-2xl border border-[#1FAF81]/30 bg-black/40 p-8 text-center">
              <p className="text-sm tracking-widest text-[#2EE59D] font-semibold">
                DEPOSIT
              </p>
              <p className="text-4xl font-bold text-white mt-2">
                $25 or more
              </p>
              <p className="mt-2 text-lg text-[#2EE59D] font-semibold">
                + Get $5 Bonus
              </p>
            </div>

            <p className="text-center text-gray-300 mt-6">
              Total Balance: <span className="font-semibold text-white">$30.00+</span>
            </p>

            {/* Button */}
            <button className="mt-8 w-full py-4 rounded-full text-lg font-semibold text-white
              bg-[#3A475A] hover:bg-[#45546B] transition">
              Claim Loyalty Bonus
            </button>
          </div>

        </div>
      </div>
    </section>

     <section className="relative bg-black py-28 px-6 overflow-hidden">

      {/* Soft diagonal gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-black to-[#020617] opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-3xl font-bold text-white">
          Infinite Possibilities.
        </h2>

        <p className="mt-5 text-lg text-gray-400 max-w-2xl mx-auto">
          Your bonus is credited instantly. Use it however you like.
        </p>

        {/* Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 ">

          {/* Item 1 */}
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

          {/* Item 2 */}
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

          {/* Item 3 */}
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

     <section className="relative bg-black py-10 px-6">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#CFFCEA]">
          The Rules of Giving
        </h2>
        <p className="mt-5 text-center text-xl text-gray-400">
          Simple steps to unlock your instant holiday reward.
        </p>

      
        <div className="mt-16 rounded-3xl overflow-hidden
          bg-gradient-to-b from-[#062220] to-[#020F0E]
          border border-[#1FAF81]/30 shadow-[0_0_80px_rgba(31,175,129,0.15)]">

          {/* Header Row */}
          <div className="grid grid-cols-3 px-10 py-6 border-b border-white/10
            bg-gradient-to-r from-[#0B3A33] to-[#041A17] text-white">

            <div className="font-semibold text-lg">
              How it Works
            </div>

            <div className="flex items-center gap-3 font-semibold text-lg text-[#2EE59D]">
              <Gift size={20} />
              New Users
            </div>

            <div className="flex items-center gap-3 font-semibold text-lg">
              <CreditCard size={20} />
              Existing Users
            </div>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-3 px-10 py-8 border-b border-white/10 text-gray-200">
            <div className="font-semibold text-white">
              To Qualify
            </div>
            <div>
              Complete KYC &amp; make{" "}
              <span className="font-semibold text-white">First Deposit</span>
            </div>
            <div>
              Make a{" "}
              <span className="font-semibold text-white">Single Deposit</span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-3 px-10 py-8 border-b border-white/10 text-gray-200">
            <div className="font-semibold text-white">
              Deposit Amount
            </div>
            <div>
              <span className="inline-block px-4 py-1 rounded-full
                bg-[#0E3A30] text-[#2EE59D] font-semibold">
                $10 or more
              </span>
            </div>
            <div>
              <span className="inline-block px-4 py-1 rounded-full
                bg-[#1F2937] text-white font-semibold">
                $25 or more
              </span>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-3 px-10 py-8 border-b border-white/10 text-gray-200">
            <div className="font-semibold text-white">
              Your Reward
            </div>
            <div className="font-semibold text-[#2EE59D]">
              $5.00 Cash Bonus
            </div>
            <div className="font-semibold text-[#2EE59D]">
              $5.00 Cash Bonus
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-3 px-10 py-8 text-gray-200">
            <div className="font-semibold text-white">
              Time to Shop
            </div>
            <div>
              Use before{" "}
              <span className="font-semibold text-white">
                March 31, 2026
              </span>
            </div>
            <div>
              Use before{" "}
              <span className="font-semibold text-white">
                March 31, 2026
              </span>
            </div>
          </div>
        </div>
  </div>
        {/* Footer / Terms */}
        <div className="mt-12 w-full border-t border-white/10 pt-6 text-sm text-gray-500 leading-relaxed">
        <div className="max-w-4xl mx-auto">
          <span className="font-semibold text-gray-300 ">
            Terms &amp; Conditions:
          </span>{" "}
          Active from December 20, 2025, through March 31, 2026. Bonus funds are
          strictly for card-based transactions (online or point-of-sale).
          Direct withdrawals of bonus funds to external wallets are not supported.
          Only one bonus is applicable per user account. Unused bonus funds will
          be forfeited after March 31, 2026. Eligibility criteria may vary by
          jurisdiction and are subject to applicable laws and internal policies.{" "}
          <span className="text-[#2EE59D] cursor-pointer hover:underline">
            Find more details here.
          </span>

          </div>
        </div>

    
    </section>
    </>
  );
}
