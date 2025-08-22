import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [ { title: "Agricultural Drones Using AI based Quantum Computing", images: [ "/services/agriculture3.webp", "/services/agriculture2.webp", "/services/agriculture.webp", "/services/agriculture1.webp" ], features: "Equipped with state-of-the-art multispectral and hyperspectral imaging systems that can capture data beyond the visible spectrum, these drones leverage AI-driven analytics to identify crop health issues early. They integrate quantum computing algorithms to process massive datasets in real-time, enabling farmers to make informed decisions on irrigation, fertilization, and harvesting with unprecedented accuracy.", benefits: "Significantly increases overall crop yield by identifying and addressing problems before they escalate. Reduces excessive pesticide usage through targeted application, lowering environmental impact and costs. Optimizes water distribution by analyzing soil moisture levels and weather patterns, ensuring sustainable resource management while improving long-term farm productivity.", link: "agriculture", }, { title: "Cinematography Drones using AI based Edge Computing", images: [ "/services/cinematography.webp", "/services/cinematography1.webp", "/services/cinematography2.webp", "/services/cinematography3.webp" ], features: "Equipped with ultra-high-resolution cameras, advanced gimbal stabilization, and AI-driven subject tracking, these drones capture smooth, cinematic footage from unique aerial perspectives. Edge computing technology processes footage in real-time directly on the drone, automatically adjusting angles, lighting, and focus for professional-grade results without requiring extensive post-production.", benefits: "Delivers breathtaking, cinematic-quality shots for film, advertising, and events, drastically reducing on-ground camera crew requirements. Speeds up production timelines by eliminating the need for multiple takes and manual camera adjustments. Expands creative possibilities by enabling dynamic movements and angles that are otherwise impossible with traditional filming equipment.", link: "cinematography", }, { title: "Delivery Drones using AI Based Edge Computing", images: [ "/services/delivery.webp", "/services/delivery1.webp", "/services/delivery2.webp", "/services/delivery3.webp" ], features: "Designed with a robust and weather-resistant frame, these drones can carry varied payload sizes while maintaining flight stability. Integrated AI navigation systems enable precise obstacle avoidance, real-time route optimization, and autonomous landing in both urban and rural environments. Edge computing ensures rapid decision-making without relying on slow cloud communication.", benefits: "Enhances delivery efficiency by significantly cutting down transit times, particularly for urgent goods such as medicines or essential supplies. Lowers operational costs by reducing dependency on human couriers and traditional vehicles. Expands delivery coverage to remote, hard-to-reach locations, improving accessibility for underserved communities.", link: "delivery", }, { title: "Surveillance and Inspection Drones using AI Based Edge Computing", images: [ "/services/surviellience2.webp", "/services/surviellience1.webp", "/services/surviellience.webp", "/services/surviellience3.webp" ], features: "Equipped with advanced night vision cameras, thermal imaging sensors, and AI-powered anomaly detection, these drones provide 24/7 surveillance capabilities. Real-time video transmission is enhanced by edge computing, enabling instant analysis for identifying security threats, structural weaknesses, or maintenance needs without delay.", benefits: "Strengthens security operations by offering continuous monitoring in high-risk or restricted areas. Reduces the risk to human inspectors in hazardous environments such as power plants, oil rigs, or tall structures. Enables preventive maintenance by detecting early signs of wear, corrosion, or damage, ultimately saving costs and preventing accidents.", link: "surveillance", }, ];

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = services.find((s) => s.link === id);

  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".image-item", {
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".content-item", {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-red-500">Service Not Found</h1>
        <button
          onClick={() => navigate("/")}
          className="mt-4 flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          <IoMdArrowBack className="text-xl" /> Go Back
        </button>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="min-h-screen p-4  pt-24  md:px-16 md:py-10 bg-gray-100">
      <h1 className="text-2xl md:text-4xl text-center font-bold text-[#d81d1d] mb-5 md:mb-10">
        {service.title}
      </h1>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {service.images.map((img, index) => (
            <div
              key={index}
              className={`image-item overflow-hidden rounded-lg 
                ${index === 0 ? "row-span-2" : ""} 
                ${index === 3 ? "col-span-2" : ""}`}
            >
              <img
                src={img}
                alt={`${service.title} ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="flex h-full flex-col justify-baseline content-item">
          <p className="text-md text-gray-700 text-justify mb-3 leading-relaxed">
            <span className="font-semibold text-[#d81d1d]">Features:</span>{" "}
            {service.features}
          </p>
          <p className="text-md text-gray-700 text-justify leading-relaxed">
            <span className="font-semibold text-[#d81d1d]">Benefits:</span>{" "}
            {service.benefits}
          </p>
        </div>
      </div>

      <button
        onClick={() => navigate(-1)}
        className="mt-6 flex cursor-pointer items-center gap-2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
      >
        <IoMdArrowBack className="text-lg" />
        Back
      </button>
    </div>
  );
};

export default ServiceDetails;
