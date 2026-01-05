"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion"; 

export default function RiskDisclouser() {
  return (
    <main className=" text-white">
      
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
            initial={{  y: 30 }}
            animate={{  y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Risk Disclouser
          </motion.h2>

          <motion.p
            className="max-w-2xl mx-auto leading-relaxed text-gray-300"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              lineHeight: "24px",
            }}
            initial={{  y: 30 }}
            animate={{  y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            WINITY Terms of Use outline the rules and guidelines for using the
            platform. They cover user responsibilities, permitted activities,
            data usage, and compliance with applicable laws.
          </motion.p>

          <motion.div
            className="text-gray-400 text-xs md:text-sm mt-6"
            initial={{ y: 30 }}
            animate={{  y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            »{" "}
            <Link href="/" className="hover:text-white">
              Legal
            </Link>{" "}
            »{" "}
            <Link
              href="/legal/privacy-policy"
              className="hover:text-white text-white"
            >
              Risk-Disclouser
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="px-6 md:px-20 py-16 bg-black">
        <div className="max-w-5xl mx-auto stext-start">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms and Conditions (“Terms”) govern the use of the WINITY
              card program and associated services provided by WTY Technology
              Hong Kong Limited (“Company,” “we,” “us,” “our”). By creating an
              account or using any part of the Services, you acknowledge that
              you have read, understood, and agree to be bound by these Terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Document Scope</h2>
            <p className="text-gray-300 leading-relaxed">
              This document outlines the general conditions that apply to all
              WINITY cardholders. It details the terms of participation, usage
              limitations, data handling practices, and compliance requirements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              User Responsibilities
            </h2>
            <p className="text-gray-300 leading-relaxed">
              As a user, you agree to use the WINITY platform in accordance with
              applicable laws, maintain the confidentiality of your account
              information, and avoid engaging in prohibited activities.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Compliance</h2>
            <p className="text-gray-300 leading-relaxed">
              The Company reserves the right to update or amend these Terms at
              any time. Continued use of the platform after changes are made
              constitutes acceptance of the revised Terms.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
