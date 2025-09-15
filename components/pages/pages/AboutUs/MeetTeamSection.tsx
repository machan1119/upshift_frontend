"use client";

import Image from "next/image";

interface TeamsType {
  img: string;
  name: string;
  role: string;
}

const Teams: TeamsType[] = [
  {
    img: "/images/About-Us-Team-Image-1.webp",
    name: "John Doe",
    role: "CEO & SEO Strategist",
  },
  {
    img: "/images/About-Us-Team-Image-2.webp",
    name: "Jane Smith",
    role: "Head of Content Strategy",
  },
  {
    img: "/images/About-Us-Team-Image-3.webp",
    name: "Alice Johnson",
    role: "Lead SEO Analyst",
  },
  {
    img: "/images/About-Us-Team-Image-4.webp",
    name: "Mike Maignan",
    role: "Software Engineer",
  },
  {
    img: "/images/About-Us-Team-Image-5.webp",
    name: "Jordan Greenwood",
    role: "HR Manager",
  },
  {
    img: "/images/About-Us-Team-Image-6.webp",
    name: "HR Manager",
    role: "Technical Expert",
  },
  {
    img: "/images/About-Us-Team-Image-7.webp",
    name: "Emma Brown",
    role: "Clients Relations Manager",
  },
  {
    img: "/images/About-Us-Team-Image-8.webp",
    name: "Eduard Franz",
    role: "QA Manager",
  },
  {
    img: "/images/About-Us-Team-Image-9.webp",
    name: "Sienna Cruz",
    role: "SEO Analyst",
  },
];

function Card({ img, name, role }: TeamsType) {
  return (
    <div className="flex flex-col gap-5 p-10 border border-[#7F7F7F1F]">
      <div className="rounded-[8px] border border-[#7F7F7F1F]">
        <Image
          src={img}
          width={310}
          height={310}
          alt="Teams"
          className="md:w-[310px] md:h-[310px] size-full rounded-[8px] border-[4px] border-white"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-[16px] md:text-[20px] text-black font-normal leading-[24px]">
          {name}
        </p>
        <p className="text-[14px] md:text-[16px] text-[#11111199] font-normal leading-[25.6px]">
          {role}
        </p>
      </div>
    </div>
  );
}

const MeetTeamSection = () => {
  return (
    <section className="w-full bg-gray-50 border-b border-b-[#7F7F7F1F]">
      <div className="max-w-[1176px] w-full mx-auto flex flex-col pt-16">
        <div className="text-center flex flex-col gap-4 items-center w-[90%] md:w-[60%] mx-auto pb-8">
          <div className="w-max border border-[8181812E] rounded-full px-[12px] py-[6px] shadow-[0px_2px_4px_0px_rgba(0,10,31,0.2)] bg-white">
            <p className="text-secondary font-medium text-[14px] leading-[16.8px]">
              Meet the team
            </p>
          </div>
          <h2 className="text-[#111111] font-semibold md:leading-[67.2px] text-[26px] md:text-[56px] tracking-[-1.12px]">
            Driven by expertise, united by vision
          </h2>
          <div className="text-[#11111199] text-[14px] md:text-[16px] font-normal leading-[25.6px] w-[75%]">
            Our team at Upshift is comprised of seasoned professionals from
            various fields within digital marketing and technology.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {Teams.map((member, index) => (
            <Card
              img={member.img}
              name={member.name}
              role={member.role}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTeamSection;
