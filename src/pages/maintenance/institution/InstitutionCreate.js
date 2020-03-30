import React from 'react'
import InstitutionForm from './../../../components/maintenance/institution/InstitutionForm';
import Page from './../../../components/Page';
import { Paper,  Grid, CardContent,  Fade, Grow, Card,IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';

const InstitutionCreate = () => {
    return (
        <Page title="Institution Reference" tools={<IconButton color="secondary" component={Link} to="/institutionIndex"
        size="small">
        <CloseIcon/>
      </IconButton>} >
           
               <Card>
                  
                        <CardContent>
                            <InstitutionForm mode="add"/>
                        </CardContent>
                    
                 </Card>
           {/* </Grow> */}
           
            
             
        </Page>
           
        
    )
}

export default InstitutionCreate
