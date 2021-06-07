import React from "react";
import axios from "../helpers/apiconnects";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {signupActivated} from '../helpers/controllers'


function activateAccount(props){
    toast.configure()
    const token = props.match.params.token;
    const handleActivate = (token)=>{
          signupActivated(token)
          axios.post("api/email-activate",{token})
          .then(res=>{
            if(res.data.type ==="success"){
              toast.success(res.data.message)
              toast.success("Go to login page")
            } else{
              toast.error(res.data.message)
            }                       
          })
          .catch((error)=>console.log(error))  
          
    }
    return <>
    <div className="d-flex justify-content-center">
        <button className="btn btn-success text-uppercase font-weight-bold p-3 mt-5" onClick={()=>handleActivate(token)}>Activate</button>
    </div>
    </>;
}

export default activateAccount;