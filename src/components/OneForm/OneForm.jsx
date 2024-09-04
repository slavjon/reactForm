import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../OneForm/OneForm.scss";

const OneForm = ({ showTcpaText }) => {
  const regx = {
    name: /^[a-zA-Z]+$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  };

  // Define the validation scheme using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .matches(regx.name, "First Name can only contain letters")
      .required("First Name is required"),
    lastName: Yup.string()
      .matches(regx.name, "Last Name can only contain letters")
      .required("Last Name is required"),
    email: Yup.string()
      .matches(regx.email, "Invalid email format")
      .required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    tcpaText: Yup.boolean(),
  });

  // init Formik
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      tcpaText: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form data submitted:", values);
      // Logic of sending data to the server
    },
  });

  return (
    <form className="oneform__wrapper" onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">Type your First Name</label>
      <input
        className={`input-text ${
          formik.touched.firstName && formik.errors.firstName
            ? "input-error"
            : ""
        }`}
        placeholder="First Name"
        type="text"
        id="firstName"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div className="error-text">{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Type your Last Name</label>
      <input
        className={`input-text ${
          formik.touched.lastName && formik.errors.lastName ? "input-error" : ""
        }`}
        placeholder="Last Name"
        type="text"
        id="lastName"
        value={formik.values.lastName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div className="error-text">{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="email">Type your Email</label>
      <input
        className={`input-text ${
          formik.touched.email && formik.errors.email ? "input-error" : ""
        }`}
        placeholder="mail@mail.com"
        type="email"
        id="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="error-text">{formik.errors.email}</div>
      ) : null}

      <label htmlFor="phone">Type your Phone</label>
      <input
        className={`input-text ${
          formik.touched.phone && formik.errors.phone ? "input-error" : ""
        }`}
        placeholder="+1234567890"
        type="tel"
        id="phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.phone && formik.errors.phone ? (
        <div className="error-text">{formik.errors.phone}</div>
      ) : null}

      {showTcpaText && (
        <label className="tcpa-text">
          <input
            type="checkbox"
            id="tcpaText"
            checked={formik.values.tcpaText}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          This is some additional text based on the prop.
        </label>
      )}

      <button type="submit" className="btn btn-submit">
        Send data
      </button>
    </form>
  );
};

export default OneForm;
