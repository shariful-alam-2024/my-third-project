import React from 'react';
import { LuClock4 } from 'react-icons/lu'
import { IoIosSearch } from 'react-icons/io'
import { IoIosArrowRoundForward } from 'react-icons/io'
const Join = () => {
     return (
       <>
         <div className="text-center px-4 md:px-8 lg:px-16">
           <p className="text-sm md:text-base lg:text-lg">Upcoming SERMONS</p>
           <br />
           <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
             Join us and become <br /> part of something great
           </h1>
         </div>
         <br />
         <div className="grid grid-cols-1 md:grid-cols-2 `">
           <div className="bg-[#FFF5EB] px-6 py-4 md:px-12 lg:px-24  rounded-lg shadow-lg">
             <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
               <div className="pt-6 text-center md:text-left">
                 <p className="text-sm md:text-base lg:text-lg">
                   Upcoming Event
                 </p>
                 <br />
               </div>
               <div className="text-center md:text-right">
                 <span className="block text-2xl md:text-3xl lg:text-4xl">
                   20
                 </span>
                 <br />
                 <span className="block text-sm md:text-base lg:text-lg">
                   June
                 </span>
               </div>
             </div>
             <h1 className="text-lg md:text-xl lg:text-2xl font-semibold mt-4">
               WATCH AND LISTEN TO OUR SERMONS
             </h1>
             <p className="text-sm md:text-base lg:text-lg mt-2">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor.
             </p>
             <br />
             <div className="flex items-center gap-4">
               <LuClock4 />
               <div className="text-sm md:text-base lg:text-lg">
                 <span>
                   Friday 23:39 IST
                   <br /> Saturday 11:20 ISD
                 </span>
               </div>
             </div>
             <br />
             <div className="flex items-center gap-4">
               <IoIosSearch />
               <div className="text-sm md:text-base lg:text-lg">
                 <span>
                   No 233 Main St. New York,
                   <br /> United States
                 </span>
               </div>
             </div>
             <br />
             <button className="bg-[#161722] text-white px-6 py-2 md:px-8 md:py-3">
               Register
             </button>
           </div>
           <div>
             <img
               src="/img13.png"
               alt="Event"
               className="w-full h-[500px]  rounded-lg shadow-lg"
             />
           </div>
         </div>
         <button className="flex items-center mx-auto pt-4 text-sm md:text-base lg:text-lg">
           <span>View all Sermons</span>
           <IoIosArrowRoundForward className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
         </button>

         <br></br>
       </>
     )
};

export default Join;