"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: "Winter Bonus!", href: "/holiday" },
    { label: "How it works", href: "/ctasection" },
    { label: "Cards", href: "/cards" },
    { label: "Loyalty", href: "/loyalty" },
    { label: "FAQs", href: "/faq" },
  ];

  return (
    <>
      {/* HEADER */}
      <header
        className="fixed top-0 left-0 w-full z-[10000]
        bg-[linear-gradient(90deg,#000000_0%,#0a3d32_50%,#000000_100%)]
        border-b border-[#235e52]"
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/">
            <Image
              src="/logo.jpg"
              alt="Winity Logo"
              width={180}
              height={32}
              className="object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-2 text-[#BEC3C2] font-medium text-[17px]">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-2 py-1 transition-colors duration-300 hover:text-emerald-500
                  after:absolute after:left-0 after:-bottom-1 after:h-[1px]
                  after:w-0 after:bg-emerald-500 after:transition-all after:duration-300
                  hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <Link
            href="https://apps.apple.com/sg/app/winity-life/id6752761057"
            target="_blank"
            className="hidden md:block bg-[#3b7f70] hover:bg-[#2f6a5d]
              text-white font-semibold px-7 py-2 rounded-full transition"
          >
            Get Started Now
          </Link>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-white text-3xl"
          >
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE OVERLAY MENU */}
      <div
        className={`
          fixed inset-0 z-[9999]
          bg-black/70 backdrop-blur-sm
          transition-opacity duration-300
          ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        {/* MENU PANEL */}
        <div
          className={`
            absolute top-0 left-1 right-1
            bg-white rounded-xl shadow-2xl
            overflow-hidden
            transition-transform duration-300
            ${menuOpen ? "translate-y-0" : "-translate-y-10"}
          `}
        >
          {/* CLOSE AREA */}
          <div className="flex justify-end px-4 py-3 border-b">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-bold text-gray-700"
            >
              ✕
            </button>
          </div>

          {/* MENU ITEMS */}
          <ul className="flex flex-col text-left">
            {menuItems.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    block px-6 py-4 text-[17px]
                    ${index === 1 ? "bg-gray-700 text-white" : "text-gray-900"}
                    hover:bg-gray-200 transition
                  `}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
