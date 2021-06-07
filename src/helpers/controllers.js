import axios from "./apiconnects";

export const getData = ()=>{
    return axios.get('/api/user-details').then((res)=>res);
}
export const postSignupData = (data)=>{    
    // .catch((error)=>console.log(error))  
    return axios.post("api/signup",data).then((res)=>res);
}
export const signupActivated = (token)=>{
    return axios.post("api/email-activate",token).then((res)=>res);
}
export const forgotPasswordLnik = (token)=>{
    return axios.put("api/forgot-password",token).then((res)=>res);
}
export const forgotPasswordReset = (data)=>{
    return axios.put("api/reset-password",data).then((res)=>res);
}
export const emailValidation = (data)=>{
    return axios.post("api/email-authentication",data).then((res)=>res);
}