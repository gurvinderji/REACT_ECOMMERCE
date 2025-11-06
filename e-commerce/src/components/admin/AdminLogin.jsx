import Password from "antd/es/input/Password";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  const [user, setUser] = useState({
    email: "",
    Password: "",
  });
  const handelChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value.trim();
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div className="bg-[#F8F7F4] h-screen flex items-center justify-center animate__animated animate__fadeIn animate__slower overflow-hidden">
      <div className="bg-white w-7/12 shadow-lg rounded-lg grid grid-cols-2 animate__animated animate__slideInUp animate__faster">
        <img src="/images/admin-login.jpeg" className="rounded-l-lg" />
        <div className="flex flex-col justify-center px-10 gap-6">
          <h1 className="text-2xl font-semibold text-gray-600">Admin Panel</h1>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
              <label className="text-zinc-700 font-medium">Email</label>
              <input
                name="email"
                type="text"
                className="border border-gray-200 rounded p-2"
                placeholder="example@mail.com"
                onChange={handelChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-zinc-700 font-medium">Password</label>
              <input
                name="password"
                type="password"
                className="border border-gray-200 rounded p-2"
                placeholder="************"
                onChange={handelChange}
              />
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
