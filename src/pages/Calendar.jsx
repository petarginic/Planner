import React from 'react'
import { Header, Navbar, Sidebar, Calendar } from '../components'

const CalendarPage = () => {
   return (
      <div className=" ">
         <Sidebar />
         <div className="md:ml-80">
            <Navbar />
            <Header title="Calendar" description="Check out your schedule. " />
            <Calendar />
         </div>
      </div>
   )
}

export default CalendarPage
