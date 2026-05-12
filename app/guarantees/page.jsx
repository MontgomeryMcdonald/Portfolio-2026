"use client"
import {useState, useEffect} from 'react'

const Page = () => {
    const Guarantees = {
        Punctuality: "When it comes to the things I promise when working with a client, Punctuality can, and often is, the most important. When I give a timeline of when a project might conclude, I'm promising that I'll finish by then. And in business, if a promise is not met, shareholders lose money. stocks can fall. So when a business, or even just a client, gets a timeline from me, its a promise that I will do everything in my power to complete the website when and how I've said. ",
        Skill: "\"Give a man a fish, and he'll eat for a day. Teach a man to fish, and he'll eat for a lifetime.\" That quote, on its surface, is simple. If you give someone a skill, they can use it as many times as they want, instead of just doing the work for them, which only gives them the benefit once. It is with that mindset that i tackle projects. I go for a full range of abilities, every part of the web development ecosystem, from design to coding forward and backward facing systems. I do this for a simple reason: because I want to provide the best possible work, and that means knowing how to do it all myself, so if something goes wrong, I can fix it.",
        Creativity: "Creativity is the someones capability to think outside the box, and solve problems dynamically. When it comes to meeting a client's requirements, Creativity is important. It lets you come up with faster, easier, or better solutions to problems as they happen, and makes de-bugging code easier, as you can look at it from multiple angles. When I do work for a client, i approach it creatively, trying to see every angle of the project, and how each project and feature would interact with eachother and the end user.",
        Professionalism: "Professionalism is someones ability to act in a professional manner, even if they may be disinclined to do so. its the oft-heard customer service voice, of someone doing their job. Even when things go bad, or a client makes a last-minute change, I face it with professionalism, because I know, with the tools in my arsenal, I'll make it work.",
        Quality: "I do everything I can to make sure that every line of code I write, every piece of documentation I make, and every wireframe, timeline or API I design, is of the highest possible quality. Nobody would use a site regularly, if it didnt function properly, didnt explain things well, or didn't look aesthetically pleasing. It is with that in mind that i do all I can to make sure that every project I take on, and every feature I implement, meets a standard of quality and excellence that I feel I can be proud of.",
        Commitment: "If I say I'll do something, it gets done. If I promise a deadline, its done ahead of time. This is because I am commited to my work. I strive for quality because without it, what is there worth commiting to? I strive for skill I am commited to my work. it is with this mindset that I take on every client, with a dedication to myself and them, that I will get what i say done, on time, and to the highest degree of excellence."
    }







  const [guarantee, setGuarantee] = useState("Punctuality")




  return (
    <div className="align-center justify-center items-center w-full h-fit lg:h-full">
      <div className="bg-[#083117] border-8 border-[#00ee00] m-[.5vh] p-4 w-full flex justify-center h-fit lg:h-[65%] text-4xl">
        <p>{Guarantees[guarantee]}</p>
      </div>
      <div className="grid lg:grid-cols-4 lg:grid-rows-2 w-full grid-cols-2 grid-rows-4 h-[34%]">
        <button onClick={() => setGuarantee("Punctuality")} className=" border-8 border-[#00ee00] m-[.5vh] p-4 text-2xl lg:text-4xl text-center justify-center items-center flex lg:col-span-2 hover:bg-[#083117]"><p>Punctuality</p></button>
        <button onClick={() => setGuarantee("Skill")} className="border-8 border-[#00ee00] m-[.5vh] p-4 text-2xl lg:text-4xl text-center justify-center items-center flex lg:row-span-2 hover:bg-[#083117]"><p>Skill</p></button>
        <button onClick={() => setGuarantee("Creativity")} className="border-8 border-[#00ee00] m-[.5vh] p-4 text-2xl lg:text-4xl text-center justify-center items-center flex hover:bg-[#083117]"><p>Creativity</p></button>
        <button onClick={() => setGuarantee("Professionalism")} className="border-8 border-[#00ee00] m-[.5vh] p-4 text-2xl lg:text-4xl text-center justify-center items-center flex hover:bg-[#083117]"><p>Professionalism</p></button>
        <button onClick={() => setGuarantee("Quality")} className="border-8 border-[#00ee00] m-[.5vh] p-4 text-2xl lg:text-4xl text-center justify-center items-center flex hover:bg-[#083117]"><p>Quality</p></button>
        <button onClick={() => setGuarantee("Commitment")} className="border-8 border-[#00ee00] m-[.5vh] p-4 text-2xl lg:text-4xl text-center justify-center items-center flex hover:bg-[#083117]"><p>Commitment</p></button>
      </div>
    </div>
  )
}

export default Page