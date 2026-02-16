import React from "react";
import AboutImg from "../assets/Shrestha Kumari Photo.png"; // apni image ka naam yaha daalo

const About = () => {
  return (
    <section id="About" className="w-full min-h-screen bg-linear-to-r from-black via-gray-900 to-black text-white flex items-center px-10">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Image */}
        <div className="shrink-0">
          <img
            src={AboutImg}
            alt="Profile"
            className="w-72 h-80 object-cover rounded-2xl shadow-lg border border-gray-700"
          />
        </div>

        {/* Right Content */}
        <div>
          <h1 className="text-5xl font-bold text-teal-400">
            Shrestha Kumari
          </h1>

          <h2 className="text-xl mt-3 font-semibold text-gray-300">
            Frontend Developer
          </h2>

          <p className="mt-6 text-gray-400 leading-8 max-w-2xl">
            I am a Frontend Developer with a passion for building web
            applications that provide an exceptional user experience. I have a
            strong foundation in both front-end  technologies,
            allowing me to create seamless and efficient applications. My goal
            is to leverage my skills to contribute to innovative projects and
            continuously learn in the ever-evolving tech landscape.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
