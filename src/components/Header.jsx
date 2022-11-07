import React from 'react'

import { motion } from 'framer-motion'
import Typography from '@mui/material/Typography'

const Header = (props) => {
   return (
      <div className=" rounded-b-lg h-[150px] w-full border-2 flex flex-row justify-center ">
         <div className="container">
            <div className="flex justify-start content-center mt-10 pl-4 md:mx-6 relative">
               <div className="flex flex-col justify-center items-center sm:items-start">
                  <Typography
                     component={motion.span}
                     initial={{ x: -20 }}
                     animate={{ x: 0, transition: { delay: 0.2 } }}
                     className="text-24 md:text-32 font-extrabold tracking-tight leading-none"
                  >
                     <h1 className="text-4xl  tracking-tight">{props.title}</h1>
                  </Typography>

                  <Typography
                     component={motion.span}
                     initial={{ y: -20, opacity: 0 }}
                     animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
                     className="text-14 font-medium ml-2"
                  >
                     <h3 className="text-2xl  mt-2">{props.description}</h3>
                  </Typography>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Header
