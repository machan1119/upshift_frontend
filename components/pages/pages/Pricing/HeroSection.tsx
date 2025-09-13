"use client";

import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 bg-gradient-to-b from-[#DDEDFA] to-[#FFFFFF00] pt-[180px]">
      <div className="max-w-[1176px] mx-auto px-[10px] border-b-[1px] border-b-[#7F7F7F1A]">
        <div className="z-[2] bg-[url('/images/About-Us-Hero-BG.webp')] pb-[30px] bg-[800px_auto] bg-top bg-no-repeat border-b-[1px] border-b-[#7F7F7F1A]">
          <div className="flex flex-col gap-4 items-center mt-18">
            <p className="px-2 py-1 rounded-full text-primary text-[14px] leading-[16.8px] font-medium bg-white border border-[#7F7F7F1A] w-max">
              Pricing
            </p>
            <h1 className="md:w-[60%] w-[80%] md:text-[64px] text-5xl text-center font-semibold tracking-[-1.28px] md:leading-[76.8px] text-black">
              Choose the plan that fits your business
            </h1>
            <div className="flex flex-col gap-[18px] w-[60%] text-center">
              <p className="text-[18px] leading-[28.8px] font-normal text-[#11111199]">
                Behind every great product is a great team. The Upshift team
                comprises industry experts, innovative thinkers, and dedicated
                professionals committed to revolutionizing the way businesses
                engage with their audiences
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="p-[34px] rounded-[12px] m-2 flex flex-col gap-3 grow">
            <h5 className="font-semibold text-[16px] leading-[25.6px] text-[#1111119]">
              Starter
            </h5>
            <div className="flex gap-2 items-center">
              <p className="text-[48px] leading-[48px] font-semibold text-black">
                $0
              </p>
              <p className="text-[14px] leading-[16.8px] text-[#11111199] font-normal w-[60px]">
                per user / month
              </p>
            </div>
            <div className="flex flex-col gap-2 pt-4">
              <div className="flex gap-[5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  width={22}
                  height={22}
                  className="w-[22px] h-[22px]"
                >
                  <path
                    fill="#36BFFA"
                    d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"
                  />
                </svg>
                <p className="text-[16px] leading-[25.6px] text-[#11111199] font-normal">
                  Up to 1,000 emails per month
                </p>
              </div>
              <div className="flex gap-[5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  width={22}
                  height={22}
                  className="w-[22px] h-[22px]"
                >
                  <path
                    fill="#36BFFA"
                    d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"
                  />
                </svg>
                <p className="text-[16px] leading-[25.6px] text-[#11111199] font-normal">
                  Basic email templates
                </p>
              </div>
              <div className="flex gap-[5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  width={22}
                  height={22}
                  className="w-[22px] h-[22px]"
                >
                  <path
                    fill="#36BFFA"
                    d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"
                  />
                </svg>
                <p className="text-[16px] leading-[25.6px] text-[#11111199] font-normal">
                  Community support
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 pb-4 border-dashed border-b-[2px] border-[#11111199]">
              <div className="flex gap-[5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  width={22}
                  height={22}
                  className="w-[22px] h-[22px]"
                >
                  <path
                    fill="#11111199"
                    d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"
                  />
                </svg>
                <p className="text-[16px] leading-[25.6px] text-[#11111199] font-normal">
                  Advanced analytics
                </p>
              </div>
              <div className="flex gap-[5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  width={22}
                  height={22}
                  className="w-[22px] h-[22px]"
                >
                  <path
                    fill="#11111199"
                    d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"
                  />
                </svg>
                <p className="text-[16px] leading-[25.6px] text-[#11111199] font-normal">
                  Dedicated account management
                </p>
              </div>
            </div>
            <p className="text-[16px] leading-[25.6px] text-[#11111199] font-normal my-auto">
              Small businesses or individuals just getting started with email
              marketing.
            </p>
            <div className="flex items-center justify-center">
              <Link
                href="#"
                className={`w-max text-[16px] leading-[16px] font-medium shadow-[0_2px_4px_0_rgba(0,10,31,0.2),_inset_0_6px_3px_-1px_rgba(255,255,255,0.2)] bg-black px-[20.8px] py-[11.2px] rounded-[12px] text-white`}
              >
                Get Started &gt;
              </Link>
            </div>
          </div>
          <div className="p-[34px] rounded-[12px] m-2 flex flex-col gap-3 border border-primary grow">
            <h5 className="font-semibold text-[16px] leading-[25.6px] text-primary">
              Pro
            </h5>
            <div className="flex gap-2 items-center">
              <p className="text-[48px] leading-[48px] font-semibold text-black">
                $20
              </p>
              <p className="text-[14px] leading-[16.8px] text-[#11111199] font-normal w-[60px]">
                per user / month
              </p>
            </div>
            <div className="flex flex-col gap-2 pt-4">
              <div className="flex gap-[5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  width={22}
                  height={22}
                  className="w-[22px] h-[22px]"
                >
                  <path
                    fill="#36BFFA"
                    d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"
                  />
                </svg>
                <p className="text-[16px] leading-[25.6px] text-[#11111199] font-normal">
                  Up to 1,000 emails per month
                </p>
              </div>
              <div className="flex gap-[5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  width={22}
                  height={22}
                  className="w-[22px] h-[22px]"
                >
                  <path
                    fill="#36BFFA"
                    d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"
                  />
                </svg>
                <p className="text-[16px] leading-[25.6px] text-[#11111199] font-normal">
                  Custom branding
                </p>
              </div>
              <div className="flex gap-[5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  width={22}
                  height={22}
                  className="w-[22px] h-[22px]"
                >
                  <path
                    fill="#36BFFA"
                    d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"
                  />
                </svg>
                <p className="text-[16px] leading-[25.6px] text-[#11111199] font-normal">
                  Priority support
                </p>
              </div>
              <div className="flex gap-[5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  width={22}
                  height={22}
                  className="w-[22px] h-[22px]"
                >
                  <path
                    fill="#36BFFA"
                    d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"
                  />
                </svg>
                <p className="text-[16px] leading-[25.6px] text-[#11111199] font-normal">
                  Advanced analytics
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 pb-4 border-dashed border-b-[2px] border-[#11111199]">
              <div className="flex gap-[5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  width={22}
                  height={22}
                  className="w-[22px] h-[22px]"
                >
                  <path
                    fill="#11111199"
                    d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"
                  />
                </svg>
                <p className="text-[16px] leading-[25.6px] text-[#11111199] font-normal">
                  Dedicated account management
                </p>
              </div>
            </div>
            <p className="text-[16px] leading-[25.6px] text-[#11111199] font-normal my-auto">
              Growing businesses that need more sophisticated targeting and
              testing to enhance their campaigns.
            </p>
            <div className="flex items-center justify-center">
              <Link
                href="#"
                className={`w-max text-[16px] leading-[16px] font-medium shadow-[0_2px_4px_0_rgba(0,10,31,0.2),_inset_0_6px_3px_-1px_rgba(255,255,255,0.2)] bg-primary px-[20.8px] py-[11.2px] rounded-[12px] text-white`}
              >
                Choose Plan &gt;
              </Link>
            </div>
          </div>
          <div className="p-[34px] rounded-[12px] m-2 flex flex-col gap-3 grow">
            <h5 className="font-semibold text-[16px] leading-[25.6px] text-[#1111119]">
              Premium
            </h5>
            <div className="flex gap-2 items-center">
              <p className="text-[48px] leading-[48px] font-semibold text-black">
                29
              </p>
              <p className="text-[14px] leading-[16.8px] text-[#11111199] font-normal w-[60px]">
                per user / month
              </p>
            </div>
            <div className="flex flex-col gap-2 py-4 border-dashed border-b-[2px] border-[#11111199]">
              <div className="flex gap-[5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  width={22}
                  height={22}
                  className="w-[22px] h-[22px]"
                >
                  <path
                    fill="#36BFFA"
                    d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"
                  />
                </svg>
                <p className="text-[16px] leading-[25.6px] text-[#11111199] font-normal">
                  Unlimited emails per month
                </p>
              </div>
              <div className="flex gap-[5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  width={22}
                  height={22}
                  className="w-[22px] h-[22px]"
                >
                  <path
                    fill="#36BFFA"
                    d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"
                  />
                </svg>
                <p className="text-[16px] leading-[25.6px] text-[#11111199] font-normal">
                  Custom branding
                </p>
              </div>
              <div className="flex gap-[5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  width={22}
                  height={22}
                  className="w-[22px] h-[22px]"
                >
                  <path
                    fill="#36BFFA"
                    d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"
                  />
                </svg>
                <p className="text-[16px] leading-[25.6px] text-[#11111199] font-normal">
                  Priority support
                </p>
              </div>
              <div className="flex gap-[5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  width={22}
                  height={22}
                  className="w-[22px] h-[22px]"
                >
                  <path
                    fill="#36BFFA"
                    d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"
                  />
                </svg>
                <p className="text-[16px] leading-[25.6px] text-[#11111199] font-normal">
                  Advanced analytics
                </p>
              </div>
              <div className="flex gap-[5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  width={22}
                  height={22}
                  className="w-[22px] h-[22px]"
                >
                  <path
                    fill="#36BFFA"
                    d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"
                  />
                </svg>
                <p className="text-[16px] leading-[25.6px] text-[#11111199] font-normal">
                  Dedicated account management
                </p>
              </div>
            </div>
            <p className="text-[16px] leading-[25.6px] text-[#11111199] font-normal my-auto">
              Large businesses that require a comprehensive email marketing
              solution with full customization.
            </p>
            <div className="flex items-center justify-center">
              <Link
                href="#"
                className={`w-max text-[16px] leading-[16px] font-medium shadow-[0_2px_4px_0_rgba(0,10,31,0.2),_inset_0_6px_3px_-1px_rgba(255,255,255,0.2)] bg-black px-[20.8px] py-[11.2px] rounded-[12px] text-white`}
              >
                Get Started &gt;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
