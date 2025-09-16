"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const logos = [
    "/images/Mobile-App-Hero-Logo-1.webp",
    "/images/Mobile-App-Hero-Logo-2.webp",
    "/images/Mobile-App-Hero-Logo-3.webp",
    "/images/Mobile-App-Hero-Logo-4.webp",
    "/images/Mobile-App-Hero-Logo-5.webp",
    "/images/Mobile-App-Hero-Logo-6.webp",
    "/images/Mobile-App-Hero-Logo-7.webp",
    "/images/Mobile-App-Hero-Logo-1.webp",
    "/images/Mobile-App-Hero-Logo-2.webp",
    "/images/Mobile-App-Hero-Logo-3.webp",
    "/images/Mobile-App-Hero-Logo-4.webp",
    "/images/Mobile-App-Hero-Logo-5.webp",
    "/images/Mobile-App-Hero-Logo-6.webp",
    "/images/Mobile-App-Hero-Logo-7.webp",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 bg-gradient-to-b from-[#DDEDFA] to-[#FFFFFF00] pt-[180px]">
      <div className="max-w-[1176px] w-full mx-auto px-[10px] pb-[30px] border-b-[1px] border-b-[#7F7F7F1A]">
        <div className="w-full z-5 bg-[url('/images/Mobile-App-Hero-BG.webp')] bg-cover bg-center">
          <div className="flex flex-col w-full gap-12 items-center">
            <div
              className={`flex flex-col w-full gap-4 items-center ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              <div className="flex w-max items-center space-x-2 bg-white border border-[#D0DAE3] rounded-full py-[6px] pr-[12px] pl-[8px]">
                <Image
                  src="/images/Mobile-App-Hero-Logo.webp"
                  alt="Upshift Logo"
                  width={49}
                  height={49}
                  className="w-4 h-4"
                />
                <h6 className="text-[12px] leading-[14.4px] md:text-[13px] md:leading-[15.6px] lg:text-[14px] lg:leading-[16.8px] font-semibold text-[#0086C9]">
                  Meet Upshift
                </h6>
              </div>

              {/* Main Heading */}
              <h1 className="text-[40px] leading-[48px] text-center md:text-[56px] md:leading-[67.2px] lg:text-[72px] lg:leading-[86.4px] font-semibold text-[#111111] w-[90%] pb-6">
                Invest with confidence, Grow your future
              </h1>

              <div
                className={`relative w-[50%] md:w-full max-w-sm mx-auto z-20 border-[10px] md:border-[20px] rounded-[30px] md:rounded-[60px] border-[#7F7F7F1F] ${
                  isVisible ? "animate-fade-in-right" : "opacity-0"
                }`}
              >
                <div className="w-full">
                  <Image
                    src="/images/Mobile-App-Hero-Image.webp"
                    alt="Upshift Mobile App"
                    width={780}
                    height={1688}
                    className="w-full z-10 h-auto rounded-[20px] md:rounded-[40px] shadow-[0px_0px_16px_-3px_rgba(65,209,255,0.6)]"
                    priority
                  />
                </div>
              </div>

              {/* Description */}
              <p className="text-[19px] leading-[30.4px] md:text-[21px] md:leading-[33.6px] lg:text-[24px] lg:leading-[38.4px] text-[#111111] font-medium w-full md:w-[65%] text-center pt-6 pb-8">
                Upshift is a gateway to smart investing with real-time market
                insights and personalized educational support.
              </p>

              {/* Email Signup Form */}
              <div className="md:max-w-md w-[90%]">
                <form className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative w-full">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full text-[14px] md:text-[15px] lg:text-[16px] text-center md:text-start pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary whitespace-nowrap flex items-center justify-center space-x-2"
                  >
                    <span>Get Started</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* Logo Carousel */}
        </div>
      </div>
      <div
        className={`absolute z-10 top-[625px] w-[90%] ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={32}
          slidesPerView={7}
          autoplay={{
            delay: 800,
            disableOnInteraction: false,
          }}
          speed={1900}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 5,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 32,
            },
          }}
          className="py-8"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center rounded-[66px] transition-opacity duration-300">
                <Image
                  src={logo}
                  alt={`Partner Logo ${index + 1}`}
                  width={200}
                  height={200}
                  className="w-auto object-contain rounded-[32px] md:rounded-[44px] lg:rounded-[66px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSection;
