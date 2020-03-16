import React, { useState } from 'react'
import Navigation from './Navigation';
import {BrowserRouter as Router  } from "react-router-dom";
import { makeStyles } from '@material-ui/styles';
import { Grow } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    main:{
        
         paddingTop:80,
         minWidth:400,
        // [theme.breakpoints.down('md')]: {
        //     marginLeft:0
        // },
        // [theme.breakpoints.up('md')]: {
        //     marginLeft:250
        // }
        
    }
}));

const Layout = (props) => {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(true);
    return (
        <div>
            <Router>
                <Navigation drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
                <main style={{marginLeft:drawerOpen? 250 : 0, paddingTop:5}}>
                
                    {props.children}
                
                        
               
                </main>
            </Router>
            
        </div>
    )
}

export default Layout
