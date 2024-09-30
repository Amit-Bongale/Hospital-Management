import React from 'react'

import { Link } from 'react-router-dom'


import adminicon from '../../Assets/Icons/admin.png'
import doctoricon from '../../Assets/Icons/doctor.png'
import stafficon from '../../Assets/Icons/staff.png'

function Login() {

  return (
    <div className='h-[100vh]'>

        <div className='flex-col justify-center  h-full '>

            <h1 className='text-4xl text-center relative top-14 font-bold uppercase'> welcome! Please Login </h1> 
            
            {/* cards div */}
            <div className='flex-col items-center justify-center relative top-[18%] flex-wrap'>

                <div className='flex justify-around items-center'>

                    <div class="flex flex-col bg-white rounded-3xl drop-shadow-md items-center border-blue-600 border-2 w-80">
                        <div class="px-20 py-8 sm:p-10 sm:pb-6">
                            <div class="grid items-center justify-center w-full grid-cols-1 text-left  ">
                                
                                <h2 class="text-lg font-medium text-gray-800 lg:text-3xl text-center" > Admin </h2>
                        
                                <img src={adminicon} alt="admin" className='m-8 w-36' />
                            </div>
                        </div>

                        <div class="flex px-6 pb-8 sm:px-8">
                            <Link to={'/adminlogin'} >
                            <button class="flex items-center justify-center w-full text-base px-10 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black  focus-visible:ring-black" > Login </button> </Link>
                        </div>
                    </div>


                    <div class="flex flex-col bg-white rounded-3xl drop-shadow-md items-center border-blue-600 border-2 w-80">
                        <div class="px-20 py-8 sm:p-10 sm:pb-6">
                            <div class="grid items-center justify-center w-full grid-cols-1 text-left  ">
                                
                                <h2 class="text-lg font-medium text-gray-800 lg:text-3xl text-center" > Doctor </h2>
                        
                                <img src={doctoricon} alt="admin" className='m-8 w-36' />
                            </div>
                        </div>

                        <div class="flex px-6 pb-8 sm:px-8">
                            <Link to={'/doctorlogin'} >
                            <button class="flex items-center justify-center w-full text-base px-10 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black  focus-visible:ring-black" > Login </button> </Link>
                        </div>
                    </div>


                    <div class="flex flex-col bg-white rounded-3xl drop-shadow-md items-center border-blue-600 border-2 w-80">
                    <div class="px-20 py-8 sm:p-10 sm:pb-6">
                            <div class="grid items-center justify-center w-full grid-cols-1 text-left  ">
                                
                                <h2 class="text-lg font-medium text-gray-800 lg:text-3xl text-center" > Staff </h2>
                        
                                <img src={stafficon} alt="admin" className='m-8 w-36' />
                            </div>
                        </div>

                        <div class="flex px-6 pb-8 sm:px-8">
                            <Link to={'/stafflogin'} >
                            <button class="flex items-center justify-center w-full text-base px-10 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black  focus-visible:ring-black" > Login </button> </Link>
                        </div>
                    </div>
                </div>

                <div className='m-8 flex items-center justify-center my-16'>
                    <Link to={'/'} >
                         <button class="flex items-center justify-center  text-base px-10 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-white focus:outline-none focus-visible:outline-black  focus-visible:ring-black" >  Home </button> 
                    </Link>
                </div>

            </div>
        </div>
        
        <div className='w-full h-[50vh] bg-blue-600 absolute bottom-0 -z-10'></div>

    </div>
  )
}

export default Login