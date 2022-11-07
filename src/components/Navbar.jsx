import React from 'react'
import { NavLink } from 'react-router-dom'

import MenuIcon from '@mui/icons-material/Menu'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { Tooltip } from '@mui/material'

const Navbar = () => {
   return (
      <div className="flex md:justify-end justify-between items-center w-full h-[70px] relative shadow-xl px-4 overflow-auto">
         <div className="flex md:hidden">
            <Tooltip title="Menu">
               <button type="button" className="text-2xl rounded-full p-3 hover:bg-light-gray">
                  <span className="absolute inline-flex rouned-full h-2 w-2 right-2 top-2 " />
                  <MenuIcon />
               </button>
            </Tooltip>
         </div>
         <div className="">
            <NavLink to="/login">
               <Tooltip title="Log Out">
                  <button type="button" className="text-2xl rounded-full p-3 hover:bg-light-gray">
                     <span className="absolute inline-flex rouned-full h-2 w-2 right-2 top-2" />
                     <ExitToAppIcon />
                  </button>
               </Tooltip>
            </NavLink>
         </div>
      </div>
   )
}

export default Navbar
