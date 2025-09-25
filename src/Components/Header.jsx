import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setVal } from "../Slices/LoginSlice";
import { isSignup, userData } from "../Slices/SignupSlice";
import { toast } from "react-toastify";
import { TiThMenu } from "react-icons/ti";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItemIds = useSelector((state) => state.cartdata.cartIds);
  const IsUserSignedUp = useSelector((state) => state.userData.userSignup);
  const IsUserLogin = useSelector((state) => state.loginval.value);

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    dispatch(setVal(false));
    dispatch(isSignup(false));
    dispatch(userData(null));
    toast.success("Bye for now");
    navigate("/login");
  };

  return (
    <nav className="text-black h-16 flex justify-between items-center px-4 relative shadow-md">
      <div className="flex items-center space-x-3">
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <TiThMenu size={26} />
        </button>

        <h1 className="cursor-pointer text-xl font-bold">
          VIJ<span className="text-red-500">@</span>Y
        </h1>
      </div>

      <div className="hidden md:flex space-x-8">
        <Link to="/" className="hover:text-red-600 transition-colors">
          Home
        </Link>
        <Link to="/shop" className="hover:text-red-600 transition-colors">
          🛍️Shopping_Area
        </Link>
        <Link to="/about" className="hover:text-red-600 transition-colors">
          About
        </Link>
        <Link
          to="/cart"
          className="hover:text-red-600 transition-colors flex space-x-2 bg-blue-500 px-3 py-1 rounded-full font-semibold"
        >
          <span>Cart:</span>
          <span>{cartItemIds.length}</span>
        </Link>
      </div>

      <div className="hidden md:flex space-x-5">
        {!IsUserSignedUp && (
          <Link to="/signup" className="hover:text-red-600 transition-colors">
            SignUp
          </Link>
        )}
        {!IsUserLogin && (
          <Link to="/login" className="hover:text-red-600 transition-colors">
            Login
          </Link>
        )}
        {IsUserSignedUp && IsUserLogin && (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-1 rounded-full hover:bg-red-600 transition"
          >
            Logout
          </button>
        )}
      </div>

      {isOpen && (
        <div className="w-30 mt-60 bg-white shadow-md rounded p-4 flex flex-col space-y-4 md:hidden">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/shop" onClick={() => setIsOpen(false)}>
            Shopping_Area
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/cart" onClick={() => setIsOpen(false)}>
            Cart ({cartItemIds.length})
          </Link>

          {!IsUserSignedUp && (
            <Link to="/signup" onClick={() => setIsOpen(false)}>
              SignUp
            </Link>
          )}
          {!IsUserLogin && (
            <Link to="/login" onClick={() => setIsOpen(false)}>
              Login
            </Link>
          )}
          {IsUserSignedUp && IsUserLogin && (
            <button
              onClick={() => {
                setIsOpen(false);
                handleLogout();
              }}
              className="bg-red-500 w-20 text-white px-4 py-1 rounded-full"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
