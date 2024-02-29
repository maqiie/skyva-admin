// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const [productsCount, setProductsCount] = useState(0);
//   const [usersCount, setUsersCount] = useState(0);
//   const [ordersCount, setOrdersCount] = useState(0);
//   const [completedOrdersCount, setCompletedOrdersCount] = useState(0);
//   const isLoggedIn = localStorage.getItem("isLoggedIn");
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Clear authentication state
//     localStorage.removeItem("isLoggedIn");
//     // Navigate to the login page
//     navigate("/");
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch total number of products
//         const productsResponse = await axios.get("http://localhost:3001/products");
//         console.log("Products response:", productsResponse.data);
//         setProductsCount(productsResponse.data.length);

//         // Fetch total number of users
//         const usersResponse = await axios.get("http://localhost:3001/users");
//         console.log("Users response:", usersResponse.data);
//         setUsersCount(usersResponse.data.length);

//         // Fetch total number of orders
//         const ordersResponse = await axios.get("http://localhost:3001/orders/all");
//         console.log("Orders response:", ordersResponse.data);
//         setOrdersCount(ordersResponse.data.length);

//         // Fetch total number of completed orders
//         const completedOrdersResponse = await axios.get("http://localhost:3001/orders/completed");
//         console.log("Completed orders response:", completedOrdersResponse.data);
//         setCompletedOrdersCount(completedOrdersResponse.data.length);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();

//     console.log("isLoggedIn:", isLoggedIn); // Check if isLoggedIn is set correctly

//   }, [isLoggedIn]); // Add isLoggedIn to the dependency array

//   return (
//     <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
//      <div className="bg-gray-800 text-gray-100 w-full lg:w-64 flex-shrink-0">
//   <div className="p-4 flex justify-between items-center">
//     <h2 className="text-lg font-semibold text-white">Dashboard</h2>
//     <button className="text-gray-500 focus:outline-none lg:hidden">
//       <svg
//         className="h-6 w-6 fill-current"
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//       >
//         <path
//           className="heroicon-ui"
//           d="M4 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2z"
//         />
//       </svg>
//     </button>
//   </div>
//   <nav className="flex flex-col mt-4">
//     <Link
//       to="/home"
//       className="py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300"
//     >
//       Home
//     </Link>
//     <Link
//       to="/product"
//       className="py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300"
//     >
//       Products
//     </Link>
//     <Link
//       to="/users"
//       className="py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300"
//     >
//       Users
//     </Link>
//     <Link
//       to="/settings"
//       className="py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300"
//     >
//       Settings
//     </Link>
//   </nav>
// </div>

//       <div className="flex-1">
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
//           <button
//         className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300"
//         onClick={handleLogout}
//       >
//         Logout
//       </button>
//           </div>
//         </header>

//         <main className="p-6">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//             <Link to="/products" className="hover:no-underline">
//               <div className="bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg shadow-md p-6 text-white">
//                 <h2 className="text-lg font-semibold mb-4">Total Products</h2>
//                 <div className="flex items-center">
//                   <span className="text-4xl font-bold mr-2">{productsCount}</span>
//                 </div>
//               </div>
//             </Link>
//             <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg shadow-md p-6 text-white">
//               <h2 className="text-lg font-semibold mb-4">Total Users</h2>
//               <div className="flex items-center">
//                 <span className="text-4xl font-bold mr-2">{usersCount}</span>
//               </div>
//             </div>
//             <div className="bg-gradient-to-r from-green-600 to-green-400 rounded-lg shadow-md p-6 text-white">
//               <h2 className="text-lg font-semibold mb-4">Total Orders</h2>
//               <div className="flex items-center">
//                 <span className="text-4xl font-bold mr-2">{ordersCount}</span>
//               </div>
//             </div>
//             <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-lg shadow-md p-6 text-white">
//               <h2 className="text-lg font-semibold mb-4">Completed Orders</h2>
//               <div className="flex items-center">
//                 <span className="text-4xl font-bold mr-2">{completedOrdersCount}</span>
//               </div>
//             </div>
//           </div>

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
// Import necessary libraries
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import Chart from "chart.js/auto";

// const Home = () => {
//   const [productsCount, setProductsCount] = useState(0);
//   const [usersCount, setUsersCount] = useState(0);
//   const [ordersCount, setOrdersCount] = useState(0);
//   const [completedOrdersCount, setCompletedOrdersCount] = useState(0);
//   const isLoggedIn = localStorage.getItem("isLoggedIn");
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     navigate("/");
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const productsResponse = await axios.get("http://localhost:3001/products");
//         setProductsCount(productsResponse.data.length);

//         const usersResponse = await axios.get("http://localhost:3001/users");
//         setUsersCount(usersResponse.data.length);

//         const ordersResponse = await axios.get("http://localhost:3001/orders/all");
//         setOrdersCount(ordersResponse.data.length);

//         const completedOrdersResponse = await axios.get("http://localhost:3001/orders/completed");
//         setCompletedOrdersCount(completedOrdersResponse.data.length);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     // Destroy the previous chart if it exists
//     const existingChart = Chart.getChart("adminChart");
//     if (existingChart) {
//       existingChart.destroy();
//     }

//     // Create a new chart
//     const ctx = document.getElementById("adminChart");
//     new Chart(ctx, {
//       type: "bar",
//       data: {
//         labels: ["Products", "Users", "Orders", "Completed Orders"],
//         datasets: [
//           {
//             label: "Count",
//             data: [productsCount, usersCount, ordersCount, completedOrdersCount],
//             backgroundColor: [
//               "rgba(255, 99, 132, 0.2)",
//               "rgba(54, 162, 235, 0.2)",
//               "rgba(255, 206, 86, 0.2)",
//               "rgba(75, 192, 192, 0.2)",
//             ],
//             borderColor: [
//               "rgba(255, 99, 132, 1)",
//               "rgba(54, 162, 235, 1)",
//               "rgba(255, 206, 86, 1)",
//               "rgba(75, 192, 192, 1)",
//             ],
//             borderWidth: 1,
//           },
//         ],
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true,
//           },
//         },
//       },
//     });
//   }, [productsCount, usersCount, ordersCount, completedOrdersCount]);

//   return (
//     <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
//       <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-gray-100 w-full lg:w-64 flex-shrink-0">
//         <div className="p-4">
//           <h2 className="text-lg font-semibold text-white uppercase mb-4">Dashboard</h2>
//           <nav className="space-y-2">
//             <Link to="/home" className="block hover:text-white transition duration-300">Home</Link>
//             <Link to="/products" className="block hover:text-white transition duration-300">Products</Link>
//             <Link to="/users" className="block hover:text-white transition duration-300">Users</Link>
//             <Link to="/settings" className="block hover:text-white transition duration-300">Settings</Link>
//           </nav>
//         </div>
//       </div>

//       <div className="flex-1">
//         <header className="bg-white shadow p-4 flex justify-between items-center">
//           <div className="flex items-center">
//             <button className="text-gray-500 focus:outline-none">
//               <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                 <path className="heroicon-ui" d="M4 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2z" />
//               </svg>
//             </button>
//             <h1 className="ml-2 text-xl font-semibold">Admin Dashboard</h1>
//           </div>
//           <div>
//             <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300" onClick={handleLogout}>Logout</button>
//           </div>
//         </header>

//         <main className="p-6">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//             <div className="bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg shadow-md p-6 text-white">
//               <h2 className="text-lg font-semibold mb-4">Total Products</h2>
//               <div className="flex items-center">
//                 <span className="text-4xl font-bold mr-2">{productsCount}</span>
//               </div>
//             </div>
//             <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg shadow-md p-6 text-white">
//               <h2 className="text-lg font-semibold mb-4">Total Users</h2>
//               <div className="flex items-center">
//                 <span className="text-4xl font-bold mr-2">{usersCount}</span>
//               </div>
//             </div>
//             <div className="bg-gradient-to-r from-green-600 to-green-400 rounded-lg shadow-md p-6 text-white">
//               <h2 className="text-lg font-semibold mb-4">Total Orders</h2>
//               <div className="flex items-center">
//                 <span className="text-4xl font-bold mr-2">{ordersCount}</span>
//               </div>
//             </div>
//             <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-lg shadow-md p-6 text-white">
//               <h2 className="text-lg font-semibold mb-4">Completed Orders</h2>
//               <div className="flex items-center">
//                 <span className="text-4xl font-bold mr-2">{completedOrdersCount}</span>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//             <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
//             <div className="flex justify-center items-center">
//               <canvas id="adminChart" width="400" height="200"></canvas>
//             </div>
//           </div>

//           <div className="flex justify-end">
//             <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mr-4 transition duration-300">Export Data</button>
//             <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition duration-300">View More</button>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Home;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import Chart from "chart.js/auto";

// const Home = () => {
//   const [productsCount, setProductsCount] = useState(0);
//   const [usersCount, setUsersCount] = useState(0);
//   const [ordersCount, setOrdersCount] = useState(0);
//   const [completedOrdersCount, setCompletedOrdersCount] = useState(0);
//   const isLoggedIn = localStorage.getItem("isLoggedIn");
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     navigate("/");
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const productsResponse = await axios.get("http://localhost:3001/products");
//         setProductsCount(productsResponse.data.length);

//         const usersResponse = await axios.get("http://localhost:3001/users");
//         setUsersCount(usersResponse.data.length);

//         const ordersResponse = await axios.get("http://localhost:3001/orders/all");
//         setOrdersCount(ordersResponse.data.length);

//         const completedOrdersResponse = await axios.get("http://localhost:3001/orders/completed");
//         setCompletedOrdersCount(completedOrdersResponse.data.length);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     // Destroy the previous chart if it exists
//     const existingChart = Chart.getChart("adminChart");
//     if (existingChart) {
//       existingChart.destroy();
//     }

//     // Create a new chart
//     const ctx = document.getElementById("adminChart");
//     new Chart(ctx, {
//       type: "bar",
//       data: {
//         labels: ["Products", "Users", "Orders", "Completed Orders"],
//         datasets: [
//           {
//             label: "Count",
//             data: [productsCount, usersCount, ordersCount, completedOrdersCount],
//             backgroundColor: [
//               "rgba(255, 99, 132, 0.2)",
//               "rgba(54, 162, 235, 0.2)",
//               "rgba(255, 206, 86, 0.2)",
//               "rgba(75, 192, 192, 0.2)",
//             ],
//             borderColor: [
//               "rgba(255, 99, 132, 1)",
//               "rgba(54, 162, 235, 1)",
//               "rgba(255, 206, 86, 1)",
//               "rgba(75, 192, 192, 1)",
//             ],
//             borderWidth: 1,
//           },
//         ],
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true,
//           },
//         },
//       },
//     });
//   }, [productsCount, usersCount, ordersCount, completedOrdersCount]);

//   return (
//     <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
//       <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-gray-100 w-full lg:w-64 flex-shrink-0">
//         <div className="p-4">
//           <h2 className="text-lg font-semibold text-white uppercase mb-4">Dashboard</h2>
//           <nav className="space-y-2">
//             <Link to="/home" className="block hover:text-white transition duration-300">Home</Link>
//             <Link to="/products" className="block hover:text-white transition duration-300">Products</Link>
//             <Link to="/product" className="block hover:text-white transition duration-300">Products_create</Link>
//             <Link to="/users" className="block hover:text-white transition duration-300">Users</Link>
//             <Link to="/settings" className="block hover:text-white transition duration-300">Settings</Link>
//           </nav>
//         </div>
//       </div>

//       <div className="flex-1">
//         <header className="bg-white shadow p-4 flex justify-between items-center">
//           <div className="flex items-center">
//             <button className="text-gray-500 focus:outline-none">
//               <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                 <path className="heroicon-ui" d="M4 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2z" />
//               </svg>
//             </button>
//             <h1 className="ml-2 text-xl font-semibold">Admin Dashboard</h1>
//           </div>
//           <div>
//             <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300" onClick={handleLogout}>Logout</button>
//           </div>
//         </header>

//         <main className="p-6">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//             <div className="bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg shadow-md p-6 text-white">
//               <h2 className="text-lg font-semibold mb-4">Total Products</h2>
//               <div className="flex items-center">
//                 <span className="text-4xl font-bold mr-2">{productsCount}</span>
//               </div>
//             </div>
//             <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg shadow-md p-6 text-white">
//               <h2 className="text-lg font-semibold mb-4">Total Users</h2>
//               <div className="flex items-center">
//                 <span className="text-4xl font-bold mr-2">{usersCount}</span>
//               </div>
//             </div>
//             <div className="bg-gradient-to-r from-green-600 to-green-400 rounded-lg shadow-md p-6 text-white">
//               <h2 className="text-lg font-semibold mb-4">Total Orders</h2>
//               <div className="flex items-center">
//                 <span className="text-4xl font-bold mr-2">{ordersCount}</span>
//               </div>
//             </div>
//             <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-lg shadow-md p-6 text-white">
//               <h2 className="text-lg font-semibold mb-4">Completed Orders</h2>
//               <div className="flex items-center">
//                 <span className="text-4xl font-bold mr-2">{completedOrdersCount}</span>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//             <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
//             <div className="flex justify-center items-center">
//               <canvas id="adminChart" width="400" height="200"></canvas>
//             </div>
//           </div>

//           <div className="flex justify-end">
//             <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mr-4 transition duration-300">Export Data</button>
//             <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition duration-300">View More</button>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Home;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import Chart from "chart.js/auto";

// const Home = () => {
//   const [productsCount, setProductsCount] = useState(0);
//   const [usersCount, setUsersCount] = useState(0);
//   const [ordersCount, setOrdersCount] = useState(0);
//   const [completedOrdersCount, setCompletedOrdersCount] = useState(0);
//   const isLoggedIn = localStorage.getItem("isLoggedIn");
//   const navigate = useNavigate();
//   const [totalRevenue, setTotalRevenue] = useState(0);

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     navigate("/");
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const authToken = localStorage.getItem("authToken");

//         // Fetch products count
//         const productsResponse = await axios.get("http://localhost:3001/products");
//         setProductsCount(productsResponse.data.length);

//         // Fetch users count
//         const usersResponse = await axios.get("http://localhost:3001/auth/registrations");
//         setUsersCount(usersResponse.data.length);

//         // Fetch all orders with authentication token
//         const ordersResponse = await axios.get("http://localhost:3001/orders", {
//           headers: {
//             Authorization: `Bearer ${authToken}`,
//           },
//         });

//         // Set total orders count
//         setOrdersCount(ordersResponse.data.length);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     // Destroy the previous chart if it exists
//     const existingChart = Chart.getChart("adminChart");
//     if (existingChart) {
//       existingChart.destroy();
//     }

//     // Create a new chart
//     const ctx = document.getElementById("adminChart");
//     new Chart(ctx, {
//       type: "bar",
//       data: {
//         labels: ["Products", "Users", "Orders", "Completed Orders"],
//         datasets: [
//           {
//             label: "Count",
//             data: [productsCount, usersCount, ordersCount, completedOrdersCount],
//             backgroundColor: [
//               "rgba(255, 99, 132, 0.2)",
//               "rgba(54, 162, 235, 0.2)",
//               "rgba(255, 206, 86, 0.2)",
//               "rgba(75, 192, 192, 0.2)",
//             ],
//             borderColor: [
//               "rgba(255, 99, 132, 1)",
//               "rgba(54, 162, 235, 1)",
//               "rgba(255, 206, 86, 1)",
//               "rgba(75, 192, 192, 1)",
//             ],
//             borderWidth: 1,
//           },
//         ],
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true,
//           },
//         },
//       },
//     });
//   }, [productsCount, usersCount, ordersCount, completedOrdersCount]);

//   return (
//     <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
//       <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-gray-100 w-full lg:w-64 flex-shrink-0">
//         <div className="p-4">
//           <h2 className="text-lg font-semibold text-white uppercase mb-4">Dashboard</h2>
//           <nav>
//             <Link to="/home" className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-white rounded transition duration-300">Home</Link>
//             <Link to="/products" className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-white rounded transition duration-300">Products</Link>
//             <Link to="/product" className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-white rounded transition duration-300">CreateProduct</Link>
//             <Link to="/settings" className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-white rounded transition duration-300">Settings</Link>
//             {/* Additional sidebar components */}
//             <Link to="/orders" className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-white rounded transition duration-300">Analytics</Link>
//             <Link to="/reports" className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-white rounded transition duration-300">Reports</Link>
//             <Link to="/notifications" className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-white rounded transition duration-300">Notifications</Link>
//           </nav>
//         </div>
//       </div>

//       <div className="flex-1">
//         <header className="bg-white shadow p-4 flex justify-between items-center">
//           <div className="flex items-center">
//             <button className="text-gray-500 focus:outline-none">
//               <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                 <path className="heroicon-ui" d="M4 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2z" />
//               </svg>
//             </button>
//             <h1 className="ml-2 text-xl font-semibold">Admin Dashboard</h1>
//           </div>
//           <div>
//             <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300" onClick={handleLogout}>Logout</button>
//           </div>
//         </header>

//         <main className="p-6">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//             <div className="bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg shadow-md p-6 text-white">
//               <h2 className="text-lg font-semibold mb-4">Total Products</h2>
//               <div className="flex items-center">
//                 <span className="text-4xl font-bold mr-2">{productsCount}</span>
//               </div>
//             </div>
//             <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg shadow-md p-6 text-white">
//               <h2 className="text-lg font-semibold mb-4">Total Users</h2>
//               <div className="flex items-center">
//                 <span className="text-4xl font-bold mr-2">{usersCount}</span>
//               </div>
//             </div>
//             <div className="bg-gradient-to-r from-green-600 to-green-400 rounded-lg shadow-md p-6 text-white">
//               <h2 className="text-lg font-semibold mb-4">Total Orders</h2>
//               <div className="flex items-center">
//                 <span className="text-4xl font-bold mr-2">{ordersCount}</span>
//               </div>
//             </div>
//             <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-lg shadow-md p-6 text-white">
//               <h2 className="text-lg font-semibold mb-4">Completed Orders</h2>
//               <div className="flex items-center">
//                 <span className="text-4xl font-bold mr-2">{completedOrdersCount}</span>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//             <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
//             <div className="flex justify-center items-center">
//               <canvas id="adminChart" width="400" height="200"></canvas>
//             </div>
//           </div>

//           <div className="flex justify-end">
//             <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mr-4 transition duration-300">Export Data</button>
//             <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition duration-300">View More</button>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Chart from "chart.js/auto";

const Home = () => {
  const [productsCount, setProductsCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);
  const [completedOrdersCount, setCompletedOrdersCount] = useState(0);
  const [revenueData, setRevenueData] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = localStorage.getItem("authToken"); // Assuming you store the token in localStorage
        const headers = { Authorization: `Bearer ${authToken}` };

        const productsResponse = await axios.get(
          "http://localhost:3001/products",
          { headers }
        );
        setProductsCount(productsResponse.data.length);

        const usersResponse = await axios.get(
          "http://localhost:3001/auth/registrations",
          { headers }
        );
        setUsersCount(usersResponse.data.length);

        const ordersResponse = await axios.get("http://localhost:3001/orders", {
          headers,
        });
        setOrdersCount(ordersResponse.data.length);

        const completedOrdersResponse = await axios.get(
          "http://localhost:3001/order_history",
          { headers }
        );
        setCompletedOrdersCount(completedOrdersResponse.data.length); // Set completed orders count here
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchRevenueData = async () => {
      try {
        const authToken = localStorage.getItem("authToken");
        const headers = { Authorization: `Bearer ${authToken}` };

        const revenueResponse = await axios.get(
          "http://localhost:3001/orders/total_revenue",
          { headers }
        );
        console.log("Revenue data:", revenueResponse.data);

        const currentDate = new Date();
        const currentMonth = currentDate.toLocaleString("default", {
          month: "long",
        });

        setRevenueData([
          {
            month: currentMonth,
            amount: parseFloat(revenueResponse.data.total_revenue),
          },
        ]);
      } catch (error) {
        console.error("Error fetching revenue data:", error);
      }
    };

    fetchRevenueData();
  }, []);

  useEffect(() => {
    // Destroy existing charts
    Chart.getChart("productChart")?.destroy();
    Chart.getChart("revenueChart")?.destroy();

    // Create product chart
    const ctxProduct = document.getElementById("productChart");
    new Chart(ctxProduct, {
      type: "bar",
      data: {
        labels: ["Products", "Users", "Orders", "Completed Orders"],
        datasets: [
          {
            label: "Count",
            data: [
              productsCount,
              usersCount,
              ordersCount,
              completedOrdersCount,
            ],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Create revenue chart
    const ctxRevenue = document.getElementById("revenueChart");
    new Chart(ctxRevenue, {
      type: "line",
      data: {
        labels: revenueData.map((data) => data.month),
        datasets: [
          {
            label: "Revenue",
            data: revenueData.map((data) => data.amount),
            fill: false,
            borderColor: "rgba(75, 192, 192, 1)",
            tension: 0.1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, [
    productsCount,
    usersCount,
    ordersCount,
    completedOrdersCount,
    revenueData,
  ]);

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      <div className="bg-gray-800 text-gray-100 w-full lg:w-64 flex-shrink-0">
        <div className="p-4 flex flex-col h-full justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white uppercase mb-4">
              Dashboard
            </h2>
            <nav className="mb-8">
              <Link
                to="/home"
                className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-white rounded transition duration-300"
              >
                <span className="flex items-center">
                  <svg
                    className="h-5 w-5 mr-2 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.632 8.725c-.19-.425-.107-.93.212-1.313l7.5-9.1c.25-.304.57-.448.873-.448s.623.143.873.448l7.5 9.1c.319.384.402.889.212 1.313-.19.425-.576.7-1.009.7H2.64c-.433 0-.819-.275-1.009-.7zM10 15.075c-2.614 0-4.744-2.129-4.744-4.744S7.386 5.587 10 5.587s4.744 2.129 4.744 4.744-2.13 4.744-4.744 4.744z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Home
                </span>
              </Link>
              <Link
                to="/products"
                className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-white rounded transition duration-300"
              >
                <span className="flex items-center">
                  <svg
                    className="h-5 w-5 mr-2 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2.5c-4.142 0-7.5 3.358-7.5 7.5S5.858 17.5 10 17.5s7.5-3.358 7.5-7.5S14.142 2.5 10 2.5zm0 13c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zm-1-9a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM10 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm-1-8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Products
                </span>
              </Link>
              <Link
                to="/product"
                className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-white rounded transition duration-300"
              >
                <span className="flex items-center">
                  <svg
                    className="h-5 w-5 mr-2 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2.5c-4.142 0-7.5 3.358-7.5 7.5S5.858 17.5 10 17.5s7.5-3.358 7.5-7.5S14.142 2.5 10 2.5zm0 13c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zm-1-9a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM10 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm-1-8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Create Product
                </span>
              </Link>
              <Link
                to="/user"
                className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-white rounded transition duration-300"
              >
                <span className="flex items-center">
                  <svg
                    className="h-5 w-5 mr-2 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M13 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM4 19a1 1 0 0 1-1-1 5.002 5.002 0 0 1 5-4.898V9a3 3 0 0 1 6 0v4.102A5.002 5.002 0 0 1 17 18a1 1 0 0 1-1 1H5zM9 7a1 1 0 0 0 2 0v-.051a3 3 0 0 0-2 0V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Users
                </span>
              </Link>
            </nav>
          </div>
          <div>
            <nav>
              <Link
                to="/analytics"
                className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-white rounded transition duration-300"
              >
                <span className="flex items-center">
                  <svg
                    className="h-5 w-5 mr-2 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 10.293a1 1 0 0 0 0 1.414l4 4a1 1 0 1 0 1.414-1.414L8.414 11H15a1 1 0 0 0 0-2H8.414l2.293-2.293a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Analytics
                </span>
              </Link>
              <Link
                to="/reports"
                className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-white rounded transition duration-300"
              >
                <span className="flex items-center">
                  <svg
                    className="h-5 w-5 mr-2 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.5 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-12a.5.5 0 0 1-.5-.5V4zm1-1A1.5 1.5 0 0 0 3 4v12a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 16.5 2h-12z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M6 12a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm5-2a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm4 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Reports
                </span>
              </Link>
              <Link
                to="/orders"
                className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-white rounded transition duration-300"
              >
                <span className="flex items-center">
                  <svg
                    className="h-5 w-5 mr-2 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7 3.134-7 7-7zm0-1a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM5.14 10.08c-.08-.24-.12-.496-.12-.58 0-.528.432-.96.96-.96s.96.432.96.96c0 .084-.04.34-.12.58-.24.72-1.08 3.04-1.08 3.52 0 .48.336.88.8.96h2.96c.464-.08.8-.48.8-.96 0-.48-.84-2.8-1.08-3.52a2.978 2.978 0 0 0-.12-.58c-.08-.24-.16-.36-.16-.36h-2.48s-.08.12-.16.36zM9.88 16c-.48 0-.88-.336-.96-.8v-.96c0-.48.336-.88.8-.96h.32c.464.08.8.48.8.96v.96c-.08.464-.48.8-.96.8zm-3.04-2.56c-.56.56-1.84 1.52-2.24 1.92-.32.32-.56.48-.56.96H2c0-.8.8-2.16 1.36-2.72.8-.8 1.84-1.52 2.72-1.52h3.76c.88 0 1.92.72 2.72 1.52.56.56 1.36 1.92 1.36 2.72h-.4c0-.48-.24-.64-.56-.96-.4-.4-1.68-1.36-2.24-1.92-.08-.08-.16-.12-.24-.16-.08 0-.16 0-.24.08-.08.08-.16.16-.16.24-.08.08-.12.16-.16.24-.16.24-.72 1.04-1.08 1.6-.08.16-.16.32-.24.48-.4.8-.88 1.76-1.28 2.48-.24.4-.48.64-.88.64s-.64-.24-.88-.64c-.4-.72-.88-1.68-1.28-2.48-.32-.56-.88-1.36-1.04-1.6 0-.08-.08-.16-.16-.24a.204.204 0 0 0-.24-.08c-.08.08-.16.16-.24.16zm9.52-1.04c.8.8 1.52 1.84 1.52 2.72h-.4c0-.56-.24-.64-.56-.96-.4-.4-1.68-1.36-2.24-1.92-.08-.08-.16-.12-.24-.16-.08 0-.16 0-.24.08-.08.08-.16.16-.16.24-.08.08-.12.16-.16.24-.16.24-.72 1.04-1.08 1.6-.08.16-.16.32-.24.48-.4.8-.88 1.76-1.28 2.48-.24.4-.48.64-.88.64s-.64-.24-.88-.64c-.4-.72-.88-1.68-1.28-2.48-.24-.4-.48-.64-.88-.64-.56 0-1 .44-1 1h-.4c0-.88.72-1.92 1.52-2.72.8-.8 1.84-1.52 2.72-1.52h3.76c.88 0 1.92.72 2.72 1.52z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Orders
                </span>
              </Link>
            </nav>
          </div>
        </div>
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
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </header>

        <main className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-100 rounded-lg shadow-md p-6 text-gray-900">
              <h2 className="text-lg font-semibold mb-4">Total Products</h2>
              <div className="flex items-center justify-between">
                <span className="text-4xl font-bold">{productsCount}</span>
                <span className="text-sm">+15% from last week</span>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg shadow-md p-6 text-gray-900">
              <h2 className="text-lg font-semibold mb-4">Total Users</h2>
              <div className="flex items-center justify-between">
                <span className="text-4xl font-bold">{usersCount}</span>
                <span className="text-sm">+10% from last week</span>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg shadow-md p-6 text-gray-900">
              <h2 className="text-lg font-semibold mb-4">Total Orders</h2>
              <div className="flex items-center justify-between">
                <span className="text-4xl font-bold">{ordersCount}</span>
                <span className="text-sm">+20% from last week</span>
              </div>
            </div>
    
            <div className="bg-gray-100 rounded-lg shadow-md p-6 text-gray-900">
              <h2 className="text-lg font-semibold mb-4">Completed Orders</h2>
              <div className="flex items-center justify-between">
                <span className="text-4xl font-bold">
                  {completedOrdersCount} {/* Display completed orders count */}
                </span>
                <span className="text-sm">+25% from last week</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Product Overview</h2>
              <canvas id="productChart" width="400" height="200"></canvas>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Revenue Overview</h2>
              {revenueData.length > 0 && (
                <canvas id="revenueChart" width="400" height="200"></canvas>
              )}
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
