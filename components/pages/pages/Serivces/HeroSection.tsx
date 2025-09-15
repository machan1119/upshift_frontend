"use client";

import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-gray-50 bg-gradient-to-b from-[#DDEDFA] to-[#FFFFFF00] pt-[100px] md:pt-[180px]">
      <div className="max-w-[1176px] mx-auto px-[10px] pb-[30px] border-b-[1px] border-b-[#7F7F7F1A]">
        <div className="z-[2] bg-[url('/images/About-Us-Hero-BG.webp')] bg-[800px_auto] bg-top bg-no-repeat">
          <div className="flex flex-col gap-4 items-center mt-18 bg-[url('/images/About-Us-Hero-BG-2.webp')] bg-bottom bg-no-repeat bg-contain">
            <div className="animation-fade-in-bottom relative about-us-hero min-w-[108px] min-h-[108px] bg-transparent bg-[radial-gradient(at_top_right,_#B9E6FE_-20%,_#36BFFA_60%)] border-[6px] border-[#AADBF6] rounded-[30px]">
              <Image
                src="/images/Services-Hero-Image.webp"
                width={96}
                height={96}
                alt="About us hero image-2"
                className="absolute top-0 min-w-24 min-h-24 z-10"
              />
            </div>
            <h1 className="animation-fade-in-top text-center text-[40px] md:text-[64px] font-semibold tracking-[-1.28px] md:leading-[76.8px] text-black">
              Power features to elevate your marketing campaign
            </h1>
            <div className="animation-fade-in-top flex flex-col gap-[18px] w-[90%] md:w-[60%] text-center">
              <p className="text-[16px] md:text-[18px] md:leading-[28.8px] font-normal text-[#11111199]">
                Each feature of our tool is built to empower marketers—whether
                you’re a startup or a large enterprise. Discover how our
                features can help you engage your audience, automate workflows,
                and drive sales.
              </p>
            </div>
            <div className="w-full md:py-[148px]">
              <div className="flex flex-col items-center w-[80%] mx-auto">
                <div className="border-[6px] border-[#7F7F7F7F2B] rounded-[14px] md:rounded-[28px]">
                  <Image
                    src="/images/Services-Hero-Image-2.webp"
                    width={1112}
                    height={160}
                    alt="About us hero image"
                    className="w-[544px] h-auto rounded-xl md:rounded-[24px] border border-primary"
                  />
                </div>
                {/* <div className="w-full border border-[#7F7F7F7F2B] rounded-[16px]"></div> */}
                <div className="w-[90%] md:w-full min-h-[12px] max-w-[502px] bg-[#F9FAFB] border-x border-b rounded-b-[16px]"></div>
                <div className="w-[80%] md:w-full min-h-[12px] max-w-[470px] bg-[#F3F7FC] border-x border-b rounded-b-[16px]"></div>
              </div>
              <Image
                src="/images/Services-Hero-Image-3.webp"
                width={340}
                height={340}
                alt="About us hero image"
                className="md:w-[340px] w-[15%] h-auto absolute bottom-[50px] left-0 md:left-[140px] md:bottom-[70px]"
              />
              <Image
                src="/images/Services-Hero-Image-4.webp"
                width={340}
                height={340}
                alt="About us hero image"
                className="w-[15%] md:w-[340px] h-auto absolute bottom-[50px] right-0 md:right-[140px] md:bottom-[70px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
