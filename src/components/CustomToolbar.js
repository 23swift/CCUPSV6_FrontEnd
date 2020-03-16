import React from 'react'
import { Toolbar, Typography, Divider,AppBar, Paper, Box } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { color } from '@material-ui/core/colors/grey';

const CustomToolbar = (props) => {
    return (
            <Box  display="flex" p={0} m={0}> 
            {props.icon &&
                <Box mr={1}>
                
                            {props.icon}
                
                </Box>
            }
            
                <Box  flexGrow={1}>
                   
                        <Typography   color="inherit" component="span"
                                        style={{flexGrow:1,
                                            color:"#fff",
                                            minHeight: "auto",
                                            fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
                                            fontWeight: 300,
                                            marginBottom: 0,
                                            paddingBottom:0,
                                            textDecoration: "none",
                                            // fontSize: "1.3em"
                                        }}>
                        {props.title}</Typography>
                </Box>
                <Box  mr={1}>
                     {props.children}
                </Box>
               
            </Box>
       
    )
}

export default CustomToolbar
