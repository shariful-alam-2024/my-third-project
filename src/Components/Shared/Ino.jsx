import React from 'react';
import { myInfo1 } from '../Data/Info';

const Ino = () => {
     return (
       <>
         <div className="text-center px-4">
           <h6 className="text-base md:text-lg">Read our Blog</h6>
           <h1 className="text-2xl md:text-4xl">SHARE, INSPIRE, INNOVATE</h1>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 sm:px-6 md:px-12 py-6">
           {myInfo1.map((item, index) => (
             <div
               key={index}
               className="bg-[#FFF5EB] px-4 py-4 sm:px-6 md:px-8  rounded-lg shadow-lg hover:animate-bounce delay-75"
             >
               <p className="text-[#A54E2B] text-sm md:text-base">
                 {item.text}
               </p>
               <br />
               <h1 className="text-[#161722] text-lg md:text-xl">
                 {item.head}
               </h1>
               <br />
               <p className="text-sm md:text-base">{item.para}</p>
               <br />
               <span className="block text-sm">{item.name}</span>
               <span className="block text-sm">{item.time}</span>
             </div>
           ))}
         </div>
       </>
     )
};

export default Ino;