"use client";
import React from 'react'

import { motion } from "framer-motion"
import ExperienceCard from './ExperienceCard'
import { Experience } from '@/typings'

type Props = {
  experiences: Experience[];
}

export default function WorkExperience({experiences}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    transition={{duration:1.5}}
    whileInView={{opacity: 1}}
    className=' md:flex-row  px-10 items-center h-screen  flex relative overflow-hidden flex-row max-w-full  mx-auto justify-center text-left scroll-smooth'>
        <h3  className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl '>
            Experience
        </h3>
        <div className=' w-5/4 flex content-center  overflow-x-scroll p-4 space-x-3 snap-x snap-center snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#25D366]/80 mt-1'>
            {/* Experience Cards */}
            {experiences?.map((experience) => (
              <ExperienceCard key={experience._id} experience = {experience} />
            ))}
        </div>
    </motion.div>
    
    
  )
}