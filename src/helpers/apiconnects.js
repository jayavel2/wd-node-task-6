import axios from 'axios';

export default axios.create({
    baseURL: "https://myself-be-aware-b.herokuapp.com/",
    timeout: 10000,
    headers: {"Content-Type":"application/json"},
})