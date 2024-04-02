
// import React, { Component } from "react";
// import axios from "axios";

// class User extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: [],
//       isLoading: true,
//       searchTerm: "",
//       currentPage: 1,
//       usersPerPage: 5,
//     };
//   }

//   componentDidMount() {
//     this.fetchUsers();
//   }

//   fetchUsers = async () => {
//     try {
//       const response = await axios.get("https://skyva-api.vercel.app/auth/users");
//       this.setState({ users: response.data, isLoading: false });
//       console.log("Fetched users:", response.data); // Log the fetched data
//     } catch (error) {
//       console.error("Error fetching users:", error);
//       // Handle error
//     }
//   };

//   handleSearchChange = (event) => {
//     this.setState({ searchTerm: event.target.value });
//   };

//   handlePageChange = (pageNumber) => {
//     this.setState({ currentPage: pageNumber });
//   };

//   render() {
//     const { users, isLoading, searchTerm, currentPage, usersPerPage } =
//       this.state;

//     const filteredUsers = users.filter((user) =>
//       user.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     const indexOfLastUser = currentPage * usersPerPage;
//     const indexOfFirstUser = indexOfLastUser - usersPerPage;
//     const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

//     if (isLoading) {
//       return (
//         <div className="flex justify-center items-center h-screen">
//           <div className="loader border-t-2 rounded-full border-gray-500 bg-gray-300 animate-spin aspect-square w-8 flex justify-center items-center text-yellow-700"></div>
//         </div>
//       );
//     }

//     return (
//       <div className="container mx-auto p-4">
//         <input
//           className="border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:border-blue-500"
//           type="text"
//           value={searchTerm}
//           onChange={this.handleSearchChange}
//           placeholder="Search for users..."
//         />
      
//         {currentUsers.map((user) => (
//   <div key={user.id} className="mb-8 bg-white rounded-lg shadow-md p-6">
//     <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
//     <p className="text-gray-600 mb-2">Email: {user.email}</p>
//     <h3 className="text-lg font-semibold mb-2">Orders:</h3>
//     <ul className="list-disc list-inside">
//       {user.orders.map((order) => (
//         <li key={order.id}>
//           <span className="font-semibold">Order ID:</span> {order.id}, <br/>
//           <span className="font-semibold"> Total Amount:</span> ${order.total_amount}, <br/>
//           <span className="font-semibold"> Cart ID:</span> {order.cart_id}, <br/>
//           <span className={order.status === "open" ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>Status:</span> {order.status}
//         </li>
//       ))}
//     </ul>
//   </div>
// ))}


//         <ul className="flex justify-center mt-8">
//           {filteredUsers.length > usersPerPage &&
//             [...Array(Math.ceil(filteredUsers.length / usersPerPage))].map(
//               (item, index) => (
//                 <li key={index}>
//                   <button
//                     className={`px-4 py-2 rounded-md ${
//                       currentPage === index + 1
//                         ? "bg-blue-500 text-white"
//                         : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-800"
//                     }`}
//                     onClick={() => this.handlePageChange(index + 1)}
//                   >
//                     {index + 1}
//                   </button>
//                 </li>
//               )
//             )}
//         </ul>
//       </div>
//     );
//   }
// }

// export default User;
// import React, { Component } from "react";
// import axios from "axios";

// class User extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: [],
//       isLoading: true,
//       searchTerm: "",
//       currentPage: 1,
//       usersPerPage: 5,
//     };
//   }

//   componentDidMount() {
//     this.fetchUsers();
//   }

//   fetchUsers = async () => {
//     try {
//       const response = await axios.get("https://skyva-api.vercel.app/auth/users");
//       this.setState({ users: response.data, isLoading: false });
//       console.log("Fetched users:", response.data); // Log the fetched data
//     } catch (error) {
//       console.error("Error fetching users:", error);
//       // Handle error
//     }
//   };

//   handleSearchChange = (event) => {
//     this.setState({ searchTerm: event.target.value });
//   };

//   handlePageChange = (pageNumber) => {
//     this.setState({ currentPage: pageNumber });
//   };

//   render() {
//     const { users, isLoading, searchTerm, currentPage, usersPerPage } =
//       this.state;

//     const filteredUsers = users.filter((user) =>
//       user.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     const indexOfLastUser = currentPage * usersPerPage;
//     const indexOfFirstUser = indexOfLastUser - usersPerPage;
//     const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

//     if (isLoading) {
//       return (
//         <div className="flex justify-center items-center h-screen">
//           <div className="loader border-t-2 rounded-full border-gray-500 bg-gray-300 animate-spin aspect-square w-8 flex justify-center items-center text-yellow-700"></div>
//         </div>
//       );
//     }

//     return (
//       <div className="container mx-auto p-4">
//         <input
//           className="border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:border-blue-500"
//           type="text"
//           value={searchTerm}
//           onChange={this.handleSearchChange}
//           placeholder="Search for users..."
//         />
      
//         {currentUsers.map((user) => (
//           <div key={user.id} className="mb-8 bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-2">{user.name}</h2>
//             <p className="text-gray-600 mb-2">Email: {user.email}</p>
//             <h3 className="text-lg font-semibold mb-2">Orders:</h3>
//             <ul className="list-disc list-inside">
//               {user.orders.map((order) => (
//                 <li key={order.id}>
//                   <span className="font-semibold">Order ID:</span> {order.id} <br />
//                   <span className="font-semibold">Total Amount:</span> ${order.total_amount} <br />
//                   <span className="font-semibold">Cart ID:</span> {order.cart_id} <br />
//                   <span className={order.status === "open" ? "text-green-600" : "text-red-600"}>
//                     Status: {order.status}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}

//         <ul className="flex justify-center mt-8">
//           {filteredUsers.length > usersPerPage &&
//             [...Array(Math.ceil(filteredUsers.length / usersPerPage))].map(
//               (item, index) => (
//                 <li key={index}>
//                   <button
//                     className={`px-4 py-2 rounded-md ${
//                       currentPage === index + 1
//                         ? "bg-blue-500 text-white"
//                         : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-800"
//                     }`}
//                     onClick={() => this.handlePageChange(index + 1)}
//                   >
//                     {index + 1}
//                   </button>
//                 </li>
//               )
//             )}
//         </ul>
//       </div>
//     );
//   }
// }

// export default User;
// import React, { Component } from "react";
// import axios from "axios";

// class User extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: [],
//       isLoading: true,
//       searchTerm: "",
//       currentPage: 1,
//       usersPerPage: 5,
//     };
//   }

//   componentDidMount() {
//     this.fetchUsers();
//   }

//   fetchUsers = async () => {
//     try {
//       const response = await axios.get("https://skyva-api.vercel.app/auth/users");
//       this.setState({ users: response.data, isLoading: false });
//       console.log("Fetched users:", response.data); // Log the fetched data
//     } catch (error) {
//       console.error("Error fetching users:", error);
//       // Handle error
//     }
//   };

//   handleSearchChange = (event) => {
//     this.setState({ searchTerm: event.target.value });
//   };

//   handlePageChange = (pageNumber) => {
//     this.setState({ currentPage: pageNumber });
//   };

//   // Function to calculate total price of orders
//   calculateTotalPrice = (orders) => {
//     let totalPrice = 0;
//     orders.forEach((order) => {
//       totalPrice += parseFloat(order.total_amount);
//     });
//     return totalPrice.toFixed(2);
//   };

//   render() {
//     const { users, isLoading, searchTerm, currentPage, usersPerPage } =
//       this.state;

//     const filteredUsers = users.filter((user) =>
//       user.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     const indexOfLastUser = currentPage * usersPerPage;
//     const indexOfFirstUser = indexOfLastUser - usersPerPage;
//     const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

//     if (isLoading) {
//       return (
//         <div className="flex justify-center items-center h-screen">
//           <div className="loader border-t-2 rounded-full border-gray-500 bg-gray-300 animate-spin aspect-square w-8 flex justify-center items-center text-yellow-700"></div>
//         </div>
//       );
//     }

//     return (
//       <div className="container mx-auto p-4">
//         <input
//           className="border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:border-blue-500 w-full md:w-96"
//           type="text"
//           value={searchTerm}
//           onChange={this.handleSearchChange}
//           placeholder="Search for users..."
//         />
      
//         {currentUsers.map((user) => (
//           <div key={user.id} className="mb-8 bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-2">{user.name}</h2>
//             <p className="text-gray-600 mb-2">Email: {user.email}</p>
//             <div className="border-b border-gray-300 mb-4"></div>
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-lg font-semibold">Orders:</h3>
//               <p className="text-lg font-semibold text-green-600">
//                 Total Price: ${this.calculateTotalPrice(user.orders)}
//               </p>
//             </div>
//             <ul className="space-y-4">
//               {user.orders.map((order) => (
//                 <li key={order.id} className="border-b border-gray-300 pb-4">
//                   <p>
//                     <span className="font-semibold">Order ID:</span> {order.id}
//                   </p>
//                   <p>
//                     <span className="font-semibold">Total Amount:</span> ${order.total_amount}
//                   </p>
//                   <p>
//                     <span className="font-semibold">Cart ID:</span> {order.cart_id}
//                   </p>
//                   <p className={order.status === "open" ? "text-green-600" : "text-red-600"}>
//                     <span className="font-semibold">Status:</span> {order.status}
//                   </p>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}

//         <ul className="flex justify-center mt-8">
//           {filteredUsers.length > usersPerPage &&
//             [...Array(Math.ceil(filteredUsers.length / usersPerPage))].map(
//               (item, index) => (
//                 <li key={index}>
//                   <button
//                     className={`px-4 py-2 rounded-md ${
//                       currentPage === index + 1
//                         ? "bg-blue-500 text-white"
//                         : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-800"
//                     }`}
//                     onClick={() => this.handlePageChange(index + 1)}
//                   >
//                     {index + 1}
//                   </button>
//                 </li>
//               )
//             )}
//         </ul>
//       </div>
//     );
//   }
// }

// export default User;
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true,
      searchTerm: "",
      currentPage: 1,
      usersPerPage: 5,
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    try {
      const response = await axios.get("https://skyva-api.vercel.app/auth/users");
      this.setState({ users: response.data, isLoading: false });
      console.log("Fetched users:", response.data); // Log the fetched data
    } catch (error) {
      console.error("Error fetching users:", error);
      // Handle error
    }
  };

  handleSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  // Function to calculate total price of orders
  calculateTotalPrice = (orders) => {
    let totalPrice = 0;
    orders.forEach((order) => {
      totalPrice += parseFloat(order.total_amount);
    });
    return totalPrice.toFixed(2);
  };

  render() {
    const { users, isLoading, searchTerm, currentPage, usersPerPage } =
      this.state;

    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-screen">
          <div className="loader border-t-2 rounded-full border-gray-500 bg-gray-300 animate-spin aspect-square w-8 flex justify-center items-center text-yellow-700"></div>
        </div>
      );
    }

    return (
      <div className="container mx-auto p-4">
        <Link to="/home" className="block mb-4 text-blue-600 hover:underline">&larr; Go back</Link>
        <input
          className="border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:border-blue-500 w-full md:w-96"
          type="text"
          value={searchTerm}
          onChange={this.handleSearchChange}
          placeholder="Search for users..."
        />
      
        {currentUsers.map((user) => (
          <div key={user.id} className="mb-8 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{user.name}</h2>
            <p className="text-gray-600 mb-2">Email: {user.email}</p>
            <div className="border-b border-gray-300 mb-4"></div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Orders:</h3>
              <p className="text-lg font-semibold text-green-600">
                Total Price: ${this.calculateTotalPrice(user.orders)}
              </p>
            </div>
            <ul className="space-y-4">
              {user.orders.map((order) => (
                <li key={order.id} className="border-b border-gray-300 pb-4">
                  <p>
                    <span className="font-semibold">Order ID:</span> {order.id}
                  </p>
                  <p>
                    <span className="font-semibold">Total Amount:</span> ${order.total_amount}
                  </p>
                  <p>
                    <span className="font-semibold">Cart ID:</span> {order.cart_id}
                  </p>
                  <p className={order.status === "open" ? "text-green-600" : "text-red-600"}>
                    <span className="font-semibold">Status:</span> {order.status}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <ul className="flex justify-center mt-8">
          {filteredUsers.length > usersPerPage &&
            [...Array(Math.ceil(filteredUsers.length / usersPerPage))].map(
              (item, index) => (
                <li key={index}>
                  <button
                    className={`px-4 py-2 rounded-md ${
                      currentPage === index + 1
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-800"
                    }`}
                    onClick={() => this.handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              )
            )}
        </ul>
      </div>
    );
  }
}

export default User;
