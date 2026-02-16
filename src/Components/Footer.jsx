import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
   <div
  id="Footer"
  className="w-full bg-[#465697] text-white py-12"
>
  <div className="max-w-6xl mx-auto px-6 md:px-20 
                  flex flex-col md:flex-row 
                  justify-between items-center md:items-start 
                  text-center md:text-left gap-10">

    {/* Left Section */}
    <div>
      <h1 className="text-3xl md:text-5xl font-bold">
        Contact
      </h1>
      <h3 className="text-sm md:text-xl mt-2">
        Feel Free To Reach Out!
      </h3>
    </div>

    {/* Right Section */}
    <ul className="text-sm md:text-lg space-y-5">
      
      <li className="flex items-center gap-3 justify-center md:justify-start">
        <MdOutlineEmail size={22} />
        <a
          href="mailto:shrestha2784@gmail.com"
          className="hover:underline break-all"
        >
          shrestha2784@gmail.com
        </a>
      </li>

      <li className="flex items-center gap-3 justify-center md:justify-start">
        <CiLinkedin size={22} />
        <a
          href="https://linkedin.com/in/shresthakumarib0bb47318"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn Profile
        </a>
      </li>

      <li className="flex items-center gap-3 justify-center md:justify-start">
        <FaGithub size={22} />
        <a
          href="https://github.com/Shrestha231"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub Profile
        </a>
      </li>

    </ul>

  </div>
</div>

  );
};

export default Footer;
