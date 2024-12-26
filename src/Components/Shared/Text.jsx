import React from 'react';

const Text = () => {
     return (
       <>
         <div className="flex flex-col gap-8 px-6 py-6 sm:flex-row sm:px-12 md:px-24 lg:px-48">
           <div className="flex-1">
             <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl">
               OUR MISSION & VISION
             </h4>
             <br />
             <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
               STRIVING FOR A BETTER TOMORROW
             </h1>
             <br />
             <p className="text-sm sm:text-base md:text-lg">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
               enim ad minim veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
               reprehenderit in voluptate velit esse cillum.
             </p>
           </div>
           <div className="flex-1">
             <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl">
               WHAT WE DO
             </h4>
             <br />
             <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
               BRINGING PEACE AND JOY TO THE WORLD
             </h1>
             <br />
             <p className="text-sm sm:text-base md:text-lg">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
               enim ad minim veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
               reprehenderit in voluptate velit esse cillum.
             </p>
           </div>
         </div>
       </>
     )
};

export default Text;