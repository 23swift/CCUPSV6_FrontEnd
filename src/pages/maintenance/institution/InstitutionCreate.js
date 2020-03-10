import React from 'react'
import InstitutionForm from './../../../components/maintenance/institution/InstitutionForm';
import Page from './../../../components/Page';
import { Paper, Card, Grid, CardContent, CardHeader } from '@material-ui/core';

const InstitutionCreate = () => {
    return (
        <Page >
            <Grid container spacing={1}>
                <Grid item>
                     <Paper style={{padding:".75rem 1.25rem"}}>
                <InstitutionForm mode="add"/>
            </Paper>
                </Grid>
                <Grid item>
                    <Card>
                        <CardHeader title="Institution Reference"/>

                        
                        <CardContent>
                            <InstitutionForm mode="add"/>
                        </CardContent>
                    
                 </Card>
                </Grid>
            </Grid>
           
            
             
        </Page>
           
        
    )
}

export default InstitutionCreate
