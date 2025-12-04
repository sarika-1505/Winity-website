import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Winity Life",
  description: "Winity – smart living solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google reCAPTCHA (required for checkbox UI) */}
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
      </head>

      <body className="font-sans text-gray-900 bg-white overflow-x-hidden">
        {/* Fixed Transparent Header */}
        <div className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
          <Header />
        </div>

        {/* Page Content */}
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
