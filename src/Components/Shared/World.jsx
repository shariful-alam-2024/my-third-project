import React from 'react';

const World = () => {
     return (
       <>
         <div className="ima h-auto md:h-[730px] pt-16 md:pt-[350px] w-full">
           <div className="bg-white flex  md:flex-row p-4 md:p-8 max-w-52 md:max-w-xl lg:max-w-3xl gap-5 mx-auto  rounded-lg shadow-lg">
             <div className="text-center md:text-left flex-1 ">
               <h1 className="text-xs md:text-3xl lg:text-4xl font-bold leading-snug">
                 We want to
                 <br /> serve the world <br /> around us
               </h1>
               <p className="mt-4 text-xs md:text-base">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                 do.
               </p>
               <button className=" px-3 py-0.5 md:px-6 md:py-2 mt-6 bg-[#FFD2A4] text-white rounded hover:bg-orange-400">
                 Visit
               </button>
             </div>
             <img
               src="/img12.png"
               alt=""
               className="w-14 h-14 md:w-36 md:h-36 lg:w-48 lg:h-48 mx-auto md:mx-0"
             />
           </div>
         </div>
       </>
     )
};

export default World;