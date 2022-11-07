import React from 'react'
import { AssociatesComp, Header, Navbar, Sidebar } from '../components'

const Associates = () => {
   return (
      <div className=" ">
         <Sidebar />
         <div className="md:ml-80">
            <Navbar />
            <Header title="Contacts" description="There are some usefull contacts" />
            <AssociatesComp />
         </div>
      </div>
   )
}

export default Associates
