import React from 'react';
import { IoLogoFacebook } from 'react-icons/io5'
import { LuTwitter } from 'react-icons/lu'
import { FaLinkedin } from 'react-icons/fa'
const Footer = () => {
     return (
       <>
         <div className="bg-[#161722]">
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 sm:px-8 md:px-12 py-6">
             {/* Column 1 */}
             <div className="text-white">
               <img src="/Logo.png" alt="Logo" />
               <br />
               <span>© Copyright Finsweet 2022</span>
               <br />
               <span>(480) 555-0103</span>
               <br />
               <span>4517 Washington Ave.</span>
               <br />
               <span>finsweet@example.com</span>
             </div>

             {/* Column 2 */}
             <div className="text-white">
               <strong>Quicklinks</strong>
               <br /> <br />
               <a
                 href="/"
                 className="block ease-in-out animate-pulse text-teal-700 duration-500 underline-offset-4 underline"
               >
                 Home
               </a>
               <a
                 href="/ABOUT US"
                 className="block ease-in-out animate-pulse text-cyan-600 duration-100 underline-offset-4 underline"
               >
                 ABOUT US
               </a>
               <a
                 href="/SERMON"
                 className="block ease-in-out animate-pulse text-blue-800 duration-700 underline-offset-4 underline"
               >
                 SERMON
               </a>
               <a
                 href="/BLOG"
                 className="block ease-in-out animate-pulse text-fuchsia-700  duration-800 underline-offset-4 underline"
               >
                 BLOG
               </a>
             </div>

             {/* Column 3 */}
             <div className="text-white">
               <span>Connect</span>
               <div className="flex gap-4 text-white  pt-4">
                 <a href="" className="">
                   {' '}
                   <IoLogoFacebook className="hover:text-green-500 ease-in animate-pulse" />
                 </a>
                 <a href="" className="">
                   <LuTwitter className="hover:text-green-500 ease-in animate-pulse" />
                 </a>
                 <a href="" className="">
                   {' '}
                   <FaLinkedin className="hover:text-green-500 ease-in animate-pulse" />
                 </a>
               </div>
             </div>

             {/* Column 4 */}
             <div className="text-white">
               <h1>Subscribe to get Latest Updates and News</h1>
               <br />
               <div className="flex flex-col sm:flex-row gap-4">
                 <input
                   type="email"
                   placeholder="Enter your email address"
                   className="border-2 border-gray-300 p-2 w-full bg-black sm:flex-1"
                 />
                 <button className="bg-[#FFD2A4] text-white p-2 rounded-md">
                   Subscribe
                 </button>
               </div>
             </div>
           </div>
         </div>
       </>
     )
};

export default Footer;