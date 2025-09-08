"use client";

import { FirstStep } from "./FirstStep";
import { SecondStep } from "./SecondStep";
import { ThirdStep } from "./ThirdStep";

const HowItWorksSection = () => {
  return (
    <section className="w-full bg-gray-50 flex flex-col items-center">
      <div className="text-center flex flex-col gap-4 items-center py-[64px]">
        <div className="w-max border border-[8181812E] rounded-full px-[12px] py-[6px] shadow-[0px_2px_4px_0px_rgba(0,10,31,0.2)]">
          <p className="text-secondary font-medium text-[14px] leading-[16.8px]">
            How it works
          </p>
        </div>
        <h2 className="text-[#111111] font-semibold leading-[67.2px] text-[56px] tracking-[-1.12px]">
          Simplifying your investment journey
        </h2>
      </div>
      <div className="flex flex-col">
        <FirstStep />
        <SecondStep />
        <ThirdStep />
      </div>
    </section>
  );
};

export default HowItWorksSection;
