"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const PagesHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "About Us", href: "/pages/about_us/" },
    { name: "Services", href: "/pages/services/" },
    { name: "Team", href: "/pages/team/" },
    { name: "Pricing", href: "/pages/pricing/" },
    { name: "Contact", href: "/pages/contact/" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent ${
        !isScrolled && "shadow-[0px_0px_0px_1px_rgba(127,127,127,0.1)]"
      }`}
    >
      <nav className="max-w-[650px] mx-auto h-max">
        <div className="flex items-center justify-between min-h-[60px] mt-5 mb-10 mx-auto px-[14px] bg-white border border-light rounded-[16px]">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/Mobile-App-Hero-Logo.webp"
              alt="Upshift Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-black hover:text-[#0BA5EC] transition-colors duration-200 font-medium px-3"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center justify-center">
            <Link
              href="/pages/get_a_quote/"
              className={`w-full text-[16px] leading-[16px] font-medium shadow-[0_2px_4px_0_rgba(0,10,31,0.2),_inset_0_6px_3px_-1px_rgba(255,255,255,0.2)] bg-primary px-[20.8px] py-[11.2px] rounded-[12px] text-white`}
            >
              Get a quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span
                className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-4 bg-white border-t">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="#" className={`block text-center btn-third`}>
              Sign In
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default PagesHeader;
