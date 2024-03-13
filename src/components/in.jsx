import {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'


const login = () => {

 
  const navigateTo = useNavigate()
  return (
    
    
    <section className='bg-gray-100 min-h-screen flex items-center justify-center '>
        <div className='bg-gray-100 flex rounded-2xl  shadow-2xl max-w-3xl p-5 '>

            <div className='sm:w-1/2 p-5'>
                <h2 className='font-bold text-2xl font-poppins'>Login</h2>
                <p className='text-sm mt-4 font-poppins'>
                  If you already have an account, easily Log In
                </p>
               
                <form action='' className='flex flex-col gap-4'>
                  <input className='p-2 mt-5 rounded-xl bg-slate-200' type='text'
                    name='email'
                    placeholder='Email'>
                  </input>
                      <div className='relative '>
                         <input className='p-2 mt-2 rounded-xl w-full bg-slate-200 ' type='password'
                          name='password'
                          placeholder='Password'>
                         </input>
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="" className="w-6 h-6 absolute top-1/2 right-3 mt-1  -translate-y-1/2">
                         <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                         <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
                         </svg>

                      </div>
            
                  <button className='font-poppins hover:bg-white hover:text-black rounded-xl py-2 mt-2 text-slate-50 bg-black'>
                    Login
                  </button>
                  
                  <p className='text-xs  '>
                    Forgot my password?
                  </p>
                </form>

              <div className='mt-2 grid grid-cols-3 items-center text-gray-400'>
                <hr className='border-gray-500'></hr>
                  <p className='text-center '>
                    OR
                  </p>
                  <hr className='border-gray-500'></hr>
              
              </div>

                <button className='py-2 border-2xl bg-black text-white font-poppins w-full
                      rounded-xl mt-5 flex justify-center items-center text-sm hover:bg-white hover:text-black '>
                        <svg className ='mr-3'xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 48 48">
                        <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        </svg>
                  Login With Google
                </button>

                <div className='text-xs items-center mt-2 flex justify-between'>
                 <p>Didn't Have An Account?</p>
                
                 <Link to='/'> 
                 <button className='font-poppins border-xs hover:bg-white hover:text-black bg-black text-white rounded-xl text-sm py-2 px-5'>
                  Sign Up
                 </button> 
                 </Link>

                </div>

            </div>

            <div className='sm:block hidden w-1/2 p-5'>
                <img className="rounded-xl shadow-2xl bg-slate-300" src="src/assets/jett.png" alt=''/>
            </div>
        </div>
    </section>
    
  )
}

export default login