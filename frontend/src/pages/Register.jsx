import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = { name, email, password };
    console.log(data);
    try {
      await axios.post("/users/register", data);
      toast.success("user created successfully");
      navigate("/login");
    } catch (error) {
      toast.error("something wrong happened");
    }
  };
  const handleChangeForName = (e) => {
    const val = e.target.value;
    setName(val);
  };
  const handleChangeForEmail = (e) => {
    const val = e.target.value;
    setEmail(val);
  };
  const handleChangeForPassword = (e) => {
    const val = e.target.value;
    setPassword(val);
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <form
        action=""
        className="bg-gray-100 p-14 rounded shadow-xl "
        onSubmit={submitHandler}
      >
        <div className="flex flex-col gap-1 ">
          <label htmlFor="name" className="font-normal text-sm">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Alice"
            onChange={handleChangeForName}
            className="border border-gray-400 outline-none p-1"
            required
          />
        </div>
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
            Already registered? <Link to="/login">Click here to login</Link>
          </span>
          <button
            type="submit"
            className="bg-blue-300 rounded p-3 border-blue-600 cursor-pointer outline-none text-medium font-medium text-blue-900 mt-2"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
