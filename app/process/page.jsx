"use client"
import {useState, useEffect} from 'react'
import {motion} from 'motion/react'

const Page = () => {
    const processSteps = {
        Design: "The first part of a website, game, or other project, is a design. This is the drawings, sketches and plans that make up the earliest stages. when working with a client, they typically are most involved in this process, helping to design how things work and look, to meet the client's needs. Once the client's needs are understood, the first iteration of design begins. The client reviews the design, and request changes. these changes are made, and shown to the client again. this continues until the design is fully fleshed out.",
        Development: "Once a design is finished, Development begins. Like the last step, the client is kept informed of the going-ons, and can request changes as I work on things. Over time, through a process of frequent meetings and progress updates, the client is kept well-informed, so that I can make any changes the client needs.",
        Feedback: "Once development starts to near completion, Feedback begins. this is typically a full-scale presentation of the project, the process so far, documentation, and features. This allows the client, or any other involved parties, to request any final changes, before the next step, Final Polish.",
        FinalPolish: "Once feedback and development complete and final changes are implemented, a final passthrough is done, looking over code, documentation and images, to make sure everything is in its place, no bugs are apparent, and everything is usable as-intended.",
        ShippingAndMaintenance: "Once the site is polished, the last step occurs. Shipping. typically, this involves setting up the server to be live for users, on a client-owned domain. Once done, this is where a project will typically end. Optionally, however, I can stay onboard for maintenance, typically for a monthly fee, to make any changes to the site and fix any emerging security vulnerabilities."
    }

  const [step, setSteps] = useState("Design")

  return (
    <div className="align-center justify-center items-center w-full h-fit lg:h-screen">
      <motion.div transition={{duration: 1}} animate={{x: ['-100vw', 0]}} className="bg-[#294c37] border-8 border-[#008827] m-[.5vh] p-4 w-full flex justify-center h-fit lg:h-[65%] text-4xl">
        <p>{processSteps[step]}</p>
      </motion.div>
      <motion.div transition={{duration: 1}} animate={{x: ['100vw', 0]}}className="grid lg:grid-cols-4 lg:grid-rows-2 w-full grid-cols-2 grid-rows-4 h-[34%]">
        <button onClick={() => setSteps("Design")} className=" border-8 border-[#008827] m-[.5vh] p-4 text-2xl lg:text-4xl text-center justify-center items-center flex lg:row-span-2 hover:bg-[#294c37]"><p>Design</p></button>
        <button onClick={() => setSteps("Development")} className="border-8 border-[#008827] m-[.5vh] p-4 text-2xl lg:text-4xl text-center justify-center items-center flex lg:col-span-2 hover:bg-[#294c37]"><p>Development</p></button>
        <button onClick={() => setSteps("Feedback")} className="border-8 border-[#008827] m-[.5vh] p-4 text-2xl lg:text-4xl text-center justify-center items-center flex hover:bg-[#294c37]"><p>Feedback</p></button>
        <button onClick={() => setSteps("FinalPolish")} className="border-8 border-[#008827] m-[.5vh] p-4 text-2xl lg:text-4xl text-center justify-center items-center flex hover:bg-[#294c37]"><p>Final Polish</p></button>
        <button onClick={() => setSteps("ShippingAndMaintenance")} className="border-8 border-[#008827] m-[.5vh] p-4 text-2xl lg:text-4xl text-center justify-center items-center flex hover:bg-[#294c37] lg:col-span-2"><p>Shipping and Maintenance</p></button>
      </motion.div>
    </div>
  )
}

export default Page