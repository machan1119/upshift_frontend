"use client";

import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-gray-50 bg-gradient-to-b from-[#DDEDFA] to-[#FFFFFF00] pt-[100px] md:pt-[180px]">
      <div className="max-w-[1176px] w-[95%] mx-auto px-[10px] pb-[30px] border-b-[1px] border-b-[#7F7F7F1A]">
        <div className="z-[2] bg-[url('/images/About-Us-Hero-BG.webp')] bg-[800px_auto] bg-top bg-no-repeat">
          <div className="flex flex-col gap-4 items-center mt-18 bg-[url('/images/About-Us-Hero-BG-2.webp')] bg-bottom bg-no-repeat bg-contain">
            <div className="animation-fade-in-bottom relative about-us-hero w-[92px] h-[92px] lg:w-[108px] lg:h-[108px] bg-transparent bg-[radial-gradient(at_top_right,_#B9E6FE_-20%,_#36BFFA_60%)] border-[6px] border-[#AADBF6] rounded-[30px]">
              <Image
                src="/images/Services-Hero-Image.webp"
                width={96}
                height={96}
                alt="About us hero image-2"
                className="absolute top-0 min-w-24 min-h-24 z-10"
              />
            </div>
            <h1 className="animation-fade-in-top">
              Power features to elevate your marketing campaign
            </h1>
            <div className="animation-fade-in-top flex flex-col gap-[18px] w-[90%] md:w-[60%] text-center">
              <p className="headline-text">
                Each feature of our tool is built to empower marketers—whether
                you’re a startup or a large enterprise. Discover how our
                features can help you engage your audience, automate workflows,
                and drive sales.
              </p>
            </div>
            <div className="w-full py-[10%]">
              <div className="flex flex-col items-center w-[80%] mx-auto">
                <div className="border-[6px] border-[#7F7F7F7F2B] rounded-[14px] md:rounded-[20px] lg:rounded-[28px] w-[60%]">
                  <Image
                    src="/images/Services-Hero-Image-2.webp"
                    width={1112}
                    height={160}
                    alt="About us hero image"
                    className="max-w-[544px] w-full h-auto rounded-xl md:rounded-[16px] lg:rounded-[24px] border border-primary"
                  />
                </div>
                <div className="w-[50%] min-h-[12px] max-w-[502px] bg-[#F9FAFB] border-x border-b rounded-b-[16px]"></div>
                <div className="w-[40%] min-h-[12px] max-w-[470px] bg-[#F3F7FC] border-x border-b rounded-b-[16px]"></div>
              </div>
              <Image
                src="/images/Services-Hero-Image-3.webp"
                width={340}
                height={340}
                alt="About us hero image"
                className="max-w-[340px] w-[20%] h-auto absolute bottom-[11%] left-[10%] lg:left-[18%] lg:bottom-[5%]"
              />
              <Image
                src="/images/Services-Hero-Image-4.webp"
                width={340}
                height={340}
                alt="About us hero image"
                className="max-w-[340px] w-[20%] h-auto absolute bottom-[11%] right-[10%] lg:right-[18%] lg:bottom-[5%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
