import React, { useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);

export const industries = [
  {
    title: "Agriculture",
    img: "/poster/agriculture_drone.webp",
    description:
      "Drones in agriculture are transforming traditional farming into a data-driven and highly efficient process. With aerial imaging and precision sensors, drones can monitor crop health, soil fertility, irrigation patterns, and even detect pest infestations before they spread. Farmers use them for crop spraying, seeding, and mapping large fields within minutes, drastically reducing manual labor. By providing real-time insights, drones help farmers optimize water usage, apply fertilizers more effectively, and make informed decisions about harvesting. This technology not only lowers operational costs but also increases yields while promoting sustainable practices. In the future, agricultural drones are expected to integrate with AI and IoT to create fully automated smart farming systems that ensure food security for growing populations.",
    imageArray: [
      "/poster/agriculture_drone.webp",
      "/poster/agriculture_2.webp",
      "/poster/agriculture_3.webp",
      "/poster/agriculture_4.webp",
    ],
  },
  {
    title: "Film & Media",
    img: "/poster/cinema_drone.webp",
    description:
      "In the film and media industry, drones have unlocked new dimensions of storytelling and creativity. Aerial shots that once required helicopters, cranes, or expensive rigs can now be captured at a fraction of the cost with drones. They provide smooth, cinematic movements and breathtaking bird’s-eye views that elevate production quality in movies, TV shows, commercials, and live events. Filmmakers can experiment with dynamic camera angles, chase sequences, and immersive panoramas that were previously impossible. Beyond cinema, drones are now widely used in sports broadcasting, wedding videography, and even virtual reality content creation. As drone technology advances with 4K/8K cameras, AI stabilization, and autonomous flight modes, the future of visual media will continue to push the boundaries of imagination and audience engagement.",
    imageArray: [
      "/poster/cinema_drone.webp",
      "/poster/film_2.webp",
      "/poster/film_3.webp",
      "/poster/film_4.webp",
    ],
  },
  {
    title: "Delivery Services",
    img: "/poster/delivery_drone.webp",
    description:
      "Drones are revolutionizing logistics by offering fast, reliable, and cost-effective last-mile delivery solutions. Companies are increasingly deploying drones to deliver medical supplies to remote villages, food to urban neighborhoods, and e-commerce packages directly to customers’ doorsteps. This eliminates traffic delays, reduces fuel consumption, and lowers carbon emissions, making deliveries both quicker and greener. In disaster zones or emergency situations, drones can reach areas inaccessible by road and deliver life-saving supplies within minutes. For businesses, drone delivery reduces dependency on human couriers, cuts operational costs, and improves customer satisfaction with faster service. With ongoing advancements in payload capacity, autonomous navigation, and air traffic integration, drone delivery is set to become a mainstream feature of global supply chains in the coming decade.",
    imageArray: [
      "/poster/delivery_drone.webp",
      "/poster/delivery_2.webp",
      "/poster/delivery_3.webp",
      "/poster/delivery_4.webp",
    ],
  },
  {
    title: "Survey & Mapping",
    img: "/poster/survey_drone.webp",
    description:
      "Surveying and mapping have traditionally required extensive manpower, expensive equipment, and days of fieldwork. Drones, however, are revolutionizing this process by capturing high-resolution aerial data that can be converted into accurate maps, 3D models, and topographic surveys within minutes. Equipped with LiDAR, thermal, or multispectral sensors, drones deliver centimeter-level accuracy in measuring land elevations, construction sites, and natural terrains. Industries such as real estate, mining, civil engineering, and urban planning rely heavily on drone surveys to speed up decision-making and reduce costs. Drones also improve worker safety by eliminating the need to manually access dangerous terrains or hazardous sites. As mapping software evolves, drone-based surveys are expected to integrate seamlessly with AI and digital twins, enabling real-time monitoring of large-scale infrastructure projects and smart cities.",
    imageArray: [
      "/poster/survey_drone.webp",
      "/poster/survey_2.webp",
      "/poster/survey_3.webp",
      "/poster/survey_4.webp",
    ],
  },
  {
    title: "Wildlife & Environment Monitoring",
    img: "/poster/wildlife_drone.webp",
    description:
      "Drones have become an indispensable tool for environmentalists, researchers, and conservationists. They allow monitoring of fragile ecosystems and wildlife habitats without disturbing natural behaviors. Equipped with thermal imaging and AI tracking, drones can monitor endangered species, detect illegal poaching activities, and assess the health of forests or coral reefs. They are also used to study the impacts of deforestation, pollution, and climate change by collecting data across vast and remote landscapes. In disaster-prone regions, drones assist in assessing damage from floods, forest fires, or hurricanes, providing vital information for recovery planning. Their ability to operate in hard-to-reach or dangerous environments makes them ideal for long-term ecological research. In the coming years, drones are expected to integrate with machine learning models to automatically identify species, monitor migrations, and contribute significantly to global biodiversity preservation.",
    imageArray: [
      "/poster/wildlife_drone.webp",
      "/poster/wildlife_2.webp",
      "/poster/wildlife_3.webp",
      "/poster/wildlife_4.webp",
    ],
  },
  {
    title: "Construction",
    img: "/poster/construction_drone.webp",
    description:
      "The construction industry is rapidly adopting drones to improve project management, safety, and efficiency. Drones provide real-time aerial views of construction sites, allowing managers to monitor progress, track materials, and ensure compliance with schedules. With 3D mapping and volumetric measurement capabilities, drones can calculate earthworks, monitor stockpiles, and identify structural deviations with precision. This helps project teams detect potential risks, prevent costly errors, and improve resource allocation. Beyond surveying, drones are also used for safety inspections in high-risk areas such as tall structures or scaffolding, minimizing the need for human workers to enter hazardous zones. Their ability to create digital twins of construction sites allows for better collaboration between architects, engineers, and contractors. As smart cities and mega-infrastructure projects expand, drones will play an increasingly central role in transforming construction into a safer, faster, and more data-driven industry.",
    imageArray: [
      "/poster/construction_drone.webp",
      "/poster/construction_2.webp",
      "/poster/construction_3.webp",
      "/poster/construction_4.webp",
    ],
  },
  {
    title: "Oil & Gas",
    img: "/poster/oilgas_drone.webp",
    description:
      "The oil and gas sector depends heavily on constant monitoring and inspection of pipelines, refineries, and offshore platforms. Traditionally, these inspections involve high costs and expose workers to hazardous environments. Drones now offer a safer and more cost-efficient alternative by providing aerial and thermal imaging to detect leaks, corrosion, or equipment malfunctions. They are capable of inspecting hard-to-reach areas such as flare stacks, offshore rigs, or storage tanks without shutting down operations, minimizing downtime. By delivering real-time data, drones help companies quickly identify risks and carry out preventive maintenance, improving overall operational efficiency. Additionally, drones support environmental compliance by monitoring spills and emissions. With the integration of AI and predictive analytics, drones in oil and gas will play a vital role in ensuring safer, smarter, and more sustainable energy operations worldwide.",
    imageArray: [
      "/poster/oilgas_drone.webp",
      "/poster/oilgas_3.webp",
      "/poster/oilgas_4.webp",
    ],
  },
  {
    title: "Emergency Response",
    img: "/poster/emergency_drone.webp",
    description:
      "During emergencies and natural disasters, drones are becoming a lifeline for rescue and relief operations. They can quickly fly over disaster-struck areas, capturing real-time aerial views that help authorities assess damage and coordinate response strategies. In flood or earthquake zones, drones are used to locate survivors, deliver food and medical supplies, and map safe evacuation routes. Their ability to cover large areas faster than ground vehicles saves precious time when every second matters. Firefighting units deploy drones equipped with thermal cameras to detect hotspots and plan fire suppression strategies, while medical teams use drones to deliver life-saving medicines and blood samples to remote or blocked regions. With AI-powered analytics, future drones will play an even greater role in predicting risks, enhancing situational awareness, and ensuring faster, more efficient disaster management worldwide.",
    imageArray: [
      "/poster/emergency_drone.webp",
      "/poster/emergency_2.webp",
      "/poster/emergency_3.webp",
      "/poster/emergency_4.webp",
    ],
  },
  {
    title: "Security & Surveillance",
    img: "/poster/security_drone.webp",
    description:
      "Security and surveillance have reached new levels of efficiency with drone technology. Drones provide real-time monitoring of large areas, making them invaluable for border security, crowd management, and critical infrastructure protection. Equipped with high-definition cameras, night-vision sensors, and AI-powered analytics, drones can detect unusual activities, identify intruders, and provide live feeds to security teams. This reduces the need for manual patrols and enables faster response to potential threats. In commercial use, drones enhance security at events, stadiums, industrial zones, and private properties. Law enforcement agencies also rely on drones for tracking suspects, monitoring protests, and gathering evidence without endangering officers. As artificial intelligence continues to evolve, drones will be able to autonomously patrol areas, recognize faces, and integrate with centralized surveillance systems, making them a cornerstone of modern security operations.",
    imageArray: [
      "/poster/security_drone.webp",
      "/poster/security_2.webp",
      "/poster/security_3.webp",
      "/poster/security_4.webp",
    ],
  },
  {
    title: "Mining",
    img: "/poster/mining_drone.webp",
    description:
      "Mining operations face significant challenges, including worker safety, environmental compliance, and cost management. Drones are transforming the sector by providing accurate aerial data that improves operational efficiency and reduces risks. They are used for volumetric measurements of stockpiles, mapping excavation sites, and monitoring blasting operations with precision. Drones also help identify hazardous conditions such as unstable terrain, landslides, or gas leaks, protecting workers from unnecessary exposure. By creating 3D maps of mines, drones allow managers to plan operations more effectively and minimize environmental impact. Regulatory compliance becomes easier as drones track reclamation efforts and ensure companies adhere to sustainability standards. Looking ahead, drones are expected to work in synergy with autonomous mining vehicles and AI analytics, creating safer, smarter, and more productive mining environments.",
    imageArray: [
      "/poster/mining_drone.webp",
      "/poster/mining_2.webp",
      "/poster/mining_3.webp",
      "/poster/mining_4.webp",
    ],
  },
  {
    title: "Maritime",
    img: "/poster/maritime_drone.webp",
    description:
      "In the maritime industry, drones are revolutionizing port management, vessel inspections, and maritime security. Inspecting ships and offshore structures manually is costly and dangerous, but drones can quickly scan hulls, masts, and cargo holds with high accuracy. Authorities use them to monitor coastal waters, track illegal fishing activities, and detect oil spills or environmental hazards. Drones enhance port efficiency by surveying traffic, inspecting container yards, and streamlining cargo operations. They are also critical in search-and-rescue missions at sea, where they can locate stranded vessels or individuals faster than traditional methods. As drone technology integrates with AI, satellite networks, and autonomous navigation systems, the maritime sector will benefit from safer, more sustainable, and highly efficient operations across global waters.",
    imageArray: [
      "/poster/maritime_drone.webp",
      "/poster/maritime_2.webp",
      "/poster/maritime_4.webp",
    ],
  },
];


const Industries = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = containerRef.current.querySelectorAll(".industry-card");

    cards.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        x: i % 2 === 0 ? -150 : 150, 
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });
  }, []);

  return (
    <section ref={containerRef} className="p-4 pt-24 md:px-16 md:py-10 bg-white">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
        Which&nbsp;
        <span className="bg-gradient-to-r from-[#d81d1d] to-[#d1b34f] bg-clip-text text-transparent">
          Industries
        </span>
        &nbsp;Do We Serve?
      </h1>
      <div className="w-40 h-1.5 bg-[#d81d1d] mx-auto rounded-full mb-5 md:mb-10"></div>

      <div className="w-full md:px-16 py-5 space-y-10">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="industry-card relative w-full 2xl:h-[900px] md:h-[500px] h-[300px] rounded-2xl overflow-hidden shadow-lg"
          >
           
            <img
              src={industry.img}
              alt={industry.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

         
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute left-0 md:bottom-0 -bottom-1 flex flex-col gap-3">
              <div className="relative">
                <span className="flex gap-1 rounded-tr-full bg-white md:px-5 px-4 py-1 font-bold text-slate-700 text-[12px]  md:text-2xl 2xl:text-4xl">
                  {industry.title}
                </span>
                <img
                  src="/patch_corner-1.png"
                  alt=""
                  className="absolute md:-top-10 -top-4.5 left-0 md:h-10 md:w-10 h-5 w-5"
                />
              </div>
            </div>

          
            <div className="absolute right-0 top-0">
              <div className="relative cursor-pointer group">
                <Link to={`/industry/${industry.title}`}>
                  <span className="flex rounded-bl-4xl md:rounded-bl-3xl bg-white p-2 md:p-5">
                    <GoArrowUpRight className="text-slate-500 group-hover:text-[#d81d1d] text-xl md:text-4xl" />
                  </span>
                </Link>
                <img
                  src="/patch_corner-2.png"
                  alt=""
                  className="absolute hidden md:flex -bottom-5 right-0 h-5 w-5"
                />
                <img
                  src="/patch_corner-2.png"
                  alt=""
                  className="absolute hidden md:flex top-0 -left-5 h-5 w-5"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
