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
      <div className="lg:text-[48px] lg:leading-[48px] text-[38px] leading-[38px] font-semibold text-[#B9E6FE] justify-self-center flex items-center">
        <span className="mb-[20px]">{count.toLocaleString()}</span>
        <span className="text-[#B9E6FE] lg:text-[32px] lg:leading-[38.4px] text-[24px] leading-[28.8px]">
          {unit}
        </span>
        <span className="text-[#36BFFA] lg:text-[32px] lg:leading-[38.4px] text-[24px] leading-[28.8px] mb-[20px]">
          {suffix}
        </span>
      </div>
      <div className="text-[#FFFFFF99] primary-text">{label}</div>
    </div>
  );
};

export function StatsSection() {
  return (
    <section className="w-full bg-gray-50 flex flex-col items-center pt-8 lg:pt-12 pb-6 px-6 border border-b-[#7F7F7F1F]">
      <div className="rounded-[56px] bg-dark px-[40px] lg:px-[128px] w-full">
        <div className="w-full flex items-center bg-[url('/images/Mobile-App-CTA-BG.webp')] bg-center bg-cover">
          <div className="max-w-[1176px] mx-auto flex lg:flex-row flex-col items-center">
            <div className="animation-fade-in-top w-full lg:w-[50%] lg:pl-[80px] lg:pr-[40px] flex flex-col lg:items-start items-center mx-3 pt-[40px] lg:py-[120px] gap-4">
              <div className="w-max border border-[#8181812E] rounded-full px-[12px] py-[6px] shadow-[0px_2px_4px_0px_rgba(0,10,31,0.2)] bg-transparent">
                <p className="text-secondary font-medium text-[12px] leading-[14.4px] md:text-[13px] md:leading-[15.6px] lg:text-[14px] lg:leading-[16.8px]">
                  Stats
                </p>
              </div>
              <h2 className="text-white text-center lg:text-start">
                Our impact and reach over the years
              </h2>
              <p className="primary-text text-[#FFFFFF99] text-center lg:text-start">
                Our platform is continuously improved to provide cutting-edge
                tools that are easy to use, ensuring that even those new to
                digital marketing can see immediate benefits.
              </p>
            </div>
            <div className="lg:py-[120px] py-8 lg:pr-[24px] flex flex-col gap-10">
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
