import React from "react";

const Winity: React.FC = () => {
  return (
    <div className="bg-gray-800 flex items-center justify-center px-4 sm:px-8 py-8 rounded-3xl border border-amber-950 hover:shadow-amber-900 max-w-[1240px] mx-auto my-8">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div className="space-y-5 text-white text-center lg:text-left">
          <button className="font-medium rounded-full border border-green-500 py-1 px-6 mb-3 transition">
            About Winity Life
          </button>

          <h1 className="text-2xl md:text-3xl font-bold leading-tight">
            Manage Your WINITY Card
          </h1>

          <p className="text-gray-300 text-sm md:text-lg max-w-md mx-auto lg:mx-0">
            Track spending, and access support directly from your mobile device.
          </p>

          <div className="flex justify-center lg:justify-start">
            <a
              href="https://apps.apple.com/in/app/winity-life/id6752761057"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4"
            >
              <img
                src="/AppStore.png"
                alt="Get it on App Store"
                className="h-12 md:h-14"
              />
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center mt-8 lg:mt-0">
          <img
            className="rounded-3xl shadow-2xl max-w-full h-auto"
            src="/image2.jpg"
            alt="Winity Card"
          />
        </div>
      </div>
    </div>
  );
};

export default Winity;
