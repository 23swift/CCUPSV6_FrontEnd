import React from 'react'
import { Typography, Divider, makeStyles, Box, TextField, AppBar, Toolbar, IconButton, Paper, fade, InputBase, Grow} from '@material-ui/core';

import {  } from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { grey } from '@material-ui/core/colors';

const useStyles=makeStyles(theme=>({
root:{
    marginTop:55,
    // marginLeft:10,
    // marginRight:10,
    padding:".75rem 1.25rem",
    
},
page:{
    // background: "#f2f8ff",
    minHeight:800,
    // paddingTop:5,
    
    marginBottom:60
},
searchBar:{
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    background:theme.palette.primary.main,
    
},input:  {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: "100%",
    [theme.breakpoints.up('sm')]: {
      width: 210,
      '&:focus': {
        width: 300,
      },
    },
  },
  
  divider: {
    height: 28,
    margin: 4,
  },
  
  inputRoot: {
    // width: 250,
    color: 'inherit',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.primary.main, 0.10),
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.main, 0.15),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:theme.palette.primary.light
  },
}));

const Page = (props) => {
    const classes =useStyles();
    return (
      
        <div className={classes.root}>
            
               <Box display="flex" flexDirection="row" >
                    <Box letterSpacing="none" m={0} flexGrow={1} mb={1}>
                        <Typography variant="h3"  letterSpacing ="none" style={{color:'#043673'}}>
                         {props.title}
                          </Typography>
                </Box>
                 {props.hasSearch && <Box>
                   
                     <div className={classes.search}>
                        <div className={classes.searchIcon}>
                                <FontAwesomeIcon icon={faSearch} />
                        </div>
                        <InputBase
                        placeholder={props.searchLabel}
                        classes={{
                            root: classes.inputRoot,
                            input: classes.input,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                   
                         
                     
                   
               </Box>}
               </Box>
              
               
                
                    
           
            {props.title && <Divider style={{marginBottom:10}}/>}
            <div className={classes.page} >
            {/* <Grow in={true} timeout={1000}> */}
               {props.children}
            {/* </Grow> */}
               
            </div>
            
        </div>
    )
}

export default Page

