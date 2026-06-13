

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  FileCode,
  Atom,
  Wind,
  Server,
  Database,
  Table,
  Network,
  Coffee,
  GitBranch,
} from "lucide-react";

const SKILLS = [
  { name: "HTML5", icon: "Code2" },
  { name: "CSS3", icon: "Palette" },
  { name: "JavaScript", icon: "FileCode" },
  { name: "React.js", icon: "Atom" },
  { name: "Tailwind CSS", icon: "Wind" },
  { name: "Node.js", icon: "Server" },
  { name: "MongoDB", icon: "Database" },
  { name: "MySQL", icon: "Table" },
  { name: "REST APIs", icon: "Network" },
  { name: "Java", icon: "Coffee" },
  { name: "Git & GitHub", icon: "GitBranch" },
];

const ICONS = {
  Code2,
  Palette,
  FileCode,
  Atom,
  Wind,
  Server,
  Database,
  Table,
  Network,
  Coffee,
  GitBranch,
};

// Simple animation variants for staggered loading entry
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const SkillPill = ({ name, icon }) => {
  const Icon = ICONS[icon] || Code2;
  return (
    <motion.div
      variants={itemVariants}
      className="group flex items-center gap-4 px-5 py-4 rounded-xl glass border border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.05] transition-all duration-300 cursor-default shadow-sm"
      data-testid={`skill-${name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
    >
      <div className="p-2 rounded-lg bg-white/[0.03] group-hover:bg-cyan-400/10 transition-colors duration-300">
        <Icon
          size={22}
          className="text-cyan-400 group-hover:text-purple-400 transition-colors duration-300"
        />
      </div>
      <span className="text-white/85 text-sm md:text-base font-medium tracking-wide">
        {name}
      </span>
    </motion.div>
  );
};

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-20 md:py-28 overflow-hidden bg-[#050508]"
      data-testid="skills-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Block */}
        <div className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
           
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white">
              Core <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-cyan-400">Skills</span>
            </h2>
          </div>
         
        </div>

        {/* Static Professional Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {SKILLS.map((skill) => (
            <SkillPill key={skill.name} {...skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;