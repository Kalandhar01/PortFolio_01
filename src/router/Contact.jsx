import React, { useEffect } from 'react'
import {
  phone,
  email,
  location,
  left,
  right,
} from '../assets'

import { useState } from 'react';


const Contact = () => {



  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });


  const [change, setChange] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {

    // Handle form submission logic here
    alert('Form submitted:', formData);
    setChange((curr) => !curr)
  };

  useEffect(() => {


  }, [change])

  return (
    <>

    <div className='p-5 max-sm:p-0'>



      <div className='wfull h-screen flex-col p-5 bg-slate-100  max-sm:h-full relative'>


        <div className='absolute z-10 max-sm:hidden'> 
          <img src={left} alt="" 
          width={130} />

        </div>

        <div className='absolute z-10 max-sm:hidden bottom-0 right-0'> 
          <img src={right} alt="" 
          width={130} /> 

        </div>


        <div className='w-full h-30% flex justify-center mt-16  max-sm: '>


          <div className=' w-[45%] max-sm:w-full'>
            <div className='flex justify-center'>
              <h1 className='text-[#F75023] primary_text1 text-[22px] '>Contact Me</h1>
            </div>


            <div className='flex justify-center mt-2 sm'>
              <h1 className=' primary_text1 text-[32px] font-semibold '>I Want To Hear From You</h1>
            </div>

            <div className='flex justify-center mt-2 mt-6 '>
              <h1 className=' primary_text1 pl-8 max-sm:p-0 text-[#6F6B80] text-center'>Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Fridayn  </h1>
            </div>

          </div>
        </div>


        <div className='flex mt-16 max-sm:flex-col max-sm:pl-5  '>


          <div className='w-[50%] pl-[8rem] p-10 max-sm:p-0 max-sm:w-full'>

            <div className='flex gap-5 mb-10'>
              <div>
                <img src={location} alt=""
                  width={60}
                  className='rounded-xl' />

              </div>

              <div>
                <h2 className='text-[25px] primary_text1 font-bold'>Address</h2>
                <h1>Chinniyampalayam , Coimbathore</h1>
              </div>
            </div>
            <div className='flex gap-5 mb-10'>
              <div>
                <img src={phone} alt=""
                  width={60}
                  className='rounded-xl' />

              </div>

              <div>
                <h2 className='text-[25px] primary_text1 font-bold'>Phone</h2>
                <h1>+91 9025679255</h1>
              </div>
            </div>
            <div className='flex gap-5 mb-10'>
              <div>
                <img src={email} alt=""
                  width={60}
                  className='rounded-xl' />

              </div>

              <div>
                <h2 className='text-[25px] primary_text1 font-bold'>Address</h2>
                <h1>Chinniyambalayam , Coimbathore</h1>
              </div>
            </div>




          </div>






          <div>

          </div>

          <div>

          </div>

          <div className='w-[50%] mt-10 '>
            <form onSubmit={handleSubmit} className="max-w-lg max-sm:w-full ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 max-sm:w-[320px]" >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="border border-gray-300 p-2 rounded-md w-full  bg-slate-100  h-[60px] "
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="border border-gray-300 p-2 rounded-md w-full  bg-slate-100  h-[60px]"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 max-sm:w-[320px]">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  className="border border-gray-300 p-2 rounded-md w-full bg-slate-100  h-[60px]"
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="border border-gray-300 p-2 rounded-md w-full  bg-slate-100 h-[60px]"
                  required
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here"
                className="border border-gray-300 p-2 rounded-md w-full mb-4 h-32  bg-slate-100  max-sm:w-[320px]"
                required
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
              >
                Submit Now
              </button>
            </form>


          </div>

        </div>
      </div>

      </div>



    </>
  )
}

export default Contact
