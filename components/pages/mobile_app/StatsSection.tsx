"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  unit?: string;
  label: string;
}

const Counter = ({
  end,
  duration = 2000,
  unit = "",
  prefix = "",
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
    <div
      ref={ref}
      className="relative py-[60px] px-[20px] text-center bg-[url('/images/Mobile-App-About-BG.webp')] bg-[position:50%_3%] bg-[length:95%_auto] bg-no-repeat state-card border border-[#7F7F7F1A]"
    >
      <div className="text-[32px] font-semibold text-[#11111199] mb-2 justify-self-center flex items-center">
        {prefix}
        <span className="text-black text-[48px]">
          {count.toLocaleString()}
          {unit}
        </span>
        {suffix}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      end: 1,
      unit: "m",
      suffix: "+",
      label: "Active users",
    },
    {
      end: 500,
      prefix: "$",
      unit: "m",
      label: "Total transactions",
    },
    {
      end: 70,
      suffix: "+",
      label: "Countries supported",
    },
    {
      end: 99,
      unit: "%",
      suffix: "+",
      label: "Active users",
    },
  ];

  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-[1176px] w-full mx-auto flex flex-col gap-10">
        <div className="flex w-full">
          <div className="w-[58%] pt-[56px] pl-[64px] flex flex-col gap-4">
            <div className="w-max border border-[8181812E] rounded-full px-[12px] py-[6px] shadow-[0px_2px_4px_0px_rgba(0,10,31,0.2)]">
              <p className="text-secondary font-medium text-[14px] leading-[16.8px]">
                About us
              </p>
            </div>
            <h2 className="text-[#111111] font-semibold leading-[67.2px] text-[56px] tracking-[-1.12px]">
              Empowering every individual to achieve financial independence
            </h2>
          </div>
          <div className="w-[42%] flex flex-col gap-4 justify-end px-12">
            <div className="text-[#11111199] text-[16px] font-normal leading-[25.6px]">
              Designed for both novice and seasoned investors, our app combines
              powerful technology with user-friendly features to help you manage
              your investments wisely.
            </div>
            <div className="text-[#11111199] text-[16px] font-normal leading-[25.6px]">
              Benefit from real-time data, educational resources, and innovative
              investment tools.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index}>
              <Counter
                end={stat.end}
                prefix={stat.prefix}
                suffix={stat.suffix}
                unit={stat.unit}
                label={stat.label}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
