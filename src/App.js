import React from "react";
import './style.css';
import Login from './login';
import Signup from './signup';
import Forgot from './forgot';
import resetPassword from './resetpassword';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import {getData} from './helpers/controllers'

function App() {
  // useEffect(()=>{
  //   getData().then(res => console.log(res));
  // },[])
  return <>
  <Router>
    <Switch>
      <Route path="/" component={Login} exact={true}/>      
      <Route path="/forgot-password" component={Forgot} exact={true}/>
      <Route path="/reset-password" component={resetPassword} exact={true}/>
      <Route path="/signup-page" component={Signup} exact={true}/>
      {/* <Route path="/authentication/activate" component={Signup} exact={true}/> */}
    </Switch>
  </Router>
  </>;
}

export default App;
