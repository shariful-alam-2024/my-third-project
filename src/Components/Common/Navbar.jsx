import React, { useState, useRef, } from 'react'
import { NavLink } from 'react-router-dom'
import { myInfo } from '../Data/Info'
import { FaBars } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
// import Bun from '../Shared/Bun'
import { gsap } from 'gsap'
import {useGSAP} from '@gsap/react'
const Navbar = () => {
  const container = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  useGSAP(() => {
    const timeLine = gsap.timeline({ stagger: .3 })
    timeLine
      .from('.logo', { opacity:5, x: -100, delay: .5 })
      .from('.desktop', { opacity: 0, x: -100, delay: .8 })
      .from('.bun', { opacity: 0, x: 100, delay:.2 })
      
  }, { scope: container })
  return (
    <>
      <nav
        ref={container}
        className="flex justify-between md:gap-5 bg-[#0D0D0D] top-0 right-0 left-0 fixed text-white px-8 py-3 z-50"
      >
        <a href="/" className="logo">
          <img src="/Logo.png" alt="Logo" className="w-24 sm:w-32 md:w-40" />
        </a>

        {/* Desktop Navigation */}
        <ul className="md:flex gap-12 text-lg hidden text-center desktop ">
          {myInfo.map(({ label, to }, i) => (
            <li key={i} className="md:text-sm ">
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive ? 'active text-red-500' : 'hover:text-gray-300'
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="cursor-pointer md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <RxCross2 className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>

        <div>
          <button className=" text-white px-4 py-1.5 bg-green-500 hover:text-blue-700 ease-in bun">
            Contact us
          </button>
        </div>

        {/* Mobile Navigation */}
        <ul
          className={`md:hidden block space-y-3 text-base px-4 py-6 mt-9 transition-all ease-out duration-150 mobile ${
            isMenuOpen
              ? 'fixed w-full top-0 right-0 bg-[#0D0D0D] z-40'
              : 'hidden'
          }`}
        >
          {myInfo.map(({ label, to }, i) => (
            <li key={i} className="text-white">
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive ? 'active text-red-500' : 'hover:text-gray-300'
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
