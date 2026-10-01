import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ecommerceImg from "../assets/image.png"
import internshipImg from "../assets/Event.jpeg"
import blogImg from "../assets/blog.webp"


const projectsData = [
  {
    id: 1,
    title: "Ecommerce Website",
    description: "A full-featured e-commerce platform with user authentication, product listing, shopping cart, and order management. Built with modern web technologies for optimal performance.",
    image: ecommerceImg,
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://shopzyy-4jyj.onrender.com/",
    // githubUrl: "https://github.com/yourusername/ecommerce",
  },
  {
    id: 2,
    title: "Blog Management System",
    description: "A role-based blog automation platform that enables Admins and Editors to create, manage, edit, and publish blogs through dedicated dashboards.",
    image: blogImg,
    category: "Full Stack",
    technologies: ["React", "TailwindCSS", "Nodejs", "Express.js", "REST API", "MongoDB"],
    liveUrl: "https://blog-management-c42c.onrender.com/",
    // githubUrl: "https://github.com/yourusername/event-system",
  },

  {
    id: 3,
    title: "Event Aggregator and Management System",
    description: "An intelligent system that matches students with relevant events based on interests and academic profile. Uses algorithms to provide personalized recommendations.",
    image: internshipImg,
    category: "Full Stack",
    technologies: ["React", "TailwindCSS", "Nodejs", "MongoDB"],
    liveUrl: "https://event-system.example.com/",
    // githubUrl: "https://github.com/yourusername/event-system",
  },

];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

          <h2 className="text-4xl md:text-5xl font-bold font-poppins tracking-tight mb-6 text-white">
            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of my recent work showcasing full-stack development, UI/UX design, and problem-solving skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* Empty state */}
        {projectsData.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No projects in this category.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;