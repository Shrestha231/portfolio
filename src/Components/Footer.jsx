import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

const Footer = () => {
  const links = [
    {
      icon: MdOutlineEmail,
      label: "Email me",
      value: "shrestha2784@gmail.com",
      href: "mailto:shrestha2784@gmail.com",
      tag: "Quickest response",
    },
    {
      icon: CiLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/shresthakumarib0bb47318",
      href: "https://linkedin.com/in/shresthakumarib0bb47318",
      tag: "Let's connect",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "github.com/Shrestha231",
      href: "https://github.com/Shrestha231",
      tag: "See my work",
    },
  ];

  return (
    <section
      id="Contact"
      className="relative w-full bg-gray-950 text-white overflow-hidden"
    >
      {/* ── Top premium divider line ── */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      {/* ── Soft ambient glowing backdrops ── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-12 right-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-24 pb-16">
        
        {/* ── Main Split Container (Hero Left, Links Right) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start mb-24">
          
          {/* LEFT COLUMN: Hero Call to Action */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs text-cyan-400 font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Get in touch
              </p>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.1]">
                Let's build
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  something great.
                </span>
              </h2>
            </div>
            
            <p className="text-gray-400 text-base max-w-md leading-relaxed">
              I'm open to full-time roles, freelance projects, and interesting
              collaborations. Drop me a message — I typically reply within 24 hours.
            </p>

            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2.5 bg-gray-900/60 backdrop-blur border border-gray-800/80 rounded-full px-4 py-1.5 text-xs text-gray-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Based in India · Available for Remote / Hybrid</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Link Rows */}
          <div className="lg:col-span-6 lg:col-start-7 divide-y divide-gray-900 border-t border-b border-gray-900">
            {links.map(({ icon: Icon, label, value, href, tag }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-6 px-2
                           hover:bg-gradient-to-r hover:from-gray-900/40 hover:to-transparent
                           transition-all duration-300 ease-out rounded-lg"
              >
                {/* Channel Icon & Text */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-800/80
                                  group-hover:border-cyan-500/30 group-hover:bg-cyan-950/10
                                  flex items-center justify-center text-xl text-gray-400
                                  group-hover:text-cyan-400 transition-all duration-300 shrink-0">
                    <Icon />
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5 mb-0.5">
                      <span className="text-base font-semibold text-gray-200
                                       group-hover:text-white transition-colors duration-300">
                        {label}
                      </span>
                      <span className="text-[10px] tracking-wide font-medium px-2 py-0.5 rounded-full bg-gray-900
                                       text-gray-500 border border-gray-800 hidden sm:inline-block">
                        {tag}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300 break-all">
                      {value}
                    </span>
                  </div>
                </div>

                {/* Arrow indicator */}
                <div className="w-8 h-8 rounded-full bg-transparent flex items-center justify-center border border-transparent group-hover:border-gray-800 group-hover:bg-gray-900/50 transition-all duration-300">
                  <HiArrowUpRight
                    className="text-gray-600 group-hover:text-cyan-400
                               group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                               transition-all duration-300 text-lg shrink-0"
                  />
                </div>
              </a>
            ))}
          </div>

        </div>

        {/* ── Bottom Bar (Copyright & Branding) ── */}
        <div className="pt-8 border-t border-gray-900
                        flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xl font-bold tracking-tight text-white">
            Shrestha<span className="text-cyan-400">.</span>
          </span>

          <p className="text-gray-600 text-xs text-center order-3 sm:order-none">
            Designed & built by Shrestha Kumari &nbsp;·&nbsp; {new Date().getFullYear()}
          </p>

          <div className="flex items-center gap-6 text-gray-500 text-xs">
            <a href="https://github.com/Shrestha231"
               target="_blank" rel="noopener noreferrer"
               className="hover:text-cyan-400 transition-colors duration-200">
              GitHub
            </a>
            <a href="https://linkedin.com/in/shresthakumarib0bb47318"
               target="_blank" rel="noopener noreferrer"
               className="hover:text-cyan-400 transition-colors duration-200">
              LinkedIn
            </a>
            <a href="mailto:shrestha2784@gmail.com"
               className="hover:text-cyan-400 transition-colors duration-200">
              Email
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Footer;