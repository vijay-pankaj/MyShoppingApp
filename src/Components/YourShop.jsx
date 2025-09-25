import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartIds } from "../Slices/CartSlice";
import { useNavigate } from "react-router-dom";
import useTheme from "../Components/useTheme";
import useTable from "../Components/useTable";
import { BsEye } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

const YourShop = () => {
  const { theme, toggleTheme } = useTheme();
  const { tableView, toggleChangeView } = useTable();

  const shopdata = useSelector((state) => state.apiData.dataset);
  const cart = useSelector((state) => state.cartdata.cartIds);
  const isLogin = useSelector((state) => state.loginval.value);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [singleItem, setSingleitem] = useState(null);
  const [itemOpen, setItemOpen] = useState(false);
  const [searchItem, SetSearchItem] = useState("");
  const [sortType, setSortType] = useState("asc");
  const [category, setCategory] = useState("");

  const handleSingleItem = (id) => {
    const selectedItem = shopdata.find((item) => item.id === id);
    setSingleitem(selectedItem);
    setItemOpen(true);
  };

  const handleCartItem = (itemId) => {
    const updatedCart = cart.includes(itemId)
      ? cart.filter((id) => id !== itemId)
      : [...cart, itemId];

    isLogin ? dispatch(setCartIds(updatedCart)) : navigate("/login");
  };

  const filteredAndSorted = shopdata
    .filter(
      (item) =>
        item.title.toLowerCase().includes(searchItem.toLowerCase()) &&
        (category === "" || item.category === category)
    )
    .sort((a, b) =>
      sortType === "asc" ? a.price - b.price : b.price - a.price
    );

  const categories = [...new Set(shopdata.map((item) => item.category))];

  return (
    <div
      className={`min-h-screen p-6 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full">
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="border border-gray-300 p-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 w-full sm:w-auto"
          >
            <option
              value="asc"
              className={`${
                theme === "dark" ? "text-black" : "text-indigo-700"
              }`}
            >
              ⬇️ Low-to-High
            </option>
            <option
              value="desc"
              className={`${
                theme === "dark" ? "text-black" : "text-indigo-700"
              }`}
            >
              ⬆️ High-To-Low
            </option>
          </select>

          <input
            type="search"
            placeholder="🔍 Search your Item"
            value={searchItem}
            onChange={(e) => SetSearchItem(e.target.value)}
            className="border border-gray-300 p-2 pl-3 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 w-full sm:w-1/3"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 p-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 w-full sm:w-auto"
          >
            <option value="">📦 All_Items</option>
            {categories.map((item, i) => (
              <option
                value={item}
                key={i}
                className={`${
                  theme === "dark" ? "text-black" : "text-indigo-700"
                }`}
              >
                {item}
              </option>
            ))}
          </select>

          <button
            onClick={toggleTheme}
            className="text-white px-4 rounded-lg hover:bg-indigo-600 transition-all flex items-center justify-center"
          >
            {theme === "light" ? (
              <FaMoon className="text-black h-7" />
            ) : (
              <IoSunnyOutline className="size-6" />
            )}
          </button>
        </div>

        <div className="flex w-full justify-end pt-4">
          <button
            onClick={toggleChangeView}
            className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg hover:bg-indigo-200 transition-all"
          >
            {tableView ? "📋 Table View" : "🧱 Grid View"}
          </button>
        </div>
      </div>

      {itemOpen && singleItem && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 animate-fadeIn">
          <div
            className={`rounded-xl p-6 w-full max-w-2xl shadow-2xl relative ${
              theme === "dark"
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-900"
            }`}
          >
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xl font-bold"
              onClick={() => setItemOpen(false)}
            >
              ✖
            </button>
            <img
              src={singleItem.image}
              alt={singleItem.title}
              className="w-50 h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-3xl font-bold mb-2">{singleItem.title}</h2>
            <p className="text-lg mb-2">💰 Price: ${singleItem.price}</p>

            <div className="grid grid-cols-2 gap-2 text-sm text-gray-400">
              <p> category: {singleItem.category || "No brand available."}</p>
              <p> ⭐: {singleItem.rating.rate || "No rating available."}</p>
              <p> Count: {singleItem.rating.count || "No count available."}</p>
            </div>
          </div>
        </div>
      )}

      <h1
        className={`text-3xl font-extrabold text-center mb- drop-shadow-sm ${
          theme === "dark" ? "text-indigo-300" : "text-indigo-700"
        }`}
      >
        🛍️Here's Your Shopping-Area <br />{" "}
        <span className="text-xl text-red-600">Buy_Now</span>
      </h1>

      {tableView ? (
        <table className="w-full border-collapse mt-6">
          <thead>
            <tr className="bg-indigo-100 text-indigo-700">
              <th>Image</th>
              <th className="p-3 text-left">Item</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Discount</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSorted.map((item) => (
              <tr key={item.id} className="border-b">
                <td>
                  <img src={item.image} alt="" className="h-30 w-30 p-3" />
                </td>
                <td className="p-3 line-clamp-2">{item.title}</td>
                <td className="p-3">${item.price}</td>
                <td className="p-3 space-x-2">
                  <button
                    onClick={() => handleCartItem(item.id)}
                    className="text-indigo-600 underline"
                  >
                    {cart.includes(item.id) ? "Remove" : "Add"}
                  </button>
                  <button
                    onClick={() => handleSingleItem(item.id)}
                    className="text-indigo-600 underline"
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => navigate(`/item/${item.id}`)}
                    className="text-indigo-600 underline"
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-8">
          {filteredAndSorted.map((item) => (
            <div
              key={item.id}
              className={`rounded-xl mt-6 shadow-lg border border-blue-300 h-[60vh] flex flex-col justify-between transition duration-300 transform hover:-translate-y-1 ${
                theme === "dark"
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-900"
              }`}
            >
              <div className="w-full flex p-2 justify-end">
                <button
                  onClick={() => handleSingleItem(item.id)}
                  className="flex gap-1 cursor-pointer w-20 items-center hover:border rounded-2xl border-blue-700 transition-colors duration-500"
                >
                  <BsEye className="ml-2" />
                  View
                </button>
              </div>

              <div className="flex flex-col items-center px-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 sm:w-40 sm:h-40 object-contain rounded-xl mb-4"
                />
                <h2 className="text-lg sm:text-xl font-semibold text-center line-clamp-2 mb-2">
                  {item.title}
                </h2>
                <span
                  className={`font-semibold ${
                    theme === "dark" ? "text-indigo-300" : "text-indigo-600"
                  }`}
                >
                  💰 Price: ${item.price}
                </span>
              </div>
              <div className="p-4 flex flex-col sm:flex-row sm:justify-between gap-3">
                <button
                  className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 shadow-md transition-all"
                  onClick={() => handleCartItem(item.id)}
                >
                  {cart.includes(item.id) ? "Remove" : "Add"}
                </button>

                <button
                  className={`px-4 py-2 rounded-lg shadow-sm transition-all ${
                    theme === "dark"
                      ? "bg-indigo-900 text-indigo-300 hover:bg-indigo-800"
                      : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                  }`}
                  onClick={() => navigate(`/item/${item.id}`)}
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default YourShop;
