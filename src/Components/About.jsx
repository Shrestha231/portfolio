
import React, { useState, useEffect } from "react"
import AboutImg from "../assets/Myphoto.png"
import { FaCode, FaServer, FaDatabase, FaPuzzlePiece } from "react-icons/fa"

const highlights = [
  {
    icon: FaCode,
    title: "Frontend Development",
    description: "Building responsive, interactive UIs with React, Tailwind CSS, and modern JavaScript",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: FaServer,
    title: "Backend Development",
    description: "Designing scalable APIs and microservices with Node.js, Express, and RESTful architecture",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: FaDatabase,
    title: "Database Management",
    description: "Optimizing data solutions with MySQL, MongoDB, and efficient schema design",
    color: "from-green-500 to-teal-500"
  },
  {
    icon: FaPuzzlePiece,
    title: "Problem Solving & DSA",
    description: "Strong algorithmic thinking with expertise in data structures and problem-solving",
    color: "from-orange-500 to-red-500"
  },
]

const stats = [
  { number: "3+", label: "Projects Built", icon: "🚀" },
  { number: "7+", label: "Technologies", icon: "⚙️" },
  { number: "50+", label: "Coding Problems", icon: "💡" },
  { number: "2x", label: "Ideathon Winner", icon: "🏆" },
]

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animateStats, setAnimateStats] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const timer = setTimeout(() => setAnimateStats(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="About" className="w-full py-10 bg-slate-950 text-white overflow-hidden">
      {/* Background animation elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-1">
        
        {/* Section Header */}
        <div className={`text-center mb-20 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* <p className="text-sm text-cyan-400 font-semibold tracking-widest uppercase mb-4">
            Get to know me
          </p> */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About{" "}
            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </div>

        {/* Main Content - Two Column */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Left Column - Profile Image */}
          <div className={`flex justify-center md:justify-start transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative">
              {/* Glow background */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
              
              {/* Image frame */}
              <div className="relative p-1 bg-linear-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-3xl overflow-hidden">
                <div className="bg-slate-950 rounded-2xl p-4">
                  <img
                    src={AboutImg}
                    alt="Shrestha Kumari"
                    className="w-full max-w-sm h-auto object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Achievement Badge */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg font-semibold flex items-center gap-2 border border-purple-400/30">
                <span className="text-lg">🎓</span>
                MCA · 83% Score
              </div>
            </div>
          </div>

          {/* Right Column - Introduction */}
          <div className={`flex flex-col justify-center transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Shrestha Kumari
              </h3>
              <p className="text-xl text-cyan-400 font-semibold">
                Full Stack Software Engineer
              </p>
            </div>

            <p className="text-gray-400 text-lg leading-8 mb-6">
              I'm a passionate <span className="text-white font-semibold">Full Stack Developer skilled in React, Node.js, Express.js, MongoDB, and Java, with a passion for building scalable and impactful web applications. I specialize in creating responsive, high-performance solutions that combine clean architecture, seamless user experiences, and efficient backend systems.</span>
            </p>

            <p className="text-gray-400 text-lg leading-8 mb-8">
              My approach combines <span className="text-white font-semibold">clean code principles</span>, <span className="text-white font-semibold">responsive design</span>, and <span className="text-white font-semibold">user-centric thinking</span>. From e-commerce platforms to recommendation systems, I transform ideas into seamless digital experiences.
            </p>

            {/* Key Info Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Education", value: "MCA (2026)" },
                { label: "University", value: "GL Bajaj ITM" },
                { label: "Experience", value: "Full Stack Dev" },
                { label: "Availability", value: "Immediate" },
              ].map((item) => (
                <div 
                  key={item.label}
                  className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-blue-500/50 rounded-xl p-4 transition-all duration-300 hover:bg-gray-900"
                >
                  <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">{item.label}</div>
                  <div className="text-sm font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="mb-20">
          <h3 className={`text-2xl md:text-3xl font-bold text-white mb-12 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            What I am doing
          </h3>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl transition-all duration-500"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  {/* Border gradient */}
                  <div className={`absolute inset-0 border border-gray-800 group-hover:border-gray-700 rounded-2xl transition-colors duration-300`}></div>

                  {/* Glow on hover */}
                  <div className={`absolute -inset-0.5 bg-linear-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300 -z-10`}></div>

                  <div className="relative p-6 h-full flex flex-col bg-linear-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white text-lg" />
                    </div>
                    
                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>
                    
                    <p className="text-gray-400 text-sm leading-6 group-hover:text-gray-300 transition-colors">
                      {item.description}
                    </p>

                    <div className="mt-auto pt-4 flex items-center text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-semibold">Learn more</span>
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Statistics Section */}
       
{/* Statistics Section */}
<div className="relative mt-28">
  {/* Left & Right Neomorphic Glow Orbs */}
  <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-72 h-32 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
  <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-72 h-32 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

  {/* Section Divider Header */}
  <div className={`flex items-center gap-4 mb-16 transform transition-all duration-700 ${animateStats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
    <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-slate-800"></div>
    <span className="text-xs uppercase tracking-[0.3em] bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-black px-4">
      Metrics & Milestones
    </span>
    <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-slate-800"></div>
  </div>
  
  {/* Grid Layout */}
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 relative z-10">
    {stats.map((stat, index) => (
      <div 
        key={stat.label}
        className={`relative group flex flex-col items-center text-center p-8 rounded-3xl transition-all duration-500 bg-slate-900/10 backdrop-blur-md border border-slate-900 hover:border-slate-800 hover:bg-slate-900/30 ${
          animateStats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        {/* Sleek Top Accent Line on Hover */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-1/2 transition-all duration-500 rounded-full" />

        {/* Futuristic Glowing Ring around Icon */}
        <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-slate-950 border border-slate-800/80 mb-6 transition-all duration-500 group-hover:border-transparent group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]">
          {/* Animated Gradient Ring hidden until hover */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 p-[1px]">
            <div className="w-full h-full bg-slate-950 rounded-full"></div>
          </div>
          <span className="text-2xl transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
            {stat.icon}
          </span>
        </div>

        {/* Hyper-Bold Typography */}
        <div className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-2 transition-all duration-300 group-hover:tracking-normal group-hover:text-cyan-400">
          {stat.number}
        </div>

        {/* Minimalist Label */}
        <div className="text-xs uppercase font-semibold tracking-widest text-slate-500 group-hover:text-slate-300 transition-colors duration-300">
          {stat.label}
        </div>

        {/* Subtle Decorative Crosshairs in corners (Tech/Cyber aesthetic) */}
        <div className="absolute top-3 right-3 w-1 h-1 bg-slate-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute bottom-3 left-3 w-1 h-1 bg-slate-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  )
}

export default About