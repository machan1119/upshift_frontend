import Image from "next/image";

export function SecondStep() {
  return (
    <div className="sticky top-[180px] mx-[36px] bg-gradient-to-b from-[#E7CEFF] to-[#F8DBFF] rounded-[24px] border border-[#7F7F7F1A]">
      <div className="min-w-[1176px] mx-auto bg-[url('/images/Mobile-App-How-BG-1.webp')] bg-no-repeat bg-bottom bg-contain">
        <div className="text-center py-16 flex flex-col gap-4 items-center w-[45%] mx-auto">
          <div className="w-max border border-[8181812E] rounded-full px-[12px] py-[6px] shadow-[0px_2px_4px_0px_rgba(0,10,31,0.2)] bg-white">
            <p className="text-secondary font-medium text-[14px] leading-[16.8px]">
              Step 2
            </p>
          </div>
          <h2 className="text-[#111111] font-semibold leading-[67.2px] text-[56px] tracking-[-1.12px]">
            Define your investment goals
          </h2>
          <div className="text-[#11111199] text-[16px] font-normal leading-[25.6px]">
            Tailor your investing experience by specifying your financial goals,
            such as retirement savings, educational funds, or growing wealth.
            Select your risk tolerance from conservative to aggressive to match
            your investment strategy.
          </div>
          <div className="relative z-20 border-[20px] rounded-[60px] border-[#7F7F7F1F]">
            <div className="relative mx-auto max-w-sm">
              <Image
                src="/images/Mobile-App-How-Image-2.webp"
                alt="Mobile-App-How-Image-1"
                width={780}
                height={1688}
                className="w-full z-10 h-auto rounded-[40px] shadow-[0px_0px_16px_-3px_rgba(65,209,255,0.6)]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
