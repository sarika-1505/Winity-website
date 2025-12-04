"use client";

import Image from "next/image";
import { MapPin, Plane, Utensils, Palette } from "lucide-react";

export default function WinityExperiences() {
  const cards = [
    {
      title: "Boutique Hotel (Bali)",
      points: "2,500",
      img: "/michelin-dining.jpg",
      icon: MapPin,
    },
    {
      title: "Airport Lounge",
      points: "5,000",
      img: "/airport-lounge.jpg",
      icon: Plane,
    },
    {
      title: "Michelin Dining (Tokyo)",
      points: "10,000",
      img: "/hotel-bali.jpg",
      icon: Utensils,
    },
    {
      title: "Art Event (Dubai)",
      points: "50,000",
      img: "/art-event.jpg",
      icon: Palette,
    },
  ];

  return (
    <section className="w-full bg-black text-white py-24 px-6">

      {/* MAIN HEADING */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold">
          Unlock Experiences With Your Winity Points
        </h2>
        <p className="text-gray-300 mt-3 text-lg">
          Turn your points into unforgettable moments
        </p>
      </div>

      {/* 4 CARD GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {cards.map((card, i) => {
          const Icon = card.icon;

          return (
            <div
              key={i}
              className="relative rounded-3xl overflow-hidden group cursor-pointer"
            >
              {/* Hover image effect */}
              <Image
                src={card.img}
                alt={card.title}
                width={400}
                height={250}
                className="
                  w-full h-64 object-cover rounded-3xl transition-all duration-500
                  group-hover:scale-110 group-hover:-translate-y-2
                "
              />

              {/* Right corner icon bubble */}
              <div
                className="
                  absolute top-4 right-4 
                  w-10 h-10 rounded-full
                  bg-black/40 backdrop-blur-md
                  border border-white/20
                  flex items-center justify-center
                "
              >
                <Icon className="w-5 h-5 text-white" />
              </div>

              {/* Gradient overlay bottom */}
              <div
                className="
                  absolute bottom-0 left-0 w-full 
                  p-5
                  bg-gradient-to-t from-black/90 via-black/40 to-transparent
                "
              >
                <h3 className="text-lg font-semibold">{card.title}</h3>

                <p className="text-sm text-gray-300 mt-1">Starting from</p>

                <p className="text-3xl font-bold mt-1">{card.points}</p>

                <p className="text-sm text-gray-300">Winity Points</p>
              </div>
            </div>
          );
        })}

      </div>

      {/* Small text */}
      <p className="text-center text-sm text-gray-400 mt-10">
        Images are for visual representation only. Actual rewards may vary.
      </p>

      {/* CTA BUTTON */}
      <div className="flex justify-center mt-10">
  <a
    href="https://apps.apple.com/sg/app/winity-life/id6752761057"
    target="_blank"
    rel="noopener noreferrer"
    className="
      px-10 py-4 text-lg font-semibold
      rounded-full
      bg-black/60 
      border-2 border-[#4ea38e] 
      text-white
      shadow-[0_0_40px_rgba(62,109,97,0.2)]
      hover:bg-[#124437] 
      hover:shadow-[0_0_50px_rgba(62,109,97,0.5)]
      transition-all duration-300
    "
  >
    Start earning Winity Points on every transaction today
  </a>
</div>

    </section>
  );
}
