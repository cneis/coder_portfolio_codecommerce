import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
const Main = () => {
  return (
    <div id="main">
        <img className="w-full h-screen object-cover" src="background.jpg" />
        
        <div className='w-full h-screen absolute top-[-30%] left-0 text-white'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center lg:items-start'>
                <h1 className='sm:text-6xl text-5xl font-bold text-gray-100'>I'm Christopher Neis</h1>
                <h2 className='flex sm:text-3xl text-2x pt-4 text-gray-400'>I'm a 

                <TypeAnimation
                    sequence={[
                        ' Developer',  
                        1000, // Waits 1s
                        ' Coder',  
                        1000,  
                        ' Webdesigner', 
                        1000,  
                        ' Programmer', 
                        1000,  
                        ' Site builder', 
                        1000
                        
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '1em', paddingLeft: '5px'  }}
                />


                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <FaTwitter className="cursor-pointer" size={20} />
                    <FaFacebookF className="cursor-pointer" size={20}/>
                    <FaInstagram className="cursor-pointer" size={20}/>
                    <FaLinkedinIn className="cursor-pointer" size={20}/>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Main