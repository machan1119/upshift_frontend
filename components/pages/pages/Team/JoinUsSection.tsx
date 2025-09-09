import Image from "next/image";

export default function JoinUsSection() {
  return (
    <section className="w-full bg-gray-50 border-b-[1px] border-b-[#7F7F7F1A]">
      <div className="max-w-[1176px] mx-auto py-[100px] px-[80px] flex gap-[60px]">
        <div className="min-w-max border border-[#11111199] rounded-[18px]">
          <Image
            src="/images/Team-Join-Image.webp"
            width={488}
            height={350}
            alt="Join us hero"
            className="w-[488px] h-[350px] border-[4px] border-white rounded-[16px]"
          />
        </div>
        <div className="flex flex-col gap-4 p-[20px] justify-center">
          <h2 className="text-[48px] leading-[57.6px] font-semibold text-black">
            Join us in making a difference
          </h2>
          <p className="text-[16px] leading-[25.6px] text-[#11111199] font-normal">
            Learn more about our community programs and find out how you can get
            involved with Upshift’s efforts to create positive change.
          </p>
        </div>
      </div>
    </section>
  );
}
