"use client";

import Tag from "@/components/ui/Tag";
import { useInView } from "react-intersection-observer";

interface CardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

function Card({ icon, title, description }: CardProps) {
  return (
    <div className="p-4 border border-[#7F7F7F1A] h-full">
      <div className="px-5 py-[34px] bg-[#7F7F7F0D] rounded-[16px] flex flex-col items-center h-full">
        <div className="w-[56px] h-[56px] md:w-[58px] md:h-[58px] lg:w-[66px] lg:h-[66px] mb-[24px] bg-[url('/images/Mobile-App-Benefits-BG.webp')] bg-no-repeat bg-cover flex justify-center items-center">
          {icon}
        </div>
        <h5 className="text-[#111111] primary-text text-center font-medium">
          {title}
        </h5>
        <p className="text-[#11111199] primary-text text-center">
          {description}
        </p>
      </div>
    </div>
  );
}

const BenefitsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const benefits = [
    {
      icon: (
        <svg
          aria-hidden="true"
          viewBox="0 0 448 512"
          width="22"
          height="22"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#0BA5EC"
            d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"
          ></path>
        </svg>
      ),
      title: "Comprehensive education",
      description: "Gain access to a wide range of financial lessons.",
    },
    {
      icon: (
        <svg
          aria-hidden="true"
          viewBox="0 0 448 512"
          width="22"
          height="22"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#0BA5EC"
            d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"
          ></path>
        </svg>
      ),
      title: "User-friendly interface",
      description: "Enjoy a seamless experience with our intuitive design.",
    },
    {
      icon: (
        <svg
          aria-hidden="true"
          viewBox="0 0 448 512"
          width="22"
          height="22"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#0BA5EC"
            d="M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"
          ></path>
        </svg>
      ),
      title: "Real-time tracking",
      description: "Stay updated with real-time market data.",
    },
    {
      icon: (
        <svg
          aria-hidden="true"
          viewBox="0 0 448 512"
          width="22"
          height="22"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#0BA5EC"
            d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
          ></path>
        </svg>
      ),
      title: "Customized alerts",
      description: "Stay on top of market changes with alerts.",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-[1176px] w-full mx-auto flex flex-col">
        <div className="text-center pt-16 pb-14 flex flex-col gap-4 items-center w-[80%] md:w-[50%] mx-auto">
          <Tag text="Benefits" />
          <h2>Maximize your investing potential</h2>
          <div className="primary-text">
            Discover how Upshift not only simplifies your investment process but
            also empowers you to make smarter, data-driven decisions.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Card
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
