import Image from "next/image";

export default function JoinUsSection() {
  return (
    <section className="w-full bg-gray-50 border-b-[1px] border-b-[#7F7F7F1A]">
      <div className="max-w-[1176px] w-[95%] mx-auto py-[32px] px-[20px] lg:py-[100px] lg:px-[80px] flex md:flex-row flex-col-reverse items-center md:gap-[60px]">
        <div className="md:w-[60%] border border-[#FFFFFF99] rounded-[18px]">
          <Image
            src="/images/Team-Join-Image.webp"
            width={488}
            height={350}
            alt="Join us hero"
            className="max-w-[488px] w-full aspect-auto border-[4px] border-white rounded-[16px]"
          />
        </div>
        <div className="md:w-[50%] flex flex-col items-center gap-4 p-[20px] justify-center">
          <h2 className="large-text font-semibold text-black">
            Join us in making a difference
          </h2>
          <p className="primary-text text-center md:text-start">
            Learn more about our community programs and find out how you can get
            involved with Upshift’s efforts to create positive change.
          </p>
        </div>
      </div>
    </section>
  );
}
