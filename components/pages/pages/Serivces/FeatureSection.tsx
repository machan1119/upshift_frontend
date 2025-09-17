import Tag from "@/components/ui/Tag";
import Image from "next/image";

export default function FeatureSection() {
  return (
    <section className="w-full bg-gray-50">
      <div className="w-full border-b border-b-[#7F7F7F1A]">
        <div className="max-w-[1176px] md:py-[100px] md:pr-[100px] py-10 mx-auto w-full flex md:flex-row items-center flex-col gap-[60px] bg-[url('/images/Services-Features-BG-1.webp')] bg-contain bg-no-repeat bg-left">
          <div className="lg:ml-[-64px] w-max gap-5 pr-10 items-center hidden md:flex">
            <Image
              src="/images/Services-Features-Image-2.webp"
              alt="Services-Features-Image-2"
              width={128}
              height={374}
              className="max-w-[128px] max-h-[374px] w-[30%] z-10 shadow-[0px_2px_4px_0px_rgba(0,10,31,0.2)] rounded-[8px]"
              priority
            />
            <Image
              src="/images/Services-Features-Image-1.webp"
              alt="Services-Features-Image-1"
              width={420}
              height={402}
              className="max-w-[420px] max-h-[402px] w-[85%] z-10 shadow-[0px_0px_0px_1px_rgba(127,127,127,0.1)] rounded-[8px]"
              priority
            />
          </div>
          <div className="md:w-[45%] w-[80%] flex flex-col items-center md:items-start gap-4 justify-center">
            <Tag text="Features" />
            <h2 className="large-text text-black font-semibold">
              Drag & drop email builder
            </h2>
            <p className="primary-text text-center">
              Craft beautiful, professional emails without any technical skills
              using our intuitive drag-and-drop builder. Choose from hundreds of
              customizable templates to get started quickly.
            </p>
          </div>
          <div className="w-full flex gap-5 items-center md:hidden mx-auto px-[5%]">
            <Image
              src="/images/Services-Features-Image-2.webp"
              alt="Services-Features-Image-2"
              width={128}
              height={374}
              className="w-[20%] z-10 shadow-[0px_2px_4px_0px_rgba(0,10,31,0.2)] rounded-[8px]"
              priority
            />
            <Image
              src="/images/Services-Features-Image-1.webp"
              alt="Services-Features-Image-1"
              width={420}
              height={402}
              className="w-[70%] z-10 shadow-[0px_0px_0px_1px_rgba(127,127,127,0.1)] rounded-[8px]"
              priority
            />
          </div>
        </div>
      </div>
      <div className="w-full border-b border-b-[#7F7F7F1A] overflow-hidden">
        <div className="max-w-[1176px] mx-auto w-full flex md:flex-row flex-col justify-between bg-[url('/images/Services-Features-BG-2.webp')] bg-contain bg-no-repeat bg-bottom">
          <div className="md:w-[50%] w-full flex flex-col items-center justify-center gap-4 md:items-start p-10 md:p-20 border-r border-r-[#7F7F7F1A]">
            <Tag text="Features" />
            <h2 className="large-text text-black font-semibold">
              Advanced segmentation
            </h2>
            <p className="primary-text text-center">
              Segment your audience based on their behavior, preferences, and
              previous interactions. Deliver highly personalized content that
              resonates and converts.
            </p>
          </div>
          <div className="relative flex md:w-[50%] w-full md:px-[100px] md:py-[90px] justify-center gap-5 items-center">
            <Image
              src="/images/Services-Features-Image-3.webp"
              alt="Services-Features-Image-3"
              width={344}
              height={408}
              className="md:w-[344px] md:h-[408px] w-[50%] z-10 shadow-[0px_2px_4px_0px_rgba(0,10,31,0.2)] rounded-[10px] border-[4px] border-[#7F7F7F1F]"
              priority
            />
            <Image
              src="/images/Services-Features-Image-4.webp"
              alt="Services-Features-Image-4"
              width={316}
              height={211}
              className="absolute md:w-[316px] md:h-[211px] w-[40%] z-[8] rounded-[8px] left-[5%] md:left-[-100px]"
              priority
            />
            <Image
              src="/images/Services-Features-Image-5.webp"
              alt="Services-Features-Image-5"
              width={244}
              height={200}
              className="absolute md:w-[244px] md:h-[200px] w-[30%] z-[12] rounded-[8px] bottom-[15%] md:bottom-[150px] right-[5%] md:right-[-100px] border-primary border shadow-[0px_2px_4px_0px_rgba(0,10,31,0.2)]"
              priority
            />
          </div>
        </div>
      </div>
      <div className="w-full border-b border-b-[#7F7F7F1A]">
        <div className="max-w-[1176px] mx-auto w-full flex md:flex-row flex-col justify-between">
          <div className="hidden md:flex px-[40px] py-[90px] w-max gap-5 items-center  bg-[url('/images/Services-Features-BG-3.webp')] bg-contain bg-no-repeat bg-top">
            <Image
              src="/images/Services-Features-Image-6.webp"
              alt="Services-Features-Image-6"
              width={420}
              height={370}
              className="w-[420px] h-[370px] z-10 rounded-[8px]"
              priority
            />
          </div>
          <div className="md:w-[55%] w-full flex flex-col items-center md:items-start gap-4 justify-center p-10 md:p-20">
            <Tag text="Features" />
            <h2 className="large-text text-black font-semibold">
              AI workflow builder
            </h2>
            <p className="primary-text text-center">
              Automate your email campaigns, follow-ups, and customer journey
              communications. Set triggers based on user actions or schedules to
              ensure timely and relevant engagement without manual effort
            </p>
          </div>
          <div className="flex md:hidden pb-5 mx-auto w-max gap-5 items-center  bg-[url('/images/Services-Features-BG-3.webp')] bg-contain bg-no-repeat bg-top">
            <Image
              src="/images/Services-Features-Image-6.webp"
              alt="Services-Features-Image-6"
              width={420}
              height={370}
              className="w-[420px] h-[370px] z-10 rounded-[8px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
