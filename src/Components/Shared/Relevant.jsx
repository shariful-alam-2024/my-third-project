import React, { useEffect, useRef } from 'react'
import { myData } from '../Data/Info'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'

const Relevant = () => {
  const subHeadRef = useRef(null)
  const headlineRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const timeline = gsap.timeline()

    // Animate text
    timeline
      .fromTo(
        subHeadRef.current,
        { opacity: 0, x: -100 },
        { opacity: 1, duration: 0.8 }
      )
      .fromTo(
        headlineRef.current,
        { opacity: 0, x: -100 },
        { opacity: 1, duration: 0.8 },
        '-=0.4' // Overlap the animations slightly
      )

    // Animate cards
    cardRefs.current.forEach((card, index) => {
      timeline.fromTo(
        card,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, delay: index * 0.2 },
        '-=0.2'
      )
    })
  }, [])

  return (
    <>
      <div className="text-center p-4 md:p-8 lg:p-12">
        <h2 ref={subHeadRef} className="text-base md:text-lg lg:text-xl mb-2">
          sub-headline
        </h2>
        <h1
          ref={headlineRef}
          className="text-lg md:text-2xl lg:text-4xl font-bold"
        >
          a church that's relevant
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 shadow-cyan-800 gap-4 px-4 py-4 mx-auto max-w-6xl">
        {myData.map((item, id) => (
          <Link
            ref={(el) => (cardRefs.current[id] = el)}
            key={item.id}
            className="bg-[#FFF5EB] pt-8 flex flex-col items-center text-center rounded-lg shadow-lg delay-500"
          >
            <img src={item.image} alt="" className="px-6 w-[80px] h-[35px]" />
            <p className="px-6 mt-2">{item.title}</p>
            <p className="px-6 mt-2">{item.description}</p>
            <hr className="w-full mt-4 bg-[#FFD2A4] h-[5px]" />
          </Link>
        ))}
      </div>
    </>
  )
}

export default Relevant
