import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Header() {
  const [loginUser, setLoginUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      setLoginUser(user);
    }
  }, []);
  const logoutHandller = () => {
    localStorage.removeItem("user");
    toast.success("user logged out sucessfully");
    navigate("/login");
  };
  return (
    <div className="bg-gray-200 p-4 text-medium font-medium flex justify-between items-center ">
      <Link to="/" className="text-blue-600 text-xl">
        Expense Tracker
      </Link>

      <div className="flex gap-2.5 items-center">
        <p className="text-gray-900 text-medium font-medium py-1 px-2">
          {" "}
          {loginUser && loginUser.name}
        </p>
        <button
          className="bg-blue-300 rounded py-1 px-2 text-sm leading-none border-blue-600 cursor-pointer outline-none font-medium text-blue-900"
          onClick={logoutHandller}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;
