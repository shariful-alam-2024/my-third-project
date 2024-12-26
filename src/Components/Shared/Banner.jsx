import React, { useRef,  } from 'react'
import { gsap } from 'gsap'
import Bun2 from './Bun2'
import { useGSAP } from '@gsap/react'

const Banner = () => {
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const headlineRef = useRef(null)


  useGSAP(() => {
    const tl = gsap.timeline()

    // Image animation
    tl.from(containerRef.current, {
      opacity: 0,
      Y:50,
      duration: 1,
    })

    // Text animation
    tl.from(
      textRef.current,
      {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.3, // Animates each line sequentially
      },
      '-=0.5', // Overlap with previous animation
     
    )

    // Headline animation
    tl.from(
      headlineRef.current,
      {
        opacity: 0,
        scale: 0.9,
        duration: 1,
      },
      '-=0.5' // Overlap with previous animation
    )
  }, [])

  return (
    <>
      <div
        ref={containerRef}
        className="image w-full h-[663px] sm:h-[500px] md:h-[600px] lg:h-[663px]"
      >
        <div className="pt-64 text-white px-8 py-4 sm:pt-20 sm:px-12 md:pt-24 md:px-16 lg:px-24">
          <h2
            ref={textRef}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl"
          >
            Welcome to our CHURCH
          </h2>
          <br />
          <h2
            ref={textRef}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl"
          >
            Welcome to our CHURCH
          </h2>
          <h1
            ref={headlineRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Become a part of
            <br /> our community
          </h1>
          <br />
          <Bun2 className="" />
          <br />
          <div
            ref={textRef}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
          >
            <hr className="w-12 h-0.5 bg-[#FFD2A4]" />
            <p className="text-sm sm:text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
