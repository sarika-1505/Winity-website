"use client";

import { motion } from "framer-motion";
import React from "react";

const OurEdge: React.FC = () => {
  return (
    <section className="relative min-h-screen text-white flex items-center justify-center px-6 md:px-16 py-20 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-60"
      >
        <source src="/Winity-Card.mp4" type="video/mp4" />
      </video>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-6xl grid md:grid-cols-2 gap-12 items-center"
      >

        <div className="bg-black/40 p-8 rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Edge</h2>

          <p className="text-lg md:text-lg font-semibold leading-relaxed mb-4">
            A lifestyle built for creators, travelers, and modern professionals
            who value simplicity, flexibility, and freedom in every motion.
          </p>

          <p className="leading-relaxed mb-4">
            Winity Life isn’t just a card or an app – it’s how you connect your
            world.
          </p>

          <p className="leading-relaxed mb-4">
            From digital nomads in Bali to entrepreneurs in Dubai, Winity brings
            seamless payments, real rewards, and borderless access to a global
            lifestyle.
          </p>

          <p className="leading-relaxed">
            Your freedom isn’t defined by where you are – it’s how easily you
            move through it.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default OurEdge;
