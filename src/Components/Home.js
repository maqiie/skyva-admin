
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
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const navigate = useNavigate();
  const [totalRevenue, setTotalRevenue] = useState(0);


  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

 
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const authToken = localStorage.getItem("authToken");
  
  //       // Fetch products count
  //       const productsResponse = await axios.get("http://localhost:3001/products");
  //       setProductsCount(productsResponse.data.length);
  
  //       // Fetch users count
  //       const usersResponse = await axios.get("http://localhost:3001/auth/registrations");
  //       setUsersCount(usersResponse.data.length);
  
  //       // Fetch all orders with authentication token
  //       const ordersResponse = await axios.get("http://localhost:3001/orders", {
  //         headers: {
  //           Authorization: `Bearer ${authToken}`,
  //         },
  //       });
  
  //       // Calculate total revenue from completed orders
  //       const totalRevenue = ordersResponse.data.reduce(
  //         (acc, order) => acc + order.total_amount,
  //         0
  //       );
  
  //       // Update state with total revenue
  //       setTotalRevenue(totalRevenue);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  
  //   fetchData();
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = localStorage.getItem("authToken");
  
        // Fetch products count
        const productsResponse = await axios.get("http://localhost:3001/products");
        setProductsCount(productsResponse.data.length);
  
        // Fetch users count
        const usersResponse = await axios.get("http://localhost:3001/auth/registrations");
        setUsersCount(usersResponse.data.length);
  
        // Fetch all orders with authentication token
        const ordersResponse = await axios.get("http://localhost:3001/orders", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
  
        // Set total orders count
        setOrdersCount(ordersResponse.data.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  
  

  useEffect(() => {
    // Destroy the previous chart if it exists
    const existingChart = Chart.getChart("adminChart");
    if (existingChart) {
      existingChart.destroy();
    }
  
    // Create a new chart
    const ctx = document.getElementById("adminChart");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Products", "Users", "Orders", "Completed Orders"],
        datasets: [
          {
            label: "Count",
            data: [productsCount, usersCount, ordersCount, completedOrdersCount],
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
  }, [productsCount, usersCount, ordersCount, completedOrdersCount]);
  

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-gray-100 w-full lg:w-64 flex-shrink-0">
        <div className="p-4">
          <h2 className="text-lg font-semibold text-white uppercase mb-4">Dashboard</h2>
          <nav>
            <Link to="/home" className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-white rounded transition duration-300">Home</Link>
            <Link to="/products" className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-white rounded transition duration-300">Products</Link>
            <Link to="/product" className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-white rounded transition duration-300">CreateProduct</Link>
            <Link to="/settings" className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-white rounded transition duration-300">Settings</Link>
            {/* Additional sidebar components */}
            <Link to="/orders" className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-white rounded transition duration-300">Analytics</Link>
            <Link to="/reports" className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-white rounded transition duration-300">Reports</Link>
            <Link to="/notifications" className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-white rounded transition duration-300">Notifications</Link>
          </nav>
        </div>
      </div>

      <div className="flex-1">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <div className="flex items-center">
            <button className="text-gray-500 focus:outline-none">
              <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path className="heroicon-ui" d="M4 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2z" />
              </svg>
            </button>
            <h1 className="ml-2 text-xl font-semibold">Admin Dashboard</h1>
          </div>
          <div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300" onClick={handleLogout}>Logout</button>
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
              <canvas id="adminChart" width="400" height="200"></canvas>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mr-4 transition duration-300">Export Data</button>
            <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition duration-300">View More</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
