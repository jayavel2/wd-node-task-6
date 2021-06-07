
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {forgotPasswordLnik} from '../helpers/controllers'
toast.configure()
const Forgot = () => (
  <div className="login_form">
      <h1 className="mt-5">Forgot password</h1>
      <Formik
    initialValues={{ email: ""}}
    onSubmit={(values, { setSubmitting, resetForm  }) => {
      setTimeout(() => {
        let email = values.email;
        const data = {email}
        forgotPasswordLnik(data)
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
      }, 500);
    }}
    
    //********Using Yup for validation********/

    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("Required"),
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
          <button type="submit" disabled={isSubmitting}>
            send mail
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

export default Forgot;
  