import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#0c0e19] text-white px-6 md:px-20 py-4 flex justify-between items-center">
      
      <span className="text-xl md:text-2xl font-bold tracking-wide">
        Portfolio
      </span>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-semibold">
        <li><a href="#About" className="hover:text-purple-400 transition">About</a></li>
        <li><a href="#Skills" className="hover:text-purple-400 transition">Skills</a></li>
        <li><a href="#Projects" className="hover:text-purple-400 transition">Projects</a></li>
        <li><a href="#Footer" className="hover:text-purple-400 transition">Contact</a></li>
      </ul>

      {/* Mobile Icon */}
      <div className="md:hidden">
        {menu ? (
          <RiCloseLine
            size={30}
            className="cursor-pointer"
            onClick={() => setMenu(false)}
          />
        ) : (
          <RiMenu2Line
            size={30}
            className="cursor-pointer"
            onClick={() => setMenu(true)}
          />
        )}
      </div>

      {/* Mobile Menu */}
      {menu && (
        <ul className="absolute top-14 left-0 w-full bg-[#111325] text-center py-6 flex flex-col gap-6 font-semibold md:hidden">
          <li><a href="#About" onClick={() => setMenu(false)}>About</a></li> 
           {/* about click krne pe humberger closed */}
          <li><a href="#Skills" onClick={() => setMenu(false)}>Skills</a></li>
          <li><a href="#Projects" onClick={() => setMenu(false)}>Projects</a></li>
          <li><a href="#Footer" onClick={() => setMenu(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
