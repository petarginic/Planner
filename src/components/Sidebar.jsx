import React from 'react'
import { NavLink } from 'react-router-dom'
import { useStateContext } from './../context/ContextProvider'
import logo from './../assets/logo.png'
import user from './../assets/user.jpg'

import Tooltip from '@mui/material/Tooltip'
import {
   FaBars,
   FaHouseUser,
   FaAddressBook,
   FaAddressCard,
   FaRegCalendarAlt,
   FaRegListAlt,
   FaRegNewspaper,
} from 'react-icons/fa'

const Sidebar = () => {
   const { activeMenu, setActiveMenu } = useStateContext()

   return (
      <div className="hidden md:flex md:fixed w-80   ">
         {activeMenu && (
            <>
               <div className="h-full w-80 min-h-screen  pt-6 bg-[#111827] shadow-xl md:overflow-hidden overflow-auto md:hover:overflow-auto ">
                  <div className="flex flex-row items-center justify-start ml-14">
                     <div className="px-4">
                        <img
                           src={logo}
                           alt="infostan tehnologije"
                           className="rounded-sm w-[30px] h-[30px] cursor-pointer hover:bg-light-gray"
                        />
                     </div>
                     <h1 className="text-gray-300 font-bold">InfoPlanner </h1>
                  </div>

                  <div className="flex flex-col justify-center items-center mt-10">
                     <img src={user} alt="user" className="rounded-full mt-19 h-[120px] w-[120px] mb-4" />
                     <h1 className="text-gray-300 font-bold"> Petar Ginic</h1>
                     <p className="text-gray-600 font-bold">Samostalni tehnicar</p>
                  </div>

                  <div className="flex flex-col justify-center items-start pl-5 mt-14">
                     <p className="text-blue-400 m-3 mt-4 uppercase font-bold">Dashboard</p>

                     <NavLink to={'/home'} className="my-2 py-2 px-2 hover:bg-blue-500 rounded-md">
                        <div className="flex items-center justify-around ">
                           <span className="text-gray-300 px-2">
                              <FaHouseUser />
                           </span>

                           <span className="capitalize text-gray-300 pr-2">Profile</span>
                        </div>
                     </NavLink>

                     <NavLink to={'/phonebook'} className="my-2 py-2 px-2 hover:bg-blue-500 rounded-md">
                        <div className="flex items-center justify-around">
                           <span className="text-gray-300 px-2">
                              <FaAddressBook />
                           </span>

                           <span className="capitalize text-gray-300 pr-2">Phonebook</span>
                        </div>
                     </NavLink>

                     <NavLink to={'/associates'} className="my-2 py-2 px-2 hover:bg-blue-500 rounded-md">
                        <div className="flex items-center justify-around ">
                           <span className="text-gray-300 px-2">
                              <FaAddressCard />
                           </span>

                           <span className="capitalize text-gray-300 pr-2 ">Important numbers</span>
                        </div>
                     </NavLink>

                     <p className="text-blue-400 m-3 mt-4 uppercase font-bold">Applications</p>

                     <NavLink to={'/associates'} className="my-2 py-2 px-2 hover:bg-blue-500 rounded-md">
                        <div className="flex items-center justify-around ">
                           <span className="text-gray-300 px-2">
                              <FaRegListAlt />
                           </span>

                           <span className="capitalize text-gray-300 pr-2">Reminder</span>
                        </div>
                     </NavLink>

                     <NavLink to={'/calendar'} className="my-2 py-2 px-2 hover:bg-blue-500 rounded-md">
                        <div className="flex items-center justify-around ">
                           <span className="text-gray-300 px-2">
                              <FaRegCalendarAlt />
                           </span>

                           <span className="capitalize text-gray-300 pr-2">Calendar</span>
                        </div>
                     </NavLink>

                     <NavLink to={'/home'} className="my-2 py-2 px-2 hover:bg-blue-500 rounded-md">
                        <div className="flex items-center justify-around ">
                           <span className="text-gray-300 px-2">
                              <FaRegNewspaper />
                           </span>

                           <span className="capitalize text-gray-300 pr-2">News</span>
                        </div>
                     </NavLink>
                  </div>
               </div>
            </>
         )}
      </div>
   )
}

export default Sidebar
