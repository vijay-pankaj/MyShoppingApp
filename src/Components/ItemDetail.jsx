import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

const ItemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const shopdata = useSelector((state) => state.apiData.dataset);
  const DetailedItem = shopdata?.find((item) => item.id.toString() === id);

  return (
    <div className="relative min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <button
        onClick={() => navigate("/shop")}
        className="absolute top-6 left-6 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300"
      >
        ← Back to Shop
      </button>

      <div className="bg-gray-100 w-full max-w-6xl p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">
          🛍️ Product Details
        </h1>

        {!DetailedItem ? (
          <p className="text-center text-gray-500">Item not found.</p>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-6">
            <img
              src={DetailedItem.image}
              alt={DetailedItem.title}
              className="w-full md:w-[30%] object-cover rounded-md"
            />
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {DetailedItem.title}
                </h2>
                <p className="text-indigo-600 font-bold text-xl mb-2">
                  ${DetailedItem.price}
                </p>
                <p className="text-gray-700 text-base">
                  {DetailedItem.description || "No description available."}
                </p>
                <p>⭐{DetailedItem.rating.rate}</p>
                <p>Count:{DetailedItem.rating.count}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
