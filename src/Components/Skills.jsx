import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

const Skills = () => {
  return (
    <div id="Skills" className="w-full py-20 bg-black text-white">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-cyan-400">
          My Skills
        </h1>
        <p className="text-gray-400 mt-4 text-lg">
          Modern Web Technologies
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-12 px-10 md:px-32 place-items-center">
        
        <SkillItem Icon={FaHtml5} name="HTML" />
        <SkillItem Icon={FaCss3Alt} name="CSS" />
        <SkillItem Icon={FaJs} name="JavaScript" />
        <SkillItem Icon={FaReact} name="ReactJS" />
        <SkillItem Icon={FaJava} name="Java" />
        <SkillItem Icon={SiMysql} name="MySQL" />

      </div>
    </div>
  );
};

const SkillItem = ({ Icon, name }) => {
  return (
    <div className="flex flex-col items-center gap-4 hover:scale-110 transition duration-300 cursor-pointer">
      <Icon size={70} className="text-cyan-400" />
      <p className="text-lg">{name}</p>
    </div>
  );
};

export default Skills;
