import React from "react"
const ProjectCard = ({ title, main, image }) => {
  return (
    <div className='p-4 flex flex-col w-full max-w-md bg-[#0c0e19] shadow-lg rounded-2xl'>

        <img className='p-4 rounded-xl' src={image} alt={title} />

        <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
          {title}
        </h3>

        <p className="px-4 text-sm md:text-md leading-tight py-2">
          {main}
        </p>

        <div className="mt-auto p-4 flex flex-col sm:flex-row gap-4">
  
  {/* <a
    href="https://shopzyy-4jyj.onrender.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-center text-white py-2 px-4 text-sm md:text-base 
               hover:opacity-85 hover:scale-105 transition duration-300 
               font-semibold rounded-lg bg-[#465697] "
  >
    Demo
  </a> */}
  <p className="text-center text-white py-2 px-4 text-sm md:text-base 
               hover:opacity-85 hover:scale-105 transition duration-300 
               font-semibold rounded-lg bg-[#465697] ">Demo</p>

  {/* <a
    href="https://github.com/yourusername/yourrepo"
    target="_blank"
    rel="noopener noreferrer"
    className="text-center text-white py-2 px-4 text-sm md:text-base 
               hover:opacity-85 hover:scale-105 transition duration-300 
               font-semibold rounded-lg bg-[#465697]"
  >
    Source Code
  </a> */}

</div>

    </div>
  )
}
export default ProjectCard;