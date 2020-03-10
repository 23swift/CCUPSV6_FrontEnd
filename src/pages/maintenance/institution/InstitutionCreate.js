import React from 'react'
import InstitutionForm from './../../../components/maintenance/institution/InstitutionForm';
import Page from './../../../components/Page';
import { Paper, Card, Grid, CardContent, CardHeader, Fade, Grow } from '@material-ui/core';

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
