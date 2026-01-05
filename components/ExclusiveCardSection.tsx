"use client";
import Image from "next/image";

export default function ExclusiveCardSection() {
  const features = [
    {
      icon: "/Configurable.webp",
      title: "Physical Card Fee",
      desc: "USD $100 per card, up to five cards available.",
    },
    {
      icon: "/Reward.webp",
      title: "WinBack Rewards",
      desc: "Earn 7% of every transaction in WinBack Points.",
    },
    {
      icon: "/Reward.webp",
      title: "Card Options",
      desc: "Virtual + Optional Physical.",
    },
    {
      icon: "/Versatile.webp",
      title: "Support",
      desc: "24/7 in-app and chat assistance.",
    },
  ];

  return (
    <section className="w-full bg-black text-white flex justify-center py-20 px-4 md:px-16">
      <div className="max-w-[1442px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <Image
            src="/Fon.webp"
            alt="Winity App Mockup"
            width={414.94}
            height={570.91}
            className="rounded-3xl object-cover shadow-2xl"
          />
        </div>

        <div className="flex flex-col justify-start space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-3">EXCLUSIVE</h2>
            <p className="text-lg md:text-xl text-gray-300 font-medium">
              $20 Annual Fee <br />
              <span className="text-white font-semibold">
                Waived for the first 6 months
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-[#0B1421]/90 p-5 rounded-xl border border-gray-800 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={48}
                    height={48}
                    className="rounded-md"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
