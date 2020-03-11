import React from 'react'
import InstitutionForm from './../../../components/maintenance/institution/InstitutionForm';
import Page from './../../../components/Page';
import { Paper,  Grid, CardContent,  Fade, Grow, Card } from '@material-ui/core';


const InstitutionCreate = () => {
    return (
        <Page >
           
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
