// import axios from "axios";
// import React, { useState, useEffect } from "react";

// const Home = () => {
//   const [orders, setOrders] = useState([]);

//   // Check if the user is logged in
//   const isLoggedIn = localStorage.getItem("isLoggedIn");

//   // If the user is not logged in, render a message to login
//   if (!isLoggedIn) {
//     return <div>Please login to access this page.</div>;
//   }

//   // Define useEffect hook outside of conditional statement
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch orders
//         const ordersResponse = await axios.get("/api/orders");
//         setOrders(ordersResponse.data.orders);

//         // Calculate total revenue from orders
//         const totalRevenue = ordersResponse.data.orders.reduce(
//           (acc, order) => acc + order.totalPrice,
//           0
//         );
//         // setRevenue(totalRevenue);

//         // Set loading state to false
//         // setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         // Handle error, show error message to the user, etc.
//         // setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // If the user is logged in, render the Home component content
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="bg-gray-800 text-gray-100 w-64 flex-shrink-0">
//         <div className="p-4">
//           <h2 className="text-lg font-semibold">Dashboard</h2>
//         </div>
//         <nav className="flex flex-col mt-4">
//           <a
//             href="#"
//             className="py-2 px-4 bg-gray-900 text-gray-200 hover:bg-gray-700"
//           >
//             Home
//           </a>
//           <a
//             href="#"
//             className="py-2 px-4 bg-gray-900 text-gray-200 hover:bg-gray-700"
//           >
//             Posts
//           </a>
//           <a
//             href="#"
//             className="py-2 px-4 bg-gray-900 text-gray-200 hover:bg-gray-700"
//           >
//             Users
//           </a>
//           <a
//             href="#"
//             className="py-2 px-4 bg-gray-900 text-gray-200 hover:bg-gray-700"
//           >
//             Settings
//           </a>
//         </nav>
//       </div>

//       {/* Main content area */}
//       <div className="flex-1">
//         {/* Header */}
//         <header className="bg-white shadow p-4 flex justify-between items-center">
//           <div className="flex items-center">
//             <button className="text-gray-500 focus:outline-none">
//               <svg
//                 className="h-6 w-6 fill-current"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   className="heroicon-ui"
//                   d="M4 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2z"
//                 />
//               </svg>
//             </button>
//             <h1 className="ml-2 text-xl font-semibold">Admin Dashboard</h1>
//           </div>
//           <div>
//             <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
//               Logout
//             </button>
//           </div>
//         </header>

//         {/* Main content */}
//         <main className="p-6">
//           {/* Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//             <div className="bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg shadow-md p-4 text-white">
//               <h2 className="text-lg font-semibold mb-4">Users</h2>
//               <div className="flex items-center">
//                 <span className="text-3xl font-bold mr-2">258</span>
//                 <span className="text-green-200">+15%</span>
//               </div>
//             </div>
//             <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg shadow-md p-4 text-white">
//               <h2 className="text-lg font-semibold mb-4">Posts</h2>
//               <div className="flex items-center">
//                 <span className="text-3xl font-bold mr-2">432</span>
//                 <span className="text-red-200">-7%</span>
//               </div>
//             </div>
//             <div className="bg-gradient-to-r from-green-600 to-green-400 rounded-lg shadow-md p-4 text-white">
//               <h2 className="text-lg font-semibold mb-4">Comments</h2>
//               <div className="flex items-center">
//                 <span className="text-3xl font-bold mr-2">764</span>
//                 <span className="text-green-200">+22%</span>
//               </div>
//             </div>
//             <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-lg shadow-md p-4 text-white">
//               <h2 className="text-lg font-semibold mb-4">Revenue</h2>
//               <div className="flex items-center">
//                 <span className="text-3xl font-bold mr-2">$12,345</span>
//                 <span className="text-green-200">+35%</span>
//               </div>
//             </div>
//           </div>

//           {/* Chart */}
//           <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//             <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
//             <img src="https://via.placeholder.com/600x300" alt="Sales chart" />
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-end">
//             <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mr-4">
//               Export Data
//             </button>
//             <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400">
//               View More
//             </button>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Home;
// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom

// const Home = () => {
//   const [orders, setOrders] = useState([]);

//   // Check if the user is logged in
//   const isLoggedIn = localStorage.getItem("isLoggedIn");

//   // If the user is not logged in, render a message to login
//   if (!isLoggedIn) {
//     return <div>Please login to access this page.</div>;
//   }

//   // Define useEffect hook outside of conditional statement
//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       // Fetch orders
//   //       const ordersResponse = await axios.get("/api/orders");
//   //       setOrders(ordersResponse.data.orders);
//   //     } catch (error) {
//   //       console.error("Error fetching data:", error);
//   //     }
//   //   };

//   //   fetchData();
//   // }, []);

//   // Render the Home component content
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="bg-gray-800 text-gray-100 w-64 flex-shrink-0">
//         <div className="p-4">
//           <h2 className="text-lg font-semibold text-white">Dashboard</h2>
//         </div>
//         <nav className="flex flex-col mt-4">
//           {/* Use Link component instead of anchor tag */}
//           <Link
//             to="/"
//             className="py-2 px-4 text-gray-200 hover:bg-gray-700 hover:text-white"
//           >
//             Home
//           </Link>
//           <Link
//             to="/posts"
//             className="py-2 px-4 text-gray-200 hover:bg-gray-700 hover:text-white"
//           >
//             Posts
//           </Link>
//           <Link
//             to="/users"
//             className="py-2 px-4 text-gray-200 hover:bg-gray-700 hover:text-white"
//           >
//             Users
//           </Link>
//           <Link
//             to="/settings"
//             className="py-2 px-4 text-gray-200 hover:bg-gray-700 hover:text-white"
//           >
//             Settings
//           </Link>
//         </nav>
//       </div>

//       {/* Main content area */}
//       <div className="flex-1">
//         {/* Header */}
//         <header className="bg-white shadow p-4 flex justify-between items-center">
//           <div className="flex items-center">
//             <button className="text-gray-500 focus:outline-none">
//               <svg
//                 className="h-6 w-6 fill-current"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   className="heroicon-ui"
//                   d="M4 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2z"
//                 />
//               </svg>
//             </button>
//             <h1 className="ml-2 text-xl font-semibold">Admin Dashboard</h1>
//           </div>
//           <div>
//             <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
//               Logout
//             </button>
//           </div>
//         </header>

//         {/* Main content */}
//         <main className="p-6">
//           {/* Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//             <div className="bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg shadow-md p-4 text-white">
//               <h2 className="text-lg font-semibold mb-4">Users</h2>
//               <div className="flex items-center">
//                 <span className="text-3xl font-bold mr-2">258</span>
//                 <span className="text-green-200">+15%</span>
//               </div>
//             </div>
//             <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg shadow-md p-4 text-white">
//               <h2 className="text-lg font-semibold mb-4">Posts</h2>
//               <div className="flex items-center">
//                 <span className="text-3xl font-bold mr-2">432</span>
//                 <span className="text-red-200">-7%</span>
//               </div>
//             </div>
//             <div className="bg-gradient-to-r from-green-600 to-green-400 rounded-lg shadow-md p-4 text-white">
//               <h2 className="text-lg font-semibold mb-4">Comments</h2>
//               <div className="flex items-center">
//                 <span className="text-3xl font-bold mr-2">764</span>
//                 <span className="text-green-200">+22%</span>
//               </div>
//             </div>
//             <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-lg shadow-md p-4 text-white">
//               <h2 className="text-lg font-semibold mb-4">Revenue</h2>
//               <div className="flex items-center">
//                 <span className="text-3xl font-bold mr-2">$12,345</span>
//                 <span className="text-green-200">+35%</span>
//               </div>
//             </div>
//           </div>

//           {/* Chart */}
//           <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//             <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
//             <img
//               src="https://via.placeholder.com/600x300"
//               alt="Sales chart"
//             />
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-end">
//             <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mr-4">
//               Export Data
//             </button>
//             <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400">
//               View More
//             </button>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Home;
// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom

// const Home = () => {
//   const [orders, setOrders] = useState([]);

//   // Check if the user is logged in
//   const isLoggedIn = localStorage.getItem("isLoggedIn");

//   // If the user is not logged in, render a message to login
//   if (!isLoggedIn) {
//     return <div>Please login to access this page.</div>;
//   }

//   // Define useEffect hook outside of conditional statement
//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       // Fetch orders
//   //       const ordersResponse = await axios.get("/api/orders");
//   //       setOrders(ordersResponse.data.orders);
//   //     } catch (error) {
//   //       console.error("Error fetching data:", error);
//   //     }
//   //   };

//   //   fetchData();
//   // }, []);

//   // Render the Home component content
//   return (
//     <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="bg-gray-800 text-gray-100 w-full lg:w-64 flex-shrink-0">
//         <div className="p-4">
//           <h2 className="text-lg font-semibold text-white">Dashboard</h2>
//         </div>
//         <nav className="flex flex-col mt-4">
//           {/* Use Link component instead of anchor tag */}
//           <Link
//             to="/"
//             className="py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white"
//           >
//             Home
//           </Link>
//           <Link
//             to="/posts"
//             className="py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white"
//           >
//             Posts
//           </Link>
//           <Link
//             to="/users"
//             className="py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white"
//           >
//             Users
//           </Link>
//           <Link
//             to="/settings"
//             className="py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white"
//           >
//             Settings
//           </Link>
//         </nav>
//       </div>

//       {/* Main content area */}
//       <div className="flex-1">
//         {/* Header */}
//         <header className="bg-white shadow p-4 flex justify-between items-center">
//           <div className="flex items-center">
//             <button className="text-gray-500 focus:outline-none">
//               <svg
//                 className="h-6 w-6 fill-current"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   className="heroicon-ui"
//                   d="M4 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2z"
//                 />
//               </svg>
//             </button>
//             <h1 className="ml-2 text-xl font-semibold">Admin Dashboard</h1>
//           </div>
//           <div>
//             <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
//               Logout
//             </button>
//           </div>
//         </header>

//         {/* Main content */}
//         <main className="p-6">
//           {/* Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//             <div className="bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg shadow-md p-4 text-white">
//               <h2 className="text-lg font-semibold mb-4">Users</h2>
//               <div className="flex items-center">
//                 <span className="text-3xl font-bold mr-2">258</span>
//                 <span className="text-green-200">+15%</span>
//               </div>
//             </div>
//             <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg shadow-md p-4 text-white">
//               <h2 className="text-lg font-semibold mb-4">Posts</h2>
//               <div className="flex items-center">
//                 <span className="text-3xl font-bold mr-2">432</span>
//                 <span className="text-red-200">-7%</span>
//               </div>
//             </div>
//             <div className="bg-gradient-to-r from-green-600 to-green-400 rounded-lg shadow-md p-4 text-white">
//               <h2 className="text-lg font-semibold mb-4">Comments</h2>
//               <div className="flex items-center">
//                 <span className="text-3xl font-bold mr-2">764</span>
//                 <span className="text-green-200">+22%</span>
//               </div>
//             </div>
//             <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-lg shadow-md p-4 text-white">
//               <h2 className="text-lg font-semibold mb-4">Revenue</h2>
//               <div className="flex items-center">
//                 <span className="text-3xl font-bold mr-2">$12,345</span>
//                 <span className="text-green-200">+35%</span>
//               </div>
//             </div>
//           </div>

//           {/* Chart */}
//           <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//             <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
//             <img
//               src="https://via.placeholder.com/600x300"
//               alt="Sales chart"
//               className="w-full"
//             />
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-end">
//             <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mr-4">
//               Export Data
//             </button>
//             <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400">
//               View More
//             </button>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Home;
// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom

// const Home = () => {
//   const [orders, setOrders] = useState([]);

//   // Check if the user is logged in
//   const isLoggedIn = localStorage.getItem("isLoggedIn");

//   // If the user is not logged in, render a message to login
//   if (!isLoggedIn) {
//     return <div>Please login to access this page.</div>;
//   }

//   // Define useEffect hook outside of conditional statement
//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       // Fetch orders
//   //       const ordersResponse = await axios.get("/api/orders");
//   //       setOrders(ordersResponse.data.orders);
//   //     } catch (error) {
//   //       console.error("Error fetching data:", error);
//   //     }
//   //   };

//   //   fetchData();
//   // }, []);

//   // Render the Home component content
//   return (
//     <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="bg-gray-800 text-gray-100 w-full lg:w-64 flex-shrink-0">
//         <div className="p-4">
//           <h2 className="text-lg font-semibold text-white">Dashboard</h2>
//         </div>
//         <nav className="flex flex-col mt-4">
//           {/* Use Link component instead of anchor tag */}
//           <Link
//             to="/home"
//             className="py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300"
//           >
//             Home
//           </Link>
//           <Link
//             to="/product"
//             className="py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300"
//           >
//             Products
//           </Link>
//           <Link
//             to="/users"
//             className="py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300"
//           >
//             Users
//           </Link>
//           <Link
//             to="/settings"
//             className="py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300"
//           >
//             Settings
//           </Link>
//         </nav>
//       </div>

//       {/* Main content area */}
//       <div className="flex-1">
//         {/* Header */}
//         <header className="bg-white shadow p-4 flex justify-between items-center">
//           <div className="flex items-center">
//             <button className="text-gray-500 focus:outline-none">
//               <svg
//                 className="h-6 w-6 fill-current"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   className="heroicon-ui"
//                   d="M4 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2z"
//                 />
//               </svg>
//             </button>
//             <h1 className="ml-2 text-xl font-semibold">Admin Dashboard</h1>
//           </div>
//           <div>
//             <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300">
//               Logout
//             </button>
//           </div>
//         </header>

//         {/* Main content */}
//         <main className="p-6">
//           {/* Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//             <div className="bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg shadow-md p-6 text-white">
//               <h2 className="text-lg font-semibold mb-4">Users</h2>
//               <div className="flex items-center">
//                 <span className="text-4xl font-bold mr-2">258</span>
//                 <span className="text-green-200 text-sm">+15%</span>
//               </div>
//             </div>
//             <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg shadow-md p-6 text-white">
//               <h2 className="text-lg font-semibold mb-4">Posts</h2>
//               <div className="flex items-center">
//                 <span className="text-4xl font-bold mr-2">432</span>
//                 <span className="text-red-200 text-sm">-7%</span>
//               </div>
//             </div>
//             <div className="bg-gradient-to-r from-green-600 to-green-400 rounded-lg shadow-md p-6 text-white">
//               <h2 className="text-lg font-semibold mb-4">Comments</h2>
//               <div className="flex items-center">
//                 <span className="text-4xl font-bold mr-2">764</span>
//                 <span className="text-green-200 text-sm">+22%</span>
//               </div>
//             </div>
//             <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-lg shadow-md p-6 text-white">
//               <h2 className="text-lg font-semibold mb-4">Revenue</h2>
//               <div className="flex items-center">
//                 <span className="text-4xl font-bold mr-2">$12,345</span>
//                 <span className="text-green-200 text-sm">+35%</span>
//               </div>
//             </div>
//           </div>

//           {/* Chart */}
//           <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//             <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
//             <div className="flex justify-center items-center">
//               <img
//                 src="https://via.placeholder.com/600x300"
//                 alt="Sales chart"
//                 className="w-full"
//               />
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-end">
//             <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mr-4 transition duration-300">
//               Export Data
//             </button>
//             <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition duration-300">
//               View More
//             </button>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Home;
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [productsCount, setProductsCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);
  const [completedOrdersCount, setCompletedOrdersCount] = useState(0);
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch total number of products
        const productsResponse = await axios.get("http://localhost:3001/products");
        setProductsCount(productsResponse.data.length);

        // Fetch total number of users
        const usersResponse = await axios.get("http://localhost:3001/users");
        setUsersCount(usersResponse.data.length);

        // Fetch total number of orders
        const ordersResponse = await axios.get("http://localhost:3001/orders");
        setOrdersCount(ordersResponse.data.length);

        // Fetch total number of completed orders
        const completedOrdersResponse = await axios.get("http://localhost:3001/orders/completed");
        setCompletedOrdersCount(completedOrdersResponse.data.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!isLoggedIn) {
    return <div>Please login to access this page.</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      <div className="bg-gray-800 text-gray-100 w-full lg:w-64 flex-shrink-0">
        <div className="p-4">
          <h2 className="text-lg font-semibold text-white">Dashboard</h2>
        </div>
        <nav className="flex flex-col mt-4">
          <Link
            to="/home"
            className="py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/product"
            className="py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300"
          >
            Products
          </Link>
          <Link
            to="/users"
            className="py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300"
          >
            Users
          </Link>
          <Link
            to="/settings"
            className="py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300"
          >
            Settings
          </Link>
        </nav>
      </div>

      <div className="flex-1">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <div className="flex items-center">
            <button className="text-gray-500 focus:outline-none">
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  className="heroicon-ui"
                  d="M4 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2z"
                />
              </svg>
            </button>
            <h1 className="ml-2 text-xl font-semibold">Admin Dashboard</h1>
          </div>
          <div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300">
              Logout
            </button>
          </div>
        </header>

        <main className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg shadow-md p-6 text-white">
              <h2 className="text-lg font-semibold mb-4">Total Products</h2>
              <div className="flex items-center">
                <span className="text-4xl font-bold mr-2">{productsCount}</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg shadow-md p-6 text-white">
              <h2 className="text-lg font-semibold mb-4">Total Users</h2>
              <div className="flex items-center">
                <span className="text-4xl font-bold mr-2">{usersCount}</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-600 to-green-400 rounded-lg shadow-md p-6 text-white">
              <h2 className="text-lg font-semibold mb-4">Total Orders</h2>
              <div className="flex items-center">
                <span className="text-4xl font-bold mr-2">{ordersCount}</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-lg shadow-md p-6 text-white">
              <h2 className="text-lg font-semibold mb-4">Completed Orders</h2>
              <div className="flex items-center">
                <span className="text-4xl font-bold mr-2">{completedOrdersCount}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
            <div className="flex justify-center items-center">
              <img
                src="https://via.placeholder.com/600x300"
                alt="Sales chart"
                className="w-full"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mr-4 transition duration-300">
              Export Data
            </button>
            <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition duration-300">
              View More
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
