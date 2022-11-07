import React from 'react'
import { Header, Navbar, Sidebar, PageContent } from '../components'

const Home = () => {
   return (
      <div className=" ">
         <Sidebar />
         <div className="md:ml-80">
            <Navbar />
            <Header title="Welcome Petar Ginic" description="You have 2 reminders" />
            <PageContent
               firstname="Petar"
               lastname="Ginic"
               title="Programer"
               office="317"
               local="987"
               email="petarginic@infostan.rs"
               location="Danijelova 33"
               phone="0648410216"
            />
         </div>
      </div>
   )
}

export default Home
