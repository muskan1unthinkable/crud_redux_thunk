import axios from "axios";
import * as types from "./actionTypes";

const getUser =(users)=>(
    {  type:types.GET_USERS,
        payload:users

    });

    const userAdded=()=>(
        { type:types.ADD_USER,
    
    
        }
    ) 
    const userUpdated=()=>(
        { type:types.UPDATE_USER,
    
    
        }
    )
const userDeleted=()=>(
    { type:types.DELETE_USER,


    }
)

const getUserDetail=(user)=>(
    { type:types.GET_SINGLE_USER,
        payload:user


    }
)
export const loadUsers=()=>
{
    return function(dispatch)
    { axios.get("http://localhost:3004/users")
    .then((res)=>
        { //console.log(res);
          console.log("loadusers reached");
          dispatch(getUser(res.data));
        }
    )
    .catch((err)=>console.log(err));

    }
}

export const deleteUser=(id)=>
{
    return function(dispatch)
    { axios.delete(`http://localhost:3004/users/${id}`)
    .then((res)=>
        { //console.log(res);
         // console.log("loadusers reached");
          dispatch(userDeleted());
          dispatch(loadUsers());
        }
    )
    .catch((err)=>console.log(err));

    }
}

export const addUser=(user)=>
{
    return function(dispatch)
    { axios.post("http://localhost:3004/users",user)
    .then((res)=>
        {
           //console.log(res);
          //console.log("loadusers reached");
          dispatch(userAdded());
        }
    )
    .catch((err)=>console.log(err));

    }
}


export const getSingleUser=(id)=>
{   
    return function(dispatch)
    { axios.get(`http://localhost:3004/users/${id}`)
    .then((res)=>
        { console.log(res.data);
         // console.log("loadusers reached");
          dispatch(getUserDetail(res.data));
         // dispatch(loadUsers());
        }
    )
    .catch((err)=>console.log(err));

    }
}
export const updateUser=(user,id)=>
{   
    return function(dispatch)
    { axios.put(`http://localhost:3004/users/${id}`,user)
    .then((res)=>
        { console.log(res.data);
         // console.log("loadusers reached");
         dispatch(userUpdated());
         // dispatch(loadUsers());
        }
    )
    .catch((err)=>console.log(err));

    }
}