import Link from 'next/link'
import Image from 'next/image'

const Project = ({project}) => {
  return (
    <div className="bg-[#083117] border-8 border-[#00ee00] m-[.5vh] p-4 my-8 w-full flex flex-col h-fit ">
      <h1 className="text-6xl">{project.name}</h1>
      <div className="flex flex-col lg:flex-row">
        <Image
            src={project.image}
            width={500}
            height={500}
            alt="Picture of Montgomery Mcdonald"
            className="bg-[#083117] border-8 p-0 my-4 border-[#00ee00] w-[90vw] lg:w-[45%] h-fit"
        />
        <p className="text-lg p-5 m-5">{project.description}</p>
      </div>
        <div className="flex items-end w-fit">
        <Link href={project.source} className="hover:bg-[#083117] border-8 border-[#00ee00] m-[.5vh] p-4 text-4xl text-center justify-center items-center flex">Source </Link>
        <Link href={project.link} className="hover:bg-[#083117] border-8 border-[#00ee00] m-[.5vh] p-4 text-4xl text-center justify-center items-center flex">Site</Link>
        </div>
    </div>
  )
}

export default Project
