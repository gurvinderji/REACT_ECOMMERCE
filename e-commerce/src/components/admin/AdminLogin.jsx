import Password from "antd/es/input/Password";
// import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const schema = Yup.object({
  email: Yup.string()
    .required("Email field is required")
    .email("Please enter a valid email")
    .test("is-gmail", "Only gmail id allowed", (value) => {
      return value && value.toLowerCase().endsWith("gmail.com");
    }),
  Password: Yup.string()
    .required("Password field is required")
    .min(6, "Minimum 6 characters required")
    .matches(/[A-Z]/, "Atleast one uppercase required")
    .matches(/[a-z]/, "Atleast one lowercase required")
    .matches(/[0-9]/, "Atleast one number required")
    .matches(/[^A-Za-z0-9]/, "Atleast one speacial characters required"),
});
const AdminLogin = () => {
  const login = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      Password: "",
    },
    validationSchema: schema,
    onSubmit: login,
  });
  return (
    <div className="bg-[#F8F7F4] h-screen flex items-center justify-center  overflow-hidden">
      <div className="bg-white w-7/12 shadow-lg rounded-lg grid grid-cols-2 animate__animated animate__slideInUp animate__faster">
        <img src="/images/admin-login.jpeg" className="rounded-l-lg" />
        <div className="flex flex-col justify-center px-10 gap-6">
          <h1 className="text-2xl font-semibold text-gray-600">Admin Panel</h1>
          <form className="flex flex-col gap-5" onSubmit={formik.login}>
            <div className="flex flex-col gap-1">
              <label className="text-zinc-700 font-medium">Email</label>
              <input
                name="email"
                type="text"
                className="border border-gray-200 rounded p-2"
                placeholder="example@mail.com"
                onChange={formik.handleChange}
              />
              {formik.errors.email && (
                <small className="text-rose-500 font-semibold">
                  {formik.errors.email}
                </small>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-zinc-700 font-medium">Password</label>
              <input
                name="password"
                type="password"
                className="border border-gray-200 rounded p-2"
                placeholder="************"
                onChange={formik.handleChange}
              />
              {formik.errors.Password && (
                <small className="text-rose-500 font-semibold">
                  {formik.errors.Password}
                </small>
              )}
            </div>
            <button
              type="submit"
              className="p-2.5 rounded bg-[#27BE8C] text-white font-medium hover:bg-[#00a870] active:scale-80 duration-200"
            >
              Login
            </button>
          </form>
          <div className="flex flex-col gap-3">
            <Link to="#" className="text-[#27BE8C] font-medium hover:underline">
              Forgot Password ?
            </Link>
            <Link to="#" className="text-[#27BE8C] font-medium hover:underline">
              Create account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
