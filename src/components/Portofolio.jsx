import React from 'react'
import WeatherApp from '../assets/weather.jpg'
import Restaurant from '../assets/restaurant.png'
import Ecommense from '../assets/ecommense.png'

const Portofolio = () => {
    const Portfolios = [
        {
             id:1,
             source: WeatherApp, 
        },
        {
            id:2,
            source: Restaurant, 
        },
        {
            id:3,
            source: Ecommense, 
        },


]
  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline boader-b-4 boarder-gray-500 '>Portfolio</p>
                <p className='py-6'>Check some of my projects </p>
            </div>
           
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

            {Portfolios.map(({id, source}) => (

            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={source} alt="" className='p-3 h-29 rounded-md hover:scale-105 duration-200' />

            <div className='flex items-center justify-center'>
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>View</button>
            </div>


            </div>
                   
                   
                   ))}

              

                
            </div>

        </div>


    </div>
  )
}

export default Portofolio