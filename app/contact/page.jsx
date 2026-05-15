"use client"
import {motion} from 'motion/react'

const page = () => {
  const formClass="bg-[#294c37] border-8 border-[#008827] w-full h-fit m-5 p-5 text-2xl"




  async function sendEmail(e){
        try {
      const payload = { ...form };
      const res = await fetch("/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
    } catch (err) {
      console.error("")
    } 
    }
  
    return (
      <div className="flex flex-col justify-center items-center h-full">
      <form action="/contact" method="post" onSubmit={sendEmail} className="m-[1.25vh] p-4 w-[90vw] lg:w-[40vw] lg:h-[93.5%] flex flex-col">
          <motion.input transition={{duration: 1}} animate={{y: ['-100vh', 0]}} type="text" id="email" className={formClass} placeholder="Email"/>
          <motion.input transition={{duration: 1, delay:1}} animate={{x: ['100vw', 0]}} type="text" id="name" className={formClass} placeholder="Name"/>
          <motion.input transition={{duration: 1, delay:2}} animate={{y: ['100vw', 0]}} type="text" id="subject" className={formClass} placeholder="Subject Line"/>
          <motion.textarea transition={{duration: 1, delay:3}} animate={{x: ['100vw', 0]}} name="email-body" id="emailBody" className={formClass} cols="30" rows="10"></motion.textarea>
          <motion.button transition={{duration: 1, delay:4}} animate={{x: ['-100vw', 0]}} className={"bg-[#294c37] border-8 border-[#008827] w-full h-fit m-5 p-5 text-2xl hover:bg-[#008800]"}>Submit Now</motion.button>
      </form>
    </div>
  )
}
export default page
