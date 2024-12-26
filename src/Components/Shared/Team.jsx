import React from 'react';
import { test } from '../Data/Info';
import { IoLogoFacebook } from 'react-icons/io5'
import { LuTwitter } from 'react-icons/lu'
import { FaLinkedin } from 'react-icons/fa'
import { motion } from 'motion/react'
const Team = () => {
     return (
       <>
         <div className="text-center px-4 md:px-8 lg:px-16 pb-8">
           <h5 className="text-sm md:text-base lg:text-lg">church members</h5>
           <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
             meet our Inspirational team
           </h1>
           <br />
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
             {test.map((item, i) => (
               <motion.div
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.1 }}
                 key={i}
                 className="border bg-[#FFD2A4] rounded-lg shadow-lg p-4"
               >
                 <img
                   src={item.img}
                   alt={item.name}
                   className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] mx-auto rounded-full"
                 />
                 <h6 className="text-base font-semibold mt-4">{item.name}</h6>
                 <p className="text-sm text-[#F5F2F0]">{item.title}</p>
                 <div className="flex justify-center gap-4 mt-2">
                   <a href="" className="text-blue-600">
                     <IoLogoFacebook className="w-5 h-5" />
                   </a>
                   <a href="" className="text-blue-400">
                     <LuTwitter className="w-5 h-5" />
                   </a>
                   <a href="" className="text-blue-800">
                     <FaLinkedin className="w-5 h-5" />
                   </a>
                 </div>
               </motion.div>
             ))}
           </div>
         </div>
       </>
     )
};

export default Team;