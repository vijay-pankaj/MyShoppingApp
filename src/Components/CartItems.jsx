import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartIds } from "../Slices/CartSlice";

const CartItems = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phoneNum, setPhone] = useState("");
  const [houseNum, setHouseNum] = useState("");
  const [address, setArea] = useState("");
  const [openform, setform] = useState(false);
  const [error, setError] = useState({});
  const [userAddress, setUserAddress] = useState(null);

  const cartItemIds = useSelector((state) => state.cartdata.cartIds);
  const shopdata = useSelector((state) => state.apiData.dataset);
  const dispatch = useDispatch();

  const cartItems = shopdata.filter((item) => cartItemIds.includes(item.id));

  const deleteSelectItem = (selectedId) => {
    const updatedCartIds = cartItemIds.filter((id) => id !== selectedId);
    dispatch(setCartIds(updatedCartIds));
  };

  const handleForm = (e) => {
    e.preventDefault();
    const allerrors = {};
    if (!name) allerrors.name = "Please enter your name";
    if (!email) allerrors.email = "Please enter your email";
    if (!phoneNum) allerrors.phoneNum = "please enter Contact number!";
    if (!houseNum) allerrors.houseNum = "Please enter House Nummber";
    if (!address) allerrors.address = "Plese enter your address.";

    if (Object.keys(allerrors).length !== 0) {
      setError(allerrors);
      return;
    } else {
      setform(false);
    }
    // const userAddress={name,email,phoneNum,houseNum,address}
    // console.log(userAddress)
    setUserAddress({ name, email, phoneNum, houseNum, address });
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6 relative">
      {openform && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="block w-full p-2 border rounded"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
              {error.name && <p>{error.name}</p>}
              <input
                type="email"
                placeholder="Enter Your Email"
                className="block w-full p-2 border rounded"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
              {error.email && <p>{error.email}</p>}
              <input
                type="number"
                placeholder="Enter Contact Number"
                className="block w-full p-2 border rounded"
                value={phoneNum}
                onChange={(e) => setPhone(e.target.value)}
              />
              {error.phoneNum && <p>{error.phoneNum}</p>}
              <input
                type="number"
                placeholder="Enter Your House Number"
                className="block w-full p-2 border rounded"
                value={houseNum}
                onChange={(e) => setHouseNum(e.target.value)}
              />
              {error.houseNum && <p>{error.houseNum}</p>}
              <textarea
                placeholder="Enter Complete Address"
                className="block w-full p-2 border rounded"
                value={address}
                onChange={(e) => setArea(e.target.value)}
              />
              {error.address && <p>{error.address}</p>}
              <button
                type="button"
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                // onClick={() => setform(false)}
                onClick={handleForm}
              >
                Save Address
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3">
          {!openform && (
            <div className="text-center mb-6">
              {userAddress && (
                <div className="mb-4 text-left">
                  <p>
                    <strong>Name:</strong> {userAddress.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {userAddress.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {userAddress.phoneNum}
                  </p>
                  <p>
                    <strong>House No:</strong> {userAddress.houseNum}
                  </p>
                  <p>
                    <strong>Address:</strong> {userAddress.address}
                  </p>
                </div>
              )}
              <button
                className="bg-green-500 w-40 rounded-full h-10 font-semibold"
                onClick={() => setform(true)}
              >
                {userAddress == null ? "Add Your Address" : "Add New address"}
              </button>
            </div>
          )}

          <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">
            🛒 Your Cart
          </h1>
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-60 h-78 object-cover rounded-md mb-4"
                  />
                  <h2 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-indigo-600 font-bold mt-2">
                    ${item.price}
                  </p>
                  <p className="text-sm text-gray-500">
                    Discount: {item.discount}%
                  </p>
                  <button
                    className="bg-red-500 w-20 h-9 rounded-full mt-2 hover:bg-red-600 transition-colors duration-500 font-bold"
                    onClick={() => deleteSelectItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <h2 className="text-xl font-bold mb-4 text-indigo-700">
          💳 Payment Summary
        </h2>
        <div className="space-y-2 text-gray-700">
          <p>
            <strong>Items:</strong> {cartItems.length}
          </p>
          <p>
            <strong>Total:</strong> ${totalPrice.toFixed(2)}
          </p>
          <button className="w-50 bg-blue-600 text-black font-semibold h-10 rounded-full">
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
