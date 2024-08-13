
import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion";
import { Project } from '@/typings';
import { urlFor } from '@/sanity';
import { GiButtonFinger } from 'react-icons/gi';
import Link from 'next/link';

type Props = {
  projects: Project[];
}

export default function Projects({projects}: Props) {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3  className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>
        <div className=' relative  overflow-y-hidden y z-20  scrollbar-thumb-[#25D366]/80  w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#25D366]/8'>
          {projects?.map((project, i) => (
            <article key={project._id} className='flex rounded-lg border border-gray-100  dark:border-[#25D366]/30 p3 flex-col rounded-l space-y-7 flex-shrink-0 w-[350px] h-[680px] md:w-[600px] md:h-[820px] xl:w-[800px] snap-center mt-20 bg-[#292929] p-4 shadow-2xl cursor-pointer transition-opacity duration-200 overflow-hidden'>

    <motion.div
            initial={{y:-100, opacity:0,}}
            transition={{duration:1.2}}
            whileInView={{opacity: 1, y:0,}}
            viewport={{once:true}}
            >
            <Image src= {urlFor(project.image).url()}
                height={3264}
                width={2448}
                alt='Mine'
                className=' w-full h-full md:h-[40vh] md:w-full lg:h-[40vh] lg:w-[full] object-cover object-top'
                />
            </motion.div>
    
      <div className="p-4 sm:p-6">
        <a href="#">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            {project?.title}
          </h3>
        </a>
    
        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
          {project?.summary}
        </p>
        {/* <Link href={project?.linkToBuild} className="">
                  {project?.title}
                  <span className="uppercase tracking-wide font-semibold border-y-2 text-xs ml-5 text">
                    Take me to Build
                  </span>
                </Link> */}
      </div>
        </article>
          ))}
        </div>
        <div className=' w-full absolute top-[30%] bg-[#25D366]/10 left-0 h-[500px] -skew-y-12'/>
        {/* <div className=' w-full absolute top-[30%] bg-[#25D366]/10 left-0 h-[500px] skew-y-12'/> */}
    </div>
  );
}