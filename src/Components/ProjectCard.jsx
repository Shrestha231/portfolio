import React, { useState } from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const ProjectCard = ({ title, description, image, category, technologies, liveUrl, githubUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative h-full overflow-hidden rounded-2xl transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glassmorphism background with backdrop blur */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-300"></div>

      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-linear-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>

      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 bg-linear-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300 -z-10"></div>

      <div className="relative flex flex-col h-full p-6 md:p-8">
        
        {/* Image container */}
        <div className="relative overflow-hidden rounded-xl mb-6 bg-gray-800">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-white transition-all duration-300 hover:scale-110"
                aria-label="Live Demo"
              >
                <FaExternalLinkAlt size={20} />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-white transition-all duration-300 hover:scale-110"
                aria-label="GitHub Repository"
              >
                <FaGithub size={20} />
              </a>
            )}
          </div>
        </div>

        {/* Category badge */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-cyan-400 bg-cyan-400/20 rounded-full border border-cyan-400/30">
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 grow group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 text-xs font-medium text-gray-300 bg-gray-800/50 rounded-lg border border-gray-700/50 group-hover:border-gray-600 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-auto">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 group/btn relative px-4 py-3 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-cyan-600 group-hover/btn:from-blue-500 group-hover/btn:to-cyan-500 transition-all duration-300"></div>
              <span className="relative flex items-center justify-center gap-2">
                Live Demo
                <FaExternalLinkAlt size={14} />
              </span>
            </a>
          )}
          
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-3 rounded-lg font-semibold text-white border-2 border-gray-600 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <FaGithub size={16} />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;