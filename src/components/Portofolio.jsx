import React from 'react'
import gidblog from '../assets/gidblog.png'
import ecommense from '../assets/strapi.png'
import gpos from '../assets/gpos.png'
import landingpage from '../assets/bootstrap.png'
import "../components/space.css"



const Portofolio = () => {
    const Portfolios = [
        {
             id:1,
             source: gidblog, 
             referencelink: "https://fullstack-blog-next.vercel.app/",
             github: "https://github.com/GrockTech/FullstackBlog-Next"

        },
        {
            id:2,
            source: ecommense, 
            href: "https://ecommerce-frontend-orpin-tau.vercel.app/",
            github: "https://github.com/GrockTech/Ecommerce-Frontend"
        },
        {
            id:3,
            source: gpos, 
            link: "https://github.com/GrockTech/POS-Frontend",
            github: "https://github.com/GrockTech/POS-backend"

        },
        {
            id:4,
            source: landingpage, 
            link: "https://boostrap-website-eta.vercel.app/",
            github: "https://github.com/GrockTech/boostrapWebsite"

        },


]
  return (
    // <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
    //     <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
    //         <div className='pb-8 '>
    //             <p className='text-4xl font-bold inline boader-b-4 boarder-gray-500 '>Portfolio</p>
    //             <p className='py-6'>Check some of my projects </p>
    //         </div>
           
    //         <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

    //         {Portfolios.map(({id, source, referencelink, github}) => (

    //         <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
    //         <img src={source} alt="" className='p-3 h-29 rounded-md hover:scale-105 duration-200' />

    //         <div className='flex items-center justify-center'>
    //         <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                
    //             <a href={referencelink}>Demo</a>
    //         </button>
    //         <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
    //         <a href={github} rel="noreferrer" target="_blank">View Code</a>
    //             </button>
    //         </div>


    //         </div>
                   
                   
    //                ))}

              

                
    //         </div>

    //     </div>


    // </div>
    <div name="portfolio" id='givemeSpace' className="bg-gradient-to-b from-black to-gray-800 min-h-screen w-full text-white md:h-screen">
  <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
    <div className='pb-8 text-center'>
      <p className='text-4xl  font-bold inline border-b-4 border-gray-500'>Portfolio</p>
      <p className='py-6 text-center'>Check out some of my projects</p>
    </div>

    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-2 sm:px-0'>
      {Portfolios.map(({ id, source, referencelink, github }) => (
        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
          <img src={source} alt="" className='p-3 w-full h-auto object-cover rounded-md hover:scale-105 duration-200' />

          <div className='flex items-center justify-center'>
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
              <a href={referencelink} target="_blank" rel="noreferrer">Demo</a>
            </button>
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
              <a href={github} target="_blank" rel="noreferrer">View Code</a>
            </button>
          </div>
        </div>
      ))}
    </div>
  
  </div>

</div>

  )
}

export default Portofolio