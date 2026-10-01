import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="relative py-15 md:py-10 overflow-hidden bg-[#050508]">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins tracking-tight text-white mb-6">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Experience</span>
          </h2>
        </div>

        <div className="relative pl-4 md:pl-8 border-l border-white/10 ml-2 md:ml-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="relative p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300 shadow-sm"
          >
            {/* Timeline dot */}
            <div className="absolute top-10 -left-[22px] md:-left-[38px] w-4 h-4 md:w-5 md:h-5 rounded-full bg-slate-900 flex items-center justify-center border-2 border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>

            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  Web Development Intern
                </h3>
                <p className="text-lg text-cyan-400 font-medium">Qmize Technologies</p>
              </div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-medium self-start md:self-auto">
                April 2026 – September 2026
              </div>
            </div>

            <ul className="space-y-4 text-white/75 text-sm md:text-base leading-relaxed">
              {[
                "Developed the Qmize Technologies company website, including the responsive homepage and website sections.",
                "Contributed to the development of the Digintra website, implementing multiple pages including Home and Contact, along with a blog backend system.",
                "Integrated frontend components with REST APIs, handled API responses, and managed application data.",
                "Performed functional testing, debugging, and workflow testing to identify and resolve UI and application issues.",
                "Used Git and GitHub for version control and maintained development task and bug-fix documentation."
              ].map((bullet, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <span className="text-cyan-400 mt-1.5 text-xs">◆</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
