import Link from "next/link";

export function PricingSection() {
  return (
    <div className="w-full py-10 bg-gray-50 border-y border-y-[#7F7F7F1A]">
      <div className="mx-[36px] bg-gradient-to-b from-[#28282C] to-[#2E2E34] rounded-[24px] ">
        <div className="max-w-[1176px] mx-auto md:pb-[80px]">
          <div className="text-center md:pt-[80px] md:pb-[100px] py-10 flex flex-col gap-4 items-center w-[90%] md:w-[60%] mx-auto">
            <div className="w-max border border-[#8181812E] rounded-full px-[12px] py-[6px] shadow-[0px_2px_4px_0px_rgba(0,10,31,0.2)] bg-transparent">
              <p className="text-secondary font-medium text-[14px] leading-[16.8px]">
                Pricing
              </p>
            </div>
            <h2 className="text-[#FFFFFF] font-semibold md:leading-[67.2px] text-[26px] md:text-[56px] tracking-[-1.12px]">
              Choose the plan that fits your business
            </h2>
            <p className="text-[18px] leading-[28.8px] font-normal text-[#FFFFFF99]">
              Whether you’re just starting out or you’re looking to maximize
              your marketing efforts, we have a plan that fits.
            </p>
          </div>
          <div className="w-full relative pricing-animation grid grid-cols-1 md:grid-cols-3 border-y border-[#7F7F7F1A]">
            <div className="p-[34px] rounded-[12px] m-2 flex flex-col gap-3 grow">
              <h5 className="font-semibold text-[14px] md:text-[16px] leading-[25.6px] text-white">
                Free
              </h5>
              <div className="flex gap-2 items-center">
                <p className="text-[34px] md:text-[48px] leading-[48px] font-semibold text-white">
                  $0
                </p>
                <p className="text-[14px] leading-[16.8px] text-white font-normal w-[60px]">
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
                  <p className="text-[14px] md:text-[16px] leading-[25.6px] text-white font-normal">
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
                  <p className="text-[14px] md:text-[16px] leading-[25.6px] text-white font-normal">
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
                  <p className="text-[14px] md:text-[16px] leading-[25.6px] text-white font-normal">
                    Community support
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 pb-4 mb-4 border-dashed border-b-[2px] border-[#FFFFFF99]">
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
                  <p className="text-[14px] md:text-[16px] leading-[25.6px] text-white font-normal">
                    Advanced analytics
                  </p>
                </div>
                <div className="flex gap-[5px] mb-6">
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
                  <p className="text-[14px] md:text-[16px] leading-[25.6px] text-white font-normal">
                    Dedicated account management
                  </p>
                </div>
              </div>
              <p className="text-[14px] md:text-[16px] leading-[25.6px] text-[#FFFFFF99] font-normal my-auto">
                Small businesses or individuals just getting started with email
                marketing.
              </p>
              <div className="flex items-center justify-center border border-[#313236]">
                <Link
                  href="#"
                  className={`w-full text-center text-[14px] md:text-[16px] leading-[16px] font-medium bg-[#313236] px-[20.8px] py-[14px] rounded-[10px] text-white`}
                >
                  Choose Plan &gt;
                </Link>
              </div>
            </div>
            <div className="p-[34px] rounded-[12px] bg-[#313236] m-2 flex flex-col gap-3 grow">
              <h5 className="font-semibold text-[14px] md:text-[16px] leading-[25.6px] text-white">
                Pro Plan
              </h5>
              <div className="flex gap-2 items-center">
                <p className="text-[34px] md:text-[48px] leading-[48px] font-semibold text-white">
                  $20
                </p>
                <p className="text-[14px] leading-[16.8px] text-white font-normal w-[60px]">
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
                  <p className="text-[14px] md:text-[16px] leading-[25.6px] text-white font-normal">
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
                  <p className="text-[14px] md:text-[16px] leading-[25.6px] text-white font-normal">
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
                  <p className="text-[14px] md:text-[16px] leading-[25.6px] text-white font-normal">
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
                  <p className="text-[14px] md:text-[16px] leading-[25.6px] text-white font-normal">
                    Advanced analytics
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 pb-4 border-dashed mb-4 border-b-[2px] border-[#FFFFFF99]">
                <div className="flex gap-[5px] mb-6">
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
                  <p className="text-[14px] md:text-[16px] leading-[25.6px] text-white font-normal">
                    Dedicated account management
                  </p>
                </div>
              </div>
              <p className="text-[14px] md:text-[16px] leading-[25.6px] text-[#FFFFFF99] font-normal my-auto">
                Growing businesses that need more sophisticated targeting and
                testing to enhance their campaigns.
              </p>
              <div className="flex items-center justify-center">
                <Link
                  href="#"
                  className={`w-full text-center text-[14px] md:text-[16px] leading-[16px] font-medium shadow-[0_2px_4px_0_rgba(0,10,31,0.2),_inset_0_6px_3px_-1px_rgba(255,255,255,0.2)] bg-primary px-[20.8px] py-[11.2px] rounded-[12px] text-white`}
                >
                  Choose Plan &gt;
                </Link>
              </div>
            </div>
            <div className="p-[34px] rounded-[12px] m-2 flex flex-col gap-3 grow">
              <h5 className="font-semibold text-[14px] md:text-[16px] leading-[25.6px] text-white">
                Premium
              </h5>
              <div className="flex gap-2 items-center">
                <p className="text-[34px] md:text-[48px] leading-[48px] font-semibold text-white">
                  29
                </p>
                <p className="text-[14px] leading-[16.8px] text-white font-normal w-[60px]">
                  per user / month
                </p>
              </div>
              <div className="flex flex-col gap-2 py-4 border-dashed border-b-[2px] border-[#FFFFFF99] mb-4">
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
                  <p className="text-[14px] md:text-[16px] leading-[25.6px] text-white font-normal">
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
                  <p className="text-[14px] md:text-[16px] leading-[25.6px] text-white font-normal">
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
                  <p className="text-[14px] md:text-[16px] leading-[25.6px] text-white font-normal">
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
                  <p className="text-[14px] md:text-[16px] leading-[25.6px] text-white font-normal">
                    Advanced analytics
                  </p>
                </div>
                <div className="flex gap-[5px] mb-6">
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
                  <p className="text-[14px] md:text-[16px] leading-[25.6px] text-white font-normal">
                    Dedicated account management
                  </p>
                </div>
              </div>
              <p className="text-[14px] md:text-[16px] leading-[25.6px] text-[#FFFFFF99] font-normal my-auto">
                Large businesses that require a comprehensive email marketing
                solution with full customization.
              </p>
              <div className="flex items-center justify-center border border-[#313236]">
                <Link
                  href="#"
                  className={`w-full text-center text-[14px] md:text-[16px] leading-[16px] font-medium bg-[#313236] px-[20.8px] py-[14px] rounded-[10px] text-white`}
                >
                  Choose Plan &gt;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
