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
      <div className="text-[48px] leading-[48px] font-semibold text-[#B9E6FE] justify-self-center flex items-center">
        <span className="mb-[20px]">{count.toLocaleString()}</span>
        <span className="text-[#B9E6FE] text-[32px] leading-[32px]">
          {unit}
        </span>
        <span className="text-[#36BFFA] text-[32px] leading-[32px] mb-[20px]">
          {suffix}
        </span>
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
};

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
              <div className="grid grid-cols-2 gap-5">
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
