import React from 'react'

import { BiUser, BiLocationPlus, BiEnvelopeOpen, BiPhoneCall, BiBuilding, BiPhone } from 'react-icons/bi'

import picture from './../assets/user.jpg'
import Avatar from '@mui/material/Avatar'
import ListItemAvatar from '@mui/material/ListItemAvatar'

const PageContent = (props) => {
   return (
      <>
         <div className=" flex justify-center pt-[4rem] cursor-pointer ">
            <div className="grid grid-cols-12  border border-blue-300 rounded-md   shadow-2xl  ">
               <div className=" lg:col-span-5 md:col-span-12 sm:col-span-12 col-span-12">
                  <div className="flex flex-col justify-center items-start p-8  bg-white  border-r rounded-l-md shadow-md  hover:bg-gray-100 h-full w-full text-xl ">
                     <div className="flex items-start justify-start pl-3 ">
                        <div>
                           <ListItemAvatar>
                              <Avatar alt="profile" src={picture} />
                           </ListItemAvatar>
                        </div>
                        <h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-900 ">
                           {props.firstname} {props.lastname}
                        </h5>
                     </div>

                     <ul class="space-y-1 max-w-md list-inside text-gray-500 font-semibold mt-5">
                        <li class="flex items-center  p-1">
                           <BiUser />
                           <p className="ml-2">Title: {props.title} </p>
                        </li>

                        <li class="flex items-center p-1">
                           <BiLocationPlus />
                           <p className="ml-2"> Location: {props.location}</p>
                        </li>
                        <li class="flex items-center p-1">
                           <BiEnvelopeOpen />
                           <p className="ml-2"> Email: {props.email} </p>
                        </li>
                        <li class="flex items-center p-1">
                           <BiPhoneCall />
                           <p className="ml-2"> Phone:{props.phone} </p>
                        </li>

                        <li class="flex items-center p-1">
                           <BiBuilding /> <p className="ml-2 ">Office: </p>
                           <span className="ml-1">{props.office} </span>
                        </li>
                        <li class="flex items-center p-1">
                           <BiPhone /> <p className="ml-2 ">Local: </p>
                           <span className="ml-1">{props.local} </span>
                        </li>
                     </ul>
                  </div>
               </div>

               <div className="lg:col-span-7 md:col-span-12 sm:col-span-12 col-span-12 p-3">
                  <div className="flex flex-col  justify-center items-center pt-10 text-lg">
                     <ul class="space-y-1 max-w-md list-inside text-gray-500 dark:text-gray-400">
                        <li class="flex items-center p-1">
                           <p className="font-bold text-blue-500">Residence:</p>
                           <span className="ml-2">Belgrade</span>
                        </li>
                        <li class="flex items-center p-1">
                           <p className="font-bold text-blue-500">Work in Infostan since: </p>{' '}
                           <span className="ml-2">2016</span>
                        </li>
                        <li class="flex items-center p-1">
                           <p className=" font-bold text-blue-500">Age:</p> <span className="ml-2">29</span>
                        </li>
                        <li class="flex items-center p-1">
                           <p className="font-bold text-blue-500">Birthday:</p>{' '}
                           <span className="ml-2"> 24 December </span>
                        </li>
                        <li class="flex items-center p-1">
                           <p>
                              <span className="font-bold  text-blue-500"> About me: </span>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam autem delectus id iure
                              doloribus officiis cum architecto optio nemo culpa ipsum, amet corrupti reprehenderit.
                              Aperiam tempora voluptatum eveniet. Similique, quas.
                           </p>
                        </li>

                        <li class="flex items-center p-1">
                           <p>
                              <span className="font-bold  text-blue-500"> Company equipment: </span>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam autem delectus id iure
                              doloribus officiis cum architecto optio nemo culpa ipsum, amet corrupti reprehenderit.
                              Aperiam tempora voluptatum eveniet. Similique, quas.
                           </p>
                        </li>
                        <li class="p-1 flex flex-row pt-5 text-blue-500">
                           <p className="ml-2">Linkedin</p>
                           <p className="ml-2">Facebook </p>
                           <p className="ml-2">Instagram </p>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default PageContent
