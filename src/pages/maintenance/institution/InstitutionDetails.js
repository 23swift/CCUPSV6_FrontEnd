import React from 'react'
import BillingInput from '../../../components/fileConfig/billingInput/BillingInput';
import Page from '../../../components/Page';
import { makeStyles, Drawer, List, ListItem, ListItemText, Grid, Paper, ListItemIcon, Divider, IconButton, MenuItem, Menu, Fab, Button, Toolbar, Typography } from '@material-ui/core';

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
        color:theme.palette.primary.light
      },
      menuItem:{marginLeft:8,marginRight:8,borderRadius:3,
        color:theme.palette.primary.dark
    }
}));
const InstitutionDetails = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
    };
    let { path, url } = useRouteMatch();

    return (
        <Page title="Billing File Configuration" tools={
            <>
            {/* <Fab color="primary"  size="large" onClick={handleMenuClick} variant="extended"  style={{width:100,right:-30,padding:0,position:"fixed"}}
            props>
                <SettingsIcon  fontSize="large" style={{marginRight:50}}/>
                
            </Fab>
             <Menu 
             id="simple-menu"
             anchorEl={anchorEl}
             keepMounted
             open={Boolean(anchorEl)}
             onClose={handleMenuClose}
                style={{paddingTop:0}}
                
           >
               
                    <MenuItem className={classes.menuItem} onClick={handleMenuClose} >
                    <AccountBalance className={classes.menuIcon} />
                        Institution
                        </MenuItem>
                        
                    <MenuItem onClick={handleMenuClose} className={classes.menuItem}>
                    <NoteAdd className={classes.menuIcon} />
                        Enrollment</MenuItem>
                        
                    <MenuItem onClick={handleMenuClose} className={classes.menuItem}>
                    <LinkOffIcon className={classes.menuIcon} />
                        Disenrollment</MenuItem>
                        
                    <MenuItem onClick={handleMenuClose} className={classes.menuItem}>
                        <SaveAlt className={classes.menuIcon}/>
                        Input Billing
                    </MenuItem>
                    
                    <MenuItem onClick={handleMenuClose} className={classes.menuItem}>
                        <RestorePage className={classes.menuIcon}/>
                        Billing Return
                    </MenuItem>
                    
                    <MenuItem onClick={handleMenuClose} className={classes.menuItem}>
                        <InsertChartOutlined className={classes.menuIcon}/>
                        Billing Report
                    </MenuItem>
             
                   
           </Menu> */}
           <Toolbar variant="dense">
               <Box display="flex" width="100%" >

                    <Box  flexGrow={1} color="primary">
                        <Typography variant="h3" color="primary">
                        Institution Setup
                        </Typography>
                    </Box>
                    <Box >

                    
                    <Button startIcon={<NoteAdd />} color="primary">
                            Enrollment
                    </Button>

                    <Button startIcon={<LinkOffIcon />} color="primary">
                        Disenrollment
                            </Button>
                    <Button startIcon={<SaveAlt />} component={Link} to={`${path}/billing-input`} color="primary">
                    Input Billing
                            </Button>
                        <Button startIcon={<RestorePage />} color="primary">
                        Billing Return
                            </Button>
                            <Button startIcon={<InsertChartOutlined />} color="primary">
                            Billing Report
                            </Button>
                    </Box>

               </Box>
           
           </Toolbar>
           </>
        } >
        
              
                    {/* <BillingInput /> */}
                <main className={classes.content} style={{minWidth:500}}>
                <Switch>
                    <Route exact path={path} />
                            
                            {/* <Route exact path="/header-config" component={HeaderConfig} /> */}

                            {/* <Route exact path="/content-config" component={ContentConfig} />
                        <Route exact path="/footer-config" component={FooterConfig} /> */}
                        <Route exact path={`${path}/billing-input`} component={BillingInput} />
                        <Route exact path={`${path}/details/:id`} component={Institution} />
                        <Route exact path={`${path}/product`} component={Product} />
                </Switch> 
                    
                    
                    
                    
                </main>
          
           
           
          
          
            
        </Page>
    )
}

export default InstitutionDetails
