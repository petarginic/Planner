import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'

import data from './../data/data.json'

const Contacts = () => {
   const [users, setUsers] = useState([])
   useEffect(() => {
      setUsers(data.users)
   }, [])

   return (
      <div className="w-full p-10">
         {users &&
            users
               .sort((a, b) => (a.firstname > b.firstname ? 1 : -1))
               .map((user, i) => {
                  return (
                     <>
                        <ListItem key={i} className="px-32 py-16 hover:bg-slate-100">
                           <ListItemAvatar>
                              <Avatar alt={user.firstname[0]} src={user.image} />
                           </ListItemAvatar>
                           <ListItemText
                              classes={{ root: 'm-0', primary: 'font-medium leading-5 truncate' }}
                              primary={`${user.firstname} ${user.lastname} `}
                              secondary={
                                 <div className="flex flex-row justify-start items-start gap-1">
                                    <Typography
                                       className="inline"
                                       component="span"
                                       variant="body2"
                                       color="text.secondary"
                                    >
                                       {`${user.location},`}
                                    </Typography>

                                    <Typography
                                       className="inline"
                                       component="span"
                                       variant="body2"
                                       color="text.secondary"
                                    >
                                       {`Kancelarija:${user.office},`}
                                    </Typography>
                                    <Typography
                                       className="inline"
                                       component="span"
                                       variant="body2"
                                       color="text.secondary"
                                    >
                                       {`${user.mobile}`}
                                    </Typography>
                                 </div>
                              }
                           />
                        </ListItem>

                        <Divider />
                     </>
                  )
               })}
      </div>
   )
}

export default Contacts
