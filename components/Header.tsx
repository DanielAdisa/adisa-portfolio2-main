import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'
import { Social } from '@/typings'

type Props = {
  socials: Social[];
}

export default function Header({socials}: Props) {
  return (
    <header className=' sticky top-0  p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center shadow-md rounded-b-lg'>
      {/* border-b-[#25D366] rounded-b border-b-2 border-s-fuchsia-100 */}
        <motion.div 
        initial={{
          x: -500,
          opacity:0,
          scale:0.5,
        }}

        animate={{
          x:0,
          opacity:1,
          scale:1,
        }}

        transition={{
          duration:1.5,
        }}

        className='flex flex-row items-center'>
            {/* Social Icons */}
            {socials.map((social) =>(
               <SocialIcon key={social._id} url={social.url} fgColor={social.color} network={social.network} bgColor='transparent' className=' hover:scale-110 transition-all ease-in-out'/>
            ))}
        </motion.div>
      
        <motion.div 
        initial={{
          x: 500,
          opacity:0,
          scale:0.5,
        }}

        animate={{
          x:0,
          opacity:1,
          scale:1,
        }}

        transition={{
          duration:1.5,
        }}
        
        className='flex flex-row items-center text-gray-300 cursor-pointer'>
            <SocialIcon network='email' fgColor='gray' bgColor='transparent' className=' cursor-pointer' url={'mailto:adisadaniel4@gmail.com'}/>
           <Link href={'mailto:adisadaniel4@gmail.com'}>
              <p className='  hidden md:inline-flex text-sm text-gray-400'>Let Us Work Togehter</p>
           </Link>
        </motion.div>
        
    </header>
  )
}
