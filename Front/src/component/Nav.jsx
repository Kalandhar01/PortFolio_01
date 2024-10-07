import { motion } from 'framer-motion';
import { AlignCenter, UserRoundPen } from 'lucide-react'; // Importing icons
import React, { useState } from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling
import '../index.css';

const Nav = ({ setCurrentSection }) => {
  const data = [
    { name: 'Home', path: 'landing-page' },
    { name: 'About', path: 'about' },
    { name: 'Contact', path: 'contact' },
    { name: 'Project', path: 'project' }, // Corrected name to match the App component
  ];

  const [check, setCheck] = useState(false);
  const [innerVisible, setInnerVisible] = useState(false);

  const toggleNavbar = () => {
    setCheck((curr) => !curr);
    if (!check) {
      setInnerVisible(false);
    }
  };

  return (
    <nav className='w-auto h-10 bg-inherit m-5 flex justify-between rounded-lg font-serif sm:justify-between'>
      <div className='ml-10'>
        <h1 className='text-2xl font-serif font-medium py-1 ml-2'>Portfolio</h1>
      </div>

      {/* Desktop Navigation */}
      <div className='relative p-2 mr-32 max-sm:hidden'>
        <ul className='flex gap-8 font-light'>
          {data.map((item, index) => (
            <li
              key={index}
              className='hover:underline'
              onClick={() => setCurrentSection(item.path)} // Track section clicks
            >
              <Link to={item.path} smooth={true} duration={500}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation Icon */}
      <AlignCenter className='sm:hidden mt-2 mr-3 cursor-pointer' onClick={toggleNavbar} />

      {/* Mobile Dropdown Navigation */}
      {check && (
        <motion.div
          initial={{ y: -300, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -300, opacity: 0, scale: 0.8 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 20,
            duration: 0.8,
          }}
          onAnimationComplete={() => setInnerVisible(true)}
          className='sm:hidden w-[70%] h-[60%] z-10 absolute backdrop-blur-sm top-20 right-5 shadow-lg rounded-lg bg-white'
        >
          <div className='flex flex-col items-center justify-center mt-10'>
            {data.map((item, index) => (
              innerVisible && (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 + index * 0.3 }}
                  className='w-[50%] cursor-pointer mb-4'
                >
                  <Link
                    to={item.path}
                    smooth={true}
                    duration={500}
                    className='text-center hover:underline primary_text1 text-2xl'
                    onClick={() => {
                      setCurrentSection(item.path); // Track section clicks
                      toggleNavbar();
                    }}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              )
            ))}
          </div>
        </motion.div>
      )}

      {/* Profile Icon */}
      <UserRoundPen
        className='mr-5 mt-2 cursor-pointer max-sm:hidden'
        onClick={() => {
          console.log('Profile Clicked');
        }}
      />
    </nav>
  );
};

export default Nav;
