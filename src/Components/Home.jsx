import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../Slices/FetchSlice";
import { Link } from "react-router-dom";
import networkerror from "../assets/NetworkError.jpg";
const Home = () => {
  const [data, setLocalData] = useState([]);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    // fetch("https://fakestoreapi.in/api/products")
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        // setLocalData(data.products);
        setLocalData(data);

        // dispatch(setData(data.products));
        dispatch(setData(data));

        setFetchError(false);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching data", err);
        setFetchError(true);
        setLoading(false);
      });
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 text-lg font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  if (fetchError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50 px-4">
        <div className="bg-white shadow-md rounded-lg p-6 text-center border border-red-300">
          <img src={networkerror} alt="" />
          <h2 className="text-xl font-bold text-red-600 mb-2">
            ⚠️ Network Error
          </h2>
          <p className="text-gray-700">
            Unable to load products. Please check your connection and try again.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-xl text-center border border-gray-200">
        <h1 className="text-xl font-extrabold text-gray-800 mb-6 tracking-wide">
          🛍️ Start Your Shopping Journey
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Discover products, explore categories, and enjoy a smooth shopping
          experience.
        </p>

        <p className="text-gray-500 mt-4">
          Click{" "}
          <Link
            to="/shop"
            className="text-red-500 font-bold text-xl animate-bounce inline-block"
          >
            Buy Now
          </Link>{" "}
          to start shopping
        </p>
      </div>
    </div>
  );
};

export default Home;
