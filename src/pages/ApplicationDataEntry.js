import React from 'react'
import Page from '../components/Page';
import CustomToolbar from '../components/CustomToolbar';
import { List, ListItem, ListItemIcon, ListItemText, IconButton, Button, Typography,Paper } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faPlus } from '@fortawesome/free-solid-svg-icons';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';

import PostAddIcon from '@material-ui/icons/PostAdd';
import { makeStyles } from '@material-ui/styles';
import { CreateButton } from '../customTheme';



const useStyles = makeStyles(theme => ({
    createButton: {
       color:theme.palette.primary.light
    }
}))
const ApplicationDataEntry = () => {
    const classes = useStyles();
    const  applications=[
        {cardNumber:"0111111111",lastName:"lastname",firstName:"firstname"},
        {cardNumber:"0111111112",lastName:"lastname",firstName:"firstname"}
    ];
    return (
        <Page title="Application Data Entry" hasSearch searchLabel="Card Number">
            <Paper elevation={2} style={{padding:5}}>
            <CustomToolbar title="Pending Requests">
             <IconButton style={{padding:6}} >
                                    <PostAddIcon color="primary" />
                              </IconButton>
                             
             </CustomToolbar>

             <List >
            {applications.map(item=>(

                       <div key={item.id}>
                        <ListItem divider dense alignItems="flex-start">
                            {/* <ListItemAvatar>
                                <Avatar  style={{backgroundColor:'#fff'}} >
                                     <DescriptionIcon style={{color:"#f2f8ff"}} fontSize="small" /> 
                                
                                </Avatar> 
                                
                            </ListItemAvatar> */}

                            <ListItemIcon style={{minWidth:45}} >
                                  <FontAwesomeIcon icon={faCreditCard} style={{color: "#3d4977"}}  />
                            </ListItemIcon>
                            <ListItemText primary={item.cardNumber} secondary={item.lastName+", "+item.firstName} />
                           
                            <IconButton size="medium" >
                                {/* <FontAwesomeIcon icon={faTrashAlt} style={{color:'#445fa2'}}/> */}
                                <CloseIcon color="error" />
                            </IconButton>
                             <IconButton size="medium" >
                                {/* <FontAwesomeIcon icon={faPencilAlt} style={{color:blue[500]}}/> */}
                                <EditIcon style={{color:"#3d4977"}}/>
                                
                            </IconButton>
                        </ListItem>
                       
                        </div>
                    ))}
                
            </List>
            
            </Paper>
          
        </Page>
    )
}

export default ApplicationDataEntry
