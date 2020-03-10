import React from 'react'
import { Toolbar, Typography, Divider } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const CustomToolbar = (props) => {
    return (
       <div >
            <Toolbar 
        // style={{backgroundColor:"#f2f8ff",borderRadius:3}}
        // style={{marginLeft:15}}
        >
                 <Typography   color="primary" variant="h5" 
                 style={{flexGrow:1,paddingTop:5}}
                 
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
