import React from 'react';
import { IoMdClose } from "react-icons/io";


const Popup = ({setShowPopup}) => {
  return (
     <div className="fixed inset-0 flex items-center bg-black/40 justify-center bg-opacity-50 z-50 p-2">
          <div className="relative bg-white  shadow-2xl p-3 md:p-10 text-center max-w-3xl w-full border-4 border-white">

            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 w-8 h-8 cursor-pointer flex items-center justify-center bg-gray-200 rounded-full text-gray-600 hover:text-red-600 text-xl font-bold transition duration-200"
              aria-label="Close"
            >
              <IoMdClose />
            </button>

            <div className="md:flex items-center gap-6">
              <div className="flex-1">
                <h2 className="md:text-4xl text-3xl font-extrabold tracking-wide mb-3 text-slate-800">
                  Welcome to
                </h2>
                <h3 className="md:text-2xl text-xl font-bold bg-gradient-to-r from-[#d81d1d] to-[#d1b34f] bg-clip-text text-transparent mb-4">
                  ENLIVENBOT AI TECHNOLOGIES PRIVATE LIMITED
                </h3>
                <p className="text-gray-600 hidden md:flex text-justify text-sm md:text-base">
                  We deliver next-generation drone solutions tailored for diverse industries. Discover our advanced services, breakthrough technologies, and real-world impact. </p>
              </div>
              <img src="/droneGif.gif" alt="Drone Animation" className="md:w-2xs md:h-2xs w-full mx-auto h-auto object-contain" />
            </div>
          </div>
        </div>
  )
}

export default Popup
