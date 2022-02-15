import React,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/actions';


   

const AddUser = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch()
    const [userState,setUserState]=useState(
        {
            name:"",
            email:"",
            contact:"",
            address:""
        }
    )
  const [error,setError]=useState();
  const {name,email,contact,address}=userState;

const handleInputChange =(e)=>
  {
    let {name,value}=e.target;
    setUserState({...userState,[name]:value});
  }

  const handleSubmit =(e)=>
  {
    e.preventDefault();
    
    if(!name || !email || !contact || !address)
    { setError(true)
      alert("fill all fields");
    }
    else
    {
      dispatch(addUser(userState));
      navigate("/");
      setError(false);
    }
    
    

  }
  return <div > 
     <Box style={{marginTop:"100px"}}
  component="form"
  onSubmit={handleSubmit}
  sx={{
    '& > :not(style)': { m: 1, width: '35ch' },
  }}
  noValidate
  autoComplete="off"
>

    <h2 style={{margin:"auto"}}>ADD USER</h2>
    <br/>
    {/* <input /> */}
  <TextField id="standard-basic" label="Name" type="text" value={name}  
  onChange={(e)=>handleInputChange(e)}
  name="name"
  variant="standard" />
  <br/>
  <TextField id="standard-basic" label="Email" type="email" 
  name="email"
  onChange={(e)=>handleInputChange(e)}  value={email}  variant="standard" />
  <br/>
  <TextField id="standard-basic" label="Contact" 
  name="contact" type="number" onChange={(e)=>handleInputChange(e)}  value={contact} variant="standard" />
  <br/>
  <TextField id="standard-basic" label="Address" type="text" 
  name="address" onChange={(e)=>handleInputChange(e)}  value={address}  variant="standard" />
  <br/>
  <ButtonGroup disableElevation variant="contained">
      <Button  style={{width:"100px",marginRight:"2px"}} color="primary" type="submit">SUBMIT</Button>
      <Button  style={{width:"70px"}} color="secondary" type="submit" onClick={()=>{navigate("/")}}>BACK</Button>
      
    </ButtonGroup>
</Box></div>;
};

export default AddUser;
