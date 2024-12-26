import React from 'react';

const Compassion = () => {
     return (
       <>
         <div className="flex flex-col lg:flex-col items-center gap-8 p-4 lg:p-8">
           <div className="text-center lg:text-center">
             <h4 className="text-sm md:text-base lg:text-lg font-semibold">
               Welcome to our CHURCH
             </h4>
             <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mt-2">
               Love and compassion
             </h1>
             <p className="text-xs md:text-sm lg:text-base mt-4 leading-relaxed">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et <br></br>dolore magna
               aliqua. Ut enim ad minim veniam, quis nostrud exercitation
               ullamco <br></br>laboris nisi ut aliquip ex ea commodo consequat.{' '}
               Duis aute irure dolor in <br></br>reprehenderit in voluptate
               velit esse cillum.
             </p>
           </div>
           <img
             src="/img15.png"
             alt="Church"
             className="w-full md:w-1/2 lg:w-1/2 rounded-lg shadow-lg"
           />
         </div>
       </>
     )
};

export default Compassion;