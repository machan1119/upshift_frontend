"use client";
export default function ContactDetailSection() {
  return (
    <section className="w-full bg-gray-50 border-b-[1px] border-b-[#7F7F7F1A]">
      <div className="max-w-[1176px] w-full mx-auto">
        <div className="grid md:grid-cols-3 grid-cols-1">
          <div className="flex flex-col gap-[5px] w-full relative items-center p-[20px] text-center bg-[url('/images/Mobile-App-About-BG.webp')] bg-[position:50%_3%] bg-[length:95%_auto] bg-no-repeat state-card border border-[#7F7F7F1A]">
            <div className="w-[56px] h-[56px] md:w-[58px] md:h-[58px] lg:w-[66px] lg:h-[66px] mb-[24px] bg-[url('/images/Mobile-App-Benefits-BG.webp')] bg-no-repeat bg-cover flex justify-center items-center">
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
            <p className="text-primary text-[16px] font-normal text-center">
              Email
            </p>
            <h5 className="text-[#111111] font-semibold text-[16px] mb-[4px] text-center">
              info@upshift.com
            </h5>
          </div>
          <div className="flex flex-col gap-[5px] w-full relative items-center p-[20px] text-center bg-[url('/images/Mobile-App-About-BG.webp')] bg-[position:50%_3%] bg-[length:95%_auto] bg-no-repeat state-card border border-[#7F7F7F1A]">
            <div className="w-[56px] h-[56px] md:w-[58px] md:h-[58px] lg:w-[66px] lg:h-[66px] mb-[24px] bg-[url('/images/Mobile-App-Benefits-BG.webp')] bg-no-repeat bg-cover flex justify-center items-center">
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
            <p className="text-primary text-[16px] font-normal text-center">
              Phone
            </p>
            <h5 className="text-[#111111] font-semibold text-[16px] mb-[4px] text-center">
              (123) 456-8790
            </h5>
          </div>
          <div className="flex flex-col gap-[5px] w-full relative items-center p-[20px] text-center bg-[url('/images/Mobile-App-About-BG.webp')] bg-[position:50%_3%] bg-[length:95%_auto] bg-no-repeat state-card border border-[#7F7F7F1A]">
            <div className="w-[56px] h-[56px] md:w-[58px] md:h-[58px] lg:w-[66px] lg:h-[66px] mb-[24px] bg-[url('/images/Mobile-App-Benefits-BG.webp')] bg-no-repeat bg-cover flex justify-center items-center">
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
            <p className="text-primary text-[16px] font-normal text-center">
              Address
            </p>
            <h5 className="w-[50%] text-[#111111] font-semibold text-[16px] mb-[4px] text-center">
              3517 W. Gray St. Utica, Pennsylvania 57867
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}
