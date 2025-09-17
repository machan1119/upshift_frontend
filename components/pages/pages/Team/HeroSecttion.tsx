"use client";

import Image from "next/image";

interface TeamFeaturesType {
  icon: JSX.Element;
  title: string;
  description: string;
}

const TeamFeatures: TeamFeaturesType[] = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 640"
        width={22}
        height={22}
        className="w-[22px] h-[22px]"
      >
        <path
          fill="#36BFFA"
          d="M96 192C96 130.1 146.1 80 208 80C269.9 80 320 130.1 320 192C320 253.9 269.9 304 208 304C146.1 304 96 253.9 96 192zM32 528C32 430.8 110.8 352 208 352C305.2 352 384 430.8 384 528L384 534C384 557.2 365.2 576 342 576L74 576C50.8 576 32 557.2 32 534L32 528zM464 128C517 128 560 171 560 224C560 277 517 320 464 320C411 320 368 277 368 224C368 171 411 128 464 128zM464 368C543.5 368 608 432.5 608 512L608 534.4C608 557.4 589.4 576 566.4 576L421.6 576C428.2 563.5 432 549.2 432 534L432 528C432 476.5 414.6 429.1 385.5 391.3C408.1 376.6 435.1 368 464 368z"
        />
      </svg>
    ),
    title: "Collaboration",
    description:
      "Great ideas come from collaboration. At Upshift, we foster a team environment where every voice is heard.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 640"
        width={22}
        height={22}
        className="w-[22px] h-[22px]"
      >
        <path
          fill="#36BFFA"
          d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z"
        />
      </svg>
    ),
    title: "Integrity",
    description:
      "Our commitment to ethical practices is unwavering, both within our team and in every customer relationship.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 640"
        width={22}
        height={22}
        className="w-[22px] h-[22px]"
      >
        <path
          fill="#36BFFA"
          d="M535.3 70.7C541.7 64.6 551 62.4 559.6 65.2C569.4 68.5 576 77.7 576 88L576 274.9C576 406.1 467.9 512 337.2 512C260.2 512 193.8 462.5 169.7 393.3C134.3 424.1 112 469.4 112 520C112 533.3 101.3 544 88 544C74.7 544 64 533.3 64 520C64 445.1 102.2 379.1 160.1 340.3C195.4 316.7 237.5 304 280 304L360 304C373.3 304 384 293.3 384 280C384 266.7 373.3 256 360 256L280 256C240.3 256 202.7 264.8 169 280.5C192.3 210.5 258.2 160 336 160C402.4 160 451.8 137.9 484.7 116C503.9 103.2 520.2 87.9 535.4 70.7z"
        />
      </svg>
    ),
    title: "Sustainability",
    description:
      "We are committed to making decisions that ensure long-term prosperity and health for all stakeholders.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 640"
        width={22}
        height={22}
        className="w-[22px] h-[22px]"
      >
        <path
          fill="#36BFFA"
          d="M434.8 54.1C446.7 62.7 451.1 78.3 445.7 91.9L367.3 288L512 288C525.5 288 537.5 296.4 542.1 309.1C546.7 321.8 542.8 336 532.5 344.6L244.5 584.6C233.2 594 217.1 594.5 205.2 585.9C193.3 577.3 188.9 561.7 194.3 548.1L272.7 352L128 352C114.5 352 102.5 343.6 97.9 330.9C93.3 318.2 97.2 304 107.5 295.4L395.5 55.4C406.8 46 422.9 45.5 434.8 54.1z"
        />
      </svg>
    ),
    title: "Technology",
    description:
      "Empower every marketer with powerful tools that make sophisticated campaigns simple and accessible.",
  },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 bg-gradient-to-b from-[#DDEDFA] to-[#FFFFFF00] pt-[100px] md:pt-[180px]">
      <div className="max-w-[1176px] mx-auto border-b-[1px] border-b-[#7F7F7F1A]">
        <div className="z-[2] bg-[url('/images/About-Us-Hero-BG.webp')] bg-[800px_auto] pb-[30px] bg-top bg-no-repeat">
          <div className="flex flex-col gap-4 items-center mt-18 bg-bottom bg-no-repeat bg-contain">
            <div className="relative about-us-hero min-w-[108px] min-h-[108px] bg-transparent bg-[radial-gradient(at_top_right,_#B9E6FE_-20%,_#36BFFA_60%)] border-[6px] border-[#AADBF6] rounded-[30px]">
              <Image
                src="/images/Team-Hero-Image.webp"
                width={96}
                height={96}
                alt="Team-Hero-Image"
                className="absolute top-0 min-w-24 min-h-24 z-10"
              />
            </div>
            <h1 className="animation-fade-in-top">
              Meet the innovators behind Upshift
            </h1>
            <div className="animation-fade-in-top flex flex-col gap-[18px] w-[90%] md:w-[60%] text-center">
              <p className="headline-text">
                Behind every great product is a great team. The Upshift team
                comprises industry experts, innovative thinkers, and dedicated
                professionals committed to revolutionizing the way businesses
                engage with their audiences
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4">
          {TeamFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center hover:bg-white relative py-[64px] px-[24px] text-center bg-[url('/images/Mobile-App-About-BG.webp')] bg-[position:50%_3%] bg-[length:95%_auto] bg-no-repeat state-card border border-[#7F7F7F1A]"
            >
              <div className="w-[56px] h-[56px] md:w-[58px] md:h-[58px] lg:w-[66px] lg:h-[66px] mb-[24px] bg-[url('/images/Mobile-App-Benefits-BG.webp')] bg-no-repeat bg-cover flex justify-center items-center">
                {feature.icon}
              </div>
              <h5>{feature.title}</h5>
              <p className="primary-text text-center pt-3">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
