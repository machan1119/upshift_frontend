export function StatsSection() {
  return (
    <section className="w-full bg-gray-50 flex flex-col items-center pt-12 pb-6 px-6 border border-b-[#7F7F7F1F]">
      <div className="rounded-[56px] bg-dark px-[128px]">
        <div className="w-full flex items-center bg-[url('/images/Mobile-App-CTA-BG.webp')] bg-center bg-cover">
          <div className="max-w-[1176px] mx-auto flex items-center">
            <div className="w-[50%] pl-[80px] pr-[40px] flex flex-col mx-3 py-[120px] gap-4">
              <p className="w-max rounded-full py-1 px-2 text-primary text-[16px] border border-[#FFFFFF99] bg-transparent">
                Stats
              </p>
              <h1 className="text-[48px] font-semibold tracking-[-1.28px] leading-[57.6px] text-white">
                Our impact and reach over the years
              </h1>
              <p className="text-[18px] leading-[28.8px] font-normal text-[#FFFFFF99]">
                We started with a vision to democratize digital marketing,
                making it accessible and effective for businesses of all sizes.
              </p>
            </div>
            <div className="py-[120px] pr-[24px] flex flex-col gap-10">
              <div className="flex">
                <div className="flex flex-col gap-1">
                  <div className="text-[48px] leading-[48px] tracking-[-0.96px] text-[#B9E6FE]">
                    150 <span>K</span> <span className="text-primary">+</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-[48px] leading-[48px] tracking-[-0.96px] text-[#B9E6FE]">
                    150<span>K</span>
                    <span className="text-primary">+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
