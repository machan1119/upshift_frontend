"use client";

import Image from "next/image";
import Link from "next/link";

interface TestimonialsType {
  img: string;
  name: string;
  role: string;
  content: string;
}

const Testimonials: TestimonialsType[] = [
  {
    img: "/images/About-Us-Testimonials-Image-1.webp",
    name: "Maria Lopez",
    role: "Greensolutions",
    content:
      "“Upshift has been a game-changer in managing our supply chain. It's efficient, reliable, and perfectly aligned with our business needs.”",
  },
  {
    img: "/images/About-Us-Testimonials-Image-2.webp",
    name: "Alice Johnson",
    role: "Lead SEO Analyst",
    content:
      "“The predictive analytics features have not only improved our decision-making but also significantly boosted our quarterly sales figures by 40%. It's like having a future-proof navigator for our business.”",
  },
  {
    img: "/images/About-Us-Testimonials-Image-3.webp",
    name: "David Smith",
    role: "Creativ",
    content:
      "“What impressed me most about the AI Business Co-pilot was its seamless integration with our existing tools. The transition was smooth, and it started delivering insights from day one”",
  },
  {
    img: "/images/About-Us-Testimonials-Image-4.webp",
    name: "Samantha Bryne",
    role: "Edupress",
    content:
      "“The predictive analytics features have not only improved our decision-making but also significantly boosted our quarterly sales figures by 40%. It's like having a future-proof navigator for our business.“",
  },
  {
    img: "/images/About-Us-Testimonials-Image-5.webp",
    name: "Li Wei Zhang",
    role: "LuxAparrel",
    content:
      "“Upshift has been a game-changer in managing our supply chain. It's efficient, reliable, and perfectly aligned with our business needs.”",
  },
  {
    img: "/images/About-Us-Testimonials-Image-6.webp",
    name: "Baron Campbell",
    role: "Chain",
    content:
      "“What impressed me most about the AI Business Co-pilot was its seamless integration with our existing tools. The transition was smooth, and it started delivering insights from day one”",
  },
  {
    img: "/images/About-Us-Testimonials-Image-1.webp",
    name: "John Carter",
    role: "Flash",
    content:
      "“The predictive analytics features have not only improved our decision-making but also significantly boosted our quarterly sales figures by 40%. It's like having a future-proof navigator for our business.”",
  },
  {
    img: "/images/About-Us-Testimonials-Image-2.webp",
    name: "Maria Lopez",
    role: "Greensolutions",
    content:
      "“Upshift has been a game-changer in managing our supply chain. It's efficient, reliable, and perfectly aligned with our business needs.”",
  },
  {
    img: "/images/About-Us-Testimonials-Image-3.webp",
    name: "Alice Johnson",
    role: "Lead SEO Analyst",
    content:
      "“The predictive analytics features have not only improved our decision-making but also significantly boosted our quarterly sales figures by 40%. It's like having a future-proof navigator for our business.”",
  },
];

function Card({ img, name, role, content }: TestimonialsType) {
  return (
    <div className="flex flex-col justify-between gap-6 p-5 rounded-[16px] border border-[#7F7F7F1F]">
      <p className="text-[16px] font-normal leading-[25.6px] text-black">
        {content}
      </p>
      <div className="flex gap-[14px] items-center">
        <Image
          src={img}
          width={53}
          height={53}
          alt="User"
          className="w-[53px] h-[53px] rounded-full"
        />
        <div className="flex flex-col">
          <p className="text-[16px] font-normal leading-[25.6px] text-black">
            {name}
          </p>
          <p className="text-[16px] font-normal leading-[25.6px] text-[#11111199]">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}

const TestimonialsSection = () => {
  return (
    <section className="w-full bg-gray-50 border-b border-b-[#7F7F7F1F]">
      <div className="max-w-[1176px] w-full mx-auto flex flex-col pt-[80px] px-[60px] pb-[120px]">
        <div className="text-center flex flex-col gap-4 items-center w-[60%] mx-auto pb-8">
          <div className="w-max border border-[8181812E] rounded-full px-[12px] py-[6px] shadow-[0px_2px_4px_0px_rgba(0,10,31,0.2)] bg-white">
            <p className="text-secondary font-medium text-[14px] leading-[16.8px]">
              Testimonials
            </p>
          </div>
          <h2 className="text-[#111111] font-semibold leading-[67.2px] text-[56px] tracking-[-1.12px]">
            What our users said about Upshift
          </h2>
          <div className="py-[2px] pr-2 pl-[2px] bg-[#DCFAE6] rounded-[8px] flex gap-2 items-center">
            <Image
              src="/images/About-Us-Trustpilot.webp"
              width={20}
              height={20}
              alt="start"
              className="w-5 h-5 rounded-[4px]"
            />
            <p className="text-[14px] leading-[19.6px] font-medium text-[#095C37]">
              4.9/5.0 on
            </p>
            <p className="text-[14px] leading-[19.6px] font-medium text-[#16B364]">
              Trustpilot
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-3 gap-6 z-[2]">
            {Testimonials.map((member, index) => (
              <Card
                img={member.img}
                name={member.name}
                role={member.role}
                content={member.content}
                key={index}
              />
            ))}
          </div>
          <div className="z-[100] absolute w-full min-h-[200px] bottom-0 bg-transparent bg-gradient-to-b from-white/0 to-[#FBFBFD] bg-[auto_200px] bg-no-repeat bg-bottom"></div>
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="#"
            className={`w-max text-[16px] leading-[16px] font-medium shadow-[0_2px_4px_0_rgba(0,10,31,0.2),_inset_0_6px_3px_-1px_rgba(255,255,255,0.2)] bg-black px-[20.8px] py-[11.2px] rounded-[12px] text-white`}
          >
            Get a quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
