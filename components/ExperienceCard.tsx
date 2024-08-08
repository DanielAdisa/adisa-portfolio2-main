
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import { Experience } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
    experience: Experience;
}

export default function ExperienceCard({experience}: Props) {
  return (
    <article className='flex flex-col rounded-l space-y-7 flex-shrink-0 w-[350px] h-[80vh] md:w-[600px] md:h-[820px] xl:w-[800px] snap-center mt-20 bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.div
        initial={{y:-100, opacity:0,}}
        transition={{duration:1.2}}
        whileInView={{opacity: 1, y:0,}}
        viewport={{once:true}}
        >
        <Image src= {urlFor(experience?.companyImage).url()}
            height={3264}
            width={2448}
            alt='Mine'
            className=' w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover'
            />
        </motion.div>
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>CEO Misfits</h4>
            <p className='font-bold text-2xl mt-1'>Misfits</p>
            <div className=' flex space-x-2 my-2'>
                {experience.technologies.map(technology =>(
                    <Image src={urlFor(technology.image).url()}
                    key={technology._id}
                    height={3264}
                    width={2448}
                    alt='Mine'
                    className=' w-10 h-10 rounded-full'/>
                ))}
            </div>
            <p className=' py-5 text-gray-300'>
                
                {new Date(experience.dateStarted).toDateString()} -{" "}{experience.
                isCurrentlyWorkingHere ? "Present" 
                : new Date(experience.dateEnded).toDateString()
                }

            </p>
            <ol className='px-0 md:px-10 font-mono  md:text-lg list-disc space-y-4 ml-5 max-w-90 pr-10 text-lg max-h-100 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#25D366]/80'>
                {experience.points.map((point, i) =>(
                    <li key={i}>{point}</li>
                ))}

            </ol>
        </div>
    </article>
  )
}