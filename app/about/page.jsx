'use client'
import Image from 'next/image'
import {motion} from 'motion/react'
const page = () => {
  function getAge(){
    let bday = new Date("October 27, 2008")
    let ageDiff = Date.now() - bday
    var ageDate = new Date(ageDiff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }
  let age = getAge()

  return (
    <motion.div transition={{duration: 3}} animate={{x: ['100vw', 0]}} className="flex flex-col h-full align-center justify-center items-center w-screen lg:w-fit lg:flex-row">
        <div className="bg-[#294c37] border-8 border-[#008827] m-[1.25vh] p-4 w-[90vw] lg:w-[70vw] lg:h-[93.5%]">
      <div className=" justify-center items-center flex flex-col">    
        <Image
          src="https://res.cloudinary.com/drg8btdmp/image/upload/me_swhgxo.png"
          width={500}
          height={500}
          alt="Picture of Montgomery Mcdonald"
          className="bg-[#294c37] border-8 p-0 my-4 border-[#008827] w-[90vw] lg:w-fit h-fit"
        />
        </div>
      {/* <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-[27vh]">
        <input type="button" value="General" className="bg-[#294c37] text-2xl p-4 border-8 border-[#008827] hover:bg-[#006600]"/>
        <input type="button" value="Credentials" className="bg-[#294c37] text-2xl p-4 border-8 border-[#008827] hover:bg-[#006600]"/>
        <input type="button" value="What I Do" className="bg-[#294c37] text-2xl p-4 border-8 border-[#008827] hover:bg-[#006600]"/>
        <input type="button" value="Why I Do It" className="bg-[#294c37] text-2xl p-4 border-8 border-[#008827] hover:bg-[#006600]"/>
      </div> */}
        <p className="text-2xl">
          My name is Montgomery Mcdonald, I am a {age} year old Web Developer based in Phoenix, Arizona. i have been developing websites since 2024 and video games since 2022. Since then, ive made a wide range of projects, from rhythm games, business pages, CRUD APIs, and a City-Building Tower-Defense game.
        </p>
        <br />
        <p className="text-2xl">
          I make websites and games, because i genuinely believe they can tell stories, inspire people, and persuade people. I have been creating through code since 2022, and have lived and loved every second of it. I find no greater joy than seeing a client{"'"}s work done to the utmost of my ability, accomplishing everything they want and more.
        </p>
        <br />
        <p className="text-2xl">
          In my free time, I work on my own passion projects, such as a First-Person Story-Based Shooter called P[H]otochemic, a movement-based infinite runner rougelike, and a custom, ever-growing homepage that suits my needs perfectly, including a search bar, quick-access links, and a custom calender system that hooks into Google Calenders.
        </p>
        <br />
        <p className="text-2xl">
          Through my practice and study of code, i have earned the following certifications:
        </p>
            <ul className="p-2.5 m-2.5">
              <li className="list-disc text-2xl">Python (PCEP, PCAP, ITS Python)</li>
              <li className="list-disc text-2xl">Javascript (ITS Javascript)</li>
              <li className="list-disc text-2xl">HTML and CSS (ITS HTML & CSS, ITS HTML5 Application Design)</li>
              <li className="list-disc text-2xl">Java (ITS Java)</li>
              <li className="list-disc text-2xl">Software Development (ITS Software Development)</li>
              <li className="list-disc text-2xl">Computational Thinking (ITS Computational Thinking)</li>
            </ul>
            <p className="text-2xl">
              I Have Additional Skills IN:
            </p>
              <ul className="p-2.5 m-2.5">
                <li className="list-disc text-2xl">The Godot Game Engine</li>
                <li className="list-disc text-2xl">Unreal Engine 5</li>
                <li className="list-disc text-2xl">NodeJS (ExpressJS, EJS, ReactJS, NextJS)</li>
                <li className="list-disc text-2xl">TailwindCSS, SCSS/SASS</li>
                <li className="list-disc text-2xl">Linux (Arch, Debian, Fedora, NixOS)</li>
              </ul>
      </div>
    </motion.div>
  )
}
export default page
