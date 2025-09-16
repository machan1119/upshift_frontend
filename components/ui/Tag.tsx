export default function Tag({ text }: { text: string }) {
  return (
    <div className="w-max border border-[#8181812E] rounded-full px-[12px] py-[6px] shadow-[0px_2px_4px_0px_rgba(0,10,31,0.2)] bg-white">
      <p className="text-secondary font-medium text-[12px] leading-[14.4px] md:text-[13px] md:leading-[15.6px] lg:text-[14px] lg:leading-[16.8px]">
        {text}
      </p>
    </div>
  );
}
