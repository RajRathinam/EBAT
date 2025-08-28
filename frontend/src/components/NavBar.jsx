import React, { useState } from 'react';
import { MdOutlineKeyboardDoubleArrowRight, MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";


const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
   <header className="border-slate-200 fixed md:static right-0 top-0 left-0 bg-white border-b-1 z-50 py-1">

      <div className="max-w-7xl mx-auto flex justify-between 2xl:justify-between md:justify-around items-center px-6 py-3">
        <img
          src="/logo_1.png"
          alt="Company Logo"
          className="w-15 h-auto"
        />

        <ul className="hidden md:flex items-center gap-8 text-[#fa6060] font-medium">
          {navItems.map(({ name, path }, i) => (
            <li
              key={i}
              className="relative  group cursor-pointer transition-all duration-300 hover:text-[#eb2525]"
            >
              <Link to={path}>
                <span className="group-hover:scale-105  uppercase group-hover:-translate-y-0.3 inline-block transition-all duration-200">
                  {name}
                </span>
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#eb2525] group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        <Link to={"/about"}
          className="mt-4 hidden md:flex gap-1 uppercase font-bold md:mt-0 bg-gradient-to-r from-[#d81d1d] to-[#d1b34f] text-white px-4 py-2 rounded-full text-sm cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
        >
          Explore <MdOutlineKeyboardDoubleArrowRight className="text-xl" />
        </Link>



        <div className="md:hidden text-3xl text-[#8a1e1e] cursor-pointer" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <MdClose /> : <MdMenu />}
        </div>
      </div>

{mobileOpen && (
  <div className="md:hidden fixed top-[80px] left-0 w-full bg-white px-6 py-4 shadow-lg animate-slideDown z-40">
    <ul className="flex flex-col gap-4 text-[#fa6060] font-medium">
      {navItems.map(({ name, path }, i) => (
        <li
          key={i}
          className="hover:translate-x-2 uppercase transition-transform duration-300 hover:text-[#eb2525]"
        >
          <Link to={path} onClick={() => setMobileOpen(false)}>
            {name}
          </Link>
        </li>
      ))}
    </ul>

    <Link to={"/about"} onClick={() => setMobileOpen(false)} className="mt-4 md:hidden flex items-center gap-1 uppercase font-semibold bg-gradient-to-r from-[#d81d1d] to-[#d1b34f] px-6 py-2 rounded-3xl w-fit text-white cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
      Explore <MdOutlineKeyboardDoubleArrowRight className="text-xl" />
    </Link>
  </div>
)}

    </header>
  );
};
export default NavBar;