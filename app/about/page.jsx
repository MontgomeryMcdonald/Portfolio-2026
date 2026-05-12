import Image from 'next/image'
const page = () => {
  function getAge(){
    let bday = new Date("October 27, 2008")
    let ageDiff = Date.now() - bday
    var ageDate = new Date(ageDiff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }
  let age = getAge()

  return (
    <div className="flex flex-col h-full align-center justify-center items-center w-screen lg:w-fit lg:flex-row">
      <div className="">    
        <Image
          src="https://res.cloudinary.com/drg8btdmp/image/upload/me_swhgxo.png"
          width={500}
          height={500}
          alt="Picture of Montgomery Mcdonald"
          className="bg-[#083117] border-8 p-0 my-4 border-[#00ee00] w-[90vw] lg:w-fit h-fit"
        />
      {/* <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-[27vh]">
        <input type="button" value="General" className="bg-[#083117] text-lg p-4 border-8 border-[#00ee00] hover:bg-[#006600]"/>
        <input type="button" value="Credentials" className="bg-[#083117] text-lg p-4 border-8 border-[#00ee00] hover:bg-[#006600]"/>
        <input type="button" value="What I Do" className="bg-[#083117] text-lg p-4 border-8 border-[#00ee00] hover:bg-[#006600]"/>
        <input type="button" value="Why I Do It" className="bg-[#083117] text-lg p-4 border-8 border-[#00ee00] hover:bg-[#006600]"/>
      </div> */}
      </div>
      <div className="bg-[#083117] border-8 border-[#00ee00] m-[1.25vh] p-4 w-[90vw] lg:w-[50vw] lg:h-[93.5%]">
        <p className="text-lg">
          My name is Montgomery Mcdonald, I am a {age} year old Web Developer based in Phoenix, Arizona. i have been developing websites since 2024 and video games since 2022. Since then, ive made a wide range of projects, from rhythm games, business pages, CRUD APIs, and a City-Building Tower-Defense game.
        </p>
        <br />
        <p className="text-lg">
          I make websites and games, because i genuinely believe they can tell stories, inspire people, and persuade people. I have been creating through code since 2022, and have lived and loved every second of it. I find no greater joy than seeing a client{"'"}s work done to the utmost of my ability, accomplishing everything they want and more.
        </p>
        <br />
        <p className="text-lg">
          In my free time, I work on my own passion projects, such as a First-Person Story-Based Shooter called P[H]otochemic, a movement-based infinite runner rougelike, and a custom, ever-growing homepage that suits my needs perfectly, including a search bar, quick-access links, and a custom calender system that hooks into Google Calenders.
        </p>
        <br />
        <p className="text-lg">
          Through my practice and study of code, i have earned the following certifications:
        </p>
            <ul className="p-2.5 m-2.5">
              <li className="list-disc text-lg">Python (PCEP, PCAP, ITS Python)</li>
              <li className="list-disc text-lg">Javascript (ITS Javascript)</li>
              <li className="list-disc text-lg">HTML and CSS (ITS HTML & CSS, ITS HTML5 Application Design)</li>
              <li className="list-disc text-lg">Java (ITS Java)</li>
              <li className="list-disc text-lg">Software Development (ITS Software Development)</li>
              <li className="list-disc text-lg">Computational Thinking (ITS Computational Thinking)</li>
            </ul>
            I am also skilled in:
              <ul className="p-2.5 m-2.5">
                <li className="list-disc text-lg">The Godot Game Engine</li>
                <li className="list-disc text-lg">Unreal Engine 5</li>
                <li className="list-disc text-lg">NodeJS (ExpressJS, EJS, ReactJS, NodeJS)</li>
                <li className="list-disc text-lg">TailwindCSS, SCSS/SASS</li>
                <li className="list-disc text-lg">Linux (Arch, Debian, Fedora, NixOS)</li>
              </ul>
      </div>
    </div>
  )
}
export default page
