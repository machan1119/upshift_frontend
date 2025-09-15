import Image from "next/image";
import PagesHeader from "@/components/pages/pages/PagesHeader";
import Footer from "@/components/pages/mobile_app/Footer";

export default function PrivacyPolicy() {
  return (
    <main>
      <PagesHeader />
      <section className="relative min-h-screen bg-gray-50 bg-gradient-to-b from-[#DDEDFA] to-[#FFFFFF00] pt-[180px] border-b-[1px] border-b-[#7F7F7F1A]">
        <div className="max-w-[1176px] mx-auto px-[10px] pb-[30px] border-b-[1px] border-b-[#7F7F7F1A]">
          <div className="z-[2] bg-[url('/images/About-Us-Hero-BG.webp')] bg-[800px_auto] bg-top bg-no-repeat">
            <div className="flex flex-col gap-4 items-center mt-18 bg-[url('/images/About-Us-Hero-BG-2.webp')] bg-bottom bg-no-repeat bg-contain">
              <div className="animation-fade-in-bottom relative about-us-hero min-w-[108px] min-h-[108px] bg-transparent bg-[radial-gradient(at_top_right,_#B9E6FE_-20%,_#36BFFA_60%)] border-[6px] border-[#AADBF6] rounded-[30px]">
                <Image
                  src="/images/About-Us-Hero-Image-2.webp"
                  width={96}
                  height={96}
                  alt="About us hero image-2"
                  className="absolute top-0 min-w-24 min-h-24 z-10"
                />
              </div>
              <h1 className="animation-fade-in-top text-4xl md:text-[64px] font-semibold tracking-[-1.28px] md:leading-[76.8px] text-black">
                Privacy Policy
              </h1>
              <div className="animation-fade-in-top flex flex-col gap-[18px] w-[60%] text-center">
                <p className="text-[18px] leading-[28.8px] font-normal text-[#11111199]">
                  Upshift collects and uses personal information—such as your
                  name, email address, and usage data—to provide investing
                  insights and educational support. Your data helps us
                  personalize your experience, maintain site security, and
                  improve our services. We do not sell your data and only share
                  it with trusted partners when required for service delivery or
                  legal compliance. You have the right to request access to or
                  removal of your information at any time. For questions or
                  privacy requests, contact us via our website
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
