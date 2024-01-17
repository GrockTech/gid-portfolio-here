import React from 'react'
// import Html from '../assets/html.png'
// import ReactImage from '../assets/react-icon.png'
import Tailwind from '../assets/csstailwind.png'
import MernStack from '../assets/MERN-logo.png'
import js from '../assets/js.png'
import nextJs from '../assets/next-js.svg'
import bst from '../assets/bst.png'


const Experience = () => {
  const techlogogies = [
    {
      id:1,
      source: js ,
      title: "Javascript"
    },
    {
      id:2,
      source: MernStack ,
      title: "MERN Stack"
    },
       
    {
          id:2,
          source: nextJs, 
          title: "Next Js"
        },
        {
          id:3,
          source: Tailwind ,
          title: "Tailwind CSS"
        },
        {
          id:4,
          source:bst,
          title: "Bootstrap CSS"
        },
        

      
  ]
  return (
    // <div name="experience" className="bg-gradient-to-b from-black to-gray-800 w-full   text-white h-full md:h-screen">
    //        <br />
    //        <br />
    //        <br />
    //        <div className='max-w-screen-lg p-4 mx-auto  mt-10 flex flex-col justify-center w-full h-full'>
            
    //         <div className='pb-8 mt-8'>
    //         <p className='text-4xl font-bold inline boader-b-4 boarder-gray-500 '>Experience</p>
    //         <p className='pt-3 font-bold'>These are the Technolgoies I have work with.</p>

    //         </div>
    //         <div  className='grid sm:grid-cols-2 md:grid-cols-3 text-center gap-8 px-8 sm:px-0'>
    //         {techlogogies.map(({id, source, title})=>(
              
                
                
    //            <div key={id} className="  items-center justify-center p-3 shadow-md rounded-lg shadow-gray-500" >
    //                <img src={source} alt="" className=' p-2 w-20 mx-auto rounded-md hover:scale-105 duration-200' />
    //                <p className='mt-4'>{title}</p>

    //            </div>
           
    //         ))}
    //         </div>
           
    //         <br />
    //         <br />
    //         <br />
    //         </div> 


    // </div>
    <div name="experience" className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen">
    <div className='max-w-screen-lg p-4 mx-auto  flex flex-col justify-center w-full'>
      <div className='pb-8 mt-10 text-center'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
        <p className='pt-3 font-bold'>These are the Technologies I have worked with.</p>
      </div>
  
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center gap-8 px-4 sm:px-0'>
        {techlogogies.map(({ id, source, title }) => (
          <div key={id} className="items-center justify-center p-3 shadow-md rounded-lg shadow-gray-500">
            <img src={source} alt="" className='p-2 w-20 mx-auto rounded-md hover:scale-105 duration-200' />
            <p className='mt-4'>{title}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  )
}

export default Experience