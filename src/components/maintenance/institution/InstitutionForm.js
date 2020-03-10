import React, { useState, useEffect, useRef} from "react";
import {  TextField,  Box,  Button,  Typography,  FormControlLabel,  Checkbox,  Grid,  FormControl,  InputLabel, Divider, CircularProgress, InputAdornment, IconButton, Drawer, makeStyles} from "@material-ui/core";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
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
  
  const [selectedItem, setSelectedItem] = useState();
  const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
  console.log(id);
  
  if(id!=0 || id==undefined){
          setIsLoading(true)
          fetchInstitution(id).then(item => {
            setTimeout(() => {
              setSelectedItem(item);
              props.setValues({...item});
              setIsLoading(false)
            }, 2000);
           
            
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
        // style={{backgroundColor:"#f4f5fd" }}
        >
        
          <Typography
            variant="h4"
            color="primary" style={{marginBottom:10}}
          >
             {id==0?<Add style={{marginRight:5}} fontSize="large"/>:<Edit  fontSize="medium"/>}
            
            
            {id==0?"Add":"Update"} Institution
          </Typography>
      
        <IconButton color="primary" component={Link} to="/institutionRef">
          <CloseIcon/>
        </IconButton>
      </Grid>

    
     
    <Divider style={{marginBottom:10}}/>

{isLoading && <div style={{marginTop:10}}>
         <Typography variant="body1" color="primary">
           <FontAwesomeIcon icon={faCompactDisc} pulse style={{color:"orange",marginRight:10}} size="2x" />
           
                  Loading Details Please Wait...</Typography>
      </div> } 

  <Form  >
   <div  className={classes.scrollbar}>
     <Grid container spacing={1}>
    
     <Grid item md={12}>
             
         </Grid>
       <Grid item xs ={12} sm={12} md={6}>
         
         <TextField
             
             InputLabelProps={{
               className: classes.floatingLabelFocusStyle
             }}
             id="outlined-dense"
             label="Merchant ID"
             className={classes.textField}
             margin="dense"
              variant="outlined"
             value={values.merchantId}
             name="merchantId" id="merchantId"
              onChange={handleChange} 
           />
       </Grid>
       <Grid item xs ={12} sm={12} md={6}>
             <TextField
                     
                     InputLabelProps={{
                     className: classes.floatingLabelFocusStyle
                     }}
                     id="outlined-dense"
                     label="Billing File Type"
                     className={classes.textField}
                     margin="dense"
                      variant="outlined"
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
                      variant="outlined"
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
                 <FormControl 
                  variant="outlined" 
                 className={classes.formControl} margin="dense">
                 <InputLabel htmlFor="outlined-age-simple" className={classes.inputLabel}>
                     Padding Possition
                 </InputLabel>
                 <Select
                  value={values.paddingPos}
                  onChange={handleChange}
                 //  labelWidth={labelWidth}
                 
                  name="paddingPos" id="paddingPos"
                 inputProps={{
                     name: 'paddingPos',
                     id: 'outlined-age-simple',
                 }}
                 >
                 <MenuItem value="0" selected={true}>
                     <em>None</em>
                 </MenuItem>
                   <MenuItem value={10}>Start</MenuItem>
                   <MenuItem value={20}>End</MenuItem>
                 </Select>
             </FormControl>
               
         </Grid>
   
         <Grid item xs ={12} sm={12} md={6}>
         <TextField
                 InputLabelProps={{
                 className: classes.floatingLabelFocusStyle
                 }}
                 id="outlined-dense"
                 label="Institution Name"
                 className={classes.textField}
                 margin="dense"
                  variant="outlined"
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
                 InputLabelProps={{
                 className: classes.floatingLabelFocusStyle
                 }}
                 id="outlined-dense"
                 label="Padding Character"
                 className={classes.textField}
                 margin="dense"
                  variant="outlined"
                 value={values.paddingChar}
                 name="paddingChar" id="paddingChar"
                 onChange={handleChange} 
             />
         </Grid>
         <Grid item xs ={12} sm={12} md={6}>
   
                     <TextField
                     InputLabelProps={{
                     className: classes.floatingLabelFocusStyle
                     }}
                     id="outlined-dense"
                     label="Default Payment Allowed"
                     className={classes.textField}
                     margin="dense"
                      variant="outlined"
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
                         InputLabelProps={{
                         className: classes.floatingLabelFocusStyle
                         }}
                         id="outlined-dense"
                         label="Batch Number Max Value"
                         className={classes.textField}
                         margin="dense"
                          variant="outlined"
                         value={values.batchNumberMaxVal}
                         name="batchNumberMaxVal" id="batchNumberMaxVal"
                         onChange={handleChange} 
                     />
         </Grid>
         <Grid item xs ={12} sm={12} md={6}>
             <TextField
                         InputLabelProps={{
                         className: classes.floatingLabelFocusStyle
                         }}
                         id="outlined-dense"
                         label="Decline Code Max Length"
                         className={classes.textField}
                         margin="dense"
                          variant="outlined"
                         value={values.decCodeMaxLen}
                         name="decCodeMaxLen" id="decCodeMaxLen"
                         onChange={handleChange} 
                     />
         </Grid>
         <Grid item xs ={12} sm={12} md={6}>
             <TextField
                         InputLabelProps={{
                         className: classes.floatingLabelFocusStyle
                         }}
                         id="outlined-dense"
                         label="Batch Number Initial Value"
                         className={classes.textField}
                         margin="dense"
                          variant="outlined"
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
                         InputLabelProps={{
                         className: classes.floatingLabelFocusStyle
                         }}
                         id="outlined-dense"
                         label="Batch Number Length Limit"
                         className={classes.textField}
                         margin="dense"
                          variant="outlined"
                         value={values.batchNumLenLimit}
                         name="batchNumLenLimit" id="batchNumLenLimit"
                         onChange={handleChange} 
                     />
         </Grid>
         <Grid item xs ={12} sm={12} md={6}>
             <TextField
                         InputLabelProps={{
                         className: classes.floatingLabelFocusStyle
                         }}
                         id="outlined-dense"
                         label="Current Batch Number"
                         className={classes.textField}
                         margin="dense"
                          variant="outlined"
                         value={values.currentbatchNum}
                         name="currentbatchNum" id="currentbatchNum"
                         onChange={handleChange} 
                     />
         </Grid>
       
         <Grid item xs ={12} sm={12} sm={12}>
         {/* {isSubmitting && <CustomLinearProgress  /> } */}
       
         
                
         </Grid>
     </Grid> 
     </div>
     <Box display="flex"   >
                   <Box  flexGrow={1}> {/* {isSubmitting  && <Typography variant="subtitle1"> Please wait...</Typography>} */}
                 
                 </Box>
                
               
                   <Box>
                      
                       {/* <SaveButton  type="submit"    className={classes.button}>
                         Save
                       </SaveButton> */}
                       <Button component={Link} to="/institutionRef"  variant="contained" className={classes.button}  disabled= {(isSubmitting||isLoading)?true:false}
                        
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
   
   
     {/* <AppBar position="fixed" className={classes.appBar}>
       <Toolbar variant="dense">
       
         <Box display="flex" flexDirection="row" justifyContent="flex-end" style={{ width: '100%' }}>
         
                      <Box>
                       <Button color="inherit">
                         Save
                       </Button>
                      </Box>
         </Box>
       
       
         
         
       </Toolbar>
     </AppBar>
    */}
   
     </Form >
  
 

                    {status=='success' && <Redirect to="/institutionRef"/>}


   
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

