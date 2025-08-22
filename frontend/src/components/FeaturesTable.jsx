import React, { useRef } from "react";
import { FiCpu, FiSettings, FiTrendingUp } from "react-icons/fi";
import { FaLeaf, FaIndustry, FaTools, FaRobot } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeaturesTable = () => {
  const containerRef = useRef(null);

  const features = [
    { text: "AI-Driven Solutions", icon: <FaRobot /> },
    { text: "Local Manufacturing", icon: <FaIndustry /> },
    { text: "Sustainability Focus", icon: <FaLeaf /> },
    { text: "Customized Drone Solutions", icon: <FiSettings /> },
    { text: "Industry-Specific Drones", icon: <FiCpu /> },
    { text: "Integrated Training Programs", icon: <MdSchool /> },
    { text: "Post-Sale Maintenance", icon: <FaTools /> },
    { text: "Technological Leadership", icon: <FiTrendingUp /> },
  ];

  const sizes = [
    "col-span-2",
    "row-span-2",
    "",
    "col-span-2 row-span-2",
    "",
    "col-span-2",
    "col-span-2",
    "col-span-2",
  ];


  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".feature-card").forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%", 
            toggleActions: "play none none reverse",
          },
          x: i % 2 === 0 ? -100 : 100, 
          opacity: 0,
          duration: 0.2,
          ease: "power2.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16 p-2 bg-gray-100 md:px-10">
      <div className="max-w-7xl mx-auto md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="uppercase tracking-widest text-sm text-[#d81d1d] font-semibold">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our{" "}
            <span className="bg-gradient-to-r from-[#d81d1d] to-[#d1b34f] bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <div className="w-20 h-1.5 bg-[#d81d1d] mx-auto rounded-full mt-4"></div>
        </div>

        {/* Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] md:auto-rows-[180px] gap-6"
        >
          {features.map((feature, i) => (
            <div
              key={i}
              className={`feature-card p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300 ease-in-out border border-gray-100
                flex flex-col items-center justify-center text-center gap-2
                col-span-2
                ${sizes[i]
                  .replace(/col-span-2/g, "md:col-span-2")
                  .replace(/row-span-2/g, "md:row-span-2")
                }`}
            >
              <span className="text-4xl text-[#d81d1d]">{feature.icon}</span>
              <span className="text-lg font-semibold bg-gradient-to-r from-[#d81d1d] to-[#d1b34f] bg-clip-text text-transparent">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesTable;
