"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Send, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <>
     <div className="w-full h-px bg-gray-200/40 p-0.4"></div>
    <footer className="bg-[#050D0B] text-gray-300 py-16 px-4">
    
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          <div className="md:w-1/4 flex justify-start">
            <Image
              src="/logo.jpg"
              alt="Winity Life Logo"
              width={190}
              height={70}
              className="object-contain"
            />
          </div>

          <div className="md:w-2/4 grid grid-cols-1 sm:grid-cols-3 gap-8">

            <div>
              <h3 className="text-white font-semibold mb-4 tracking-wide text-sm">COMPANY</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/contact" className="hover:text-emerald-500">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 tracking-wide text-sm">WINITY CARDS</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/exclusive" className="hover:text-emerald-500">
                    Exclusive
                  </Link>
                </li>
                <li>
                  <Link href="/executive" className="hover:text-emerald-500">
                    Executive
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 tracking-wide text-sm">MEMBER SERVICES</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="https://wa.me/xxxxxxxxxx" className="hover:text-emerald-500">
                    WhatsApp
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-emerald-500">
                    Support Portal
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="hover:text-emerald-500">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <p className="mt-14 text-gray-100 text-sm max-w-4xl text-left">
          Card services are issued in Hong Kong and available globally wherever Visa® is accepted.
          Availability may vary by jurisdiction.
        </p>

        <div className="border-t border-gray-700 mt-4"></div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-6 text-sm">

          <div className="text-gray-100 text-center md:text-left">
            © 2025 @WTY Technology Hong Kong Limited.
          </div>

          <div className="flex flex-wrap gap-6 text-gray-100 justify-center text-sm">
            <Link href="/legal/risk-disclosure" className="hover:text-emerald-500">
              Risk Disclosure
            </Link>
            <Link href="/legal/terms-and-conditions" className="hover:text-emerald-500">
              Terms of Use
            </Link>
            <Link href="/legal/privacy-policy" className="hover:text-emerald-500">
              Privacy Policy
            </Link>
            <Link href="/legal/google-pay" className="hover:text-emerald-500">
              Google Pay T&C
            </Link>
          </div>

          <div className="flex gap-3 justify-center">
            {[Linkedin, Send, Instagram, Facebook, Youtube].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="w-9 h-9 flex items-center justify-center
                  rounded-md border border-gray-500
                  hover:border-emerald-500 hover:text-emerald-400 transition"
              >
                <Icon className="w-4 h-4" />
              </Link>
            ))}
          </div>

        </div>
      </div>
    </footer>
    </>
  );
}
