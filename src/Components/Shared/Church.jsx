import React from 'react';

const Church = () => {
     return (
       <>
         <div className="p-4">
           <div className="text-center mb-8">
             <h6 className="text-sm md:text-base text-gray-500">BENEFITS</h6>
             <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
               THE benefits of
               <br /> joining our church
             </h1>
           </div>
           <div className="flex flex-col md:flex-row gap-5 mb-8 md:px-24 md:py-4">
             <div className="flex-1">
               <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                 Find fulfillment and joy
               </h1>
               <p className="text-sm md:text-base text-gray-600 mt-2">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
                 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                 in reprehenderit.
               </p>
             </div>
             <img
               src="/img1.png"
               alt="Find fulfillment and joy"
               className="w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-lg"
             />
           </div>
           <div className="flex flex-col md:flex-row gap-5 mb-8  md:px-24 md:py-4">
             <img
               src="/img9.png"
               alt="Shared values"
               className="w-full md:w-1/2 lg:w-1/3  rounded-lg shadow-lg"
             />
             <div className="flex-1">
               <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                 Shared values
               </h1>
               <p className="text-sm md:text-base text-gray-600 mt-2">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
                 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                 in reprehenderit.
               </p>
             </div>
           </div>
           <div className="flex flex-col md:flex-row gap-5 mb-8  md:px-24 md:py-4">
             <div className="flex-1">
               <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                 Charity events
               </h1>
               <p className="text-sm md:text-base text-gray-600 mt-2">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
                 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                 in reprehenderit.
               </p>
             </div>
             <img
               src="/img10.png"
               alt="Charity events"
               className="w-full md:w-1/2 lg:w-1/3  rounded-lg shadow-lg"
             />
           </div>
           <div className="flex flex-col md:flex-row gap-5  md:px-24 md:py-4">
             <img
               src="/img8.png"
               alt="All are welcome"
               className="w-full md:w-1/2 lg:w-1/3  rounded-lg shadow-lg"
             />
             <div className="flex-1">
               <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                 All are welcome
               </h1>
               <p className="text-sm md:text-base text-gray-600 mt-2">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
                 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                 in reprehenderit.
               </p>
             </div>
           </div>
         </div>
       </>
     )
};

export default Church;