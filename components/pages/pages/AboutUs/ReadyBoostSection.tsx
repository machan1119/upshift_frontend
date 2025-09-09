import Link from "next/link";

export default function ReadyBoostSection() {
  return (
    <section className="w-full">
      <div className="max-w-[1176px] w-full py-20 flex flex-col gap-4">
        <h2 className="text-[48px] text-black font-semibold leading-[57.6px] tracking-[-0.96px]">
          Ready to boost your email marketing?
        </h2>
        <p className="text-[16px] font-normal text-[#11111199] leading-[25.6px] pb-2">
          Join thousands of successful marketers who are reaching their
          audiences more effectively with Upshift. Get started today with a free
          trial!
        </p>
        <div className="hidden md:flex items-center justify-center">
          <Link
            href="#"
            className={`w-full text-[16px] leading-[16px] font-medium shadow-[0_2px_4px_0_rgba(0,10,31,0.2),_inset_0_6px_3px_-1px_rgba(255,255,255,0.2)] bg-primary px-[20.8px] py-[11.2px] rounded-[12px] text-white`}
          >
            Get started － No credit card required
          </Link>
        </div>
      </div>
    </section>
  );
}
