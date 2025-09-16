import Tag from "@/components/ui/Tag";
import Image from "next/image";

export function ThirdStep() {
  return (
    <div className="sticky top-[180px] md:mx-[36px] bg-gradient-to-b from-[#28282C] to-[#2E2E34] rounded-[24px] border border-[#7F7F7F1A]">
      <div className="max-w-[1176px] mx-auto bg-[url('/images/Mobile-App-How-BG-2.webp')] bg-no-repeat bg-bottom bg-contain">
        <div className="text-center pt-16 flex flex-col gap-4 items-center w-[85%] lg:w-[45%] mx-auto">
          <Tag text="Step 3" />
          <h2 className="text-white">Fund your account and start investing</h2>
          <div className="primary-text text-[#FFFFFF99]">
            Tailor your investing experience by specifying your financial goals,
            such as retirement savings, educational funds, or growing wealth.
            Select your risk tolerance from conservative to aggressive to match
            your investment strategy.
          </div>
          <div className="lg:w-[80%] w-[50%] z-20 border-t-[20px] border-x-[20px] rounded-x-[48px] rounded-t-[48px] lg:rounded-x-[60px] lg:rounded-t-[60px] border-[#7F7F7F1F]">
            <Image
              src="/images/Mobile-App-How-Image-3.webp"
              alt="Mobile-App-How-Image-3"
              width={780}
              height={1688}
              className="w-full z-10 h-auto rounded-x-[32px] rounded-t-[32px] lg:rounded-x-[40px] lg:rounded-t-[40px] shadow-[0px_0px_16px_-3px_rgba(65,209,255,0.6)]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
