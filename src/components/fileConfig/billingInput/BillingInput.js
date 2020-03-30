import React from 'react'
import { Typography, makeStyles, Toolbar, Button, Fab } from '@material-ui/core';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import HeaderConfig from './HeaderConfig';
import ContentConfig from './ContentConfig';
import FooterConfig from './../footer/FooterConfig';

import { FeaturedPlayList, SaveAlt } from '@material-ui/icons';
import { FormatAlignLeft } from '@material-ui/icons';
import { Subtitles } from '@material-ui/icons';
import { PropTypes } from 'prop-types';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    
      appBar:{
        backgroundColor:theme.palette.background.default,
      },
      tab:{
        textTransform:'none',
        // minWidth:120,
        color:"#fff",
        // borderColor:theme.palette.primary.main,
        // backgroundColor:"red",
        // margin:2,
        maxHeight:10,
        // padding:1
        // boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)",
        // background:"#ff9800"
        
      }
  }));
function TabContainer(props) {
    return (
      <Typography component="div" >
        {props.children}
      </Typography>
    );
  }
  
//   TabContainer.propTypes = {
//     children: PropTypes.node.isRequired,
//   };
export default function BillingInput() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    function handleChange(event, newValue) {
      setValue(newValue);
    }
    return (
        <>
            
            
           
              <Toolbar style={{padding:0}} >
             
              <Typography   variant="subtitle1" style={{padding:"2px",margin:0,flexGrow:1}} color="primary">
                        Billing Input File Configuration
                    </Typography>
                    

              
              </Toolbar>
                    <Tabs style={{borderColor:"#fff"}}  value={value}   onChange={handleChange} indicatorColor="primary" 
                    >
                         <Tab label="Header" component={Fab} variant="extended" color="secondary"  className={classes.tab}/>
                         <Tab label="Content" component={Button}  color="primary" icon={<FormatAlignLeft color="primary" style={{margin:0,padding:0}}/>} className={classes.tab}/>
                        <Tab label="Footer" component={Button}  color="primary" icon={<Subtitles color="primary" style={{margin:0,padding:0}}/>}  className={classes.tab}/>
                </Tabs>
           
            
                {value === 0 && <TabContainer><HeaderConfig/></TabContainer>}
                {value === 1 && <TabContainer><ContentConfig/></TabContainer>}
                {value === 2 && <TabContainer><FooterConfig/></TabContainer>}
        </>
            
    )
}
