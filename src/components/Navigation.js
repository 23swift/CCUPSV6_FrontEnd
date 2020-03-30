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

import { Drawer, List, ListItem, ListItemIcon, ListItemText, Paper, Divider, Box, Fab } from "@material-ui/core";
import MenuOpenIcon from '@material-ui/icons/MenuOpen';


import Hidden from '@material-ui/core/Hidden';
import { lightBlue } from "@material-ui/core/colors";
import color from "@material-ui/core/colors/grey";
import bdoLogo from '../img/bdoLogo2.png'
import { menuList } from './helper/MenuManager';
import MainMenu from "./MainMenu";
import { FormatClearRounded } from "@material-ui/icons";
import ClearIcon from '@material-ui/icons/Clear';


const drawerWidth = 250;
const linkStyle = {
  marginRight: 15
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
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
  margin:10
  },
  drawerPaper: {
    width: drawerWidth,
    // background:"#fff",
    // background:theme.palette.primary.main,
    background: 'linear-gradient(90deg, #054594 30%, #043673 90%)',
    // backgroundColor: "#f2f8ff",
    // color: "#043673",
    paddingRight:5,
   
    
  },appBar: {
    zIndex: theme.zIndex.drawer + 1,
    minWidth:500,
    // backgroundColor:'#043673'
    // background: 'linear-gradient(45deg, #054594 30%, #043673 90%)',
    background:"#fff",
    color:"#043673"
  },
  fullWidthAppBar: {
    // zIndex: theme.zIndex.drawer + 1,
    // marginLeft:drawerWidth,
    backgroundColor:'#043673'
  },
  toolbar: theme.mixins.toolbar,
  drawerIcon:{
    // color:"#3d4977"
    color:theme.palette.primary.light
  },
  drawerIconPaper:{
    padding:5,
    backgroundColor:theme.palette.primary.dark
  },
  drawerListItem:{
        borderBottomRightRadius :30,
        borderTopRightRadius:30,
        color:"#fff",
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

    
    props.setDrawerOpen(!props.drawerOpen);
  };
 
  return (
    <div>
     
      <AppBar position="fixed"  className={classes.appBar} >

        <Toolbar  >
        {!props.drawerOpen && 
  
  <IconButton onClick={handleDrawerToggle}
                        edge="start"
                        className={classes.menuButton}
                        color="primary"
                        aria-label="menu"
                        // size="small"
                      >
                        {/* <MenuIcon /> */}
                        <MenuOpenIcon/>
          </IconButton>
}
           <Paper style={{padding:3, marginRight:7,marginLeft:0}} elevation={0}>
                  <img src={bdoLogo} style={{height:40,borderRadius:3}}/>
            </Paper>

          <Typography variant="subtitle1" style={{flexGrow: 1,paddingTop:25}}>
            Credit Card Utility Payment System
          </Typography>
    
    
             
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
                      <ListItem  disableGutters>
                      <div style={{minHeight:35}} />
                      </ListItem>
                      <ListItem  disableGutters  >
                      {/* <img src={bdoLogo} style={{height:60}}/> */}
                      <Box display="flex" flexDirection="row" justifyContent="flex-end" style={{width:"100%"}}  p={0} m={0} >
                        <Box item="true" p={0} m={0}>
                           <IconButton color="secondary"  onClick={handleDrawerToggle}>
                                {/* <MenuOpenIcon/> */}
                                <ClearIcon/>
                              </IconButton>
                        </Box>
                         
                      </Box>
                                 
                            
                      </ListItem>
                      <Divider style={{marginBottom:5}}/>
                        
                                  <MainMenu/>
                                  
    
                      </List>
                
                </Drawer>

      </div>
          
    
  );
};

export default Navigation;
