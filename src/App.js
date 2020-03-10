import React from 'react';
import './App.css';
import Layout from './components/Layout';
import Routes from './components/Routes';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import customTheme from './customTheme';
function App() {
  return (
   <div>
     
     <ThemeProvider theme={customTheme}>
     <CssBaseline/>
        <Layout>
        <Routes/>
     </Layout>
     </ThemeProvider>
    
   </div>
  );
}

export default App;
