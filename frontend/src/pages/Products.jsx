import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: "AcroDrone",
    purpose: "Precision Crop Monitoring",
    description:
      "AcroDrone is your intelligent farming companion, designed to optimize every acre with precision. Equipped with multispectral imaging, AI-based quantum analytics, and real-time environmental sensors, it provides comprehensive insights into crop health, soil fertility, and irrigation patterns. Whether used for seasonal yield estimation, early disease detection, or resource planning, AcroDrone empowers farmers to make data-driven decisions that enhance productivity and reduce waste. It's a powerful ally in transforming agriculture into a smarter, more sustainable practice.",
    image: "/acrobat1.png",
  },
  {
    name: "CineDrone",
    purpose: "Professional Cinematography",
    description:
      "CineDrone redefines aerial cinematography with its cinematic-grade 8K camera, gimbal stabilization, and AI-powered smart tracking. Built for directors, creators, and production crews, this drone autonomously adjusts flight paths and angles to capture perfect shots in dynamic environments. With customizable flight scripting, slow-motion capture, and real-time preview capabilities, CineDrone eliminates guesswork and maximizes creative control. Whether you're shooting commercials, films, or documentaries, CineDrone brings your vision to life from every breathtaking angle.",
    image: "/cinetron.png",
  },
  {
    name: "Portron",
    purpose: "Thermal Surveillance & Rescue",
    description:
      "Portron is engineered for high-stakes operations, combining rugged endurance with thermal imaging and night-vision capabilities. Designed specifically for emergency responders and rescue teams, it operates flawlessly in low-light and hazardous conditions. AI-assisted target recognition and GPS-linked heat maps make locating missing persons or identifying fire hotspots faster and more efficient. Portron is a mission-critical asset for firefighting, disaster relief, and military surveillance—where lives depend on speed, accuracy, and reliability.",
    image: "/portron.png",
  },
  {
    name: "Rectron",
    purpose: "Topographic Mapping & Inspection",
    description:
      "Rectron leads the way in surveying and structural inspection with its LiDAR integration, photogrammetry tools, and centimeter-level GPS precision. Tailored for engineers, architects, and infrastructure planners, it creates highly accurate 3D maps and digital twins of buildings, landscapes, and construction zones. With autonomous path planning and obstacle detection, Rectron navigates complex terrains with ease, providing invaluable data for risk analysis, compliance checks, and ongoing maintenance.",
    image: "/rectron.webp",
  },
  {
    name: "CleanDrone",
    purpose: "Urban Cleaning & Sanitation",
    description:
      "CleanDrone is revolutionizing the way cities maintain hygiene and public health. Featuring high-capacity spraying systems, AI vision for dirt detection, and autonomous flight routing, this drone performs tasks ranging from facade washing and road sanitization to insecticide dispersion. Ideal for municipal authorities and facility managers, CleanDrone ensures consistent cleanliness in high-traffic areas, reduces human exposure to pollutants, and supports pandemic response protocols in urban zones.",
    image: "/cleantron.png",
  },
  {
    name: "Scantron",
    purpose: "Traffic Monitoring & Crowd Analysis",
    description:
      "Scantron is the ultimate urban analytics drone, using edge-based AI and real-time computer vision to interpret complex movement patterns. From traffic congestion mapping and accident detection to crowd density monitoring during public events, Scantron delivers actionable insights instantly. Its data is GDPR-compliant with facial anonymization, making it suitable for civic authorities, traffic departments, and event organizers seeking to improve safety, flow, and response time through smart aerial surveillance.",
    image: "/scantron.png",
  },
  {
    name: "IndustroDrone",
    purpose: "Industrial Inspection & Maintenance",
    description:
      "IndustroDrone is built for the most demanding industrial environments, offering robust flight capabilities, zoom-enabled 4K cameras, and thermal diagnostics. Whether inspecting pipelines, storage tanks, smokestacks, or confined machinery spaces, it collects high-fidelity data without putting human workers at risk. Its corrosion detection, heat signature mapping, and real-time defect analysis make it indispensable for oil & gas, power generation, and heavy manufacturing sectors that demand 24/7 uptime and safety compliance.",
    image: "/industron.png",
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray(".product-section");

    sections.forEach((section, i) => {
      const image = section.querySelector(".product-image");
      const text = section.querySelector(".product-text");

      gsap.from(image, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        x: i % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.from(text, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });
    });
  }, []);

  return (
    <section ref={containerRef} className="p-4  pt-24  md:px-16 md:py-10 bg-gray-100">
    
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
        Our{" "}
        <span className="bg-gradient-to-r from-[#d81d1d] to-[#d1b34f] bg-clip-text text-transparent">
          Products
        </span>
      </h1>


      <div className="w-40 h-1.5 bg-[#d81d1d] mx-auto rounded-full md:mb-10"></div>

      <div className="md:space-y-20 space-y-10">
        {products.map((drone, index) => (
          <div
            key={index}
            className={`product-section flex flex-col md:flex-row items-center md:gap-8 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
        
            <img
              src={drone.image}
              alt={drone.name}
              className="product-image w-full md:w-1/2 md:h-100 h-64 object-contain drop-shadow-xl hover:scale-105 transition-all duration-300"
            />

          
            <div className="product-text w-full md:w-1/2 space-y-2 text-center md:text-left">
              <h2 className="text-3xl font-bold text-slate-800">{drone.name}</h2>

              <div className="w-16 h-1 bg-[#d81d1d] mx-auto md:mx-0 rounded-full"></div>

              <p className="text-[#d81d1d] font-medium text-lg">
                {drone.purpose}
              </p>
              <p className="text-slate-600 text-justify">{drone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
