import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ecommerceImg from "../assets/image.png"
import internshipImg from "../assets/internship.jpg"
import weatherImg from "../assets/weatherdashboard.jpeg"

const projectsData = [
  {
    id: 1,
    title: "Ecommerce Website",
    description: "A full-featured e-commerce platform with user authentication, product listing, shopping cart, and order management. Built with modern web technologies for optimal performance.",
    image: ecommerceImg,
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://shopzyy-4jyj.onrender.com/",
    githubUrl: "https://github.com/yourusername/ecommerce",
  },
  {
    id: 2,
    title: "Internship Recommendation System",
    description: "An intelligent system that matches students with relevant internships based on skills and academic profile. Uses algorithms to provide personalized recommendations.",
    image: internshipImg,
    category: "Machine Learning",
    technologies: ["Python", "React", "Flask", "PostgreSQL"],
    liveUrl: "https://internship-system.example.com/",
    githubUrl: "https://github.com/yourusername/internship-system",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A real-time weather application providing current weather information, forecasts, and weather alerts. Features interactive maps and detailed meteorological data.",
    image: weatherImg,
    category: "Frontend",
    technologies: ["React", "OpenWeather API", "Tailwind CSS"],
    liveUrl: "https://weather-dashboard.example.com/",
    githubUrl: "https://github.com/yourusername/weather-dashboard",
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ["All", ...new Set(projectsData.map(p => p.category))];
  const filteredProjects = selectedCategory === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <section id="Projects" className="w-full py-24 bg-slate-950 text-white overflow-hidden">
      {/* Background animation elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-40 right-10 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Heading */}
        <div className={`text-center mb-16 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-sm text-cyan-400 font-semibold tracking-widest uppercase mb-4">
            Featured Work
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Recent{" "}
            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of my recent work showcasing full-stack development, UI/UX design, and problem-solving skills.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-3 mb-16 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-linear-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700 hover:border-blue-500/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No projects in this category.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;