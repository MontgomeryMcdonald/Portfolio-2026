
import { FaLinkedin, FaGithub, FaItchIo} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="border-8 border-[#008827] m-[.5vh] p-4 text-4xl text-center justify-between items-center flex flex-col lg:flex-row w-full">
      <p className="text-4xl">Copyright Montgomery Mcdonald, {new Date().getFullYear()}</p>
      <div className="flex flex-row-reverse"> 
      <FaLinkedin className="text-6xl mx-5"/>
      <FaGithub className="text-6xl mx-5"/>
      <FaItchIo className="text-6xl mx-5"/>
      </div>
    </div>
  )
}

export default Footer
