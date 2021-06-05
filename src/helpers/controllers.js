import axios from "./apiconnects";

export const getData = ()=>{
    return axios.get('/api/user-details').then((res)=>res);
}