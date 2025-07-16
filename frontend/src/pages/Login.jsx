import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const loginData = { email, password };
    try {
      const { data } = await axios.post("/users/login", loginData);
      console.log(data);
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, password: "" })
      );
      toast.success("user logged in suceesfully");
      navigate("/");
    } catch (error) {
      toast.error("something wrong happened");
      console.log(error.message);
    }
  };
  const handleChangeForEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeForPassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <form
        action=""
        className="bg-gray-100 p-14 rounded shadow-xl "
        onSubmit={submitHandler}
      >
        <div className="flex flex-col gap-1 mt-5">
          <label htmlFor="email" className="font-normal text-sm">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="alice@gmail.com"
            onChange={handleChangeForEmail}
            className="border border-gray-400 outline-none p-1"
            required
          />
        </div>
        <div className="flex flex-col gap-1 mt-5">
          <label htmlFor="password" className="font-normal text-sm">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="12@4/ab*$pa"
            onChange={handleChangeForPassword}
            className="border border-gray-400 outline-none p-1"
            required
          />
        </div>
        <div className="flex flex-col gap-1 mt-5">
          <span className="text-blue-400">
            Not a user? <Link to="/register">Click here to register</Link>
          </span>
          <button
            type="submit"
            className="bg-blue-300 rounded p-3 border-blue-600 cursor-pointer outline-none text-medium font-medium text-blue-900 mt-4"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
