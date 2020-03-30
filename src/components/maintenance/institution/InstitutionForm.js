import React, { useState, useEffect, useRef} from "react";
import {  TextField,  Box,  Button,  Typography,  FormControlLabel,  Checkbox,  Grid,  FormControl,  InputLabel, Divider, CircularProgress, InputAdornment, IconButton, Drawer, makeStyles, Grow, Slide} from "@material-ui/core";

import {InstitutionModel, InstitutionModelValidation} from './Model';
import {CustomLinearProgress} from '../../../customTheme'
import {useStyles} from './institutionStyles'
import { useParams, Link, Redirect } from 'react-router-dom';
import {useFormik,Form, Formik, withFormik}  from 'formik';
import '../../subMenu.css'
import { addOrUpdateIntstitution, fetchInstitutions, fetchInstitution } from "./institutionService";
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { lightBlue, blue, green, orange } from "@material-ui/core/colors";
import TextFieldErrorIcon from './TextFieldErrorIcon';
import { Add, Edit } from "@material-ui/icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCompactDisc, faSync, faSyncAlt, faCog } from "@fortawesome/free-solid-svg-icons";

import CloseIcon from '@material-ui/icons/Close';
import  AppBar  from '@material-ui/core/AppBar';
import Toolbar  from '@material-ui/core/Toolbar';
import Page from './../../Page';
import SelectFormControl from "../../SelectFormControl";
// const classes = useStyles();
////////////Component/////////////////

const InstitutionFormLayout= (props) =>{
  const classes = useStyles();
  const {id}=useParams();
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    status,
    isSubmitting
  } = props;
  const inputLabel = React.useRef(null);
  const [selectedItem, setSelectedItem] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [labelWidth, setLabelWidth] = React.useState(0);
 
useEffect(() => {
 
  
  if( id=='undefined'){
          setIsLoading(true)
          fetchInstitution(id).then(item => {
            setTimeout(() => {
              setSelectedItem(item);
              props.setValues({...item});
              setIsLoading(false)
            }, 1000);
           
            
          });
      }
  
  return () => {
    // cleanup
  };
}, [])



  return(
    <div>
      <Grid container
        direction="row"
        justify="space-between"
        alignItems="center"  
      
        >
        
          <Typography
            variant="h5"
            color="primary" 
          >
            
            {id==0 || id==undefined ? "Add":"Update"} Institution
          </Typography>
      
        {/* <IconButton color="secondary" component={Link} to="/institutionIndex">
          <CloseIcon/>
        </IconButton> */}
      </Grid>

    
     
    {/* <Divider style={{marginBottom:10}}/> */}



  <Form  >
   
     <Grid container spacing={1}>
    
     <Grid item md={12}>
             
         </Grid>
       <Grid item xs ={12} sm={12} md={6}>
         
         <TextField 
            
             label="Merchant ID"
             className={classes.textField}
             margin="dense"
            // variant="outlined"
             value={values.merchantId}
             name="merchantId" id="merchantId"
              onChange={handleChange} 
           />
       </Grid>
       <Grid item xs ={12} sm={12} md={6}>
             <TextField
                     
                     
                     id="outlined-dense"
                     label="Billing File Type"
                     className={classes.textField}
                     margin="dense"
                      // variant="outlined"
                     value={values.billingFileType}
                     name="billingFileType" id="billingFileType"
                     onChange={handleChange} 
                     
                 />
       </Grid>
       <Grid item xs ={12} sm={12} md={6}>
                    
                     <TextField
                     // InputLabelProps={{
                     // className: classes.floatingLabelFocusStyle
                     // }}
                     id="outlined-dense"
                     label="Code"
                     className={classes.textField}
                     margin="dense"
                      // variant="outlined"
                     value={values.institutionCode}
                     name="institutionCode" 
                     id="institutionCode"
                     onChange={handleChange} 
                     error= {errors.institutionCode && touched.institutionCode}
                     
                    InputProps={{
                       endAdornment: 
                        errors.institutionCode && touched.institutionCode && <TextFieldErrorIcon errorMsg={errors.institutionCode}/>
                         
                
                     }}
                 />
         </Grid>
         <Grid item xs ={12} sm={12} md={6}>
                
             <SelectFormControl value={values.paddingPos} label="Padding Possition" name="paddingPos" handleChange={handleChange}
             selectList={[
               {value:10,text:"Start"},
               {value:20,text:"End"}
             ]}/>
               
         </Grid>
   
         <Grid item xs ={12} sm={12} md={6}>
         <TextField
                 
                 id="outlined-dense"
                 label="Institution Name"
                 className={classes.textField}
                 margin="dense"
                  // variant="outlined"
                 value={values.institutionName}
                 name="institutionName" id="institutionName"
                 onChange={handleChange} 
                 error= {errors.institutionName && touched.institutionName}
                  InputProps={{
                       endAdornment: 
                         errors.institutionName && touched.institutionName && <TextFieldErrorIcon errorMsg={errors.institutionName}/>
                          ,
                     }}
             />
            
         </Grid>
         <Grid item xs ={12} sm={12} md={6}>
                 <TextField
                 
                 id="outlined-dense"
                 label="Padding Character"
                 className={classes.textField}
                 margin="dense"
                  // variant="outlined"
                 value={values.paddingChar}
                 name="paddingChar" id="paddingChar"
                 onChange={handleChange} 
             />
         </Grid>
         <Grid item xs ={12} sm={12} md={6}>
   
                     <TextField
                     
                     id="outlined-dense"
                     label="Default Payment Allowed"
                     className={classes.textField}
                     margin="dense"
                      // variant="outlined"
                     value={values.defaultPaymentAllowed}
                     name="defaultPaymentAllowed" id="defaultPaymentAllowed"
                     onChange={handleChange} 
                 />
         </Grid>
         <Grid item xs ={12} sm={12} md={6}>
                 <FormControlLabel
                 control={
                 <Checkbox
                   checked={values.isStandard}
                     icon={<RadioButtonUncheckedRoundedIcon color="primary"  />}
                     checkedIcon={<CheckCircleIcon style={{color:lightBlue[500]}} />}
                     value={values.isStandard}
                     name="isStandard" id="isStandard"
                     onChange={handleChange} 
                 />
                 }
                 label="Is Standard Institution?"
                 className={classes.floatingLabelFocusStyle}
                 
             />
         </Grid>
         {/* <Grid item md={12}>
             <Divider/>
         </Grid> */}
   
         <Grid item xs ={12} sm={12} md={6}>
             <TextField
                        
                         id="outlined-dense"
                         label="Batch Number Max Value"
                         className={classes.textField}
                         margin="dense"
                          // variant="outlined"
                         value={values.batchNumberMaxVal}
                         name="batchNumberMaxVal" id="batchNumberMaxVal"
                         onChange={handleChange} 
                     />
         </Grid>
         <Grid item xs ={12} sm={12} md={6}>
             <TextField
                        
                         id="outlined-dense"
                         label="Decline Code Max Length"
                         className={classes.textField}
                         margin="dense"
                          // variant="outlined"
                         value={values.decCodeMaxLen}
                         name="decCodeMaxLen" id="decCodeMaxLen"
                         onChange={handleChange} 
                     />
         </Grid>
         <Grid item xs ={12} sm={12} md={6}>
             <TextField
                        
                         id="outlined-dense"
                         label="Batch Number Initial Value"
                         className={classes.textField}
                         margin="dense"
                          // variant="outlined"
                         value={values.batchNumInitVal}
                         name="batchNumInitVal" id="batchNumInitVal"
                         onChange={handleChange} 
                     />
         </Grid>
         <Grid item xs ={12} sm={12} md={6}>
                 <FormControlLabel
                 control={
                 <Checkbox
                 checked={values.isCounterResetAllowed}
                  icon={<RadioButtonUncheckedRoundedIcon color="primary"   />}
                     checkedIcon={<CheckCircleIcon style={{color:lightBlue[500]}}    />}
                 value={values.isCounterResetAllowed}
                 name="isCounterResetAllowed" id="isCounterResetAllowed"
                 onChange={handleChange} 
                 />
                 }
                 label="Is Counter Reset Allowed?"
                 // className={classes.floatingLabelFocusStyle}
             />
         </Grid>
         <Grid item xs ={12} sm={12} md={6}>
             <TextField
                        
                         id="outlined-dense"
                         label="Batch Number Length Limit"
                         className={classes.textField}
                         margin="dense"
                          // variant="outlined"
                         value={values.batchNumLenLimit}
                         name="batchNumLenLimit" id="batchNumLenLimit"
                         onChange={handleChange} 
                     />
         </Grid>
         <Grid item xs ={12} sm={12} md={6}>
             <TextField
                        
                         id="outlined-dense"
                         label="Current Batch Number"
                         className={classes.textField}
                         margin="dense"
                          // variant="outlined"
                         value={values.currentbatchNum}
                         name="currentbatchNum" id="currentbatchNum"
                         onChange={handleChange} 
                     />
         </Grid>
       
         <Grid item xs ={12} sm={12} md={6}>
             <TextField
                        
                         id="outlined-dense"
                         label="Approved Billing Report FN"
                         className={classes.textField}
                         margin="dense"
                          // variant="outlined"
                         value={values.approvedBillingRpt}
                         name="approvedBillingRpt" id="approvedBillingRpt"
                         onChange={handleChange} 
                     />
         </Grid>
         <Grid item xs ={12} sm={12} md={6}>
             <TextField
                        
                         id="outlined-dense"
                         label="Declined Billing Report FN"
                         className={classes.textField}
                         margin="dense"
                          // variant="outlined"
                         value={values.declinedBillingRpt}
                         name="declinedBillingRpt" id="declinedBillingRpt"
                         onChange={handleChange} 
                     />
         </Grid>
         <Grid item xs ={12} sm={12} md={6}>
             <TextField
                        
                         id="outlined-dense"
                         label="Approved Billing Return File FN"
                         className={classes.textField}
                         margin="dense"
                          // variant="outlined"
                         value={values.approvedBillingRtrn}
                         name="approvedBillingRtrn" id="approvedBillingRtrn"
                         onChange={handleChange} 
                     />
         </Grid>
         <Grid item xs ={12} sm={12} md={6}>
             <TextField
                        
                         id="outlined-dense"
                         label="Declined Billing Return FN"
                         className={classes.textField}
                         margin="dense"
                          // variant="outlined"
                         value={values.declinedBillingRtrn}
                         name="declinedBillingRtrn" id="declinedBillingRtrn"
                         onChange={handleChange} 
                     />
         </Grid>
         <Grid item xs ={12} sm={12} md={6}>
             <TextField
                        
                         id="outlined-dense"
                         label="Merch Decline Code Max"
                         className={classes.textField}
                         margin="dense"
                          // variant="outlined"
                         value={values.merchDeclineCodeMax}
                         name="merchDeclineCodeMax" id="merchDeclineCodeMax"
                         onChange={handleChange} 
                     />
         </Grid>
         <Grid item xs ={12} sm={12} md={6}>
             <TextField
                        
                         id="outlined-dense"
                         label="Inst Bill File Type"
                         className={classes.textField}
                         margin="dense"
                          // variant="outlined"
                         value={values.billFileType}
                         name="billFileType" id="billFileType"
                         onChange={handleChange} 
                     />
         </Grid>
         <Grid item xs ={12} sm={12} md={6}>
             <TextField
                        
                         id="outlined-dense"
                         label="Padding Position"
                         className={classes.textField}
                         margin="dense"
                          // variant="outlined"
                         value={values.paddingPosition}
                         name="paddingPosition" id="paddingPosition"
                         onChange={handleChange} 
                     />
         </Grid>
         <Grid item xs ={12} sm={12} md={6}>
             <TextField
                        
                         id="outlined-dense"
                         label="Padding Character"
                         className={classes.textField}
                         margin="dense"
                          // variant="outlined"
                         value={values.paddingChar}
                         name="paddingChar" id="paddingChar"
                         onChange={handleChange} 
                     />
         </Grid>
     </Grid> 
     
     
   {/* <Grow in={true} timeout={1000}> */}
   <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={700}>
 <AppBar position="fixed" className={classes.appBar}>
       <Toolbar >
       
       
         <Box display="flex" flexDirection="row" justifyContent="flex-end" style={{ width: '100%' }}   >
                   <Box  flexGrow={1}> {/* {isSubmitting  && <Typography variant="subtitle1"> Please wait...</Typography>} */}
                  {isLoading && 
                  <Box style={{marginTop:10}} color="secondary.dark">
                  <Typography variant="body1" >
                    {/* <FontAwesomeIcon icon={faCompactDisc} pulse style={{color:"orange",marginRight:10}} size="2x" /> */}
                   
                     <FontAwesomeIcon icon={faSpinner} pulse size="2x" style={{marginRight:10}} color="secondary"/>
                    
                   
                    
                            Loading Details Please Wait...</Typography>
                </Box> } 
                 </Box>
                
               
                   <Box>
                      
                  
                       <Button component={Link} to="/institutionIndex"  variant="contained" className={classes.button}  disabled= {(isSubmitting||isLoading)?true:false}
                        
                       disableElevation
                       color="secondary"
                      
                       >
                       Cancel
                       </Button> 
                       <Button 
                       variant="contained"
                        color="primary"  type="submit"  className={classes.button}
                        disabled= {(isSubmitting||isLoading)?true:false} startIcon={ isSubmitting &&
                         <CircularProgress size={20} />
                           
                      }>
                             {isSubmitting?"Please Wait...": "Save"}
                       </Button>
                   </Box>
                     
                   
             </Box>
         
         
       </Toolbar>
     </AppBar>
   {/* </Grow> */}
   </Slide>
   
    
   
   
     </Form >
  
 

                    {status=='success' && <Redirect to="/institutionIndex"/>}


   
    </div>

       
 
)};

const InstitutionForm = withFormik({
  mapPropsToValues:(props)=>({...InstitutionModel}),
  // Custom sync validation
 
validationSchema:InstitutionModelValidation,
  handleSubmit: (values, { setSubmitting,setStatus }) => {

   
   
   
    addOrUpdateIntstitution(values).then(response=>{
      setTimeout(() => {
        setSubmitting(false);
        setStatus('success');
      }, 3000);

    });
    
   
  },

  displayName: 'BasicForm',
})(InstitutionFormLayout);

export default InstitutionForm

