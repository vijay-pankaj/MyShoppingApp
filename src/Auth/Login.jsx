import React, { Children, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setVal} from '../Slices/LoginSlice'
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {
  const signupData = useSelector((state) => state.userData.user);
  const isLogin = useSelector((state) => state.loginval.value);
  // console.log(isLogin)
  // const [islogin,setlogin]=useState(false);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const allErrors = {};
    if (!email) allErrors.email = "Email is Required!";
    if (!password) allErrors.password = "Password is required!";

    if (Object.keys(allErrors).length !== 0) {
      setError(allErrors);
      return;
    }

  //   if (signupData.email === email && signupData.password === password) {
  //     // console.log("Login successful");
  //     alert("Login Successful!")
  //     // setlogin(true); 
  //     dispatch(setVal(!isLogin))
  //     navigate("/shop")

      
  //   } else {
  //     console.log("data is not matched");
  //   }

  if (signupData.email === email && signupData.password === password) {
  toast.success("Login Successful!");
  dispatch(setVal(!isLogin));
  navigate("/shop");
} else {
  toast.error("Invalid email or password!");
}
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Login
        </h2>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {error.email && (
            <p className="text-red-500 text-sm mt-1">{error.email}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {error.password && (
            <p className="text-red-500 text-sm mt-1">{error.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
        If You Don't Have Account <Link to='/signup'className="text-blue-700">Signup</Link>
      </form>
    </div>
  );
};

export default Login;
