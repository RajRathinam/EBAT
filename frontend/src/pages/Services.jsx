import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    img: "/services/agriculture.webp",
    title: "Agricultural Drones Using AI based Quantum computing",
    link: "/services/agriculture",
  },
  {
    img: "/services/cinematography.webp",
    title: "Cinematography Drones using AI based Edge computing",
    link: "/services/cinematography",
  },
  {
    img: "/services/delivery.webp",
    title: "Delivery Drones using AI Based Edge computing",
    link: "/services/delivery",
  },
  {
    img: "/services/surviellience.webp",
    title: "Surveillance and Inspection Drones using AI Based Edge Computing",
    link: "/services/surveillance",
  },
];

const Services = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = containerRef.current.querySelectorAll(".service-card");

    gsap.from(cards, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      x: -150,
      opacity: 0,
      duration: 1,
      stagger: 0.2, 
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="p-4 pt-24  md:px-16 md:py-10 bg-gray-100" ref={containerRef}>
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
        Our{" "}
        <span className="bg-gradient-to-r from-[#d81d1d] to-[#d1b34f] bg-clip-text text-transparent">
          Services
        </span>
      </h2>

      <div className="w-40 h-1.5 bg-[#d81d1d] mx-auto rounded-full mb-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative cursor-pointer group service-card"
            onClick={() => navigate(service.link)}
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-80 object-cover rounded-xl shadow-lg md:group-hover:opacity-80 transition"
            />

            <div className="absolute inset-0 bg-black/40 flex rounded-xl items-end py-10 justify-center md:opacity-0 group-hover:opacity-100 transition">
              <h3 className="text-white text-lg font-bold text-center px-2">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
