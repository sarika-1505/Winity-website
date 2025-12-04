"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TermofUse() {
  return (
    <main className=" text-white">
      
      <section className="relative flex flex-col justify-center items-center text-center 
        px-4 md:px-20 h-[57vh] overflow-hidden">
      
         
      
        {/* BOTTOM LAYER — abstract-white */}
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
        {/* Animated Foreground */}
        <motion.div
          className="relative z-10 max-w-3xl mx-auto flex flex-col items-center justify-center"
          initial={{  y: 50 }}    
          animate={{ y: 0 }}       
          transition={{ duration: 1, ease: "easeOut" }} 
        >

          <h2
            className="font-extrabold mb-4 leading-tight"
            style={{
              fontFamily: "Outfit, sans-serif",
              fontSize: "38px",
              lineHeight: "45.6px",
               fontWeight:600,
            }}
          >
            WINITY TERMS OF USE
          </h2>

          <p
            className="max-w-2xl mx-auto leading-relaxed text-gray-300"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            WINITY Terms of Use outline the rules and guidelines for using the
            platform. They cover user responsibilities, permitted activities,
            data usage, and compliance with applicable laws.
          </p>

         
          <div className="text-gray-400 text-xs md:text-sm mt-6">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            »{" "}
            <Link href="/" className="hover:text-white">
              Legal
            </Link>{" "}
            »{" "}
            <Link
              href="/legal/terms-and-conditions"
              className="hover:text-white text-white"
            >
              Terms of Use
            </Link>
          </div>
        </motion.div>
      </section>

      {/*CONTENT SECTION */}
      <section className="px-6 md:px-20 py-16 bg-black">
        <div className="max-w-5xl mx-auto space-y-10 text-start">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className=" leading-relaxed">
              These Terms and Conditions (“Terms”) govern the use of the WINITY card program and associated services provided by WTY Technology Hong Kong Limited (“Company,” “we,” “us,” “our”). By creating an account or using any part of the Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. Participation is limited to approved users whose usage aligns with commercial objectives and is not open to the general public.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Document Scope</h2>
            <p className=" leading-relaxed">
              This Terms of Use governs access to and participation in the WINITY card program and associated financial services provided by WTY Technology Hongkong Limited. It outlines eligibility, user responsibilities, transaction limits, supported currencies, legal rights, and obligations. This document must be read in conjunction with the WINITY Privacy Policy, Risk Disclosure, and any applicable third-party Partner or card issuer terms.
            </p>
          </div>
             <div>
             <h2 className="text-2xl font-semibold text-white mb-4">1. Definitions and Interpretation</h2>

           <h3 className="text-xl  text-white mb-2">1.1 Definitions</h3>
           <p className="mb-3">
         For the purposes of these Terms, the following terms shall have the meanings set out below:
           </p>
       <ul className="list-disc pl-6 space-y-2">
      <li>
        <strong>“Account”</strong> means a user's registered access to the WINITY Services.
      </li>
      <li>
        <strong>“Card”</strong> means a payment card issued by a licensed Partner via the Visa® network, including virtual and physical cards.
      </li>
      <li>
        <strong>“Custody Wallet”</strong> means a wallet provided by a Partner for the temporary holding and conversion of supported digital assets.
      </li>
      <li>
        <strong>“Fees and Limits”</strong> means all thresholds, minimum balances, and charges as set out in Annex A.
      </li>
      <li>
        <strong>“Partner”</strong> means an authorised third-party issuer, custodian, or vendor supporting the WINITY program.
      </li>
      <li>
        <strong>“Services”</strong> means the WINITY platform, applications, and associated features.
      </li>
      <li>
        <strong>“Digital Wallet”</strong> means Apple Pay, Google Pay, or any supported third-party contactless payment platform.
      </li>
    </ul>

    <h3 className="text-xl text-white mt-6 mb-2">1.2 Interpretation</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Headings are for convenience only and do not affect interpretation.</li>
      <li>References to “you” or “user” include any approved account holder.</li>
      <li>Monetary amounts are in United States Dollars (USD) unless otherwise stated.</li>
    </ul>
  </div>

  
  <div>
    <h2 className="text-2xl font-semibold text-white mb-4">2. Program Overview</h2>

    <h3 className="text-xl  text-white mb-2">2.1 Nature of Services</h3>
    <p className="mb-3">
      WINITY provides a commercial-use payment card program in cooperation with licensed Partners. WINITY is a technology
      provider and program manager and is not a bank or financial institution.
    </p>

    <h3 className="text-xl  text-white mb-2">2.2 Partner Role</h3>
    <p className="mb-3">
      Licensed Partners provide regulated activities such as card issuance, custody, and settlement. By using the Services,
      you agree to applicable Partner terms.
    </p>

    <h3 className="text-xl text-white mb-2">2.3 Visa® Network</h3>
    <p>
      Cards may be used wherever Visa® is accepted, subject to merchant capability, applicable law, and the restrictions
      set out in these Terms.
    </p>
  </div>

   <div>
    <h2 className="text-2xl font-semibold text-white mb-4">2. Program Overview</h2>

    <h3 className="text-xl  text-white mb-2">2.1 Nature of Services</h3>
    <p className="mb-3">
      WINITY provides a commercial-use payment card program in cooperation with licensed Partners. WINITY is a technology
      provider and program manager and is not a bank or financial institution.
    </p>

    <h3 className="text-xl  text-white mb-2">2.2 Partner Role</h3>
    <p className="mb-3">
      Licensed Partners provide regulated activities such as card issuance, custody, and settlement. By using the Services,
      you agree to applicable Partner terms.
    </p>

    <h3 className="text-xl text-white mb-2">2.3 Visa® Network</h3>
    <p>
      Cards may be used wherever Visa® is accepted, subject to merchant capability, applicable law, and the restrictions
      set out in these Terms.
    </p>
  </div>
</div>
      </section>
    </main>
  );
}
