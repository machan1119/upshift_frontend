const Steps: StepType[] = [
  {
    title: "Create your account and import your contacts",
    description:
      "Quickly set up your account and import your contact list using simple tools like CSV uploads",
  },
  {
    title: "Design stunning emails using drag-and-drop builders",
    description:
      "Utilize our user-friendly drag-and-drop builder to create visually appealing emails",
  },
  {
    title: "Set up automation for campaigns based on customer behavior",
    description:
      "Automate your email campaigns by setting triggers based on customer actions",
  },
  {
    title: "Analyze the results and optimize your strategy",
    description:
      "Evaluate your campaign performance with easy-to-understand analytics",
  },
];

interface StepType {
  title: string;
  description: string;
}
export function HowItWorkSection() {
  return (
    <div className="w-full py-10 bg-gray-50 border-y border-y-[#7F7F7F1A]">
      <div className="mx-[36px] bg-gradient-to-b from-[#28282C] to-[#2E2E34] rounded-[24px] ">
        <div className="max-w-[1176px] mx-auto bg-[url('/images/Mobile-App-How-BG-2.webp')] bg-no-repeat bg-bottom bg-contain">
          <div className="text-center pt-[80px] pb-[100px] flex flex-col gap-4 items-center w-[80%] md:w-[44%] mx-auto">
            <div className="w-max border border-[#8181812E] rounded-full px-[12px] py-[6px] shadow-[0px_2px_4px_0px_rgba(0,10,31,0.2)] bg-transparent">
              <p className="text-secondary font-medium text-[14px] leading-[16.8px]">
                How It Works
              </p>
            </div>
            <h2 className="text-[#FFFFFF] font-semibold md:leading-[67.2px] text-4xl md:text-[56px] tracking-[-1.12px]">
              Effortless email marketing in four simple steps.
            </h2>

            <div className="md:w-[850px] w-auto flex flex-col gap-4 items-center">
              {Steps.map((step, index) => (
                <div
                  className="w-full py-[36px] px-[24px] items-center flex gap-6 rounded-[12px] bg-[#313236]"
                  key={index}
                >
                  <div className="py-[10px] px-4 rounded-full bg-primary border border-secondary text-[24px] leading-[38.4px] text-white font-semibold">
                    {index + 1}
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[16px] leading-[25.6px] font-normal text-white">
                      {step.title}
                    </p>
                    <p className="text-[16px] leading-[25.6px] font-normal text-[#FFFFFF99]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
