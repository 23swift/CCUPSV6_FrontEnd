import React from 'react'
import Page from '../components/Page';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Container, List, ListItem, Box, Card, Typography, ListItemText ,ListItemIcon, ListItemAvatar, Avatar} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faTools, faShieldAlt, faSearch } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
    icon:{
         color:theme.palette.warning.light,
         marginRight:15
       
    }
  }));
const Home = () => {
    const classes = useStyles();
    return (
        <Page title="Credit Card Utility Payment System">

            {/* <Container> */}
                 <List component="nav" style={{maxWidth:800}}>
                     <ListItem button >
                     <ListItemIcon>
                             <FontAwesomeIcon icon={faDatabase} size="3x" className={classes.icon} />
                        </ListItemIcon>
                         <ListItemText primary={<Typography variant="h2" color="primary">Transactions</Typography>} 
                         secondary="This contains the User, Access level, Group name, Start of day from end of day module,
                            and current date."/>
                         
                     </ListItem>
                     <ListItem button  >
                       
                       <ListItemIcon>
                       
                         <FontAwesomeIcon icon={faTools} size="3x" className={classes.icon} /> 
                       
                       </ListItemIcon>

                       <ListItemText primary={<Typography variant="h2" color="primary">Utilities</Typography>} 
                        secondary="This contains modules for parameter maintenance and system configurations."/>
                      
                     </ListItem>
                     <ListItem button  >
                       
                       <ListItemIcon>
                       
                         <FontAwesomeIcon icon={faShieldAlt} size="3x" className={classes.icon} /> 
                       
                       </ListItemIcon>

                       <ListItemText primary={<Typography variant="h2" color="primary">Security</Typography>} 
                        secondary="This contains modules for System security parameter setup wich include user maintenance, user access and audit logs."/>
                      
                     </ListItem>
                     <ListItem button  >
                       
                       <ListItemIcon>
                       
                         <FontAwesomeIcon icon={faSearch} size="3x" className={classes.icon} /> 
                       
                       </ListItemIcon>

                       <ListItemText primary={<Typography variant="h2" color="primary">Inquiry</Typography>} 
                        secondary="enables contact center to answer auto-charge related inquiries of the
                        cardholders. Moreover, it automates the creation of merch batch file, which is necessary to
                        Cadencie, in order to post the auto-charge transactions of BDO card holders."/>
                      
                     </ListItem>
                 </List>
            {/* </Container> */}
                
        </Page>
    )
}

export default Home
