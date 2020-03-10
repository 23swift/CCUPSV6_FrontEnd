import React from 'react'
import Page from '../components/Page';
import useSWR from 'swr'
import { List, ListItemText } from '@material-ui/core';
const fetcher = url => fetch(url).then(r => r.json()).then((data)=> {return data._embedded.users})

const Users=()=>{
    const { data:users } = useSWR('HTTP://localhost:8080/users', fetcher)

    if(!users) return <p>Loading...</p>
    return(
        <Page title="Users">
            
            {users &&  
            
             <List>
                   {users.map((user,index)=>

                          (<ListItemText key={index} primary={user.name}/>)
                    
                   )}
                   
               </List>
            
            } 


              
            
            
        </Page>

    );
}

export default Users;