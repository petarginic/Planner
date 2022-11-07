import React from 'react'
import logo from './../assets/logo.png'
import { NavLink } from 'react-router-dom'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const Login = () => {
   return (
      <div className="h-screen flex justify-center items-center bg-[#fff] login-page">
         <div className="login-form rounded-sm ">
            <div className="grid grid-cols-2 h-full ">
               <div className=" col-span-2 md:col-span-1  bg-[#fff] first-login-section rounded-l-sm border-[3px] border-[#2fa7dd]  ">
                  <div className="flex flex-col justify-start items-start w-100 ">
                     <div className="ml-auto mr-auto">
                        <img src={logo} alt={logo} className="w-[100px] h-[100px] mb-[40px]" />
                     </div>

                     <Box component="form" Validate autoComplete="off">
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                           <TextField id="input-with-sx" label="Username" variant="standard" sx={{ width: 300 }} />
                        </Box>

                        <div className="mt-4">
                           <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                              <TextField
                                 id="input-with-sx"
                                 type="password"
                                 label="Password"
                                 variant="standard"
                                 sx={{ width: 300 }}
                                 MuiFormLabel-filled
                              />
                           </Box>

                           <div className="mt-2">
                              <NavLink to="/#" className="mt-2 underline text-[#2fa7dd]">
                                 Forgot password
                              </NavLink>
                           </div>
                        </div>
                     </Box>
                     <div className="mt-4">
                        <NavLink to="/home">
                           <button class="bg-[#2fa7dd] border border-[#white] hover:bg-[#fff] hover:text-[#2fa7dd] hover:border hover:border-[#2fa7dd] text-white font-bold py-2 px-4 rounded">
                              Login
                           </button>
                        </NavLink>
                     </div>
                  </div>
               </div>

               <div className=" hidden md:col-span-1 md:flex justify-center items-center w-full h-full second-login-section rounded-r-sm">
                  <div className="flex justify-center items-center gap-2 cursor-pointer border-2  rounded-md px-2">
                     <h1 className="font-bold text-[150px] text-[#fff] font-serif">P</h1>
                     <div className="text-[#fff]">
                        <h1 className="font-bold text-xl border-b-2 text-center "> Welcome to </h1>
                        <h2 className="font-bold text-4xl border-b-2 mt-3 text-center "> InfoPlanner</h2>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Login
