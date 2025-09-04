import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import AtomAnimation from "./AtomAnimation";

const Navbar = () => {
  return ( 
    <nav className="sticky top-0 z-50 flex items-center justify-between py-4 bg-transparent backdrop-blur-sm px-8">
      {/* Logo on the left with more spacing */}
      <div className="flex items-center h-16 ml-4">
        <div className="w-24 h-24 flex items-center justify-center">
          <AtomAnimation />
        </div>
      </div>
      
      {/* Social icons on the right with more spacing */}
      <div className="flex items-center h-16 gap-6 mr-6">
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/khaled-elfaham/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
          <FaLinkedin size={32} />
        </a>
        {/* Instagram */}
        <a href="https://www.instagram.com/khaledmnms/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-all duration-300 transform hover:scale-110">
          <FaInstagram size={32} />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;