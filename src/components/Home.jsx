import React from 'react'
import GidPhoto from '../assets/gidite.png'
import {FaArrowCircleRight} from 'react-icons/fa'
import {Link} from "react-scroll"
const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b
     from-black to-gray-800 '>
      
      <div className='max-w-screen-lg mx-auto flex flex-col 
      items-center justify-center mt-4 px-4 h-full  md:flex-row'>
       
        <div className='flex flex-col justify-center h-full '>

            <h2 className='text-4xl sm:text-7xl font-bold text-white md:space-y-18'>I'm a full Stack Developer</h2>

            <p className='text-gray-500 py-4 max-w-md'>
                I am a clever Developer with three years of experience. 
                I am a Mern Stack Developer with deep understanding of UI.
                I am a lover of tailwind CSS, React Js and MongoDB.

            </p>
            
            <div>
            <Link to="portfolio" smooth duration={500} className=' group text-white w-fit px-6 py-3 my-2
            flex items-center space-x-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                
                Portfolio 
                <span className='group-hover:rotate-90  duration-300'>
                <FaArrowCircleRight className='p-2' size={40}/>
                </span>
            </Link>
            </div>
           
        </div>
        
        
         
        <div>
        <img src={GidPhoto} alt="my profile"  
        className='rounded-2xl  mx-auto w-2/3 md:w-full'/>
      </div>
     
     </div>
      
    </div>
  )
}

export default Home