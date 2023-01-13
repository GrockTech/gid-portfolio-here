import React from 'react'

const About = () => {
  return (
    <div  name="about" className=' h-full w-full bg-black px-6'>
        <div className='max-w-screen-lg p mx-auto flex flex-col justify-center h-full w-full '>
            <div className='pb-8 mt-8'>
              <p className='text-white text-4xl font-bold inline border-b-4 border-gray-500'>About </p>
            </div>

          <p className='text-white mt-20 text-xl'> 
          My name is Gideon Oti Arhin, a proffesonal Developer who completed Bluecrest University with 
          Diploma in Web Development and Certificate in Computer Application.
           </p> 

            <br/>
            <p className='text-white text-xl'> I have been in the field of programming for three years, building web base applications and landing pages.
             I am an ardent programmer who is very analytical in solving problems with code. I love the thrill of learning new Technologies as the industry evolves. </p> 

        </div>


    </div>
  )
}

export default About