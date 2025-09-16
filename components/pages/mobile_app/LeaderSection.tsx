"use client";

import Image from "next/image";

const LeaderLogos = [
  "Mobile-App-Leaders-Image-1.webp",
  "Mobile-App-Leaders-Image-2.webp",
  "Mobile-App-Leaders-Image-3.webp",
  "Mobile-App-Leaders-Image-4.webp",
  "Mobile-App-Leaders-Image-5.webp",
  "Mobile-App-Leaders-Image-6.webp",
];

export function LeaderSection() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-[1176px] w-full mx-auto border-b-[1px] border-b-[#7F7F7F1A]">
        <div className="px-[30px] py-[64px] flex flex-col gap-[50px]">
          <p className="text-[16px] leading-[26px] text-center text-[#11111199] font-normal">
            Trusted by industry leaders
          </p>
          <div className="grid grid-cols-3 lg:grid-cols-6 w-full justify-between my-auto justify-self-end leader-mask animate-fade-in-up">
            {LeaderLogos.map((logo, index) => (
              <Image
                src={`/images/${logo}`}
                width={170}
                height={170}
                alt={logo}
                key={index}
                className="opacity-70 hover:opacity-100"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
