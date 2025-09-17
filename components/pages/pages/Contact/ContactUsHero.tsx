import Tag from "@/components/ui/Tag";
import Image from "next/image";
import Link from "next/link";

export default function ContactUsHero() {
  return (
    <section className="w-full bg-gray-50 border-b-[1px] border-b-[#7F7F7F1A] bg-gradient-to-b from-[#DDEDFA] to-[#FFFFFF00]">
      <div className="max-w-[1176px] mx-auto md:py-[192px] py-[100px] px-5 md:px-[60px] flex flex-col gap-10 bg-[url('/images/Contact-Hero-BG.webp')] bg-right bg-[700px_auto] bg-no-repeat">
        <div className="w-full flex md:flex-row flex-col gap-[60px] items-center">
          <div className="md:w-[50%] flex flex-col gap-4 p-[20px] justify-center">
            <Tag text="Contact Us" />
            <h1 className="text-start">Let’s talk</h1>
            <p className="headline-text">
              We’d love to hear from you! Please fill out the form or reach us
              through the following methods.
            </p>
            <div className="flex flex-col gap-[5px] pt-4 pb-12">
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-4 h-4"
                >
                  <path
                    fill="#0BA5EC"
                    d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM320 224C373 224 416 267 416 320C416 373 373 416 320 416C267 416 224 373 224 320C224 267 267 224 320 224z"
                  />
                </svg>
                <Link
                  href="#"
                  className="text-[16px] leading-[25.6px] text-black hover:text-primary"
                >
                  info@upshift.com
                </Link>
              </div>
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-4 h-4"
                >
                  <path
                    fill="#0BA5EC"
                    d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM320 224C373 224 416 267 416 320C416 373 373 416 320 416C267 416 224 373 224 320C224 267 267 224 320 224z"
                  />
                </svg>
                <Link
                  href="#"
                  className="text-[16px] leading-[25.6px] text-black hover:text-primary"
                >
                  (123) 456 7890
                </Link>
              </div>
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-4 h-4"
                >
                  <path
                    fill="#0BA5EC"
                    d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM320 224C373 224 416 267 416 320C416 373 373 416 320 416C267 416 224 373 224 320C224 267 267 224 320 224z"
                  />
                </svg>
                <Link
                  href="#"
                  className="text-[16px] leading-[25.6px] text-black hover:text-primary"
                >
                  3517 W. Gray St. Utica, Pennsylvania 57867
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <p className="text-[18px] leading-[28.8px] text-[#11111199] font-normal">
                Trusted by industry leaders
              </p>
              <div className="flex gap-4 items-center w-full">
                <Image
                  src="/images/Contact-Hero-Image-1.webp"
                  width={290}
                  height={72}
                  alt="Leaders Logo"
                  className="max-w-[145px] w-[30%] aspect-auto opacity-75 hover:opacity-100"
                />
                <Image
                  src="/images/Contact-Hero-Image-2.webp"
                  width={290}
                  height={72}
                  alt="Leaders Logo"
                  className="max-w-[145px] w-[30%] aspect-auto opacity-75 hover:opacity-100"
                />
                <Image
                  src="/images/Contact-Hero-Image-3.webp"
                  width={290}
                  height={72}
                  alt="Leaders Logo"
                  className="max-w-[145px] w-[30%] aspect-auto opacity-75 hover:opacity-100"
                />
              </div>
            </div>
          </div>
          <div className="md:w-[50%] w-[90%] border border-[#7F7F7F1A] rounded-[18px] p-6 bg-white flex flex-col gap-4 shadow-[0px_0px_0px_1px_rgba(127,127,127,0.1)]">
            <input
              type="text"
              name="form_name"
              placeholder="Your name"
              className="lg:w-[384px] w-full p-3 rounded-[8px] border border-[#7F7F7F1A] text-[14px] text-black"
            />
            <input
              type="text"
              name="form_email"
              placeholder="Your email"
              className="lg:w-[384px] w-full p-3 rounded-[8px] border border-[#7F7F7F1A] text-[14px] text-black"
            />
            <input
              type="text"
              name="form_subject"
              placeholder="Subject"
              className="lg:w-[384px] w-full p-3 rounded-[8px] border border-[#7F7F7F1A] text-[14px] text-black"
            />
            <textarea
              name="form_message"
              placeholder="Message"
              className="lg:w-[384px] w-full h-[146px] p-3 rounded-[8px] border border-[#7F7F7F1A] text-[14px] text-black"
            />
            <div className="hidden md:flex items-center justify-center">
              <Link
                href="#"
                className={`w-full text-center text-[16px] leading-[16px] font-medium shadow-[0_2px_4px_0_rgba(0,10,31,0.2),_inset_0_6px_3px_-1px_rgba(255,255,255,0.2)] bg-primary px-[20.8px] py-[11.2px] rounded-[12px] text-white`}
              >
                Submit
              </Link>
            </div>
            <p className="text-[14px] leading-[22.4px] text-[#11111199] text-center">
              We will reply within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
