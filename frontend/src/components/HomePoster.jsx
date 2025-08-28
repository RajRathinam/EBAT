import React from 'react';
import '../index.css';
import { TbWorld, TbBrandLinkedin } from "react-icons/tb";
import { FiMail } from "react-icons/fi";

const HomePoster = () => {
  const iconStyles = "cursor-pointer text-slate-700 text-[24px] hover:text-slate-800 transition-all duration-75 hover:scale-115";

  const iconLinks = [
    {
      icon: TbBrandLinkedin,
      url: "mailto:support@ebat.in"
    },
    {
      icon: TbWorld,
      url: "mailto:support@ebat.in"
    },
    {
      icon: FiMail,
      url: "mailto:support@ebat.in"
    }
  ];

  return (
    <main className='p-2 pt-24 md:px-10 md:py-10'>
      <section className="relative">
        <img
          src="/poster.webp"
          alt="Home Page Banner"
          className="h-screen w-screen object-cover"
        />

        {/* Title Section */}
        <div className="absolute md:left-0 -left-0.5 top-0 flex flex-col gap-3">
          <div className="relative w-fit">
            <span className="inline rounded-br-4xl bg-white px-1 pr-3 pb-4 md:pb-6 font-bold tracking-wide text-3xl md:text-7xl 2xl:text-8xl">
              <span className="text-slate-800">Drone </span>
              <span className="bg-gradient-to-r from-[#d81d1d] to-[#d1b34f] bg-clip-text text-transparent">Application</span>
            </span>
            <img
              src="/patch_corner.png"
              alt=""
              className="absolute md:-right-10 -top-0.5 -right-8.5 md:h-10 md:w-10 h-9 w-9"
            />
          </div>

          <span className="relative inline w-fit rounded-br-4xl bg-white px-1 pr-3 pb-4 md:pb-6 md:pt-3 font-bold tracking-wide text-3xl md:text-7xl 2xl:text-8xl">
            <span className="bg-gradient-to-r from-[#d81d1d] to-[#d1b34f] bg-clip-text text-transparent">Specialist</span>
            <img
              src="/patch_corner.png"
              alt=""
              className="absolute md:top-5.5 top-1 -right-8 md:-right-10 md:h-10 md:w-10 h-9 w-9"
            />
            <img
              src="/patch_corner.png"
              alt=""
              className="absolute md:-bottom-10 -bottom-9.5 left-0 h-10 w-10"
            />
          </span>
        </div>

        {/* Company Name */}
        <div className="absolute left-0 md:bottom-0 -bottom-1 flex flex-col gap-3">
          <div className="relative">
            <span className="inline rounded-tr-4xl bg-white md:px-5 px-2 font-bold text-slate-700 text-[13px] md:text-2xl 2xl:text-4xl">
              <span className="text-[#d81d1d]">ENLIVENBOT AI TECHNOLOGIES</span> PRIVATE LIMITED
            </span>
            <img
              src="/patch_corner-1.png"
              alt=""
              className="absolute md:-top-10 -top-3.5 left-0 md:h-10 md:w-10 h-5 w-5"
            />
          </div>
        </div>

        {/* Desktop Icons */}
        <div className="absolute hidden md:flex right-0 top-1/2 -translate-y-1/2">
          <div className="relative">
            <img
              src="/patch_icons.png"
              alt="Patch Icons"
              className="hidden md:flex h-100 w-12"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-3xl text-white">
              {iconLinks.map(({ icon: Icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="External Link"
                >
                  <Icon className={iconStyles} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Icons */}
        <div className="absolute flex md:hidden -left-0.5 top-3/4 -translate-y-3/4">
          <div className="relative">
            <img
              src="/patch_icons-L.png"
              alt="Patch Icons"
              className="flex md:hidden h-80 w-10"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-3xl text-white">
              {iconLinks.map(({ icon: Icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="External Link"
                >
                  <Icon className={iconStyles} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePoster;
