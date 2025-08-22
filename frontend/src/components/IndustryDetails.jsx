import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { industries } from "../pages/Industries";
import { IoMdArrowBack } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { gsap } from "gsap";

const IndustryDetails = () => {
  const { title } = useParams();
  const navigate = useNavigate();

  const industry = industries.find((ind) => ind.title === title);

  const titleRef = useRef(null);
  const sliderRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(sliderRef.current, {
        x: -150,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(descRef.current, {
        x: -100,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        ease: "power3.out",
      });
    });

    return () => ctx.revert(); 
  }, []);

  if (!industry) {
    return (
      <div className="p-10 text-center text-red-500">
        Industry not found.
        <button
          onClick={() => navigate(-1)}
          className="ml-4 text-blue-500 underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <section className="p-4 pt-20 md:py-2 md:px-16 bg-white">
      <h1
        ref={titleRef}
        className="text-2xl md:text-4xl md:text-start text-center font-bold text-[#d81d1d] my-5 md:mb-5"
      >
        {industry.title}
      </h1>

      <div ref={sliderRef} className="relative mb-6">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="rounded-xl shadow-lg max-h-[450px]"
        >
          {industry.imageArray.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <img
                  src={image}
                  alt={`${industry.title}-${index}`}
                  className="w-full md:h-[500px] h-[200px] object-cover rounded-xl"
                />

                <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <p ref={descRef} className="text-lg text-justify text-gray-700 mb-6">
        {industry.description}
      </p>

      <button
        onClick={() => navigate(-1)}
        className="mt-6 flex cursor-pointer items-center gap-2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
      >
        <IoMdArrowBack className="text-lg" />
        Back
      </button>
    </section>
  );
};

export default IndustryDetails;
