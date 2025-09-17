import Link from "next/link";

export function EnterprisePlanSection() {
  return (
    <section className="w-full bg-gray-50 flex flex-col items-center pt-12 pb-6 px-6 border border-b-[#7F7F7F1F]">
      <div className="w-full rounded-2xl md:rounded-[56px] bg-dark px-10 md:px-[128px]">
        <div className="flex flex-col gap-4 items-center py-10 md:pt-[80px] md:pb-[100px] bg-[url('/images/Mobile-App-CTA-BG.webp')] bg-center bg-cover">
          <div className="w-max border border-[#8181812E] rounded-full px-[12px] py-[6px] shadow-[0px_2px_4px_0px_rgba(0,10,31,0.2)] bg-white">
            <p className="text-secondary font-medium text-[12px] leading-[14.4px] md:text-[13px] md:leading-[15.6px] lg:text-[14px] lg:leading-[16.8px]">
              Enterprise Plan
            </p>
          </div>
          <h2 className="text-white">Need a custom plan?</h2>
          <p className="w-full md:w-[50%] primarty-text text-center text-[#FFFFFF99]">
            For large teams spending over $5m per year, contact us about our
            enterprise product.
          </p>
          <div className="flex items-center justify-center">
            <Link
              href="#"
              className={`w-max flex gap-2 text-[16px] leading-[16px] font-medium shadow-[0_2px_4px_0_rgba(0,10,31,0.2),_inset_0_6px_3px_-1px_rgba(255,255,255,0.2)] bg-primary px-[20px] py-[14px] rounded-[12px] text-white`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="w-4 h-4"
              >
                <path
                  fill="white"
                  d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"
                />
              </svg>
              Mailchimp Widget
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
