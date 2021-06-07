
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {forgotPasswordReset} from '../helpers/controllers'

function resetPassword(props){
  toast.configure()
  return<>
  <div className="login_form">
      <h1 className="mt-5">Reset password</h1>
      <Formik
    initialValues={{password: "" }}
    onSubmit={(values, { setSubmitting, resetForm  }) => {
      setTimeout(() => {
        let newPass = values.password;
        let resetLink = props.match.params.token;
        const data = {newPass,resetLink}
        forgotPasswordReset(data)
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
          setTimeout(() => {
            window.location.replace('/')
          },6000);
        })
        .catch((error) => console.log(error))

        // window.location.replace('/');
      }, 500);
    }}
    
    //********Using Yup for validation********/

    validationSchema={Yup.object().shape({
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
              Reset
            {/* <Link to="/">reset</Link> */}
          </button>
        </form>
      );
    }}
    
  </Formik>

  </div>
  </>
}
  

export default resetPassword;
  