import React, { useState } from 'react'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Paper, Divider, Box,  Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faColumns, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { menuList } from './helper/MenuManager';
import Collapse from '@material-ui/core/Collapse';
import './subMenu.css'
import { Link } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  
  
    drawerIcon:{
      // color:"#3d4977"
      color:theme.palette.secondary.main,
    //   color:theme.palette.primary.light
    },
    nested: {
        // paddingLeft: theme.spacing(1),
      },
    drawerListItem:{
          borderBottomRightRadius :30,
          borderTopRightRadius:30,
         
        // marginRight:10,
       
        color:"#fff",
          '&:hover':{
          
            color: theme.palette.primary.main,
            backgroundColor: "#f2f8ff",
           
          
                      
          },
         
  
          
    },
    subMenu:{
      background:theme.palette.primary.light,
      marginTop:5
      
      
    },
    subMenuItem:{

      color:"#fff",
          '&:hover':{
          
            color: theme.palette.primary.main,
            backgroundColor: "#f2f8ff",

                      
          },
    }

  
  }));
const MainMenu = () => {
    const classes = useStyles();
    const [openSubMenu, setOpenSubMenu] = useState("");
    
    const ToggleSubMenu=(pMenuText)=>{
      if (openSubMenu==pMenuText){
        setOpenSubMenu("");
        return;
      }
        setOpenSubMenu(pMenuText);
    }        

    return (
     
    

    <div>
            { menuList.map((item,index)=>(
                    <div key={index}>

                         <ListItem button={true}  className={classes.drawerListItem} onClick={()=>ToggleSubMenu(item.mainMenu)
                         }  >
                                
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={item.icon} size="lg" className={classes.drawerIcon} /> 
                                
                                </ListItemIcon>

                                <ListItemText primary={<Typography   style={{fontWeight:400,fontSize:"15px"}} >{item.displayText}</Typography>} />
                                
                                <FontAwesomeIcon icon={openSubMenu === item.mainMenu? faChevronUp:faChevronDown} size="sm" className={classes.drawerIcon} /> 
                                
                            </ListItem>
                            <Collapse in={openSubMenu === item.mainMenu} timeout="auto" unmountOnExit className={classes.subMenu}
                            
                           >

                           {item.subMenu.length>0 && <div className="scrollbar scrollbar-primary">
                                {/* <List component="div" disablePadding  > */}
                                  {item.subMenu.map((subItem,index)=>(

                                      <ListItem  button  component={Link} to={subItem.url} key={index} className={classes.subMenuItem}>
                                        <ListItemText primary={<Typography   style={{fontWeight:500,fontSize:15}} >{subItem.displayText}</Typography>}/>
                                  
                                    </ListItem>
                                  ))}
                                    
                                {/* </List> */}
                            </div>}
                                
                            </Collapse>
                           
                           
                    </div>
                           

            ))}
            
                    
            <ListItem button component={Link} to="/" className={classes.drawerListItem} >
                                <ListItemIcon>
                                <FontAwesomeIcon icon={faColumns} size="sm" className={classes.drawerIcon} /> 
                                </ListItemIcon>
                            <ListItemText primary={<Typography color="inherit">Dashboard</Typography>}/>
                            </ListItem>
               
    </div>
    )
           
}

export default MainMenu
