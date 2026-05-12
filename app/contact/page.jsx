"use client"


const page = () => {
  const formClass="bg-[#083117] border-8 border-[#00ee00] w-full h-fit m-5 p-5 text-2xl"
  async function sendEmail(e){
    }
  
    return (
      <div className="flex flex-col justify-center items-center h-full">
      <form action="/contact" method="post" onSubmit={sendEmail} className="m-[1.25vh] p-4 w-[90vw] lg:w-[40vw] lg:h-[93.5%] flex flex-col">
          <input type="text" id="email" className={formClass} placeholder="Email"/>
          <input type="text" id="snamet" className={formClass} placeholder="Name"/>
          <input type="text" id="subject" className={formClass} placeholder="Subject Line"/>
          <textarea name="email-body" id="emailBody" className={formClass} cols="30" rows="10"></textarea>
          <button onClick={() => {sendEmail()}} className={"bg-[#083117] border-8 border-[#00ee00] w-full h-fit m-5 p-5 text-2xl hover:bg-[#008800]"}>Submit Now</button>
      </form>
    </div>
  )
}
export default page
