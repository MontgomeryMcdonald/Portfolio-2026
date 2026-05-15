'use client'
import {motion} from 'motion/react'
import Link from 'next/link'
import Image from 'next/image'

const Project = ({project}) => {
  console.log(project)
  let image
  return (
    <motion.div transition={{duration: 3}} animate={{y:['100vh', 0]}} className="bg-[#294c37] border-8 border-[#008827] m-[.5vh] p-4 my-8 w-full flex flex-col h-fit ">
      <h1 className="text-6xl">{project.name}</h1>
      <div className="flex flex-col lg:flex-row">
        {project.image != "" ? <Image
            src={project.image}
            width={500}
            height={500}
            alt="Picture of Montgomery Mcdonald"
            className="bg-[#294c37] border-8 p-0 my-4 border-[#008827] w-[90vw] lg:w-[45%] h-fit"
        /> : <></>}
        <p className="text-2xl p-5 m-5">{project.description}</p>
      </div>
        <div className="flex items-end w-fit">
        <Link href={project.source ? project.source : "/projects"} className="hover:bg-[#294c37] border-8 border-[#008827] m-[.5vh] p-4 text-4xl text-center justify-center items-center flex">Source </Link>
        <Link href={project.link ? project.link : "/projects"} className="hover:bg-[#294c37] border-8 border-[#008827] m-[.5vh] p-4 text-4xl text-center justify-center items-center flex">Site</Link>
        </div>
    </motion.div>
  )
}

export default Project
