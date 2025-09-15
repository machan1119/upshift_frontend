import Link from "next/link";

export default function JoinOurTeamSection() {
  return (
    <section className="w-full bg-gray-50 border-b-[1px] border-b-[#7F7F7F1A]">
      <div className="max-w-[1176px] mx-auto w-full py-10 md:py-20 flex flex-col items-center gap-4 bg-[url('/images/About-Us-CTA-BG.webp')] bg-contain bg-center">
        <h2 className="w-[45%] text-center text-[26px] md:text-[48px] text-black font-semibold md:leading-[57.6px] tracking-[-0.96px]">
          Join our team
        </h2>
        <p className="md:w-[45%] w-[80%] text-center text-[14px] md:text-[16px] font-normal text-[#11111199] leading-[25.6px] pb-2">
          Are you interested in shaping the future of digital marketing? We’re
          always looking for passionate individuals to join our team.
        </p>
        <div className="hidden md:flex items-center justify-center">
          <Link
            href="#"
            className={`w-full text-[16px] leading-[16px] font-medium shadow-[0_2px_4px_0_rgba(0,10,31,0.2),_inset_0_6px_3px_-1px_rgba(255,255,255,0.2)] bg-primary px-[20px] py-[14px] rounded-[12px] text-white`}
          >
            View Open Positions
          </Link>
        </div>
      </div>
    </section>
  );
}
