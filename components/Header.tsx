"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [hideNavbar, setHideNavbar] = useState<boolean>(false);

 
  return (
<header
  className={`fixed top-0 left-0 w-full z-[9999] 
    bg-[linear-gradient(90deg,#000000_0%,#0a3d32_50%,#000000_100%)]
    border-b border-[#235e52]
    transition-transform duration-400
    ${hideNavbar ? "-translate-y-full" : "translate-y-0"}
    animate-slideDown
  `}
>

  <div className="max-w-7xl mx-auto px-8 py-2 flex items-center justify-between">

    {/* LEFT — LOGO */}
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.jpg"
        alt="Winity Logo"
        width={200}
        height={34}
        className="object-contain"
      />
    </Link>

    {/* CENTER — NAV LINKS */}
    <nav className="hidden md:flex items-center gap-6 text-white font-semibold text-lg">
      <Link href="/holiday" className="hover:text-emerald-400 transition">Holiday Offers!</Link>
      <Link href="/ctasection" className="hover:text-emerald-400 transition">How it works</Link>
      <Link href="/cards" className="hover:text-emerald-400 transition">Cards</Link>
      <Link href="/loyalty" className="hover:text-emerald-400 transition">Loyalty</Link>
      <Link href="/faq" className="hover:text-emerald-400 transition">FAQs</Link>
    </nav>

    {/* RIGHT — BUTTON */}
    <Link
  href="https://apps.apple.com/sg/app/winity-life/id6752761057"
  target="_blank"
  className="hidden md:block bg-[#3b7f70] hover:bg-[#2f6a5d] 
  text-white font-semibold px-7 py-2 rounded-full transition duration-200"
>
  Get Started Now
</Link>

    {/* MOBILE MENU BUTTON */}

     <button
      className="md:hidden text-white text-4xl relative z-[99999]"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      ☰
    </button>

  </div>

  {/* MOBILE DROPDOWN MENU */}
  <div
    className={`
      md:hidden absolute top-full left-0 w-full 
      bg-white text-black shadow-lg
      overflow-hidden transition-all duration-300
      ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
    `}
  >
    <ul className="flex flex-col px-6 py-4 space-y-4 text-lg">
      <li><Link href="/ctasection">How it works</Link></li>
      <li><Link href="/cards">Cards</Link></li>
      <li><Link href="/loyalty">Loyalty</Link></li>
      <li><Link href="/faq">FAQs</Link></li>
    </ul>
  </div>

 
</header>

  );
};

export default Header;
