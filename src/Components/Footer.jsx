import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

const PROFILE = {
  name: "Shrestha Kumari",
  email: "shrestha2784@gmail.com",
  github: "https://github.com/Shrestha231",
  linkedin: "https://linkedin.com/in/shresthakumarib0bb47318",
};

const LINKS = [
  {
    icon: <FaEnvelope className="w-4 h-4" />,
    label: "Email",
    value: "shrestha2784@gmail.com",
    href: `mailto:${PROFILE.email}`,
    external: false,
    testId: "contact-email",
  },
  {
    icon: <FaLinkedin className="w-4 h-4" />,
    label: "LinkedIn",
    value: "Shrestha Kumari",
    href: PROFILE.linkedin,
    external: true,
    testId: "contact-linkedin",
  },
  {
    icon: <FaGithub className="w-4 h-4" />,
    label: "GitHub",
    value: "Shrestha231",
    href: PROFILE.github,
    external: true,
    testId: "contact-github",
  },
];

/* ─── Contact Section ─────────────────────────────────────── */
export const ContactSection = () => (
  <section
    id="contact"
    data-testid="contact-section"
    className="relative pt-16 pb-8 px-0 max-w-6xl mx-auto overflow-hidden"
  >
    {/* Ambient radial background glows */}
    <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 blur-[100px] pointer-events-none rounded-full" />
    <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-purple-500/5 blur-[90px] pointer-events-none rounded-full" />

    {/* Section heading */}
    <div className="mb-12 relative z-10 text-left">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400/80 mb-2 font-semibold">
        Get in touch
      </p>
      <h2 className="text-4xl font-bold text-white tracking-tight">
        Contact
      </h2>
    </div>

    {/* Open air elegant grid system layout */}
    <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-stretch">
      
      {/* Left Column — Text Intro */}
      <div className="md:col-span-5 flex flex-col justify-between py-1">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-purple-400 font-semibold mb-3">
            Say hello
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
            Let's build something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              great together
            </span>
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-sm">
            Whether it's a new project, a collaboration, or just a hello — I'd
            love to hear from you. I'm always open to interesting opportunities
            and conversations.
          </p>
        </div>

        {/* Availability badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 self-start backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-emerald-400 text-[11px] font-mono font-medium tracking-wide">
            Available for opportunities
          </span>
        </div>
      </div>

      {/* Right Column — Professional Row Links */}
      <div className="md:col-span-7 flex flex-col justify-between divide-y divide-zinc-900 border-t border-b border-zinc-900">
        {LINKS.map(({ icon, label, value, href, external, testId }) => (
          <a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            data-testid={testId}
            aria-label={label}
            className="group flex items-center gap-5 py-5 transition-all duration-300 hover:translate-x-1"
          >
            {/* Clean minimalist Icon Box */}
            <div className="w-10 h-10 rounded-xl bg-zinc-900/40 border border-zinc-800/40 flex items-center justify-center text-zinc-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 group-hover:bg-cyan-950/20 transition-all duration-300 flex-shrink-0">
              {icon}
            </div>

            {/* Link Context */}
            <div className="flex-1 min-w-0">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 group-hover:text-cyan-400/80 transition-colors mb-0.5 font-semibold">
                {label}
              </p>
              <p className="text-sm font-medium text-zinc-300 group-hover:text-white truncate transition-colors">
                {value}
              </p>
            </div>

            {/* Action Indicator Arrow */}
            <ArrowUpRight
              size={16}
              className="text-zinc-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0"
            />
          </a>
        ))}
      </div>

    </div>
  </section>
);

/* ─── Minimal Balanced Footer ───────────────────────────────── */
export const Footer = () => (
  <footer className="relative mt-4 border-t border-zinc-900/40" data-testid="footer" />
);

const ContactAndFooter = () => (
  <div className="bg-zinc-950 text-white overflow-hidden">
    <ContactSection />
    <Footer />
  </div>
);

export default ContactAndFooter;