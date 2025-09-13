"use client";

import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 bg-gradient-to-b from-[#DDEDFA] to-[#FFFFFF00] pt-[180px] border-b-[1px] border-b-[#7F7F7F1A]">
      <div className="max-w-[1176px] mx-auto px-[10px]">
        <div className="z-[2] pb-[72px] bg-[800px_auto]">
          <div className="flex flex-col gap-4 items-center mt-18">
            <p className="px-2 py-1 rounded-full text-primary text-[14px] leading-[16.8px] font-medium bg-white border border-[#7F7F7F1A] w-max">
              Enterprise Plan
            </p>
            <h1 className="w-[80%] md:text-[64px] text-5xl text-center font-semibold tracking-[-1.28px] md:leading-[76.8px] text-black">
              Get a custom quote
            </h1>
            <div className="flex flex-col gap-[18px] w-[80%] text-center">
              <p className="text-[18px] leading-[28.8px] font-normal text-[#11111199]">
                Interested in our marketing tools? Fill out the form below to
                get a customized enterprise plan quote.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[85%] mb-[72px] mx-auto border border-[#7F7F7F1A] rounded-[18px] p-6 bg-white flex flex-col gap-5">
          <div className="flex gap-4">
            <input
              type="text"
              name="form_name"
              placeholder="Company name"
              className="w-full p-3 rounded-[8px] border border-[#7F7F7F1A] text-[14px] text-black"
            />
            <input
              type="text"
              name="form_email"
              placeholder="Company email"
              className="w-full p-3 rounded-[8px] border border-[#7F7F7F1A] text-[14px] text-black"
            />
          </div>
          <input
            type="text"
            name="form_size"
            placeholder="Company size"
            className="w-full p-3 rounded-[8px] border border-[#7F7F7F1A] text-[14px] text-black"
          />
          <div className="w-full p-3 rounded-[8px] border border-[#7F7F7F1A] text-[14px] text-black flex flex-col gap-2">
            <label className="text-[14px] text-[#14141466] mb-[5px] font-medium">
              Tools needed
            </label>
            <div className="grid gap-[6px] grid-cols-3 md:grid-cols-6">
              <div className="p-2 rounded-[8px] text-center flex items-center justify-center text-[14px] cursor-pointer font-medium text-[#11111199] bg-[#fafafa] border-[#eaeaea] hover:text-[#065986] border hover:border-[#E0F2FE] hover:bg-[#E0F2FE]">
                SEO Tool
              </div>
              <div className="p-2 rounded-[8px] text-center flex items-center justify-center text-[14px] cursor-pointer font-medium text-[#11111199] bg-[#fafafa] border-[#eaeaea] hover:text-[#065986] border hover:border-[#E0F2FE] hover:bg-[#E0F2FE]">
                Content Management
              </div>
              <div className="p-2 rounded-[8px] text-center flex items-center justify-center text-[14px] cursor-pointer font-medium text-[#11111199] bg-[#fafafa] border-[#eaeaea] hover:text-[#065986] border hover:border-[#E0F2FE] hover:bg-[#E0F2FE]">
                Social Media Tools
              </div>
              <div className="p-2 rounded-[8px] text-center flex items-center justify-center text-[14px] cursor-pointer font-medium text-[#11111199] bg-[#fafafa] border-[#eaeaea] hover:text-[#065986] border hover:border-[#E0F2FE] hover:bg-[#E0F2FE]">
                PPC
              </div>
              <div className="p-2 rounded-[8px] text-center flex items-center justify-center text-[14px] cursor-pointer font-medium text-[#11111199] bg-[#fafafa] border-[#eaeaea] hover:text-[#065986] border hover:border-[#E0F2FE] hover:bg-[#E0F2FE]">
                Analytics
              </div>
              <div className="p-2 rounded-[8px] text-center flex items-center justify-center text-[14px] cursor-pointer font-medium text-[#11111199] bg-[#fafafa] border-[#eaeaea] hover:text-[#065986] border hover:border-[#E0F2FE] hover:bg-[#E0F2FE]">
                Automation
              </div>
            </div>
          </div>
          <textarea
            name="form_detail"
            placeholder="Additional detail"
            className="w-full h-[160px] p-3 rounded-[8px] border border-[#7F7F7F1A] text-[14px] text-black"
          />
          <div className="hidden md:flex items-center justify-center">
            <Link
              href="#"
              className={`w-full text-center text-[16px] leading-[16px] font-medium shadow-[0_2px_4px_0_rgba(0,10,31,0.2),_inset_0_6px_3px_-1px_rgba(255,255,255,0.2)] bg-primary px-[20.8px] py-[11.2px] rounded-[12px] text-white`}
            >
              Submit
            </Link>
          </div>
          <p className="text-[14px] leading-[22.4px] text-[#11111199] text-center">
            We will reply within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
