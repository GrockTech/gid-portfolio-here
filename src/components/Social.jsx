import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillFilePersonFill} from 'react-icons/bs'

const Social = () => {
    const links = [
        {
              id: 1,
              child:(<>LinkedIn <FaLinkedin size={30}/>   </>),
               href:"https://linkedin.com",
               style: 'rounded-tr-md'

        },
        {
            id: 2,
            child:(<>GitHub <FaGithub size={30}/>   </>),
             href:"https://github.com/GrockTech",
             style: 'rounded-tr-md'

      },
      {
        id: 3,
        child:(<>Mail <HiOutlineMail size={30}/>   </>),
         href:"mailto:ootiarhin@gmail.com ",
         

  },
  {
    id: 4,
    child:(<>Resume <BsFillFilePersonFill size={30}/>   </>),
     href:"/resume-gid.pdf",
     style: 'rounded-br-md',
     download: true 

},

]
  return (
    <div className='hidden lg:flex flex-col top-[36%] left-0 fixed'>
        <ul>
            {links.map(({id, child, href, download, style }) =>(

                <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 rounded-sm ml-[-100px] bg-gray-500 hover:ml-[-10px] hover:rounded-md duration-300"} >
                <a
                    href={href}   
                    className='flex justify-between items-center w-full text-white
                    target="_blank"
                     ' target="_blank" download={download} rel="noreferrer">
                    
                    
                    {child}

                  
                    
                </a>
                </li>

            ))}
            
        </ul>
         

    </div>
  )
}

export default Social