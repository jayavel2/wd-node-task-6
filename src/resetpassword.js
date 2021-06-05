
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
// import { Link} from "react-router-dom";
const resetPassword = () => (
  <div className="login_form">
      <h1 className="mt-5">Reset password</h1>
      <Formik
    initialValues={{password: "" }}
    onSubmit={(values, { setSubmitting, resetForm  }) => {
      setTimeout(() => {
        alert(JSON.stringify(values));
        console.log("reset password is: ", values);
        setSubmitting(false);
        resetForm();
        window.location.replace('/');
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
);

export default resetPassword;
  