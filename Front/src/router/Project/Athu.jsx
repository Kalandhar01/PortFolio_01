import { motion } from 'framer-motion';
import React from 'react';


const Athu = ({ image, title }) => {
//   const [liked, setLiked] = useState(false); 

//   const handleLikeClick = () => {
//     setLiked(!liked); 
//   };

  return (
    <motion.div
      className='w-[270px] h-[360px] border max-sm:w-[330px] max-sm:h-[350px] rounded-xl hover:shadow-2xl'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Image Section */}
      <div className='w-full h-[200px]'>
        <img
          src={image}
          alt="Culinary Journey"
          className='w-full h-full object-cover rounded-lg'
        />
      </div>

      {/* Content Section */}
      <div className='p-7 pt-4 flex flex-col h-20 mt-5'>
        <a href="#" className='cursor-pointer'>
          <h1 className='primary_text text-black text-[20px] font-semibold opacity-80 hover:text-red-500 overflow-hidden whitespace-nowrap text-ellipsis primary_text1'>
            {title}
          </h1>
        </a>

        <div className='mt-auto'>
          <p className='opacity-10 p-0 m-0'>___________________________________</p>

        
        
        </div>
      </div>
    </motion.div>
  );
};

export default Athu;
