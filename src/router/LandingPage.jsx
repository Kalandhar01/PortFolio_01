import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

import { motion } from 'framer-motion';
import gitMain from '../assets/gitMain.gif';
import global from '../assets/global.gif';
import lin from '../assets/linmain.gif';
import myGif from '../assets/myGif.gif';
import { react } from '../assets';




const LandingPage = () => {
    const [text] = useTypewriter({
        words: ['Developer', 'Designer', 'Programmer'], // Fix the typo in 'Developer'
        loop: true,
        typeSpeed: 50,
        deleteSpeed: 50
    });
    return (
        <>

            <div className='bg-slate-100 ml-5 mr-5 '>

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}

                >






                    <div className='  w-auto h-screen flex  max-sm:flex-col max-sm:flex-col relative '>

                       

                        <div className='w-[50%] h-auto flex  flex-col justify-center ml-20 sm:pl-20 max-sm:ml-0 max-sm:flex-1 max-sm:pl-10 max-sm:justify-center sm:mb-20 max-sm:w-[100%]  '>

                            {/* //Inside Left */}
                            <div className='mb-5 '>
                                <p className='text-[23px] mb-3 font-serif'> Hello, I'm</p>
                                <h1 className='text-5xl font-serif mb-3'>  <span className='text-red-600 tracking-wider'> Kalandhar</span> </h1>
                                <h1 className='text-3xl font-serif mb-3'> Best<br /> <span className='text-red-600 hover:'> {text} </span>
                                    <Cursor />
                                </h1>


                            </div>

                            <div className="w-8 flex gap-4">
                                <img
                                    className="transform hover:scale-110 transition duration-300 ease-in-out"
                                    src={gitMain}
                                    alt="GitHub"
                                />
                                <img
                                    className="transform hover:scale-110 transition duration-300 ease-in-out"
                                    src={lin}
                                    alt="LinkedIn"
                                />
                                <img
                                    className="transform hover:scale-110 transition duration-300 ease-in-out"
                                    src={global}
                                    alt="Global"
                                />
                            </div>










                        </div>



                        <div>
                            {/* //RIght Side */}
                            <div className=' w-full h-full flex justify-center items-center max-sm:h-[70%]'>


                                <img src={myGif} alt="My GIF" />

                            </div>


                        </div>



                    </div>
                </motion.div>
            </div>

        </>
    )
}

export default LandingPage
