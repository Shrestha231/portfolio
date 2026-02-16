import React from 'react'
import avatarImg from "../assets/7358602-removebg-preview.png"
import TextChange from './TextChange'
const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-16 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking-tighter">
       <TextChange/>
        </h1>

        <p className='text-sm md:text-2xl tracking-tight mt-4'>
         I turn complex ideas into seamless, high impact web experiences - building modern, responsive web applications that delight users and drive business growth.
        </p>

        <button className='mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-lg bg-[#465697]'>
          Contact Me
        </button>
      </div>

      <div>
        <img className="" src={avatarImg} alt="" />
      </div>
    </div>
  )
}

export default Home
