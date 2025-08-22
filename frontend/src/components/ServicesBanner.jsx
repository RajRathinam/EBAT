import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import gsap from "gsap";

const ServicesBanner = () => {
  const navigate = useNavigate();
  const imgRef = useRef(null);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imgRef.current, {
        x: -200,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        clearProps: "all",
      });

      gsap.from(overlayRef.current, {
        opacity: 0,
        duration: 1,
        delay: 0.3,
        clearProps: "all",
      });

      gsap.from(contentRef.current.children, {
        x: 150,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
        clearProps: "all",
      });

      gsap.from(buttonRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0,
        clearProps: "all",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between md:pb-0 pb-10 bg-white overflow-hidden">
      <div className="relative w-full md:w-[60%] flex justify-center md:justify-start">
        <img
          ref={imgRef}
          src="/servicePoster.webp"
          alt="Drone Services"
          className="h-64 sm:h-80 md:h-screen w-full object-cover 
          [clip-path:polygon(0_0,100%_0,100%_85%,50%_100%,0_85%)] 
          md:[clip-path:polygon(85%_0,100%_50%,85%_100%,0_100%,0_0)] shadow-xl"
        />
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-black/40 z-10
          [clip-path:polygon(0_0,100%_0,100%_85%,50%_100%,0_85%)] 
          md:[clip-path:polygon(85%_0,100%_50%,85%_100%,0_100%,0_0)]"
        ></div>
      </div>

      <div
        ref={contentRef}
        className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-12 text-center md:text-left px-6 relative z-20"
      >
        <h1 className="font-extrabold leading-tight text-gray-900 mb-6">
          <p className="text-3xl sm:text-4xl md:text-6xl">
            DRONE{" "}
            <span className="bg-gradient-to-r from-[#d81d1d] to-[#d1b34f] bg-clip-text text-transparent">
              SERVICES
            </span>
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl md:mt-2">
            FOR A{" "}
            <span className="bg-gradient-to-r from-[#d81d1d] to-[#d1b34f] bg-clip-text text-transparent">
              SMARTER
            </span>{" "}
            FUTURE
          </p>
        </h1>

        <p className="text-justify sm:text-lg text-gray-600 mb-6 leading-relaxed">
          We deliver cutting-edge drone solutions across agriculture, media,
          delivery, and industrial inspections. Our technology improves
          efficiency, safety, and productivity for the future.
        </p>

        <button
          ref={buttonRef}
          onClick={() => navigate("/services")}
          className="flex cursor-pointer items-center gap-3 md:px-5 px-3 md:py-3 py-1.5 border border-gray-700 rounded-full 
            text-gray-900 hover:bg-gray-100 transition mx-auto md:mx-0 relative z-30"
        >
          EXPLORE SERVICES
          <span className="flex items-center justify-center p-1.5 rounded-full bg-gradient-to-r from-[#d81d1d] to-[#d1b34f] text-white">
            <GoArrowUpRight size={20} />
          </span>
        </button>
      </div>
    </section>
  );
};

export default ServicesBanner;
