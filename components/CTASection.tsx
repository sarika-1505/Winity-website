"use client";
import Image from "next/image";

export default function HowWinityWorks() {
  const steps = [
    {
      title: "Download & Verify",
      desc: "The Winity Life App is available on the App Store and Google Play. Download and complete quick verification to get started.",
      img: "/Download-Verify.png",
    },
    {
      title: "Choose Your Card",
      desc: "Find the card that fits your lifestyle. Start free and upgrade when you’re ready — each tier unlocks more rewards and lifestyle privileges.",
      img: "/Choose-Your-Card.png",
    },
    {
      title: "Manage Your Cards",
      desc: "Once verified, you can deposit supported digital assets or bank transfers into your Winity Life account and manage your USD balance seamlessly platform.",
      img: "/manage-your-cards.webp",
    },
    {
      title: "Spend & Earn",
      desc: "Operate, shop, and travel. Every transaction earns Winity Points toward your next experience, with dedicated Member Services available anytime.",
      img: "/Spend-Earn.png",
    },
  ];

  return (
    <section className="relative w-full py-24 overflow-hidden">

      <div className="absolute inset-0 bg-[linear-gradient(180deg,#0d1f1c_0%,#133630_50%,#0d1f1c_100%)] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        
        <h2 className="text-4xl md:text-5xl font-bold">
          How Winity Works
        </h2>

        <h2 className="mt-3 text-xl md:text-2xl text-gray-200">
          Four simple steps to financial freedom
        </h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-100/60 bg-[#0f1f1c]/60 backdrop-blur-lg text-white shadow-xl overflow-hidden h-[520px] flex flex-col group"
            >
              <div className="relative h-1/2 w-full overflow-hidden flex items-center justify-center">

                <div className="relative w-[95%] h-[95%] transition-all duration-700 group-hover:w-full group-hover:h-full">
                  <Image
                    src={step.img}
                    alt={step.title}
                    fill
                    className="
                      object-contain 
                      transition-all duration-700 
                      group-hover:object-cover 
                      group-hover:scale-100
                    "
                  />
                </div>

              </div>
              <div className="h-1/2 flex flex-col px-4 py-3">
                
                <div className="w-full h-px bg-gray-100/50 mb-3"></div>

                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {step.desc}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
