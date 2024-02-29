
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import ProductForm from './Components/CreateProduct';
import Products from "./Components/Products";
import Orders from "./Components/Orders";
import User from "./Components/User";
// import Analytics from "./Components/Analytics";



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={isLoggedIn ? <Home /> : <Login onLogin={handleLogin} />} />
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path='/product' element={isLoggedIn ? <ProductForm /> : <Login onLogin={handleLogin} />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders isLoggedIn={isLoggedIn} />} />
        <Route path="/user" element={<User/>} />
        {/* <Route path="/analytics" element={<Analytics isLoggedIn={isLoggedIn} />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
