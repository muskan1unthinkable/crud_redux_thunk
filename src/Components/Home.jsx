import React,{useEffect} from 'react';
import {useNavigate} from "react-router-dom"
// import axios from 'axios';

import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';


import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch,useSelector } from 'react-redux';
import { deleteUser, loadUsers } from '../redux/actions';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];


const Home = () => {

  const dispatch=useDispatch();
  const navigate=useNavigate();
  const {users}=useSelector((state)=>state.data);
  // console.log("userssss",users);
  useEffect(()=>
  { 
  //   axios.get("http://localhost:3004/users")
  // .then((res)=>
  //     { console.log(res);
  //     });
    dispatch(loadUsers());
    console.log("loadusers dispatched")
  },[]);
  const handleDelete=(id)=>
{ if(window.confirm("Are you sure"))
    
{
  dispatch(deleteUser(id));
  //dispatch(loadUsers());
}

}
  return (
    <>
    <ButtonGroup disableElevation variant="contained">
      <Button  style={{marginTop:"20px"}} color="primary" onClick={()=>navigate("/addUser")}>ADD USERS</Button>
      
    </ButtonGroup>
    <TableContainer component={Paper}>
      
      <Table sx={{ width: "1475px",marginTop:"50px" }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Contact</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <StyledTableRow key={user.id}>
              <StyledTableCell component="th"  align="center"scope="row">
                {user.name}
              </StyledTableCell>
              <StyledTableCell align="center">{user.email}</StyledTableCell>
              <StyledTableCell align="center">{user.contact}</StyledTableCell>
              <StyledTableCell align="center">{user.address}</StyledTableCell>
              <StyledTableCell align="center">
             
    <ButtonGroup disableElevation variant="contained">
      <Button  style={{marginRight:"3px"}} color="primary" onClick={()=>handleDelete(user.id)}>DELETE</Button>
      <Button color="secondary" onClick={()=>navigate(`/editUser/${user.id}`)}>EDIT</Button>
    </ButtonGroup>
    </StyledTableCell>
   </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};


export default Home;






