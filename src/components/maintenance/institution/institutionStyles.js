import { makeStyles } from "@material-ui/core";
import { maxHeight } from "@material-ui/system";

export const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    appBar: {
      top: 'auto',
      bottom: 0,
      zIndex: theme.zIndex.drawer + 1,
      background:theme.palette.background.paper
    },
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      //   marginLeft: theme.spacing(1),
      // marginRight: theme.spacing(1),
      "&:hover": {
        borderColor: theme.palette.secondary.light,
        borderWidth: 2
      },
      width: "100%"
    },
    dense: {
      marginTop: theme.spacing(2)
    },
    menu: {
      width: 200
    },
    button: {
      marginRight:3,
      minWidth:100
      // backgroundColor: theme.palette.info.main,
      // color: theme.palette.grey[50],
      // "&:hover": {
      //   backgroundColor: theme.palette.info.main
      // }
    },
    floatingLabelFocusStyle: {
      color: theme.palette.primary.main,
      fontSize: 15,
      root:{
        fontSize: 15,
        color:"rgb(0, 60, 108)",
       // color:"red"
        
      
      },
      
     
    },
    
    formControl: {
      // margin: theme.spacing(1),
      minWidth: '100%',
    },
    inputLabel:{
      // color: theme.palette.primary.dark
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    linearProgress:{
      color:theme.palette.info.main
    },
    
scrollbar: {
  // height:470,
  width:"100%",padding:10,
  maxHeight:400,
  // "height": "300px;",
  "overflow-y": "auto",

  "scrollbar-width": "thin;",
   "scrollbar-color":" #3d4977 #ced4da;",
  // "scrollbar-highlight-color":"dimgrey",
  marginBottom:10
  }
  ,
  notchedOutline: {
    // borderWidth: "1px",
        //   '&:hover':{
        //   borderColor:   "yellow !important"
        // },
        // "&:hover:not($disabled):not($focused):not($error)": {
        //   borderColor: "red !important"
        // },
        borderColor:   theme.palette.secondary.main
      // "yellow !important"
  },
  
  }));




  export const InstitutionListStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  paper: {
    marginTop: theme.spacing(3),
    width: "100%",
    overflowX: "auto",
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 500
    
  },

  addButton: {
    color: theme.palette.info.main,
    heigth:20,
    width:30,
  },
  editButton: {
       color:theme.palette.info.dark,
      
       heigth:20,
       width:30,
      //  padding:2,
    //    backgroundColor: theme.palette.info.main,
    // "&:hover":{
    //         backgroundColor: theme.palette.info.dark,
    // },
    marginLeft:5
  },
  deleteButton: {
    color:theme.palette.error.main,
    heigth:20,
    width:30,
    // backgroundColor: theme.palette.warning.main,
    // "&:hover":{
    //         backgroundColor: theme.palette.warning.dark,
    // },
    
    // color:'#ff4136',
    marginLeft:5
  },
  warningIcon:{

    color:theme.palette.grey[50],
    marginRight:5
  },
  dialogContentText:{

    color:theme.palette.grey[50]
  },
  tHead:{

    fontWeight:300,
    fontSize:"1em",
    borderBottom:"1px solid rgb(51, 120, 175)",
    color:theme.palette.warning.main
  }
}));
