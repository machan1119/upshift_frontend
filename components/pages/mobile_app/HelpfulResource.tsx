import Tag from "@/components/ui/Tag";
import Image from "next/image";

export function HelpfulResource() {
  return (
    <section className="w-full bg-gray-50 border border-y-[#7F7F7F1F]">
      <div className="max-w-[1176px] w-full mx-auto flex flex-col gap-10 py-16 md:pt-16 md:pb-0">
        <div className="flex md:flex-row flex-col md:gap-0 gap-5 items-center w-full">
          <div className="md:w-[58%] w-full px-14 flex flex-col items-center md:items-start gap-4">
            <Tag text="Helpful resources" />
            <h2>Education tools to improve your knowledge</h2>
            <p className="primary-text">
              Access over 200 interactive financial education lessons covering a
              broad spectrum of topics from basic investing to advanced
              financial strategies, taught by experts
            </p>
          </div>
          <div className="md:w-[42%] w-[80%] flex flex-col gap-4 justify-end px-12">
            <div className="relative z-20 border-x-[20px] border-t-[20px] rounded-t-[60px] border-x-[#7F7F7F1F] border-t-[#7F7F7F1F]">
              <div className="relative mx-auto max-w-sm">
                <Image
                  src="/images/Mobile-App-Helpful-Image.webp"
                  alt="Mobile-App-Helpful-Image"
                  width={780}
                  height={1688}
                  className="w-full z-10 h-auto shadow-[0px_0px_16px_-3px_rgba(65,209,255,0.6)] rounded-t-[40px]"
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
