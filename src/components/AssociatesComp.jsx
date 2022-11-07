import React from 'react'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'

import { data } from '../data/podaci'

const AssociatesComp = () => {
   return (
      <div className="w-full p-10">
         {data.map((companies, i) => (
            <>
               <ListItem key={i} className="px-32 py-16 bg-slate-200">
                  <ListItemAvatar>
                     <Avatar alt={companies.details.name} src={companies.details.image} />
                  </ListItemAvatar>
                  <ListItemText
                     classes={{ root: 'm-0', primary: 'font-medium leading-5 truncate' }}
                     primary={`${companies.details.name} `}
                     secondary={
                        <div className="flex flex-row justify-start items-start gap-1">
                           <Typography className="inline" component="span" variant="body2" color="text.secondary">
                              {`${companies.details.address}`}
                           </Typography>
                        </div>
                     }
                  />
               </ListItem>

               <Divider />

               {/* OVde su kontakti,a gore imena firmi */}

               {companies.employees.map((emp, i) => (
                  <>
                     <ListItem key={i} className="px-32 py-16 hover:bg-slate-100">
                        <ListItemText
                           classes={{ root: 'm-0', primary: 'font-medium leading-5 truncate' }}
                           primary={`${emp.name} `}
                           secondary={
                              <div className="flex flex-row justify-start items-start gap-1">
                                 <Typography className="inline" component="span" variant="body2" color="text.secondary">
                                    {`${emp.number}`}
                                 </Typography>
                              </div>
                           }
                        />
                     </ListItem>

                     <Divider />
                  </>
               ))}
            </>
         ))}
      </div>
   )
}

export default AssociatesComp
