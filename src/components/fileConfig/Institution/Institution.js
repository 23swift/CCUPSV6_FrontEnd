import React from 'react'
import { Typography, AppBar, Toolbar, Button, Box, makeStyles } from '@material-ui/core';
import {  AccountBalance, Cancel, Send } from '@material-ui/icons';
import { Save } from '@material-ui/icons';
import InstitutionForm from './InstitutionForm';
import { orange } from '@material-ui/core/colors';
import CustomCard from './../../CustomCard';
const useStyles = makeStyles(theme => ({
    button: {
      color:theme.palette.background.default,
     
    },
}));


export default function Institution() {
    const classes = useStyles();
    return (
        
            <CustomCard title="Institution Details" icon={<AccountBalance/>}>
                 <InstitutionForm/>
            </CustomCard>
    )
}
