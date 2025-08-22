import React from "react";

const keyPersonnel = [
  {
    name: "Sridevi K BES, MBA (PhD)",
    role: "Managing Director",
    img: "/profileAvatar.jpeg", 
    background:
      "Over 25 years of IT experience, specializing in aviation, banking, pharma, insurance, and telecom manufacturing domains.",
    previousRoles: [
      "Managed production and warehouse applications at Nokia's manufacturing unit, integrated to SAP.",
      "Served as a Global Program Manager at IBM, managing big data infrastructure development projects and quality initiatives."
    ],
    expertise: [
      "Certified in PMP (USA), Prince 2 (UK), and Agile methodologies.",
      "Data science certified from IBM.",
      "Extensive experience in global project management and strategic implementations."
    ],
    vision:
      "To harness cutting-edge technology for transformative solutions in drone applications."
  },
  {
    name: "Ajith Kumar",
    role: "Chief Technology Officer",
    img: "/profileAvatar.jpeg",
    background:
      "Expert in computer vision and robotics with a focus on solving real-world problems using AI, robotics, IoT, and SLAM research.",
    objective:
      "Keep EBAT at the forefront of innovation with next-gen drone solutions."
  },
  {
    name: "Kripa Sankar",
    role: "Program Director",
    img: "/profileAvatar.jpeg",
    background:
      "23 years in IT with roles at HCL, Accenture, IBM, and Wells Fargo. Received 'Outstanding Performer' award for 3 years at HCL US.",
    roleDesc:
      "Oversees project management at EBAT, ensuring timelines and quality."
  },
  {
    name: "Uma Devi Bitra",
    role: "Program Director - Data Scientist",
    img: "/profileAvatar.jpeg",
    background:
      "22 years in IT leading complex cross-border projects in Data Analysis, Reporting, and Client Management.",
    passion:
      "Deliver technical and business objectives through Data Analytics."
  },
  {
    name: "Amit Kumar",
    role: "Head Projects & PMO",
    img: "/profileAvatar.jpeg",
    background:
      "14+ years in Financial Services, Banking, Insurance, E-commerce, and Digital Asset Management.",
    skills:
      "Development, Project Management, Salesforce Admin, Test Automation."
  }
];


const KeyPersonnel = () => {
  return (
    <section className="py-12 md:px-10 bg-gray-100">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
        The Minds Be
        <span className="bg-gradient-to-r from-[#d81d1d] to-[#d1b34f] bg-clip-text text-transparent">
          hind EBAT
        </span>
      </h1>
      <div className="w-40 h-1.5 bg-[#d81d1d] mx-auto rounded-full mb-10"></div>

      <div className="md:space-y-10 space-y-5">
        {keyPersonnel.map((person, index) =>
          person.role === "Managing Director" ? (
            <div
              key={index}
              className="bg-white md:px-10 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col md:flex-row"
            >
              <img
                src={person.img}
                alt={person.name}
                className="w-full md:w-1/3 object-cover"
              />
              <div className="p-6 flex-1">
                <h2 className="text-3xl font-bold text-gray-800">{person.name}</h2>
                <p className="text-lg text-[#d81d1d] font-medium mb-3">{person.role}</p>

                <p className="text-gray-600 mb-4">
                  <strong>Background:</strong> {person.background}
                </p>

                {person.previousRoles && (
                  <div className="mb-4">
                    <strong>Previous Roles:</strong>
                    <ul className="list-disc pl-6 text-gray-600">
                      {person.previousRoles.map((role, i) => (
                        <li key={i}>{role}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {person.expertise && (
                  <div className="mb-4">
                    <strong>Expertise:</strong>
                    <ul className="list-disc pl-6 text-gray-600">
                      {person.expertise.map((skill, i) => (
                        <li key={i}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {person.vision && (
                  <p className="text-gray-600">
                    <strong>Vision:</strong> {person.vision}
                  </p>
                )}
              </div>
            </div>
          ) : null
        )}


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
          {keyPersonnel
            .filter((p) => p.role !== "Managing Director")
            .map((person, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-50 h-auto mx-auto object-fit"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {person.name}
                  </h2>
                  <p className="text-sm text-[#d81d1d] font-medium mb-3">
                    {person.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-2">{person.background}</p>
                  {person.objective && (
                    <p className="text-gray-600 text-sm mb-2">
                      <strong>Objective:</strong> {person.objective}
                    </p>
                  )}
                  {person.roleDesc && (
                    <p className="text-gray-600 text-sm mb-2">{person.roleDesc}</p>
                  )}
                  {person.passion && (
                    <p className="text-gray-600 text-sm mb-2">
                      <strong>Passion:</strong> {person.passion}
                    </p>
                  )}
                  {person.skills && (
                    <p className="text-gray-600 text-sm mb-2">
                      <strong>Skills:</strong> {person.skills}
                    </p>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default KeyPersonnel;
