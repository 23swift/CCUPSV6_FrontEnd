import React from "react";
import { useState } from "react";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from '@material-ui/icons/Mail';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faHome,  faTools,  faDatabase,  faSearch,  faShieldAlt,  faBell,
  faPowerOff,  faInfo, faArrowDown, faChevronDown} from "@fortawesome/free-solid-svg-icons";

import { Drawer, List, ListItem, ListItemIcon, ListItemText, Paper, Divider, Box } from "@material-ui/core";
import MenuOpenIcon from '@material-ui/icons/MenuOpen';


import Hidden from '@material-ui/core/Hidden';
import { lightBlue } from "@material-ui/core/colors";
import color from "@material-ui/core/colors/grey";
import bdoLogo from '../img/bdoLogo2.png'
import { menuList } from './helper/MenuManager';
import MainMenu from "./MainMenu";
const drawerWidth = 250;
const linkStyle = {
  marginRight: 15
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  drawer: {
   
    width: drawerWidth,
    flexShrink: 0,
    //  [theme.breakpoints.down('sm')]: {
    //   //  display: 'none',
    //   //  visibility:"hidden"  
    //   // variant:"temporary"
    // },
    // [theme.breakpoints.up('md')]: {
    //   display: 'block',
    //   // variant:"temporary"
    // }
  },
  drawerPaper: {
    width: drawerWidth,
    background:"#fff",
    
    // backgroundColor: "#f2f8ff",
    // color: "#043673",
    // paddingRight:2,
    
  },appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor:'#043673'
  },
  toolbar: theme.mixins.toolbar,
  drawerIcon:{
    // color:"#3d4977"
    color:theme.palette.primary.light
  },
  drawerIconPaper:{
    padding:10,
    backgroundColor:theme.palette.primary.dark
  },
  drawerListItem:{
        borderBottomRightRadius :30,
        borderTopRightRadius:30,
        // button:{
        //   "&.hover":{
        //   backgroundColor: "#f2f8ff"
        // }
        // },
        '&:hover':{
        
          // color: "#f2f8ff",
          backgroundColor: "#f2f8ff"
        
                    
        },
       

        
  }


}));

  const Navigation = (props) => {
  const classes = useStyles();

  // const [drawerOpen, setDrawerOpen] = useState(true);

  const [subMenuList, setSubMenuList] = useState([]);
  const handleDrawerToggle = () => {
    console.log("test");
    
    props.setDrawerOpen(!props.drawerOpen);
  };
 
  return (
    <div>
     
      <AppBar position="fixed" className={classes.appBar} >
        <Toolbar  variant="dense">
        {!props.drawerOpen && 
  
  <IconButton onClick={handleDrawerToggle}
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                      >
                        <MenuIcon />
          </IconButton>
}
          
          <Typography variant="h6" style={{flexGrow: 1}}>
            CCUPS
          </Typography>
    
    <Button
                  color="inherit"
                  startIcon={<FontAwesomeIcon icon={faInfo} />}
                >
                  About
                </Button>
             
              <IconButton color="inherit">
                {" "}
                <FontAwesomeIcon icon={faBell} size="xs"/>{" "}
              </IconButton>
              <IconButton color="inherit">
                
                <FontAwesomeIcon icon={faPowerOff} size="xs"/>
              </IconButton>
   
            
          
        </Toolbar>
      </AppBar>
            <Drawer 
              className={classes.drawer}
              variant="persistent"
              open={props.drawerOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              PaperProps={{ elevation: 3 }}

            >
                 
                     <List >
                  <ListItem  >
                  <div style={{minHeight:45}} />
                  </ListItem>
                  <ListItem  >
                  <img src={bdoLogo} style={{height:60}}/>
                               <IconButton color="primary" style={{marginLeft:80}} onClick={handleDrawerToggle}>
                            <MenuOpenIcon/>
                          </IconButton>
                         
                  </ListItem>
                  <Divider style={{marginBottom:5}}/>
                    
                              <MainMenu/>
                              
 
                  </List>
             
            </Drawer>
    </div>
  );
};

export default Navigation;
