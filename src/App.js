import React from "react";
import './style.css';
import Login from './components/login';
import Signup from './components/signup';
import Forgot from './components/forgot';
import resetPassword from './components/resetpassword';
import activateAccount from './components/activate_email'

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
      <Route path="/authentication/activate" component={activateAccount} exact={true}/>
    </Switch>
  </Router>
  </>;
}

export default App;
