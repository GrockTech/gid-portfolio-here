import React from 'react'
import Html from '../assets/html.png'
import ReactImage from '../assets/react-icon.png'
import Tailwind from '../assets/csstailwind.png'
import MernStack from '../assets/MERN-logo.png'



const Experience = () => {
  const techlogogies = [
        {
          id:1,
          source: ReactImage, 
          title: "React"
        },
        {
          id:2,
          source: Tailwind,
          title: "Tailwind CSS"
        },
        {
          id:3,
          source: MernStack ,
          title: "MERN"
        },

        {
          id:4,
          source: Html ,
          title: "HTML"
        },
  ]
  return (
    <div name="experience" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
           
           <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            
            <div className='pb-8 mt-6'>
            <p className='text-4xl font-bold inline boader-b-4 boarder-gray-500 '>Experience</p>
            <p className='pt-3 font-bold'>These are the Technolgoies I have work with.</p>

            </div>
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 text-center gap-8 px-12 sm:px-0'>
            {techlogogies.map(({id, source, title})=>(
              
                
                
               <div key={id} className="  items-center justify-center p-3 shadow-md rounded-lg shadow-gray-500" >
                   <img src={source} alt="" className=' p-3 w-20 mx-auto rounded-md hover:scale-105 duration-200' />
                   <p className='mt-4'>{title}</p>

               </div>
           
            ))}
            </div>
           
            
            </div> 


    </div>
  )
}

export default Experience