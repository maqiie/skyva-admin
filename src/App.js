// import logo from './logo.svg';
// import './App.css';
// import Home from './Components/Home';
// import Login from './Components/Login';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Axios } from 'axios';
// import { useState, useEffect } from 'react';
// import ProductForm from './Components/Product';


// function App() {
//   // const [cartItems, setCartItems] = useState([]);
//   // const [currentUser, setCurrentUser] = useState(null); // State for storing user data

//   // useEffect(() => {
//   //   fetchCartItems();
//   // }, []);

//   // const fetchCartItems = async () => {
//   //   try {
//   //     const response = await Axios.get(
//   //       "http://localhost:3001/carts/:id/get_cart"
//   //     );
//   //     setCartItems(response.data);
//   //   } catch (error) {
//   //     console.error("Error fetching cart items:", error);
//   //   }
//   // };

//   // useEffect(() => {
//   //   Axios.interceptors.request.use((config) => {
//   //     const authToken = localStorage.getItem("authToken");
//   //     if (authToken) {
//   //       config.headers.Authorization = `Bearer ${authToken}`;
//   //     }
//   //     return config;
//   //   });

//   //   const fetchUserData = async () => {
//   //     try {
//   //       const response = await Axios.get(
//   //         "http://localhost:3001/auth/validate_token"
//   //       );
//   //       const userData = response.data.data;
//   //       setCurrentUser(userData);
//   //     } catch (error) {
//   //       console.error("Error fetching user data:", error);
//   //     }
//   //   };

//   //   const storedToken = localStorage.getItem("authToken");
//   //   const isLoggedIn = !!storedToken;

//   //   if (isLoggedIn) {
//   //     fetchUserData();
//   //   }
//   // }, []);


//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path="/home" element={<Home />}/>
//       <Route path="/" element={<Login />} />
//       <Route path='/product' element={<ProductForm />} />
   

//     </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import ProductForm from './Components/Product';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
