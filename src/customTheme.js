
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import { grey, purple, green, pink, lightBlue, amber } from '@material-ui/core/colors';
import  Button  from '@material-ui/core/Button';
import  Fab  from '@material-ui/core/Fab';
import { LinearProgress } from '@material-ui/core';
import { cyan } from '@material-ui/core/colors';
const themeConfig={
  
  overrides:{
   body:{
     bgcolor:"#EEEEEE"
    
  }, 
  MuiFab:{
    extended:{
      boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)",
      
  }},
  MuiTab:{
    root:{
      padding: "2px 2px"
    },
    labelIcon: {
    minHeight: 60,
    // paddingTop: 9
}
},
    MuiButton:{
      label:{
         textDecoration: "none",
        textTransform: 'none'
      },
      minWidth:300
     
    },
    MuiPaper:{
      root: {
      backgroundColor: "#fff",
      // padding:".75rem 1.25rem"
  }
},
MuiListItemIcon:{
  root: {
    minWidth:30
 }
},

    MuiCssBaseline: {
      '@global': {
        '*::-webkit-scrollbar': {
          width: '0.4em'
        },
        '*::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0,0,0,.1)',
          outline: '1px solid slategrey'
        }
      }
    },
    MuiFormLabel:{
      root:{
              //  fontSize: 15,
              //  color:"rgb(0, 60, 108)",
              // color:"red"
               
               
      },borderColor:"red"
    },
    
    MuiInputLabel: {
      // color: theme.palette.primary.main,
      
      root:{
        fontSize: 15,
        color:"rgb(0, 60, 108)",
       // color:"red"
        
      
      },
      outlined: {
        '&$shrink': {
           transform: 'translate(14px, -6px) scale(0.85)',
          },
      },
    },
   
    MuiFormControlLabel:{

      root:{
            color:"rgb(0, 60, 108)",
             
      }
    },
    MuiTypography:{
      
      // body1:{
      //     fontSize: 14,
      //     fontWeight: 400,
      // },
      h1:{
        fontSize: "3em",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: 300,
        marginBottom: "3px",
        textDecoration: "none",
        lineHeight: "1.5em"
      },
      h2:{
        fontSize: "2.4em",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: 300,
        marginBottom: "3px",
        textDecoration: "none",
      },
      h3:{
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: 300,
        marginBottom: "0px",
        textDecoration: "none",
        fontSize: "1.825em",
        // margin: "20px 0 10px"
      },
      h4:{
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: 300,
        marginBottom: "3px",
        textDecoration: "none",
        fontSize: "1.3em"
      },h5:{
        fontSize: "1.25em",
        lineHeight: "1.4em",
        // marginBottom: "15px"
        marginBottom: "1px"
      }, 
    },
    MuiTablePagination:{
      toolbar:{
            color: "rgb(51, 120, 175)"
      },
  },
    MuiTableCell:{
      root:{

        //  borderBottom:"1px solid rgb(51, 120, 175)",
        
      },
      body:{
          color:"rgb(0, 60, 108)",
          // backgroundColor: "#eee",
          margin:0,
          minWidth:200
          
          
      },
      head:{
        color: "#3d4977",
        padding: 5,
        position: "relative",
        fontWeight: 550,
        borderBottom: "none",
        // textTransform: "uppercase",
        textTransform: "none",
        verticalAlign: "middle"
    }
      
    },MuiOutlinedInput: {
      root: {
          position: 'relative',
          '& $notchedOutline': {
              borderColor: 'rgba(0, 0, 0, 0.23)',
          },
          '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
              borderColor: '#4A90E2',
              // Reset on touch devices, it doesn't add specificity
              '@media (hover: none)': {
                  borderColor: 'rgba(0, 0, 0, 0.23)',
              },
          },
          '&$focused $notchedOutline': {
              borderColor: '#4A90E2',
              borderWidth: 1,
          },
      },
  },
    MuiTableHead:{
      root: {
        // backgroundColor:"#f4f5fd",
        textTransform:"none"

      }
    }
  },
 
  // MuiListItem:{
  //   button:{
      
    
  //               '&:hover':{
  //                 textDecoration: "none",
  //                 background: lightBlue[500],
  //                 color:"#ffff",
  //                 boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)'
                            
  //               },
  //               "&.Mui-selected": {
  //                 backgroundColor: lightBlue[500],
  //                 boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
  //                 color:"#FFF"
  //               },
  //               "&.Mui-selected:hover":{ 
  //                 backgroundColor: lightBlue[500],
  //                 boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
  //                 color:"#FFF"
  //               }
              
          
  //     },
  
  // },
 
  "palette": {
    "tonalOffset": 0.2,
    // "background": { "paper": "#fafafa", "default": "#fafafa" },
    "background": { "paper": "#EEEEEE", "default": "#EEEEEE" },
    
    "contrastThreshold": 3,
    "grey": {
      "50": "#fafafa",
      "100": "#f5f5f5",
      "200": "#eeeeee",
      "300": "#e0e0e0",
      "400": "#bdbdbd",
      "500": "#9e9e9e",
      "600": "#757575",
      "700": "#616161",
      "800": "#424242",
      "900": "#212121",
      "A700": "#616161",
      "A100": "#d5d5d5",
      "A400": "#303030",
      "A200": "#aaaaaa"
    },
    "text": {
      "primary": "rgba(0, 0, 0, 0.87)",
      "secondary": "rgba(0, 0, 0, 0.54)",
      "disabled": "rgba(0, 0, 0, 0.38)",
      "hint": "rgba(0, 0, 0, 0.38)"
    },
    "divider": "rgba(0, 0, 0, 0.12)",
    // "secondary": {
    //   "main": "#FBC02D",
    //   "light": "rgb(251, 204, 87)",
    //   "dark": "rgb(175, 134, 31)",
    //   "contrastText": "#043a7b"
    // },
    "common": { "black": "#000", "white": "#fff" },
    "error": {
      "light": "#e57373",
      "main": "#f44336",
      "dark": "#d32f2f",
      "contrastText": "#fff"
    },
    "type": "light",
    "action": {
      "hoverOpacity": 0.08,
      "hover": "rgba(0, 0, 0, 0.08)",
      "selected": "rgba(0, 0, 0, 0.14)",
      "disabledBackground": "rgba(0, 0, 0, 0.12)",
      "disabled": "rgba(0, 0, 0, 0.26)",
      "active": "rgba(0, 0, 0, 0.54)"
    },

     primary: {
      light: '#0651ac',
      // main: '#3d4977',
      main:"#043673",
      dark: '#042e62',
      contrastText: "#f2f8ff",

    },
    secondary: {
      light: '#fdc435',
      main: '#FDB913',
      dark: '#fcb603',
      contrastText: '#eeeeee',
      // light: '#6c8de0',
      // main: "rgb(70, 111, 216)",
      // dark: '#426cd7',
      // contrastText: "#f2f8ff",
      // light:blue[300],
      // main:blue[500],
      // dark:blue[600],
    },
    info: {
      light: lightBlue[300],
      main: lightBlue[500],
      dark: lightBlue[700],
      contrastText: '#eeeeee',
    },
    // warning: {
    //   light: purple[300],
    //   main: purple[500],
    //   dark: purple[700],
    //   contrastText: '#eeeeee',
    // },
    typography: {
      
      htmlFontSize: 14,
      fontSize: 10,
      fontWeightLight: 200,
      fontWeightRegular: 300,
      fontWeightMedium: 400,
      fontWeightBold: 600,
      
    },
  } ,
  
  "themeName": "Bahama Blue Lightning Yellow American Bison"
}
const customTheme=createMuiTheme(themeConfig);
export const CreateButton = withStyles(theme => ({
  root: {
    label:{
      color: blue[900],
    },
    color: theme.palette.getContrastText(blue[900]),
    backgroundColor: amber[500],
    '&:hover': {
      backgroundColor: amber[700],
    },
    
    
  },
  
}))(Button);

export default customTheme;