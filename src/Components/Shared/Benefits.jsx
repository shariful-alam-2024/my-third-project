import React from 'react';
import { myLove } from '../Data/Info';
// import { Link } from 'react-router-dom';
import { motion } from 'motion/react'
const Benefits = () => {
     return (
       <>
         <div className="bg-[#F5F2F0] px-4 sm:px-8 mx-auto max-w-6xl text-center pt-5 pb-5">
           <p className="font-bold">Watch and listen</p>
           <h1 className="text-2xl sm:text-3xl font-bold mt-2">
             THE benefits of
             <br /> joining our church
           </h1>
           <h1 className="text-2xl sm:text-3xl font-bold mt-2">
             THE benefits of
             <br /> joining our church
           </h1>
           <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
             {myLove.map((item, id) => (
               <motion.div
                 whileHover={{ scale: 0.8 }}
                 whileTap={{ scale: 0.2 }}
                 key={id}
               >
                 <img
                   src={item.image}
                   alt="Item"
                   className="w-full max-w-[280px] h-[340px] pb-8 mx-auto  rounded-lg shadow-lg"
                 />
               </motion.div>
             ))}
           </div>
         </div>
       </>
     )
};

export default Benefits;