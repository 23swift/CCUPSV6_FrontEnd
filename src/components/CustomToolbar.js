import React from 'react'
import { Toolbar, Typography, Divider,AppBar, Paper } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const CustomToolbar = (props) => {
    return (
    //    <AppBar position="sticky" 
       
    //    >
            <div 
             
       
        > 
                 <Typography   color="inherit" variant="h5" 
                 style={{flexGrow:1,
                    color:"#fff",
                    minHeight: "auto",
                    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif;",
                    fontWeight: 300,
                    marginBottom: 0,
                    paddingBottom:0,
                    textDecoration: "none"
                
                }}
                 
                 >{props.title}</Typography>
                <div>
                {props.children}
                </div>
            </div>
            
    //    </AppBar>
       
    )
}

export default CustomToolbar
