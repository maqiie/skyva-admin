
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Assuming you are using React Router

const Orders = () => {
  const [openOrders, setOpenOrders] = useState([]);
  const [closedOrders, setClosedOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const authToken = localStorage.getItem("authToken");
      const response = await axios.get("https://skyva-api-1.onrender.com/orders", {
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

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleCloseOrder = async (orderId) => {
    try {
      const authToken = localStorage.getItem("authToken");
      await axios.put(
        `https://skyva-api-1.onrender.com/orders/${orderId}/close`,
        {},
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      // After closing the order successfully, you may want to fetch orders again to update the UI
      fetchOrders();
    } catch (error) {
      console.error("Error closing order:", error);
    }
  };

  const renderOrderItems = (order) => {
    return (
      <div>
        <ul>
          {order.order_items.map((item) => (
            <li key={item.id} className="flex justify-between items-center py-2 border-b border-gray-200">
              <div>
                <span className="text-gray-800">{item.name}</span>
                <span className="text-gray-600 ml-2">({item.id})</span>
              </div>
              <span className="text-gray-800">{item.quantity} x ${item.price}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => handleCloseOrder(order.id)}
          className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
        >
          Close Order
        </button>
      </div>
    );
  };

  const calculateTotal = (orders) => {
    let total = 0;
    orders.forEach((order) => {
      order.order_items.forEach((item) => {
        total += parseFloat(item.price) * parseInt(item.quantity);
      });
    });
    return total.toFixed(2);
  };

  return (
    <div className="container mx-auto bg-gray-100 py-8 px-4">
      <Link to="/home" className="block mb-4 text-blue-600 hover:underline">&larr; Go back</Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">Open Orders</h2>
          {openOrders.map((order) => (
            <div key={order.id} className="bg-green-50 p-4 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-2 text-green-800">Order #{order.id} - Pending</h3>
              {order.order_items && order.order_items.length > 0 ? (
                <div className="mb-4">{renderOrderItems(order)}</div>
              ) : (
                <p className="text-gray-700">No items found for this order</p>
              )}
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-700">Total Income:</h4>
                <p className="text-xl font-semibold text-green-800">${calculateTotal([order])}</p>
              </div>
            </div>
          ))}
          <div className="text-right">
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Total:</h4>
            <p className="text-xl font-semibold text-green-800">${calculateTotal(openOrders)}</p>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">Closed Orders</h2>
          {closedOrders.map((order) => (
            <div key={order.id} className="bg-blue-50 p-4 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Order #{order.id}</h3>
              {order.order_items && order.order_items.length > 0 ? (
                <div className="mb-4">{renderOrderItems(order)}</div>
              ) : (
                <p className="text-gray-700">No items found for this order</p>
              )}
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-700">Total Income:</h4>
                <p className="text-xl font-semibold text-blue-800">${calculateTotal([order])}</p>
              </div>
            </div>
          ))}
          <div className="text-right">
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Total:</h4>
            <p className="text-xl font-semibold text-blue-800">${calculateTotal(closedOrders)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;

