import React from 'react';
import { resent } from '../Data/Info';

const Recent = () => {
     return (
       <>
         <div className="bg-[#F5F2F0] pt-32 text-center">
           <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
             OUR BLOG
           </span>
           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
             Most Recent Post
           </h1>
           <br />
           <div className="flex flex-col md:flex-row gap-8 bg-[#FFFFFF] p-6 px-6 py-4 max-w-6xl mx-auto">
             <img
               src="/img24.png"
               alt=""
               className="rounded-lg shadow-lg shadow-black w-full md:w-1/2 lg:w-1/3"
             />
             <div className="text-left">
               <div className="flex justify-between text-sm sm:text-base">
                 <span>Tuesday 13 May, 2022</span>
                 <span>By John Hunau Deo</span>
               </div>
               <br />
               <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
                 Church was doing what he often did when dropped An oracle
               </h1>
               <br />
               <p className="text-sm sm:text-base md:text-lg">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
                 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
               </p>
               <br />
               <button className="px-4 py-2 bg-[#FFD2A4] text-sm sm:text-base hover:bg-blue-700 hover:text-white hover:cursor-pointer">
                 Read more
               </button>
             </div>
           </div>
           <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-8">
             ALL BLOG POSTS
           </h1>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 py-4 max-w-6xl mx-auto">
             {resent.map((item, i) => (
               <div
                 key={i}
                 className="border-2 p-4 bg-[#FFFFFF] rounded-xl shadow-lg text-left pt-8"
               >
                 <span className="text-[#A54E2B] text-sm sm:text-base">
                   {item.text}
                 </span>
                 <br />
                 <h1 className="text-lg sm:text-xl font-semibold">
                   {item.head}
                 </h1>
                 <br />
                 <p className="text-sm sm:text-base">{item.deist}</p>
                 <br />
                 <span className="text-xs sm:text-sm">{item.date}</span>
               </div>
             ))}
           </div>
         </div>
       </>
     )
};

export default Recent;