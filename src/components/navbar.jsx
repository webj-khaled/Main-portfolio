import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return ( 
    <nav className="mb-6 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-[200px] h-[200px]" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4">
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/khaled-elfaham/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
          <FaLinkedin size={30} />
        </a>
        {/* GitHub */}
        <a href="https://github.com/webj-khaled" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
          <FaGithub size={30} />
        </a>
        {/* Instagram */}
        <a href="https://www.instagram.com/khaledmnms/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
          <FaInstagram size={30} />
        </a>
        {/* Twitter/X */}
        <a href="https://x.com/khaledelfaham52" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FaSquareXTwitter size={30} />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
