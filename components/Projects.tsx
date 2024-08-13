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
            <article className='flex rounded-lg border border-gray-100  dark:border-[#25D366]/30 p3 flex-col rounded-l shadow-2xl space-y-7 flex-shrink-0 w-[350px] h-[680px] md:w-[600px] md:h-[820px] xl:w-[800px] snap-center mt-20 bg-[#292929] p-4 hover:opacity-100 opacity-20 cursor-pointer transition-opacity duration-200 overflow-hidden'>

        
            {/*
      Heads up! 👋
    
      This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
    */}
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
      {/* <img
        alt=""
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="h-[70%] w-full object-cover"
      /> */}
    
      <div className="p-4 sm:p-6">
        <a href="#">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            {project?.title}
          </h3>
        </a>
    
        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
          pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
          mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
          dignissimos. Molestias explicabo corporis voluptatem?
        </p>
    
    <Link href={"project?.linkToBuild"}>
    Link to the project.
    </Link>
        {/* <a href={project?.linkToBuild} className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#25D366]/50 ani">
          Link to Project.
    
          <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
            &rarr;
          </span>
        </a> */}
      </div>
        </article>
          ))}
        </div>
        <div className=' w-full absolute top-[30%] bg-[#25D366]/10 left-0 h-[500px] -skew-y-12'/>
        {/* <div className=' w-full absolute top-[30%] bg-[#25D366]/10 left-0 h-[500px] skew-y-12'/> */}
    </div>
  );
}