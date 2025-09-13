"use client";
export default function MissionSection() {
  return (
    <section className="w-full bg-gray-50 border-b-[1px] border-b-[#7F7F7F1A]">
      <div className="max-w-[1176px] w-full mx-auto">
        <div className="flex flex-col gap-4 border-b-[1px] border-b-[#7F7F7F1A] p-[80px]">
          <div className="w-max border border-[8181812E] rounded-full px-[12px] py-[6px] shadow-[0px_2px_4px_0px_rgba(0,10,31,0.2)] bg-white">
            <p className="text-secondary font-medium text-[14px] leading-[16.8px]">
              Mission
            </p>
          </div>
          <p className="text-[24px] md:text-[48px] font-medium md:leading-[57.6px] text-[#11111199]">
            <span className="text-black"></span>
            Our mission is to empower businesses to achieve their{" "}
            <span className="text-black">marketing goals</span>
            through <span className="text-black">technology</span> that
            simplifies and enhances their{" "}
            <span className="text-black">marketing efforts.</span> We are
            dedicated to helping you{" "}
            <span className="text-black">connect with your audience</span> in
            the most <span className="text-black">efficient</span> and{" "}
            <span className="text-black">engaging way possible.</span>
          </p>
        </div>
        <div className="flex">
          <div className="relative py-[80px] px-[56px] text-center bg-[url('/images/Mobile-App-About-BG.webp')] bg-[position:50%_3%] bg-[length:95%_auto] bg-no-repeat state-card border border-[#7F7F7F1A]">
            <div className="w-[66px] h-[66px] mb-[24px] bg-[url('/images/Mobile-App-Benefits-BG.webp')] bg-no-repeat bg-cover flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                width={22}
                height={22}
                className="w-[22px] h-[22px]"
              >
                <path
                  fill="#36BFFA"
                  d="M292.9 384c7.3-22.3 21.9-42.5 38.4-59.9 32.7-34.4 52.7-80.9 52.7-132.1 0-106-86-192-192-192S0 86 0 192c0 51.2 20 97.7 52.7 132.1 16.5 17.4 31.2 37.6 38.4 59.9l201.7 0zM288 432l-192 0 0 16c0 44.2 35.8 80 80 80l32 0c44.2 0 80-35.8 80-80l0-16zM184 112c-39.8 0-72 32.2-72 72 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-66.3 53.7-120 120-120 13.3 0 24 10.7 24 24s-10.7 24-24 24z"
                />
              </svg>
            </div>
            <h5 className="text-[#111111] font-semibold text-[16px] mb-[4px] text-start">
              Innovation
            </h5>
            <p className="text-[#11111199] text-[16px] font-normal text-start">
              We push the boundaries of digital marketing technology to bring
              you the most advanced tools, ensuring that you stay ahead of the
              curve in a rapidly evolving market
            </p>
          </div>
          <div className="relative py-[80px] px-[56px] text-center bg-[url('/images/Mobile-App-About-BG.webp')] bg-[position:50%_3%] bg-[length:95%_auto] bg-no-repeat state-card border border-[#7F7F7F1A]">
            <div className="w-[66px] h-[66px] mb-[24px] bg-[url('/images/Mobile-App-Benefits-BG.webp')] bg-no-repeat bg-cover flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                width={22}
                height={22}
                className="w-[22px] h-[22px]"
              >
                <path
                  fill="#36BFFA"
                  d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM229.4 385.9C249.8 413.9 282.8 432 320 432C357.2 432 390.2 413.9 410.6 385.9C418.4 375.2 433.4 372.8 444.1 380.6C454.8 388.4 457.2 403.4 449.4 414.1C420.3 454 373.2 480 320 480C266.8 480 219.7 454 190.6 414.1C182.8 403.4 185.2 388.4 195.9 380.6C206.6 372.8 221.6 375.2 229.4 385.9zM208 272C208 254.3 222.3 240 240 240C257.7 240 272 254.3 272 272C272 289.7 257.7 304 240 304C222.3 304 208 289.7 208 272zM400 240C417.7 240 432 254.3 432 272C432 289.7 417.7 304 400 304C382.3 304 368 289.7 368 272C368 254.3 382.3 240 400 240z"
                />
              </svg>
            </div>
            <h5 className="text-[#111111] font-semibold text-[16px] mb-[4px] text-start">
              Customer success
            </h5>
            <p className="text-[#11111199] text-[16px] font-normal text-start">
              We are committed to your success. Our platform is built to drive
              significant results, and our team is here to support you with
              expert advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
