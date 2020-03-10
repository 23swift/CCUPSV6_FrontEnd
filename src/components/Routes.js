import React from 'react'
import {Switch,Route,  } from "react-router-dom";
import About from '../pages/About';
import Home from '../pages/Home';
import Users from '../pages/Users';
import ApplicationDataEntry from '../pages/ApplicationDataEntry';
import InstitutionIndex from './../pages/maintenance/institution/InstitutionIndex';
import InstitutionCreate from './../pages/maintenance/institution/InstitutionCreate';
const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/users">
                    <Users />
                </Route>
                <Route path="/applicatioDataEntry">
                    <ApplicationDataEntry />
                </Route>
                <Route path="/institutionIndex">
                    <InstitutionIndex />
                </Route>
                <Route path="/institutionCreate">
                    <InstitutionCreate />
                </Route>
                
                <Route path="/">
                    <Home />
                </Route>
        </Switch>
        </div>
    )
}

export default Routes
