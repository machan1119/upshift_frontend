import Image from "next/image";

export function HelpfulResource() {
  return (
    <section className="w-full bg-gray-50 border border-y-[#7F7F7F1F]">
      <div className="max-w-[1176px] w-full mx-auto flex flex-col gap-10 py-16">
        <div className="flex md:flow-row flex-col md:gap-0 gap-5 items-center w-full">
          <div className="md:w-[58%] w-full pt-[56px] md:pl-[64px] md:pr-0 px-12 flex flex-col gap-4">
            <div className="w-max border border-[8181812E] rounded-full px-[12px] py-[6px] shadow-[0px_2px_4px_0px_rgba(0,10,31,0.2)]">
              <p className="text-secondary font-medium text-[14px] leading-[16.8px]">
                Helpful resources
              </p>
            </div>
            <h2 className="text-[#111111] font-semibold md:leading-[67.2px] text-4xl md:text-[56px] tracking-[-1.12px]">
              Education tools to improve your knowledge
            </h2>
            <p className="text-[#11111199] text-[16px] font-normal leading-[25.6px]">
              Access over 200 interactive financial education lessons covering a
              broad spectrum of topics from basic investing to advanced
              financial strategies, taught by experts
            </p>
          </div>
          <div className="md:w-[42%] w-[70%] flex flex-col gap-4 justify-end px-12">
            <div className="relative z-20 md:border-x-[20px] md:border-t-[20px] border-x-[10px] border-t-[10px] rounded-t-[30px] md:rounded-t-[60px] border-x-[#7F7F7F1F] border-t-[#7F7F7F1F]">
              <div className="relative mx-auto max-w-sm">
                <Image
                  src="/images/Mobile-App-Helpful-Image.webp"
                  alt="Mobile-App-Helpful-Image"
                  width={780}
                  height={1688}
                  className="w-full z-10 h-auto shadow-[0px_0px_16px_-3px_rgba(65,209,255,0.6)] rounded-t-[20px] md:rounded-t-[40px]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
