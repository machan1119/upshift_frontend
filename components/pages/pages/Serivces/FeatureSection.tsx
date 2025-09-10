import Image from "next/image";

export default function FeatureSection() {
  return (
    <section className="w-full bg-gray-50">
      <div className="w-full border-b border-b-[#7F7F7F1A]">
        <div className="max-w-[1176px] py-[100px] pr-[100px] mx-auto w-full flex gap-[60px] bg-[url('/images/Services-Features-BG-1.webp')] bg-contain bg-no-repeat bg-left">
          <div className="ml-[-64px] w-max flex gap-5 pr-10 items-center">
            <Image
              src="/images/Services-Features-Image-2.webp"
              alt="Services-Features-Image-2"
              width={128}
              height={374}
              className="w-[128px] h-[374px] z-10 shadow-[0px_2px_4px_0px_rgba(0,10,31,0.2)]  rounded-[8px]"
              priority
            />
            <Image
              src="/images/Services-Features-Image-1.webp"
              alt="Services-Features-Image-1"
              width={420}
              height={402}
              className="w-[420px] h-[402px] z-10 shadow-[0px_0px_0px_1px_rgba(127,127,127,0.1)]  rounded-[8px]"
              priority
            />
          </div>
          <div className="w-[45%] flex flex-col gap-4 justify-center">
            <div className="w-max border border-[8181812E] rounded-full px-[12px] py-[6px] shadow-[0px_2px_4px_0px_rgba(0,10,31,0.2)]">
              <p className="text-secondary font-medium text-[14px] leading-[16.8px]">
                Features
              </p>
            </div>
            <h2 className="text-[#111111] font-semibold leading-[57.6px] text-[48px] tracking-[-1.12px]">
              Drag & drop email builder
            </h2>
            <p className="text-[#11111199] text-[16px] font-normal leading-[25.6px]">
              Craft beautiful, professional emails without any technical skills
              using our intuitive drag-and-drop builder. Choose from hundreds of
              customizable templates to get started quickly.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full border-b border-b-[#7F7F7F1A]">
        <div className="max-w-[1176px] mx-auto w-full flex justify-between bg-[url('/images/Services-Features-BG-2.webp')] bg-contain bg-no-repeat bg-bottom">
          <div className="w-[50%] flex flex-col gap-4 justify-center p-20 border-r border-r-[#7F7F7F1A]">
            <div className="w-max border border-[8181812E] rounded-full px-[12px] py-[6px] shadow-[0px_2px_4px_0px_rgba(0,10,31,0.2)]">
              <p className="text-secondary font-medium text-[14px] leading-[16.8px]">
                Features
              </p>
            </div>
            <h2 className="text-[#111111] font-semibold leading-[57.6px] text-[48px] tracking-[-1.12px]">
              Advanced segmentation
            </h2>
            <p className="text-[#11111199] text-[16px] font-normal leading-[25.6px]">
              Segment your audience based on their behavior, preferences, and
              previous interactions. Deliver highly personalized content that
              resonates and converts.
            </p>
          </div>
          <div className="relative px-[100px] py-[90px] w-max flex gap-5 items-center">
            <Image
              src="/images/Services-Features-Image-3.webp"
              alt="Services-Features-Image-3"
              width={344}
              height={408}
              className="w-[344px] h-[408px] z-10 shadow-[0px_2px_4px_0px_rgba(0,10,31,0.2)] rounded-[8px]"
              priority
            />
            <Image
              src="/images/Services-Features-Image-4.webp"
              alt="Services-Features-Image-4"
              width={316}
              height={211}
              className="absolute w-[316px] h-[211px] z-[8] rounded-[8px] left-[-100px]"
              priority
            />
            <Image
              src="/images/Services-Features-Image-5.webp"
              alt="Services-Features-Image-5"
              width={244}
              height={200}
              className="absolute w-[244px] h-[200px] z-[12] rounded-[8px] bottom-[150px] right-[-100px] border-primary border shadow-[0px_2px_4px_0px_rgba(0,10,31,0.2)]"
              priority
            />
          </div>
        </div>
      </div>
      <div className="w-full border-b border-b-[#7F7F7F1A]">
        <div className="max-w-[1176px] mx-auto w-full flex justify-between">
          <div className="px-[40px] py-[90px] w-max flex gap-5 items-center  bg-[url('/images/Services-Features-BG-3.webp')] bg-contain bg-no-repeat bg-top">
            <Image
              src="/images/Services-Features-Image-6.webp"
              alt="Services-Features-Image-6"
              width={420}
              height={370}
              className="w-[420px] h-[370px] z-10 rounded-[8px]"
              priority
            />
          </div>
          <div className="w-[55%] flex flex-col gap-4 justify-center p-20">
            <div className="w-max border border-[8181812E] rounded-full px-[12px] py-[6px] shadow-[0px_2px_4px_0px_rgba(0,10,31,0.2)]">
              <p className="text-secondary font-medium text-[14px] leading-[16.8px]">
                Features
              </p>
            </div>
            <h2 className="text-[#111111] font-semibold leading-[57.6px] text-[48px] tracking-[-1.12px]">
              AI workflow builder
            </h2>
            <p className="text-[#11111199] text-[16px] font-normal leading-[25.6px]">
              Automate your email campaigns, follow-ups, and customer journey
              communications. Set triggers based on user actions or schedules to
              ensure timely and relevant engagement without manual effort
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
