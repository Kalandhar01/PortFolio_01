import React, { useState } from 'react';

const Popup = () => {
  const [visible, setVisible] = useState(false);



  return (
    <>

      //To make the Input WIth effect

      {
        visible &&
        (
          <>

            <div className='w-screen  m-10 h-screen absolute top-10 left-0 flex justify-center items-center backdrop-blur'>

              <div className='  bg-slate-300'>


                <h1>Hello daa i am Working</h1>
                <button onClick={() => setVisible()} > delete</button>\
              </div>
            </div>

          </>
        )

      }

      <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 float-end m-10 mr-[10rem]"

        onClick={() => setVisible(!visible)}  >Login</button>


    </>
  )
}

export default Popup
