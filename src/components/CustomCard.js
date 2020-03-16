import React from 'react'
import { Paper, Button, IconButton, Card, CardHeader, CardContent, Box } from '@material-ui/core';
import CustomToolbar from './CustomToolbar';
const CustomCard = (props) => {
    return (
        <div>
            <CardHeader style={{margin:0}}  title={ 
                          <CustomToolbar title={props.title} flexGrow={1} icon={props.icon} >
                                {props.tools}
                            </CustomToolbar>
                }
              
              style={{
                borderRadius:3,
                background: "linear-gradient(60deg, #ffa726, #ff981a)",
                // background: "#ffa726",
                boxShadow: "0 4px 20px 0 rgba(0, 0, 0,.14)",
                padding: 10,
                color: "#FFF",
                marginLeft:15,
                marginRight:15,
                // zIndex: "100 !important",
                position:"relative",
                height:75,
                // width:"100%"
                
             }} subheader={
              <p style={{
                color: "rgba(255, 255, 255,.62)",
                  margin: 0,
                  fontSize: 14,
                  marginTop: 0,
                  marginBottom: 0,
                  padding:0
              }} 
              >{ props.subHeader}</p>
             }
              />
            <Card elevation={1} 
            style={{
              marginTop:-55,
              padding:10}}
            >
              
                
              <CardContent style={{marginTop:55,padding:10}}>
                {props.children}
              </CardContent>
             
              

            </Card>
            
        </div>
    )
}

export default CustomCard
