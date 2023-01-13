import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='bg-gradient-to-b from-black to-gray-800 text-white p-4'>
       
       <div className='flex flex-col p-4 justify-center max-w-screen-lg h-full mx-auto '>
        
        <div className='pb-8'>
            <p className='pb-2 text-4xl inline border-b border-gray-500'>Contact</p>
           
            <p className='py-6'>Submit the following form to in get in touch</p>
        </div>
        
        <div className='flex justify-center items-center'>
            <form action='https://getform.io/f/a22a2540-70c8-4471-96cf-cf6a7822a994' method="POST" className='flex flex-col w-full md:w-1/2'>
                <input type="text" placeholder='Please enter your name' 
                className='p-2 bg-transparent border-2 
                rounded-md text-white focus:outline-none' />

            <input type="text" 
                placeholder='Please enter your email' 
                className=' my-4 p-2 bg-transparent border-2 
                rounded-md text-white focus:outline-none' />

                <textarea name="message" 
                className='p-2 bg-transparent 
                border-2 rounded-md
                 text-white '
                 placeholder='Please enter your message'
                  rows="10"></textarea>


                <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-4 py-3 my-8 rounded-md mx-auto flex item-center hover:scale-105 duration-300'>
                    Let's get in touch
                </button>
            </form>
            </div>

        </div>
    </div>
  )
}

export default Contact