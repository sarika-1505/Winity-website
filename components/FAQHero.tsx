"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const FAQ_TABS = [
  {
    id: "registration",
    label: "Registration & Account Setup",
    faqs: [
      "How do I download and install the Winity Life app?",
      "What information is required to register an account?",
      "How long does Identity verification (KYC) take?",
      "In which countries are the Winity Card available?",
      "Are there any restrictions on who can use the Winity Card?",
      "Where can I find detailed instructions on using the Winity Card and Winity Life app?",
    ],
  },
  {
    id: "kyc",
    label: "KYC Process",
    faqs: [
      "What documents are required for KYC?",
      "How secure is my personal information?",
      "Can I update KYC later?"
    ],
  },
  {
    id: "card",
    label: "Card Issuance & Usage",
    faqs: [
      "Is the card virtual or physical?",
      "Where can I use my Winity Card?",
      "How do I link the card to Google Pay or Apple Pay?"
    ],
  },
  {
    id: "wallet",
    label: "Wallet and Funding",
    faqs: [
      "What is a Wallet Address?",
      "How do I check wallet balance?",
      "How can I add funds?"
    ],
  },
  {
    id: "payments",
    label: "Transactions & Payments",
    faqs: [
      "Which digital currencies are supported?",
      "How long do transfers take?",
      "What to do if payment fails?"
    ],
  },
  {
    id: "security",
    label: "Security and Privacy",
    faqs: [
      "How do you keep accounts secure?",
      "Can I enable 2-Factor Authentication?",
      "What should I do in case of fraud?"
    ],
  },
  {
    id: "fees",
    label: "Fees and Charges",
    faqs: [
      "Are there account fees?",
      "Are withdrawals charged?",
      "Where can I view full fee details?"
    ],
  },
];

export default function FAQ() {
  const [activeTab, setActiveTab] = useState("registration");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const currentTab = FAQ_TABS.find((t) => t.id === activeTab);

  return (
    <>
    <section className="relative flex flex-col justify-center items-center text-center 
        px-4 md:px-20 h-[57vh] overflow-hidden">
      
        <div className="absolute inset-0 z-0">
          <Image
            src="/abstract-white.jpg"
            alt="Abstract BG"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
      
        <div className="absolute inset-0 z-4">
          <Image
            src="/Dark-BG.jpg"
            alt="Dark Background"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
      
        <motion.div
          className="relative z-10 max-w-3xl mx-auto flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 50 }}   
          animate={{ opacity: 1, y: 0 }}    
          transition={{ duration: 1, ease: "easeOut" }} 
        >

          <motion.h2
            className="font-extrabold mb-4 leading-tight"
            style={{
              fontFamily: "Outfit, sans-serif",
              fontSize: "38px",
              lineHeight: "45.6px",
              fontWeight:600,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
          Frequently Asked Questions

          </motion.h2>

          <motion.p
            className="max-w-2xl mx-auto leading-relaxed text-gray-300"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "18px",
              lineHeight: "24px",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
        Everything you need to know about Winity Life
          </motion.p>

          
          <motion.div
            className="text-gray-400 text-xs md:text-sm mt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
          </motion.div>
        </motion.div>
      </section>

    <section className="w-full bg-[#050505] min-h-screen py-20 text-white">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[320px_1fr] gap-10 px-6">
        <div className="space-y-4">
          {FAQ_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full text-left px-6 py-4 text-lg font-semibold rounded-xl transition ${
                activeTab === tab.id
                  ? "bg-[#3e6e62] text-white shadow-lg"
                  : "bg-[#406f65] text-white/90 hover:bg-[#508f82]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

      
        <div className="space-y-4">
          {currentTab?.faqs.map((question, index) => (
            <div
              key={index}
              className="bg-[#101010] rounded-xl border border-neutral-800"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left text-lg"
              >
                {question}
                <FiChevronDown
                  className={`text-xl transition-transform ${
                    openFAQ === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openFAQ === index && (
                <div className="px-6 pb-5 text-gray-300 text-base">
                  This is sample placeholder content for:  
                  <span className="text-white font-medium"> {question}</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  );
}
