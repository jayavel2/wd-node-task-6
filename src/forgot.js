
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Forgot = () => (
  <div className="login_form">
      <h1 className="mt-5">Forgot password</h1>
      <Formik
    initialValues={{ email: ""}}
    onSubmit={(values, { setSubmitting, resetForm  }) => {
      setTimeout(() => {
        alert(JSON.stringify(values));
        console.log("Logging in", values);
        setSubmitting(false);
        resetForm();
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
  