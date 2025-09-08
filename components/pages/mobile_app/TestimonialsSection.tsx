"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface TestimonialsType {
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

function TestimonialsCard({
  name,
  role,
  image,
  text,
  rating,
}: TestimonialsType) {
  return (
    <div className="justify-self-center flex w-[780px] px-[56px] pt-[56px] pb-[48px] border border-[#7F7F7F1F] rounded-[24px] bg-[url('/images/Mobile-App-Testimonials-BG.webp')] bg-no-repeat bg-[length:340px_auto] bg-right-top">
      <Image
        src={image}
        width={266}
        height={266}
        alt="user"
        className="w-[266px] h-[266px] mr-[50px]"
      />
      <div className="flex flex-col">
        <p className="text-[18px] text-[#111111] font-semibold leading-[23.4px] tracking-[-0.18px]">
          {name}
        </p>
        <p className="mb-[10px] text-[16px] text-[#11111199] leading-[25.6px] font-normal">
          {role}
        </p>
        <div className="w-max flex gap-1 px-[6px] py-[5px] mb-[10px] bg-[#FFAB1A12] border border-[#FFAB1A1C] rounded-[6px]">
          {Array(rating)
            .fill(0)
            .map((_, index) => (
              <svg
                aria-hidden="true"
                viewBox="0 0 576 512"
                width={14}
                height={14}
                xmlns="http://www.w3.org/2000/svg"
                key={index}
                className="w-[14px] h-[14px]"
              >
                <path
                  fill="#ffab1a"
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                ></path>
              </svg>
            ))}
        </div>
        <p className="text-[20px] font-medium leading-[32px] text-[#111111]">
          {text}
        </p>
      </div>
    </div>
  );
}

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sienna Cruz",
      role: "Student",
      image: "/images/Mobile-App-Testimonials-Image.webp",
      text: "“Thanks to this app, I've not only improved my understanding of the stock market but have also made significant gains towards my financial goals.“",
      rating: 5,
    },
    {
      name: "Ronald Tackett",
      role: "Student",
      image: "/images/Mobile-App-Testimonials-Image-2.webp",
      text: "Upshift has helped me stabilize my finances and achieve my financial goals. The platform is user-friendly and provides valuable real-time information.",
      rating: 5,
    },
    {
      name: "Naoma Hines",
      role: "Student",
      image: "/images/Mobile-App-Testimonials-Image-3.webp",
      text: "With Upshift, I've learned to make smarter investments. The educational resources are excellent and have helped me develop my financial skills.",
      rating: 5,
    },
    {
      name: "Joseph Wessel",
      role: "Student",
      image: "/images/Mobile-App-Testimonials-Image-4.webp",
      text: "Since using Upshift, I've seen significant gains in my investment portfolio. The app has empowered me to make smarter, data-driven decisions.",
      rating: 5,
    },
  ];

  return (
    <section className="w-full bg-gray-50 border border-b-[#7F7F7F1F]">
      <div className="max-w-[1176px] w-full mx-auto flex flex-col pt-16">
        {/* Section Header */}
        <div className="text-center flex flex-col gap-4 items-center w-[60%] mx-auto pb-8">
          <div className="w-max border border-[8181812E] rounded-full px-[12px] py-[6px] shadow-[0px_2px_4px_0px_rgba(0,10,31,0.2)] bg-white">
            <p className="text-secondary font-medium text-[14px] leading-[16.8px]">
              Testimonials
            </p>
          </div>
          <h2 className="text-[#111111] font-semibold leading-[67.2px] text-[56px] tracking-[-1.12px]">
            Hear what our users says
          </h2>
          <div className="text-[#11111199] text-[16px] font-normal leading-[25.6px] w-[75%]">
            Discover how Upshift not only simplifies your investment process but
            also empowers you to make smarter, data-driven decisions.
          </div>
        </div>

        <div className="relative pb-[140px]">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: ".custom-swiper-button-prev",
              nextEl: ".custom-swiper-button-next",
            }}
            loop={true}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialsCard
                  name={testimonial.name}
                  image={testimonial.image}
                  role={testimonial.role}
                  rating={testimonial.rating}
                  text={testimonial.text}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="custom-swiper-button-next cursor-pointer absolute top-[calc(50%-20px)] right-[100px] z-20 p-3 bg-[#7F7F7F17]">
            <svg
              aria-hidden="true"
              viewBox="0 0 256 512"
              width={17}
              height={17}
              xmlns="http://www.w3.org/2000/svg"
              className="w-[17px] h-[17px]"
            >
              <path
                fill="#7F7F7FAB"
                d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
              ></path>
            </svg>
          </button>
          <button className="custom-swiper-button-prev cursor-pointer absolute top-[calc(50%-20px)] left-[100px] z-20 p-3 bg-[#7F7F7F17]">
            <svg
              aria-hidden="true"
              viewBox="0 0 256 512"
              width={17}
              height={17}
              xmlns="http://www.w3.org/2000/svg"
              className="w-[17px] h-[17px]"
            >
              <path
                fill="#7F7F7FAB"
                d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
