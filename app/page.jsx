'use client'
import {motion} from 'motion/react'
import Image from 'next/image'
const page = () => {

  return (
    <div className="flex flex-col align-center justify-center items-center w-full h-full">
      <div className="bg-[#294c37] border-8 border-[#008827] text-lg w-full flex justify-center typewriter">
        <h1 className=" text-3xl lg:text-5xl p-3">
        Montgomery McDonald: Full Stack Engineer
        </h1>
        </div>
      <div className="w-full h-fit flex flex-col lg:flex-row justify-between">
      <motion.div transition={{duration: 1}} animate={{x: ['100vw', 0]}} className="bg-[#294c37] border-8 border-[#008827] m-[.5vh] p-4 text-2xl w-screen lg:w-[25vw]">
        <p>
          I have been coding since 2022, in a multitude of languages. I have skills in Java, Front-End Website Design, Back-End Website Design, Video Game Development and Modding, Systems Administration and Installing and Maintaining IoT Devices. Below are a list of my certifications and skills.
        </p>
        <ul className="p-2.5 m-2.5">
          <li className="list-disc text-2xl">Python (PCEP, PCAP, ITS Python)</li>
          <li className="list-disc text-2xl">Javascript (ITS Javascript)</li>
          <li className="list-disc text-2xl">HTML and CSS (ITS HTML & CSS, ITS HTML5 Application Design)</li>
          <li className="list-disc text-2xl">Java (ITS Java)</li>
          <li className="list-disc text-2xl">Computer Science (ITS Software Development)</li>
          <li className="list-disc text-2xl">Computational Thinking (ITS Computational Thinking)</li>
        </ul>
        I am also skilled in:
          <ul className="p-2.5 m-2.5">
            <li className="list-disc text-2xl">The Godot Game Engine</li>
            <li className="list-disc text-2xl">Unreal Engine 5</li>
            <li className="list-disc text-2xl">NodeJS (ExpressJS, EJS, ReactJS, NodeJS)</li>
            <li className="list-disc text-2xl">TailwindCSS, SCSS/SASS</li>
            <li className="list-disc text-2xl">Linux (Arch, Debian, Fedora, NixOS)</li>
          </ul>
          <p>
            I have designed, built and shipped several websites and games before, both on my own and in teams. You can check out the &apos;My Projects&apos; page to learn more about my projects, including ongoing or planned ones. you can also see the process i take for my projects.
          </p>
      </motion.div>
      <motion.div transition={{duration: 1, delay: 1}} animate={{ x: ['-100vw', 0]}} className="bg-[#294c37] border-8 border-[#008827] m-[.5vh] p-4 text-2xl w-screen lg:w-[25vw]"><p>When it comes to design, I can hit almost any mark. This portfolio, for example, uses very few colors, and sharper corners. Compared to other projects, where i might have more modern designs, or even more maximalist designs, both utilizing different design ideas. My design philosophy is based around usability and aesthetics. You can read more about my philosophies of design in the about page, which goes in-depth on how i use web design as a vehicle for rhetoric and advertisement. </p> <br /> <p>Typically, that kind of rhetoric as a tool for advertisement can be lacking in websites- they&apos;ll state things matter-of-factly, or just show a catalogue of what you sell. Websites with a good, strong design, however-- Like the ones i make -- do more than just that. They serve to show, entertain, and convince. </p> <br /> <p>When done right, websites can be a artform in of themselves, one that, like other multi-media artforms, can be a effective tool in your business&apos;s arsenal for advertisement, customer retainment, education about a topic, a source of donations for non-profits, and more. Thats what I do. I make websites that sell, teach and help people.</p> </motion.div>
      <motion.div transition={{duration: 1, delay:2}} animate={{ x: ['100vw', 0]}}  className="bg-[#294c37] border-8 border-[#008827] m-[.5vh] p-4 text-2xl w-screen lg:w-[25vw]"><p>In abstract, my process is rather simple, outlined below. For more information, there is a page dedicated to this.</p>
          <ul className="p-2.5 m-2.5">
            <li className="list-disc text-2xl">Create design following client input</li>
            <li className="list-disc text-2xl">refine design from client input</li>
            <li className="list-disc text-2xl">create website itself, while returning to the design and getting client input frequently.</li>
            <li className="list-disc text-2xl">Finish design, do a final pass-through of polishing the website</li>
            <li className="list-disc text-2xl">Show design to client, make any last-minute changes</li>
            <li className="list-disc text-2xl">Deploy Website</li>
            <li className="list-disc text-2xl">Maintain Website</li>
          </ul>
      </motion.div>
      </div>
    </div>
  )
}
export default page
