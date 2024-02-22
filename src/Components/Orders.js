// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Orders = () => {
//   const [openOrders, setOpenOrders] = useState([]);
//   const [closedOrders, setClosedOrders] = useState([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const authToken = localStorage.getItem("authToken");
//         const response = await axios.get("http://localhost:3001/orders", {
//           headers: {
//             Authorization: `Bearer ${authToken}`,
//           },
//         });
//         // Separate open and closed orders
//         const open = [];
//         const closed = [];
//         response.data.forEach((order) => {
//           if (order.status === "open") {
//             open.push(order);
//           } else {
//             closed.push(order);
//           }
//         });
//         setOpenOrders(open);
//         setClosedOrders(closed);
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//       }
//     };

//     fetchOrders();
//   }, []);

//   const renderOrderItems = (items) => {
//     return (
//       <ul>
//         {items.map((item) => (
//           <li key={item.id} className="flex justify-between items-center py-2 border-b border-gray-200">
//             <span className="text-gray-800">{item.name}</span>
//             <span className="text-gray-800">{item.quantity} x ${item.price}</span>
//           </li>
//         ))}
//       </ul>
//     );
//   };

//   return (
//     <div className="container mx-auto">
//       <div className="grid grid-cols-2 gap-8">
//         <div>
//           <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Open Orders</h2>
//           {openOrders.map((order) => (
//             <div key={order.id} className="border rounded-lg shadow-md mb-6 p-6 bg-white">
//               <h3 className="text-lg font-semibold mb-2 text-gray-700">Order #{order.id}</h3>
//               {order.order_items && order.order_items.length > 0 ? (
//                 <div className="mb-4">{renderOrderItems(order.order_items)}</div>
//               ) : (
//                 <p className="text-gray-700">No items found for this order</p>
//               )}
//               <div>
//                 <h4 className="text-lg font-semibold mb-2 text-gray-700">Total Income:</h4>
//                 <p className="text-2xl font-semibold text-green-600">${order.total}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div>
//           <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Closed Orders</h2>
//           {closedOrders.map((order) => (
//             <div key={order.id} className="border rounded-lg shadow-md mb-6 p-6 bg-white">
//               <h3 className="text-lg font-semibold mb-2 text-gray-700">Order #{order.id}</h3>
//               {order.order_items && order.order_items.length > 0 ? (
//                 <div className="mb-4">{renderOrderItems(order.order_items)}</div>
//               ) : (
//                 <p className="text-gray-700">No items found for this order</p>
//               )}
//               <div>
//                 <h4 className="text-lg font-semibold mb-2 text-gray-700">Total Income:</h4>
//                 <p className="text-2xl font-semibold text-green-600">${order.total}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Orders;

import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [openOrders, setOpenOrders] = useState([]);
  const [closedOrders, setClosedOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const authToken = localStorage.getItem("authToken");
        const response = await axios.get("http://localhost:3001/orders", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        // Separate open and closed orders
        const open = [];
        const closed = [];
        response.data.forEach((order) => {
          if (order.status === "open") {
            open.push(order);
          } else {
            closed.push(order);
          }
        });
        setOpenOrders(open);
        setClosedOrders(closed);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const renderOrderItems = (items) => {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id} className="flex justify-between items-center py-2 border-b border-gray-200">
            <span className="text-gray-800">{item.name}</span>
            <span className="text-gray-800">{item.quantity} x ${item.price}</span>
          </li>
        ))}
      </ul>
    );
  };

  const calculateTotal = (orders) => {
    return orders.reduce((total, order) => total + parseFloat(order.total), 0).toFixed(2);
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">Open Orders</h2>
          {openOrders.map((order) => (
            <div key={order.id} className="bg-green-100 p-4 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-2 text-green-800">Order #{order.id} - Pending</h3>
              {order.order_items && order.order_items.length > 0 ? (
                <div className="mb-4">{renderOrderItems(order.order_items)}</div>
              ) : (
                <p className="text-gray-700">No items found for this order</p>
              )}
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-700">Total Income:</h4>
                <p className="text-xl font-semibold text-green-600">${order.total}</p>
              </div>
            </div>
          ))}
          <div className="text-right">
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Total:</h4>
            <p className="text-xl font-semibold text-green-600">${calculateTotal(openOrders)}</p>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">Closed Orders</h2>
          {closedOrders.map((order) => (
            <div key={order.id} className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Order #{order.id}</h3>
              {order.order_items && order.order_items.length > 0 ? (
                <div className="mb-4">{renderOrderItems(order.order_items)}</div>
              ) : (
                <p className="text-gray-700">No items found for this order</p>
              )}
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-700">Total Income:</h4>
                <p className="text-xl font-semibold text-green-600">${order.total}</p>
              </div>
            </div>
          ))}
          <div className="text-right">
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Total:</h4>
            <p className="text-xl font-semibold text-green-600">${calculateTotal(closedOrders)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
