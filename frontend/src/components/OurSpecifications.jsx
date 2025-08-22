
import React, { useRef } from "react";
import { FaRobot, FaLeaf, FaIndustry, FaTools } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const OurSpecifications = () => {
  const specs = [
    {
      title: "Integrated AI Solutions with Edge Computing",
      desc: "Our drones feature advanced AI and machine learning with edge computing, enabling precise, efficient, and fully autonomous operations.",
      icon: <FaRobot />,
    },
    {
      title: "Eco-Friendly Technology",
      desc: "We prioritize sustainability with drone designs that reduce environmental impact while delivering high operational efficiency.",
      icon: <FaLeaf />,
    },
    {
      title: "Versatility Across Industries",
      desc: "From agriculture to film production and logistics, our drones adapt seamlessly to a variety of applications and industry needs.",
      icon: <FaIndustry />,
    },
    {
      title: "Local Manufacturing",
      desc: "We manufacture drones locally to cut logistics costs, speed up delivery, and strengthen ties with the communities we serve.",
      icon: <FaTools />,
    },
  ];

  const containerRef = useRef(null);

 
useGSAP(() => {
  const ctx = gsap.context(() => {
    gsap.utils.toArray(".service-card").forEach(card => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        x: -100,
        opacity: 0,
        duration: 0.2,
        ease: "power3.out",
      });
    });
  }, containerRef);

  return () => ctx.revert();
}, []);


  return (
    <section  ref={containerRef} className="py-16 bg-gray-100 md:px-10 ">
      <div className="max-w-7xl mx-auto md:px-6 px-2">
      
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Our{" "}
          <span className="bg-gradient-to-r from-[#d81d1d] to-[#d1b34f] bg-clip-text text-transparent">
            Expertise
          </span>
        </h1>
        <div className="w-40 h-1.5 bg-[#d81d1d] mx-auto rounded-full mb-10"></div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="service-card opacity-100 bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300 ease-in-out border border-gray-100"
            >
            
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#d81d1d] to-[#d1b34f] text-white text-2xl mb-4 shadow-md">
                {spec.icon}
              </div>

            
              <h3 className="text-lg md:text-xl font-semibold text-[#d81d1d] mb-3">
                {spec.title}
              </h3>

             
              <p className="text-gray-600 text-justify leading-relaxed">
                {spec.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSpecifications;
