import React, { useState, useEffect } from 'react'
import { InputLabel, FormControl, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
export const useStyles = makeStyles(theme => ({
     
    formControl: {
        // margin: theme.spacing(1),
        minWidth: '100%',
      },

}));


const SelectFormControl = (props) => {
    const classes = useStyles();
    const inputLabel = React.useRef(null);
    const [selectedItem, setSelectedItem] =  React.useState();
    const [labelWidth, setLabelWidth] = React.useState(0);

    useEffect(() => {
 
    setLabelWidth(inputLabel.current.offsetWidth+20);
    }, []);

    return (
        <FormControl 
                //   variant="outlined" 
                 className={classes.formControl} margin="dense">
                 <InputLabel ref={inputLabel} htmlFor="outlined-age-simple" className={classes.inputLabel}>
                     {props.label}
                 </InputLabel>
                 <Select
                  value={props.value}
                  onChange={props.handleChange}
                  labelWidth={labelWidth}
                 
                  name="paddingPos" id="paddingPos"
                 inputProps={{
                     name: props.name,
                     id: 'outlined-age-simple',
                 }}
                 >
                 <MenuItem value="0" selected={true}>
                     <em>None</em>
                 </MenuItem>

                   {props.selectList.map((item,index)=>(
                        <MenuItem value={item.value}>{item.text}</MenuItem>
                   ))}
                 </Select>
             </FormControl>
    )
}

export default SelectFormControl
