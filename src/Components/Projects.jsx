import React from "react";
import ProjectCard from "./ProjectCard";
import ecommerceImg from "../assets/image.png"
import internshipImg from "../assets/internship.jpg"

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-30 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-5 grid grid-cols-1 md:grid-cols-2 gap-10 ">

        <ProjectCard
          title="Ecommerce Website"
          main="An e-commerce platform with user authentication, product listing, cart, and order management"
          image={ecommerceImg}
        />
        <ProjectCard
          title="Internship Recommendation System"
          main="a system which match students with relevant internships based on skills
and academic profile"
         image={internshipImg} 
        />
      
      </div>
    </div>
  );
};

export default Projects;