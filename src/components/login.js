import React from "react";
import { Formik } from "formik";
// import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import { Route,Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {emailValidation} from '../helpers/controllers';
// import Home from './home'

toast.configure()

function Login(){

  return<>
    <div className="login_form">
      <h1 className="mt-5">Login form</h1>
      <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting, resetForm  }) => {
      setTimeout(() => {
        let email = values.email;
        let password = values.password;
        const data = {email,password};
        emailValidation(data)
        .then(res=>{       
          if(res.data.type ==="success"){
            toast.success(res.data.message);
            // <Route path="/home" component={Home} exact={true}/>  
          } else{
            toast.error(res.data.message);
          }      
          resetForm();
          setSubmitting(false); 
        })
        .catch((error) => console.log(error))
        setSubmitting(false);
        resetForm();
      }, 500);
    }}
    //********Handling validation messages yourself*******/
    // validate={values => {
    //   let errors = {};
    //   if (!values.email) {
    //     errors.email = "Required";
    //   } else if (!EmailValidator.validate(values.email)) {
    //     errors.email = "Invalid email address";
    //   }

    //   const passwordRegex = /(?=.*[0-9])/;
    //   if (!values.password) {
    //     errors.password = "Required";
    //   } else if (values.password.length < 8) {
    //     errors.password = "Password must be 8 characters long.";
    //   } else if (!passwordRegex.test(values.password)) {
    //     errors.password = "Invalida password. Must contain one number";
    //   }

    //   return errors;
    // }}
    //********Using Yup for validation********/

    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error"}
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}
          <label htmlFor="email">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
          <div className="row mt-2">
            <div className="col-lg-6 mt-2">
                <Link to="/forgot-password">fotgot password</Link>
            </div>
            <div className="col-lg-6 mt-2">
                <Link to="/signup-page">SignUp</Link>
                {/* <Link to="/authentication/activate">SignUp</Link> */}
            </div>
          </div>
        </form>
      );
    }}
    
  </Formik>

  </div>

  </>
}

export default Login;
