"use client";
import Image from "next/image";

export default function ScrollImage() {
  const cards = [
    {
      title: "Global Freedom",
      desc: "Live, travel, and operate anywhere with one seamless platform. Access the multi-network funding suite to manage your balance through bank transfers or supported stablecoins, hold USD funds securely, and use them effortlessly across 200+ countries. You can view all supported assets directly in the app.",
      img: "/Global-Freedom.png",
    },
    {
      title: "Winity Loyalty",
      desc: "Every purchase earns Winity Points through Winity Loyalty, transforming your daily spend into meaningful lifestyle experiences. Whether it's exclusive travel, curated global partnerships, or premium gift card access, Winity Points bring you closer to the moments that matter, effortlessly.",
      img: "/Winity-Loyalty.png",
    },
    {
      title: "Connected Lifestyle",
      desc: "Enjoy 24/7 member support on WhatsApp, premium benefits through Member Services, and seamless access across the entire Winity Life ecosystem. Whether you're at home or traveling the world, Winity Life stays effortlessly in sync with the way you live.",
      img: "/ConnectedLifestyle.png",
    },
  ];

  return (
    <section className="relative w-full py-24 overflow-hidden">

      {/* === BACKGROUND IMAGE === */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Dark-BG.jpg"
          alt="Background"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* === CONTENT === */}
      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        
        <h2 className="text-4xl md:text-5xl font-bold">
          The Winity Life Experience
        </h2>

        <p className="mt-3 text-xl font-medium text-gray-200">
          More than a card. A lifestyle platform.
        </p>

        {/* 3 CARDS */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden group"
            >
              {/* IMAGE WITH HOVER SCALE */}
              <div className="h-56 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* CONTENT */}
              <div className="p-8 text-black">
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
