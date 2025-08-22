import React, { useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";


const ContactBanner = () => {
  
  return (
    <section
      className="flex flex-col items-center justify-center text-center md:py-20 md:px-6 py-10 bg-white overflow-hidden"
    >
      
      <p className="uppercase tracking-widest text-sm md:text-base text-gray-500 mb-4">
        Get in Touch
      </p>

      <h1 className="font-extrabold space-y-2 md:space-y-5 leading-tight text-gray-900">
        <p className="text-3xl md:text-8xl">
          AERIAL{" "}
          <span className="bg-gradient-to-r from-[#d81d1d] to-[#d1b34f] bg-clip-text text-transparent">
            INNOVATION
          </span>
        </p>
        <p className="text-2xl md:text-5xl">
          FOR THE{" "}
          <span className="bg-gradient-to-r from-[#d81d1d] to-[#d1b34f] bg-clip-text text-transparent">
            FUTURE
          </span>{" "}
          OF
        </p>
        <p className="text-3xl md:text-8xl">
          <span className="bg-gradient-to-r from-[#d81d1d] to-[#d1b34f] bg-clip-text text-transparent">
            DRONE
          </span>{" "}
          TECHNOLOGY
        </p>
      </h1>

      <div className="md:mt-10 mt-5">
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
