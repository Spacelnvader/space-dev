"use client"
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'

interface Props {
    image: string;
    title: string;
    text: string;
    website: string;
}

const ProjectCard = ({ image, title, text, website}: Props) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    function handleFlip() {
        if(!isAnimating) {
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }
    }
  return (
    <div>
      <div
      onClick={handleFlip}
      className='w-[450px] h-[280px] rounded-md cursor-pointer'>
        <motion.div
        className='flip-card-inner w-full h-full'
        initial={false}
        animate={{rotateY: isFlipped ? 180 : 360}}
        transition={{ duration: 0.6, animationDirection: 'normal'}}
        onAnimationComplete={() => setIsAnimating(false)}
        >
          <div
          style={{backgroundImage: `url(${image})`}}
          className='w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4'>
              <div  className='absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40'/>
              <div className='absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center'>
              Voir plus en cliquant &gt;
              </div>
          </div>
          <div
          style={{backgroundImage: `url(${image})`}}
          className='w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg p-4'>
              <div  className='absolute inset-0 w-full h-full rounded-md bg-black opacity-50 z-[-1]'/>
              <div className='flex flex-col gap-8 py-3 z-[30]'>
              <h1 className='text-whote text-2xl font-semibold'>{title}</h1>
              <p className='text-gray-200 text-[20px]'>
                {text}
              </p>
              </div>
          </div>
        </motion.div>
      </div>
      <div className='rounded-[20px] group relative bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-blue-400 px-3 py-1 text-lg text-white max-w-[190px]'>
      <h1 className='text-white font-semibold'><Link href={website} target="_blank">Voir le site internet</Link></h1>
      </div>
    </div>
  )
}

export default ProjectCard