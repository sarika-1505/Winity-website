"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion"; 
import WinityJoinSection from "./WinityJoinSection";

export default function Contact() {
  return (
    <>
    <main className="">
      
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
  

  {/* FOREGROUND CONTENT */}
  <motion.div
    className="relative z-40 max-w-3xl mx-auto flex flex-col items-center justify-center"
    initial={{ y: 50 }}
    animate={{ y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <motion.h2
      className="font-extrabold text-xl mb-4 leading-tight"
      style={{
        fontFamily: "Outfit, sans-serif",
        fontSize: "38px",
        lineHeight: "45.6px",
        fontWeight: 600,
      }}
      initial={{ y: 30 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      Support Portal
    </motion.h2>

    <motion.p
      className="max-w-2xl mx-auto leading-relaxed text-gray-100"
      style={{
        fontFamily: "Inter, sans-serif",
        fontSize: "18px",
        lineHeight: "24px",
      }}
      initial={{ y: 30 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
      Need assistance with your Winity card or Winity Account?
    </motion.p>

    <motion.div
      className="text-gray-400 text-xs md:text-sm mt-6"
      initial={{ y: 30 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      <Link href="/" className="hover:text-white">Home</Link> »
      <Link href="/legal/contact" className="hover:text-white text-white ml-1">
        support
      </Link>
    </motion.div>
  </motion.div>
</section>



      {/* ✅ CONTENT SECTION */}
     <div className="min-h-screen bg-black text-white px-6 py-20 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT SECTION */}
        <div className="bg-[#0d1117] border border-gray-700 rounded-2xl p-10 h-fit">
          <h1 className="text-4xl font-bold mb-6">We're Here to Help</h1>

          <p className="text-gray-300 leading-relaxed text-lg">
            Need assistance with your account? Please provide 
            your details in the form, and our support specialists 
            will review your inquiry and be in touch shortly.
          </p>
        </div>

        {/* RIGHT SECTION (FORM) */}
        <div className="bg-[#0d1117] border border-gray-700 rounded-2xl p-10">
          
          {/* First + Last Name */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-300 mb-1">First Name</label>
              <input 
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-[#39665d] text-white outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Last Name</label>
              <input 
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-[#39665d] text-white outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mt-6">
            <label className="block text-sm text-gray-300 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input 
              type="email"
              className="w-full px-4 py-3 rounded-lg bg-[#39665d] text-white outline-none"
            />
          </div>

          {/* Message */}
          <div className="mt-6">
            <label className="block text-sm text-gray-300 mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea 
              rows={6}
              className="w-full px-4 py-3 rounded-lg bg-[#39665d] text-white outline-none resize-none"
            ></textarea>
          </div>

       
         {/* REAL Google reCAPTCHA */}
<div className="mt-8">
  <div
    className="g-recaptcha"
    data-sitekey="YOUR_SITE_KEY"
  ></div>
</div>


          {/* Submit Button */}
          <button className="mt-8 bg-[#39665d] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#2e524a] transition">
            Submit
          </button>

        </div>

      </div>
    </div>
    </main>
    <WinityJoinSection/>

    </>
  );
}
