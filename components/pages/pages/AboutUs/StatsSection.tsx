"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  unit?: string;
  label: string;
}

const stats: CounterProps[] = [
  {
    end: 150,
    unit: "K",
    suffix: "+",
    label: "Businesses served",
  },
  {
    end: 50,
    suffix: "%",
    label: "Average increase in engagement",
  },
  {
    end: 100,
    suffix: "+",
    label: "Countries reached",
  },
  {
    end: 1,
    unit: "M",
    suffix: "+",
    label: "Campaigns launched annually",
  },
];

const Counter = ({
  end,
  duration = 2000,
  unit = "",
  suffix = "",
  label,
}: CounterProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(
        startValue + (end - startValue) * easeOutQuart
      );

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  return (
    <div ref={ref} className="relative text-center">
      <div className="text-[32px] md:text-[48px] leading-[48px] font-semibold text-[#B9E6FE] justify-self-center flex items-center">
        <span className="mb-[20px]">{count.toLocaleString()}</span>
        <span className="text-[#B9E6FE] text-[21px] md:text-[32px] leading-[32px]">
          {unit}
        </span>
        <span className="text-[#36BFFA] text-[21px] md:text-[32px] leading-[32px] mb-[20px]">
          {suffix}
        </span>
      </div>
      <div className="text-[#FFFFFF99] text-[14px] md:text-[16px] font-medium">
        {label}
      </div>
    </div>
  );
};

export function StatsSection() {
  return (
    <section className="w-full bg-gray-50 flex flex-col items-center pt-8 md:pt-12 pb-6 px-6 border border-b-[#7F7F7F1F]">
      <div className="rounded-[56px] bg-dark px-[40px] md:px-[128px]">
        <div className="w-full flex items-center bg-[url('/images/Mobile-App-CTA-BG.webp')] bg-center bg-cover">
          <div className="max-w-[1176px] mx-auto flex md:flow-row flex-col items-center">
            <div className="animation-fade-in-top w-full md:w-[50%] md:pl-[80px] md:pr-[40px] flex flex-col md:items-start items-center mx-3 pt-[40px] md:py-[120px] gap-4">
              <p className="w-max rounded-full py-1 px-2 text-primary text-[12px] md:text-[16px] border border-[#FFFFFF99] bg-transparent">
                Stats
              </p>
              <h1 className="text-[26px] md:text-[48px] font-semibold tracking-[-1.28px] md:leading-[57.6px] text-white">
                Our impact and reach over the years
              </h1>
              <p className="text-center md:text-start text-[14px] md:text-[18px] md:leading-[28.8px] font-normal text-[#FFFFFF99]">
                We started with a vision to democratize digital marketing,
                making it accessible and effective for businesses of all sizes.
              </p>
            </div>
            <div className="md:py-[120px] py-8 md:pr-[24px] flex flex-col gap-10">
              <div className="grid grid-cols-2 gap-0 md:gap-5">
                {stats.map((state, index) => (
                  <Counter
                    end={state.end}
                    suffix={state.suffix}
                    unit={state.unit}
                    label={state.label}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
