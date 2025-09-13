"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollDown, setIsScrollDown] = useState(false);
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set isScrolled when scrolled beyond 50px
      setIsScrolled(currentScrollY > 50);

      // Set isScrollDown based on scroll direction
      setIsScrollDown(currentScrollY > lastScrollY);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "About us", href: "/pages/about_us" },
    { name: "Services", href: "/pages/services" },
    { name: "Team", href: "/pages/team" },
    { name: "Pricing", href: "/pages/pricing" },
    { name: "Contact", href: "/pages/contact" },
  ];

  return (
    <header
      className={`top-0 left-0 right-0 z-50 transition-all duration-300 shadow-[0px_0px_0px_1px_rgba(127,127,127,0.1)] ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      } ${isScrollDown ? "hidden" : "fixed"}`}
    >
      <nav className="max-w-[1176px] mx-auto px-[10px]">
        <div className="flex items-center justify-between h-24 mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/Upshift-Logo.webp"
              alt="Upshift Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-black hover:text-[#0BA5EC] transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden px-4 md:flex items-center justify-center">
            <Link
              href="/pages/get_a_quote"
              className={`w-full ${
                isScrolled ? "btn-third" : "btn-secondary "
              }`}
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
            <Link
              href="/pages/get_a_quote"
              className={`block text-center btn-third`}
            >
              Get a quote
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
