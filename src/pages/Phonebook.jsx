import React from 'react'
import { Contacts, Header, Navbar, Sidebar } from '../components'

const Phonebook = () => {
   return (
      <div className=" ">
         <Sidebar />
         <div className="md:ml-80">
            <Navbar />
            <Header title="Contacts" description="There are 256 contacts" />
            <Contacts />
         </div>
      </div>
   )
}

export default Phonebook
