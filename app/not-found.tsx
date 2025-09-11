import PagesHeader from "@/components/pages/pages/PagesHeader";
import Image from "next/image";

export default function NotFound() {
  return (
    <main>
      <PagesHeader />
      <section className="min-h-screen h-full bg-gray-50 bg-gradient-to-b from-[#DDEDFA] to-[#FFFFFF00] pt-[250px]">
        <div className="pt-[40px] max-w-[1176px] flex flex-col gap-[30px] items-center w-full h-full mx-auto px-[10px] pb-[30px] border-b-[1px] border-b-[#7F7F7F1A] bg-[url('/images/404-BG.webp')] bg-[100%_auto] bg-top bg-no-repeat">
          <Image
            src="/images/404-Image.webp"
            width={560}
            height={228}
            alt="404"
            className="top-[10px] w-[560px] h-[228px] z-10"
          />
          <h1 className="animation-fade-in-top mt-[100px] text-[64px] font-semibold tracking-[-1.28px] leading-[76.8px] text-black">
            Page not found
          </h1>
          <div className="animation-fade-in-top flex flex-col gap-[18px] w-[50%] text-center">
            <p className="text-[18px] leading-[28.8px] font-normal text-[#11111199]">
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailabl
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
