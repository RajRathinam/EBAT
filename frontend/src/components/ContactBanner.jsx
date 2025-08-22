import React, { useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ContactBanner = () => {
   const containerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animate-up", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
          toggleActions: "play",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-center text-center md:py-20 md:px-6 py-10 bg-white overflow-hidden"
    >
      
      <p className="animate-up uppercase tracking-widest text-sm md:text-base text-gray-500 mb-4">
        Get in Touch
      </p>

      <h1 className="font-extrabold space-y-2 md:space-y-5 leading-tight text-gray-900">
        <p className="animate-up text-3xl md:text-8xl">
          AERIAL{" "}
          <span className="bg-gradient-to-r from-[#d81d1d] to-[#d1b34f] bg-clip-text text-transparent">
            INNOVATION
          </span>
        </p>
        <p className="animate-up text-2xl md:text-5xl">
          FOR THE{" "}
          <span className="bg-gradient-to-r from-[#d81d1d] to-[#d1b34f] bg-clip-text text-transparent">
            FUTURE
          </span>{" "}
          OF
        </p>
        <p className="animate-up text-3xl md:text-8xl">
          <span className="bg-gradient-to-r from-[#d81d1d] to-[#d1b34f] bg-clip-text text-transparent">
            DRONE
          </span>{" "}
          TECHNOLOGY
        </p>
      </h1>

      <div className="animate-up md:mt-10 mt-5">
        <Link to='/contact' className="flex cursor-pointer font-light items-center gap-4 md:px-5 md:py-2 px-3 py-1.5 border border-gray-700 rounded-full text-gray-900 hover:bg-gray-100 transition">
          CONTACT
          <span className="flex items-center justify-center p-1.5 rounded-full bg-gradient-to-r from-[#d81d1d] to-[#d1b34f] text-white">
            <GoArrowUpRight size={18} />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default ContactBanner;
