'use client'
import {motion} from 'motion/react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <motion.div transition={{duration: 1}} animate={{y: ['-75vh', 0]}} className=" nav grid grid-cols-2 grid-rows-5 w-screen lg:w-[20vw] h-screen lg:sticky lg:bottom-0 lg:top-0"> 
        <Link href="/" className="hover:bg-[#294c37] border-8 border-[#008827] m-[.5vh] p-4 text-2xl  text-center justify-center items-center flex row-span-2">Home</Link>
        <Link href="/about" className="hover:bg-[#294c37] border-8 border-[#008827] m-[.5vh] p-4 text-2xl  text-center justify-center items-center flex">About Me</Link>
        <Link href="/projects" className="hover:bg-[#294c37] border-8 border-[#008827] m-[.5vh] p-4 text-2xl  text-center justify-center items-center flex">My Projects</Link>
        <Link href="/guarantees" className="hover:bg-[#294c37] border-8 border-[#008827] m-[.5vh] p-4 text-2xl  text-center justify-center items-center flex col-span-2">My Guarantees</Link>
        <Link href="/process" className="hover:bg-[#294c37] border-8 border-[#008827] m-[.5vh] p-4 text-2xl  text-center justify-center items-center flex row-span-2">My Process</Link>
        <Link href="/contact" className="hover:bg-[#294c37] border-8 border-[#008827] m-[.5vh] p-4 text-2xl  text-center justify-center items-center flex row-span-2">Contact Me</Link>
    </motion.div>
  )
}

export default Navbar
