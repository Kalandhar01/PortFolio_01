import React, { useState } from 'react';

const Ref = () => {
  // Define the state for the form data
//   const [data, setData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     pass: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData((curr) => ({
//       ...curr,
//       [name]: value 
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted with the following data:', data);
   
//   };



// ----------------------REF----------------------


const Name = useState(null);
const Email = useState(null);
const Phone  = useState(null);
const Pass = useState(null);

const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(Name.current.value )
    console.log(Email.current.value )
    console.log(Phone.current.value )
    console.log(Pass.current.value )
}






  return (
    <>
      <div className="h-screen w-screen bg-slate-300 flex flex-col justify-center items-center">
        <div className="w-[400px] h-[550px] bg-slate-500 rounded-xl">
          <h1 className="font-serif text-center font-bold text-white text-2xl mt-8 mb-4">

          <span
  class="text-3xl font-bold bg-gradient-to-r from-red-700 via-blue-700 to-green-400 text-transparent bg-clip-text animate-gradient"
>
 Sign Up With Me
</span>




           
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="w-full ml-1 p-5 max-w-sm min-w-[200px]">
              <input
                className="w-full bg-white text-white-700 text-sm border border-slate-200 rounded-md px-3 p-3"
                placeholder="Name"
                name="name"
                ref = {Name}
                // value={data.name}
                // onChange={handleChange}
              />
            </div>

            <div className="w-full ml-1 p-5 max-w-sm min-w-[200px]">
              <input
                className="w-full bg-white text-white-700 text-sm border border-slate-200 rounded-md px-3 p-3"
                placeholder="Email"
                name="email"
                // value={data.email}
                ref={Email}
                // onChange={handleChange}
              />
            </div>

            <div className="w-full ml-1 p-5 max-w-sm min-w-[200px]">
              <input
                className="w-full bg-white text-white-700 text-sm border border-slate-200 rounded-md px-3 p-3"
                placeholder="Phone"
                name="phone"
                // value={data.phone}
                ref = {Phone}
                // onChange={handleChange}
              />
            </div>

            <div className="w-full ml-1 p-5 max-w-sm min-w-[200px]">
              <input
                className="w-full bg-white text-white-700 text-sm border border-slate-200 rounded-md px-3 p-3"
                placeholder="Password"
                name="pass"
                type="password"
                // value={data.pass}
                ref = {Pass}
                // onChange={handleChange}
              />
            </div>

            <button type='submit' className="bg-slate-950 w-[300px] h-10 rounded-xl text-white font-mono mt-2">
              Submit
            </button>

           
          </form>
        </div>
      </div>
    </>
  );
};

export default Ref;
