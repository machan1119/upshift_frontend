import Image from "next/image";

interface InvestorsType {
  avatar: string;
  name: string;
  role: string;
}

const Investors: InvestorsType[] = [
  {
    avatar: "/images/Team-Investors-Image-2.webp",
    name: "Blake Iker",
    role: "Angel Investor",
  },
  {
    avatar: "/images/Team-Investors-Image-3.webp",
    name: "Jason Miller",
    role: "Angel Investor",
  },
  {
    avatar: "/images/Team-Investors-Image-4.webp",
    name: "Logan Scott",
    role: "Angel Investor",
  },
  {
    avatar: "/images/Team-Investors-Image-5.webp",
    name: "Ryan Brooks",
    role: "Angel Investor",
  },
  {
    avatar: "/images/Team-Investors-Image-6.webp",
    name: "Dylan Carter",
    role: "Angel Investor",
  },
  {
    avatar: "/images/Team-Investors-Image-6.webp",
    name: "Rachel Taylor",
    role: "Angel Investor",
  },
  {
    avatar: "/images/Team-Investors-Image-6.webp",
    name: "Justin Cooper",
    role: "Angel Investor",
  },
  {
    avatar: "/images/Team-Investors-Image-6.webp",
    name: "Aaron Bennett",
    role: "Angel Investor",
  },
  {
    avatar: "/images/Team-Investors-Image-6.webp",
    name: "Kevin Hunter",
    role: "Angel Investor",
  },
  {
    avatar: "/images/Team-Investors-Image-6.webp",
    name: "Brian Collins",
    role: "Angel Investor",
  },
  {
    avatar: "/images/Team-Investors-Image-6.webp",
    name: "Lucas Wallace",
    role: "Angel Investor",
  },
  {
    avatar: "/images/Team-Investors-Image-6.webp",
    name: "Ashley Brown",
    role: "Angel Investor",
  },
];

export default function InvestorSection() {
  return (
    <section className="w-full bg-gray-50 border-b-[1px] border-b-[#7F7F7F1A]">
      <div className="max-w-[1176px] mx-auto py-[100px] px-[80px] flex flex-col gap-10">
        <div className="flex gap-[60px] items-center">
          <div className="flex flex-col gap-4 p-[20px] justify-center">
            <p className="px-2 py-1 rounded-full text-primary text-[14px] leading-[16.8px] font-medium bg-white border border-[#7F7F7F1A] w-max">
              Investors
            </p>
            <h2 className="text-[48px] leading-[57.6px] font-semibold text-black">
              Join us in making a difference
            </h2>
            <p className="text-[16px] leading-[25.6px] text-[#11111199] font-normal">
              Learn more about our community programs and find out how you can
              get involved with Upshift’s efforts to create positive change.
            </p>
          </div>
          <div className="min-w-max border border-[#7F7F7F1A] rounded-[18px]">
            <Image
              src="/images/Team-Investors-Image.webp"
              width={435}
              height={260}
              alt="Investors hero"
              className="w-[435px] h-[260px] border-[2px] border-white rounded-[16px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {Investors.map((investor, index) => (
            <div
              className="px-[8px] py-[10px] bg-[#F2F4F7] rounded-[8px] flex items-center gap-3"
              key={index}
            >
              <Image
                src={investor.avatar}
                width={36}
                height={36}
                alt="investor"
                className="w-9 h-9 border-[2px] border-white rounded-full"
              />
              <div className="flex flex-col gap-[2px]">
                <p className="text-[16px] leading-[22.4px] font-medium text-black">
                  {investor.name}
                </p>
                <p className="text-[16px] leading-[22.4px] font-medium text-[#11111199]">
                  {investor.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
