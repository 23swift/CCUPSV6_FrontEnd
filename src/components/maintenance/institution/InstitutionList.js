import React,{useState, useEffect} from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Button, Grid, Fab, Box, Toolbar, AppBar, TableContainer } from "@material-ui/core";

import { IconButton } from "@material-ui/core";

import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { green, orange, blue } from "@material-ui/core/colors";
import TablePagination from '@material-ui/core/TablePagination';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {InstitutionListStyles} from './institutionStyles'

import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom';
import { DeleteOutline, Add } from "@material-ui/icons";
import  PostAddIcon  from '@material-ui/icons/PostAdd';
import ClearIcon from '@material-ui/icons/Clear';
import DescriptionIcon from '@material-ui/icons/Description';



const InstitutionList = (props) => {

const classes = InstitutionListStyles();

const [] = useState(false);
const [itemList, setItemList] = useState([]);
const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(10);
const handleChangePage = (event, newPage) => {
  setPage(newPage);
};
const handleChangeRowsPerPage = event => {
  setRowsPerPage(+event.target.value);
  setPage(0);
};

// useEffect(() => {
//   setItemList({...props.list});
//   return () => {
//     // cleanup
//   };
// }, [])
  return (
    <div>
    <TableContainer style={{paddingRigh:20}} >

      <Table  className={classes.table}>
          <TableHead>
            <TableRow >
              <TableCell className={classes.tHead}>Code</TableCell>
              <TableCell className={classes.tHead}>Institution Name </TableCell>
              
              <TableCell className={classes.tHead}>
              <Grid container direction="row" justify="flex-end" spacing={1} style={{padding:5}} >
                <Grid style={{padding:3}}>
                  <Fab  component={Link} to="/institutionCreate/:id=0" color="secondary" size="small">
                                    <PostAddIcon color="inherit" />
                        
                                </Fab> 
                </Grid>
                
              </Grid>
              
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{marginTop:10}}>
            {props.list.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(item => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="item" style={{paddingLeft:5}}>
                  {item.institutionCode}
                </TableCell>
                <TableCell style={{paddingLeft:5}} >{item.institutionName} </TableCell>
               
                <TableCell>
               
               <Grid container direction="row" justify="flex-end" spacing={2}>
             
               {/* <Button 
             
              component={Link} to={"/institution/details/"+item.id}
                  color="primary"
                  startIcon={
                
                    <DescriptionIcon  size="small"  />
                
                  
                  
                  } size="small"  >File Config</Button>
                   */}
               <Button 
              
              component={Link} to={"/institution/details/"+item.id}
                  color="primary"
                  startIcon={<InfoIcon style={{color:green[600]}} />} size="small"  >Details</Button>
               <Button component={Link} to={`/products/${item.id}`}
                  color="primary"
                  startIcon={<AssignmentIcon style={{color:orange[500]}} />} size="small"  >Products</Button>
                  <IconButton      onClick={()=>props.handleEdit(item.id)} className={classes.editButton} size="small">
                  
                    <EditIcon fontSize="small"  />
                  </IconButton>

                  <IconButton    onClick={()=>props.handleDelete(item.id)} className={classes.deleteButton} size="small" >
                      <ClearIcon fontSize="small" />
                  </IconButton>
                  
               
               </Grid>
                
                 
                
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      
    </TableContainer>
    
      
        <AppBar position="fixed" className={classes.appBar}>
          <TablePagination 
                  rowsPerPageOptions={[5, 10, 20]}
                  component="div"
                  count={props.list.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  backIconButtonProps={{
                    'aria-label': 'previous page'
                  }}
                  nextIconButtonProps={{
                    'aria-label': 'next page',
                  }}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                />
  </AppBar>
        
    </div>
  );
};

export default InstitutionList;
