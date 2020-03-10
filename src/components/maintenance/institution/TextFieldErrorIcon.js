import React from 'react'
import InputAdornment from '@material-ui/core/InputAdornment';
import ErrorOutlineRoundedIcon from '@material-ui/icons/ErrorOutlineRounded';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import { Popover, makeStyles, Typography } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  popover: {
    pointerEvents: 'none',
    
  },
  paper: {
    padding: theme.spacing(1),
    backgroundColor:theme.palette.error.main,
    color:"#fff"
  },
}));

const TextFieldErrorIcon = (props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = event => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    
    const open = Boolean(anchorEl);
    return (
        <>
        <InputAdornment position="end" color="error">
                       <ErrorOutlineIcon color="error" onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose} /> 
        </InputAdornment>
        <Popover
            id="mouse-over-popover"
            className={classes.popover}
            classes={{
            paper: classes.paper,
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
      >
        <Typography>{props.errorMsg}.</Typography>
      </Popover>
        </>
        
    )
}

export default TextFieldErrorIcon
