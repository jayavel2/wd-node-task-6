
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {postSignupData} from '../helpers/controllers'
toast.configure()
const Signup = () => (
  <div className="login_form">
      <h1 className="mt-5">Sign Up form</h1>
      <Formik
    initialValues={{ name: "",email: "", password: "" }}
    onSubmit={(values, { setSubmitting, resetForm  }) => {
      setTimeout(() => {
        let name = values.name
        let email = values.email
        let password = values.password
        const data ={name,email,password}

        postSignupData(data) // here i got respose in promise
        .then(res=>{           
          if(res.data.type ==="success"){
            toast.success("Request grant");
            toast.success(res.data.message);
          } else{
            toast.error("Request Decline");
            toast.error(res.data.message);
          }      
          resetForm();
          setSubmitting(false); 
        })
        .catch((error) => console.log(error))
            
        
        // window.location.replace('/');
      }, 500);
    }}
    
    //********Using Yup for validation********/

    validationSchema={Yup.object().shape({
      name: Yup.string()
      .required("Required")
      .min(3)
      .max(34),
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
          
        <label htmlFor="username">Username</label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name && touched.name && "error"}
          />
          {errors.name && touched.name && (
            <div className="input-feedback">{errors.name}</div>
          )}
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
          <label htmlFor="password">Password</label>
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
            Sign Up
          </button>
          <div className="row mt-2">
            <div className="col-lg-6 mt-2">
                <Link to="/">login page</Link>
            </div>
          </div>
        </form>
      );
    }}
    
  </Formik>

  </div>
);

export default Signup;
  