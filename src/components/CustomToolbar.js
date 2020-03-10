import React from 'react'
import { Toolbar, Typography, Divider } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const CustomToolbar = (props) => {
    return (
       <div >
            <Toolbar variant="dense" 
        // style={{backgroundColor:"#f2f8ff",borderRadius:3}}
        style={{marginLeft:0,paddingLeft:1}}
        >
                 <Typography   color="primary" variant="span" className={"MuiCardHeader-title"}
                 style={{
                    
                   
                 flexGrow:1}}
                 
                 >{props.title}</Typography>
                <div>
                {props.children}
                </div>
            </Toolbar>
            {/* <Divider/> */}
       </div>
       
    )
}

export default CustomToolbar
