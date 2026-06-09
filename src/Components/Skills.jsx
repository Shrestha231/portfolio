// import React from "react";
// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava } from "react-icons/fa";
// import { SiMysql } from "react-icons/si";

// const Skills = () => {
//   return (
//     <div id="Skills" className="w-full py-20 bg-black text-white">
      
//       {/* Heading */}
//       <div className="text-center mb-16">
//         <h1 className="text-4xl md:text-6xl font-bold text-cyan-400">
//           My Skills
//         </h1>
//         <p className="text-gray-400 mt-4 text-lg">
//           Modern Web Technologies
//         </p>
//       </div>

//       {/* Skills Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-12 px-10 md:px-32 place-items-center">
        
//         <SkillItem Icon={FaHtml5} name="HTML" />
//         <SkillItem Icon={FaCss3Alt} name="CSS" />
//         <SkillItem Icon={FaJs} name="JavaScript" />
//         <SkillItem Icon={FaReact} name="ReactJS" />
//         <SkillItem Icon={FaJava} name="Java" />
//         <SkillItem Icon={SiMysql} name="MySQL" />

//       </div>
//     </div>
//   );
// };

// const SkillItem = ({ Icon, name }) => {
//   return (
//     <div className="flex flex-col items-center gap-4 hover:scale-110 transition duration-300 cursor-pointer">
//       <Icon size={70} className="text-cyan-400" />
//       <p className="text-lg">{name}</p>
//     </div>
//   );
// };

// export default Skills;
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMysql,
  SiMongodb,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skills = [
  { Icon: FaHtml5, name: "HTML5", color: "text-orange-500" },
  { Icon: FaCss3Alt, name: "CSS3", color: "text-blue-500" },
  { Icon: FaJs, name: "JavaScript", color: "text-yellow-400" },
  { Icon: FaReact, name: "React.js", color: "text-cyan-400" },
  { Icon: SiTailwindcss, name: "Tailwind CSS", color: "text-sky-400" },
  { Icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
  { Icon: TbApi, name: "REST APIs", color: "text-teal-400" },
  { Icon: SiMysql, name: "MySQL", color: "text-blue-400" },
  { Icon: SiMongodb, name: "MongoDB", color: "text-green-400" },
  { Icon: FaJava, name: "Java", color: "text-red-400" },
  { Icon: FaGitAlt, name: "Git & GitHub", color: "text-orange-400" },
];

const Skills = () => {
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section
      id="skills"
      className="py-24 bg-gray-950 text-white overflow-hidden"
    >
      <div className="text-center mb-14 px-8">
        <p className="text-sm text-blue-400 font-semibold tracking-widest uppercase mb-3">
          What I work with
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Technical{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Modern web technologies I use to build scalable applications
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 h-full w-60 bg-gradient-to-r from-gray-950 to-transparent z-10" />

        {/* Right Fade */}
        <div className="absolute right-0 top-0 h-full w-60 bg-gradient-to-l from-gray-950 to-transparent z-10" />

        <div className="flex w-max gap-5 animate-marquee hover:[animation-play-state:paused]">
          {duplicatedSkills.map(({ Icon, name, color }, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-gray-900 border border-gray-800
              hover:border-cyan-500/40 rounded-2xl px-6 py-4
              transition-all duration-300 hover:-translate-y-1
              hover:shadow-lg hover:shadow-cyan-500/10 shrink-0"
            >
              <Icon size={26} className={color} />

              <span className="font-medium text-gray-300">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;