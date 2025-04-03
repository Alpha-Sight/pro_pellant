import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BuildButton from "../BuildButton";

const HowItWorks: React.FC = () => {
  return (
    <section className="pt-12 pl-6 md:pl-12 overflow-x-hidden">
      <h5 className="font-bold text-4xl md:text-[3.1rem] leading-[4.42rem]">
        How it works
      </h5>
      <p className="font-medium text-xl md:text-[1.5rem] mb-8">
        The 3-Step magic trick.
      </p>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
         breakpoints={{
          768: {slidesPerView: 2, spaceBetween: 32},
          1024: { slidesPerView: 3, spaceBetween: 32 },
        }}
        modules={[Autoplay]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="w-full md:w-[20.39rem] h-[19rem] md:h-[24.5rem] bg-[#000006] rounded-[7.64px] p-4 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300">
            <div className="bg-white w-full h-1/2 rounded-[7.64px]" />
            <div className="text-white">
              <h5 className="font-semibold md:text-[1.88rem] text-[1.5rem] leading-[2.47rem] mb-4">
                Upload or Create
              </h5>
              <p className="font-normal text-lg">
                Start with your existing CV or build one from scratch using our
                drag-and-drop builder
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-full ml-5 md:w-[40rem] md:-ml-12">
          <div className="w-full md:w-[40rem] bg-white shadow-lg h-[19rem] md:h-[24.5rem] rounded-[7.64px] flex p-6 mt-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-full md:w-1/2 flex flex-col justify-center px-2 md:px-8">
              <h5 className="font-semibold md:text-[1.88rem] text-[1.2rem] leading-normal md:leading-[2.47rem] mb-4">
                AI Optimization
              </h5>
              <p className="font-normal text-lg pr-1">
                Receive tailored suggestions for keywords, formatting, and{" "}
                <span className="whitespace-nowrap">country-specific</span>{" "}
                standards.
              </p>
            </div>
            <div className="w-[50%] h-full bg-[#000006] rounded-[7.64px]" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="ml-5 md:ml-64">
          <div className="w-full md:w-[20.39rem] h-[19rem] md:h-[24.5rem] bg-[#000006] rounded-[7.64px] p-4 flex flex-col justify-between mt-20 hover:shadow-lg transition-shadow duration-300">
            <div className="text-white mt-2">
              <h5 className="font-semibold md:text-[1.88rem] text-[1.5rem] leading-[2.47rem] mb-4">
                TS Scoring
              </h5>
              <p className="font-normal text-lg">
                Receive tailored suggestions for keywords, formatting, and
                country-specific standards.
              </p>
            </div>
            <div className="bg-white w-full h-1/2 rounded-[7.64px]" />
          </div>
        </SwiperSlide>

          <SwiperSlide>
          <div className="w-full md:w-[20.39rem] h-[19rem] md:h-[24.5rem] bg-[#000006] rounded-[7.64px] p-4 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300">
            <div className="bg-white w-full h-1/2 rounded-[7.64px]" />
            <div className="text-white">
              <h5 className="font-semibold md:text-[1.88rem] text-[1.5rem] leading-[2.47rem] mb-4">
                Upload or Create
              </h5>
              <p className="font-normal text-lg">
                Start with your existing CV or build one from scratch using our
                drag-and-drop builder
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-full ml-5 md:w-[40rem] md:-ml-12">
          <div className="w-full md:w-[40rem] bg-white shadow-lg h-[19rem] md:h-[24.5rem] rounded-[7.64px] flex p-6 mt-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-full md:w-1/2 flex flex-col justify-center px-2 md:px-8">
              <h5 className="font-semibold md:text-[1.88rem] text-[1.2rem] leading-normal md:leading-[2.47rem] mb-4">
                AI Optimization
              </h5>
              <p className="font-normal text-lg pr-1">
                Receive tailored suggestions for keywords, formatting, and{" "}
                <span className="whitespace-nowrap">country-specific</span>{" "}
                standards.
              </p>
            </div>
            <div className="w-[50%] h-full bg-[#000006] rounded-[7.64px]" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="ml-5 md:ml-64">
          <div className="w-full md:w-[20.39rem] h-[19rem] md:h-[24.5rem] bg-[#000006] rounded-[7.64px] p-4 flex flex-col justify-between mt-20 hover:shadow-lg transition-shadow duration-300">
            <div className="text-white mt-2">
              <h5 className="font-semibold md:text-[1.88rem] text-[1.5rem] leading-[2.47rem] mb-4">
                TS Scoring
              </h5>
              <p className="font-normal text-lg">
                Receive tailored suggestions for keywords, formatting, and
                country-specific standards.
              </p>
            </div>
            <div className="bg-white w-full h-1/2 rounded-[7.64px]" />
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="flex items-center justify-center mt-12 lg:mt-[6rem] px-16">
        <BuildButton />
      </div>
    </section>
  );
};

export default HowItWorks;
