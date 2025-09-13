import Link from "next/link";

export default function ReadyBoostSection() {
  return (
    <section className="w-full bg-gray-50 border-b-[1px] border-b-[#7F7F7F1A]">
      <div className="max-w-[1176px] mx-auto w-full py-20 flex flex-col items-center gap-4 bg-[url('/images/About-Us-CTA-BG.webp')] bg-contain bg-center">
        <h2 className="md:w-[45%] w-[80%] text-center text-[36px] md:text-[48px] text-black font-semibold leading-[57.6px] tracking-[-0.96px]">
          Ready to boost your email marketing?
        </h2>
        <p className="w-[45%] text-center text-[16px] font-normal text-[#11111199] leading-[25.6px] pb-2">
          Join thousands of successful marketers who are reaching their
          audiences more effectively with Upshift. Get started today with a free
          trial!
        </p>
        <div className="hidden md:flex items-center justify-center">
          <Link
            href="#"
            className={`w-full text-[16px] leading-[16px] font-medium shadow-[0_2px_4px_0_rgba(0,10,31,0.2),_inset_0_6px_3px_-1px_rgba(255,255,255,0.2)] bg-primary px-[20px] py-[14px] rounded-[12px] text-white`}
          >
            Get started － No credit card required
          </Link>
        </div>
      </div>
    </section>
  );
}
