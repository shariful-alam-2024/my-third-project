import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from 'react-icons/io'
const Love = () => {
     return (
       <>
         <div className="flex flex-col lg:flex-col items-center gap-8 p-4 lg:p-8 animate-fadeIn">
           <div className="text-center lg:text-center">
             <h4 className="text-sm md:text-base lg:text-lg font-semibold">
               Welcome to our CHURCH
             </h4>
             <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mt-2">
               Love and compassion
             </h1>
             <p className="text-xs md:text-sm lg:text-base mt-4 leading-relaxed">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
               enim ad minim veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
               reprehenderit in voluptate velit esse cillum.
             </p>
             <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 ">
               Read more
             </button>
           </div>
           <img
             src="/img15.png"
             alt="Church"
             className="w-full md:w-1/2 lg:w-1/2 rounded-lg shadow-lg "
           />
           
         </div>
         <div className="text-center px-4 sm:px-6 md:px-8 lg:px-52">
           <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
             Our Mission & Vision
           </h1>
           <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
             Celebrate With Us
           </h1>
           <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqua.
           </p>
           <div className="flex items-center justify-center space-x-2">
             <Link>
               <span className="text-blue-500 text-sm sm:text-base md:text-lg hover:underline">
                 Read More
               </span>
             </Link>
             <IoIosArrowRoundForward className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-500" />
           </div>
         </div>
       </>
     )
};

export default Love;