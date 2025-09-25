import React, { useState } from "react";
import { userData } from "../Slices/SignupSlice";
import { useDispatch} from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import {isSignup} from "../Slices/SignupSlice"
import { toast } from "react-toastify";



const SignUp = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState({});
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const allerror = {};

    if (!name) allerror.name = "Name is required!";
    if (!email) allerror.email = "Email is required!";
    if (!password) allerror.password = "Password is required!";
    if (!confirmPass) allerror.confirmPass = "Confirm password is required!";
    if (confirmPass && password && confirmPass !== password)
      allerror.confirmPass = "Passwords do not match!";

    if (Object.keys(allerror).length !== 0) {
     setError(allerror);
      return;
    }
    
    setError({});
    const user = { name, email, password };
    console.log(user);
    // alert("Account Created Successful!")
    toast.success("Account created successfully!");
    dispatch(isSignup(true));
    dispatch(userData(user));
    navigate("/login");

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Sign Up
        </h2>

        <div>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {error.name && (
            <p className="text-red-500 text-sm mt-1">{error.name}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {error.email && (
            <p className="text-red-500 text-sm mt-1">{error.email}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {error.password && (
            <p className="text-red-500 text-sm mt-1">{error.password}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {error.confirmPass && (
            <p className="text-red-500 text-sm mt-1">{error.confirmPass}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Submit
        </button>
        If Already have an account! <Link to='/login' className="text-blue-700">Login</Link>
      </form>
    </div>
  );
};

export default SignUp;
