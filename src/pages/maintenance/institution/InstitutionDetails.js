import React from 'react'

import Page from '../../../components/Page';
import { makeStyles, Drawer, List, ListItem, ListItemText, Grid, Paper, ListItemIcon, Divider, IconButton, MenuItem, Menu, Fab, Button, Toolbar, Typography, CardContent, CardHeader, Card } from '@material-ui/core';

import { Route,Link,Switch,   useParams,
    useRouteMatch} from 'react-router-dom'
import { Input, ExitToApp, Clear, HowToReg, NoteAdd, SaveAlt, RestorePage, InsertChartOutlined, AccountBalance, WorkOutline, ArrowBackIos } from '@material-ui/icons';
import Institution from '../../../components/fileConfig/Institution/Institution';
import Product from '../../../components/fileConfig/product/Product';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
// import {  AccountBalance, Cancel, Send } from '@material-ui/icons';
import LinkOffIcon from '@material-ui/icons/LinkOff';
import SettingsIcon from '@material-ui/icons/Settings';
import { Box } from '@material-ui/core';
import InstitutionForm from '../../../components/maintenance/institution/InstitutionForm';
import MenuIcon from '@material-ui/icons/Menu';
import DetailsIcon from '@material-ui/icons/Details';
import BillingInput from '../../../components/maintenance/institution/BillingInput';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        minWidth:200
      },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
    drawerPaper: {
        width: drawerWidth,
      },
      menuIcon:{
        marginRight:10,
        color:theme.palette.primary.main
      },
      menuItem:{margin:8,borderBottomLeftRadius :15,
        borderTopLeftRadius:15,
        color:theme.palette.primary.main,minWidth:200,
        "&:hover":{
          backgroundColor:"#f2f8ff"
        }
    }
}));
const InstitutionDetails = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleMenuClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
    };
    let { path, url } = useRouteMatch();

    return (
       

        <Card style={{marginTop:60,marginLeft:12,marginRight:12}}>
            <CardHeader subheader="Manila Electric Company"  title={
               
                     <Toolbar variant="dense" style={{backgroundColor:"#fff",marginLeft:0,paddingLeft:0}}>
                     <Box display="flex" width="100%" style={{marginLeft:0,paddingLeft:0}}>
      
                          <Box  flexGrow={1} color="primary">
                              <Typography variant="h3" color="primary">
                                Meralco
                                </Typography>
                          </Box>
                          <Box >
      
                                  <Fab onClick={handleMenuClick} color="secondary" size="small" >
                                        <MenuIcon/>
                                  </Fab>
                                  <Menu
                                      id="simple-menu"
                                      anchorEl={anchorEl}
                                      keepMounted
                                      open={open}
                                      onClose={handleMenuClose}
                                      style={{marginTop:70}}
                                      
                                    >
                                      <List dense>
                                        <ListItem onClick={handleMenuClose}  color="primary" button
                                       
                                      className={classes.menuItem}>
                                      <ListItemIcon className={classes.menuIcon}><DetailsIcon  />
                                    </ListItemIcon>
                                    <ListItemText primary="Details" />
                                        </ListItem>
                                      <ListItem onClick={handleMenuClose} color="primary" button
                                      className={classes.menuItem}>
                                     <ListItemIcon className={classes.menuIcon}>
                                       <NoteAdd  />
                                    </ListItemIcon>
                                        Enrollment
                                        </ListItem>
                                      <ListItem onClick={handleMenuClose} color="primary" button
                                       className={classes.menuItem}>
                                          <ListItemIcon className={classes.menuIcon}>
                                       <LinkOffIcon  />
                                    </ListItemIcon>
                                        Disenrollment</ListItem>
                                    <ListItem onClick={handleMenuClose} color="primary" button component={Link} to={`${path}/billing-input`}
                                       className={classes.menuItem}>
                                          <ListItemIcon className={classes.menuIcon}>
                                       <SaveAlt />
                                    </ListItemIcon>
                                        Input BIlling</ListItem>
                                        <ListItem onClick={handleMenuClose} color="primary" button
                                       className={classes.menuItem}>
                                         <ListItemIcon className={classes.menuIcon}>
                                          <InsertChartOutlined />
                                        </ListItemIcon>
                                        Billing Report</ListItem>

                                      </List>
                                      
                                    </Menu>
                                    
                          </Box>
      
                     </Box>
                 
                 </Toolbar>
            }/>

            
            <CardContent style={{paddingTop:0}}>
           
                <main className={classes.content} style={{minWidth:500}}>
                <Switch>
                    <Route exact path={path} />
                            
                            {/* <Route exact path="/header-config" component={HeaderConfig} /> */}

                            {/* <Route exact path="/content-config" component={ContentConfig} />
                        <Route exact path="/footer-config" component={FooterConfig} /> */}
                        <Route exact path={`${path}/billing-input`} component={BillingInput} />
                        <Route exact path={`${path}/details/:id`} component={InstitutionForm} />
                        <Route exact path={`${path}/product`} component={Product} />
                </Switch> 
                    
                    
                    
                    
                </main>
            </CardContent>
        </Card>
    )
}

export default InstitutionDetails
