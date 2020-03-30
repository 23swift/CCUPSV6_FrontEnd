import React from 'react'

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { FeaturedPlayList, SaveAlt, FormatAlignLeft, Subtitles } from '@material-ui/icons';
import { Button, Toolbar } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
    //   backgroundColor: theme.palette.background.paper,
    },
    tab:{
        margin:4,
        // background:"#fff",
        // background: "rgba(255, 255, 255, 0.3); ",
        borderRadius:3,
        textTransform:"none",
        maxHeight:20
    },
    iconLabelWrapper: {
        flexDirection: "row",
        
      },
      tabIcon:{
          marginRight:theme.spacing(1),
          margintop:20,
          color:"#ffffff"
          
      },
      labelIcon:{
          minHeight:40,
          minWidth:100
      },
      tabSelected:{
        transition: "0.2s background-color 0.1s;",
        background: "rgba(255, 255, 255, 0.3); ",
      }
  }));
  
const BillingInput = () => {
    
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div>
            
            <div className={classes.root}>
      <AppBar position="static" style={{background:"linear-gradient(60deg, #FDB913, #fcb603)",
      boxShadow:"0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(255, 152, 0,.4);",
      borderRadius:2,maxHeight:90,padding:5 
      }} elevation={3}>
          <Box display="flex" flexDirection="row" >
              <Box flexGrow={1} alignItems="center" pt={1} pl={1}>
                  <Typography >
              Billing Input:
          </Typography>
              </Box>
              <Box>
                   <Tabs disableGutter
          value={value}
          onChange={handleChange}
        //   variant="fullWidth"
          scrollButtons="off"
          aria-label="scrollable prevent tabs example"
          style={{borderRadius:4}}
          TabIndicatorProps={{
            style: {
            //   height:"0px",
              display:"none"
          }
      }}
        >
          
        
            <Tab   className={classes.tab}
            classes={{
                wrapper:classes.iconLabelWrapper,
                labelIcon:classes.labelIcon,
                selected:classes.tabSelected,
                textColorInherit:{opacity:0.8}
            }} color="secondary" icon={<FeaturedPlayList color="inherit" fontSize="small" className={classes.tabIcon} />} label="Header" aria-label="phone"  />
          <Tab classes={{
                wrapper:classes.iconLabelWrapper,
                labelIcon:classes.labelIcon,
                selected:classes.tabSelected,
                textColorInherit:{opacity:0.8}
            }}  className={classes.tab} color="secondary" icon={<FormatAlignLeft color="inherit" fontSize="small" className={classes.tabIcon}/>} label="Content" aria-label="favorite" />

         <Tab  classes={{
                wrapper:classes.iconLabelWrapper,
                labelIcon:classes.labelIcon,
                selected:classes.tabSelected,
                textColorInherit:{opacity:0.8}
            }}  className={classes.tab} color="secondary"  icon={<Subtitles color="inherit"  fontSize="small" className={classes.tabIcon}/>} label="Footer" aria-label="person" />
        
         
        </Tabs>
              </Box>

          </Box>
          

       
      </AppBar>
      <Tab value={value} index={0}>
        Item One
      </Tab>
      <Tab value={value} index={1}>
        Item Two
      </Tab>
      <Tab value={value} index={2}>
        Item Three
      </Tab>
     
    </div>
        </div>
    )
}

export default BillingInput
