// import React from 'react'
// import avatarImg from "../assets/7358602-removebg-preview.png"
// import TextChange from './TextChange'
// const Home = () => {
//   return (
//     <div className="text-white flex w-full justify-between items-start p-16 md:p-20">
//       <div className="md:w-2/4 md:pt-10">
//         <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking-tighter">
//        <TextChange/>
//         </h1>

//         <p className='text-sm md:text-2xl tracking-tight mt-4'>
//          I turn complex ideas into seamless, high impact web experiences - building modern, responsive web applications that delight users and drive business growth.
//         </p>

//         <button className='mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-lg bg-[#465697]'>
//           Contact Me
//         </button>
//       </div>

//       <div>
//         <img className="" src={avatarImg} alt="" />
//       </div>
//     </div>
//   )
// }

// export default Home
import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import avatarImg from "../assets/7358602-removebg-preview.png"

const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Problem Solver",
]

const Home = () => {
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const current = roles[roleIndex]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIndex + 1))
        setCharIndex(i => i + 1)
        if (charIndex + 1 === current.length) setTimeout(() => setDeleting(true), 1500)
      } else {
        setText(current.slice(0, charIndex - 1))
        setCharIndex(i => i - 1)
        if (charIndex - 1 === 0) {
          setDeleting(false)
          setRoleIndex(i => (i + 1) % roles.length)
        }
      }
    }, deleting ? 60 : 100)
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex])

  const downloadResume = () => {
    // Create a simple resume download - you can replace with your actual resume file
    const link = document.createElement('a')
    link.href = 'https://drive.google.com/file/d/1SbKiifRtAe4B9C8rfIKqC7fLnDyFjD4_/view?usp=sharing' // Replace with your actual resume path
    link.download = 'Resume.pdf'
    link.click()
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-20 py-16 md:py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs sm:text-sm font-medium mb-6 hover:border-green-500/60 transition-colors">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span>Open to Opportunities</span>
            </div>

            {/* Main Heading */}
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 tracking-tighter">
                <span className="text-slate-100">Hi, I'm </span>
                <span className="relative inline-flex items-baseline">
                  {/* Subtle, elegant glow */}
                  <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 blur-2xl opacity-30 animate-pulse"></span>
                  
                  {/* Vibrant Name Gradient */}
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 drop-shadow-lg">
                    Shrestha
                  </span>
                  
                  {/* Decorative bouncing dot */}
                  <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-purple-400 ml-2 animate-bounce inline-block"></span>
                </span>
              </h1>

              {/* Animated role text */}
              <div className="h-12 md:h-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 min-h-14">
                  {text}
                  <span className="inline-block w-1 h-10 md:h-12 bg-linear-to-b from-cyan-400 to-blue-500 ml-2 animate-pulse align-middle"></span>
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              I craft beautiful, high-performance web applications that solve real problems.
              Specializing in full-stack development with React, Node.js, and modern web technologies.
              Let's build something amazing together.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              {/* <button className="group relative px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95">
                <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-cyan-600 group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300"></div>
                <span className="relative flex items-center gap-2">
                  View My Work
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button> */}

              <a
                href="https://drive.google.com/file/d/1SbKiifRtAe4B9C8rfIKqC7fLnDyFjD4_/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block group relative px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold border-2 border-gray-600 text-gray-200 hover:text-white hover:border-blue-400 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="flex items-center gap-2">
                  Download Resume
                  <span className="group-hover:translate-y-0.5 transition-transform">⬇</span>
                </span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <span className="text-gray-400 text-sm font-medium">Connect with me:</span>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Shrestha231"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700 text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/shrestha-kumari-b0bb47318"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700 text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>

                <a
                  href="mailto:shrestha2784@gmail.com"
                  className="p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700 text-gray-300 hover:text-orange-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/20"
                  aria-label="Email"
                >
                  <FaEnvelope size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Animated glow background */}
            <div className="relative w-full h-auto max-w-[320px] mx-auto">
              {/* Outer glow circle */}
              <div className="absolute inset-0 bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              <div className="absolute inset-0 bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur-xl opacity-20" style={{ animationDelay: '1s' }}></div>

              {/* Image container */}
              <div className="relative p-1 bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl overflow-hidden">
                <div className="bg-linear-to-br from-slate-900 to-slate-950 rounded-3xl p-5">
                  <div className="relative overflow-hidden rounded-2xl bg-gray-800">
                    <img
                      src={avatarImg}
                      alt="Profile"
                      className="w-full h-[260px] object-cover hover:scale-110 transition-transform duration-500"
                    />
                    {/* Shine effect overlay */}
                    <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white to-transparent opacity-0 hover:opacity-10 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              {/* <div className="absolute -bottom-6 -left-6 bg-linear-to-br from-gray-800 to-gray-900 rounded-xl p-4 shadow-2xl border border-gray-700 backdrop-blur-sm hover:scale-105 transition-transform hidden sm:block">
                <p className="text-cyan-400 font-bold text-lg">500+</p>
                <p className="text-gray-300 text-sm">Projects Built</p>
              </div> */}

              {/* <div className="absolute -top-6 -right-6 bg-linear-to-br from-gray-800 to-gray-900 rounded-xl p-4 shadow-2xl border border-gray-700 backdrop-blur-sm hover:scale-105 transition-transform hidden sm:block">
                <p className="text-purple-400 font-bold text-lg">5+</p>
                <p className="text-gray-300 text-sm">Years Experience</p>
              </div> */}
            </div>
          </div>

        </div>


      </div>
    </section>
  )
}

export default Home