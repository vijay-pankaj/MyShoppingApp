import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Components/Home";
import About from "../src/Components/About";
import Item from "../src/Components/ItemDetail";
import Header from "../src/Components/Header";
import CartItems from "../src/Components/CartItems";
import SignUp from "../src/Auth/SignUp";
import Login from "./Auth/Login";
// import ApiDataFetch from "./ApiDataFetch";
import YourShop from "../src/Components/YourShop";
import ProtectedRoute from "./Components/ProtectedRoute";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/api" element={<ApiDataFetch />} /> */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          
          <Route path="/shop" element={<YourShop />} />

          <Route path="/about" element={<About />} />
          <Route path="/item/:id" element={<Item />} />
        
      <Route path="/cart" element={<ProtectedRoute><CartItems />
    </ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
}

export default App;
