"use client";

import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 bg-gradient-to-b from-[#DDEDFA] to-[#FFFFFF00] pt-[100px] md:pt-[180px]">
      <div className="max-w-[1176px] w-full mx-auto px-[10px] pb-[30px] border-b-[1px] border-b-[#7F7F7F1A]">
        <div className="w-full z-[2] bg-[url('/images/About-Us-Hero-BG.webp')] bg-[800px_auto] bg-top bg-no-repeat">
          <div className="w-full flex flex-col gap-4 items-center mt-18 bg-[url('/images/About-Us-Hero-BG-2.webp')] bg-bottom bg-no-repeat bg-contain">
            <div className="animation-fade-in-bottom relative about-us-hero w-[92px] h-[92px] lg:w-[108px] lg:h-[108px] bg-transparent bg-[radial-gradient(at_top_right,_#B9E6FE_-20%,_#36BFFA_60%)] border-[6px] border-[#AADBF6] rounded-[30px]">
              <Image
                src="/images/About-Us-Hero-Image-2.webp"
                width={96}
                height={96}
                alt="About us hero image-2"
                className="absolute top-0 min-w-24 min-h-24 z-10"
              />
            </div>
            <h1 className="animation-fade-in-top">
              The story of <span className="text-primary">Upshift</span>
            </h1>
            <div className="animation-fade-in-top flex flex-col gap-[18px] w-[90%] md:w-[60%] text-center">
              <p className="headline-text">
                We started with a vision to democratize digital marketing,
                making it accessible and effective for businesses of all sizes.
              </p>
              <p className="headline-text">
                Since launching in 2012, we have evolved into a leading provider
                of innovative marketing solutions, trusted by over 150,000
                businesses worldwide.
              </p>
            </div>
            <div className="py-[12px] md:py-[48px] animation-scale-fade-out-top w-full">
              <div className="flex flex-col items-center w-full">
                <div className="w-[95%] border border-[#7F7F7F7F2B] rounded-[16px]">
                  <Image
                    src="/images/About-Us-Hero-Image-1.webp"
                    width={1500}
                    height={855}
                    alt="About us hero image"
                    className="aspect-[1500/855] rounded-[16px] border-[8px] border-white"
                  />
                </div>
                <div className="w-[85%] min-h-[20px] bg-[#F9FAFB] border-x border-b rounded-b-[16px]"></div>
                <div className="w-[75%] min-h-[20px] bg-[#F3F7FC] border-x border-b rounded-b-[16px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
