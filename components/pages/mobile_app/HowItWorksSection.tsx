"use client";

import Tag from "@/components/ui/Tag";
import { FirstStep } from "./FirstStep";
import { SecondStep } from "./SecondStep";
import { ThirdStep } from "./ThirdStep";

const HowItWorksSection = () => {
  return (
    <section className="w-full bg-gray-50 flex flex-col items-center">
      <div className="text-center flex flex-col gap-4 items-center py-[64px]">
        <Tag text="How it works" />
        <h2>Simplifying your investment journey</h2>
      </div>
      <div className="flex flex-col w-full">
        <FirstStep />
        <SecondStep />
        <ThirdStep />
      </div>
    </section>
  );
};

export default HowItWorksSection;
