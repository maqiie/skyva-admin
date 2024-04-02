
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://skyva-api.vercel.app/products");
        setProducts(response.data);

        response.data.forEach((product) => {
          console.log("Image URL for product:", product.image_url);
        });
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`https://skyva-api.vercel.app/products/${productId}`);
      // Remove the deleted product from the local state
      setProducts(products.filter((product) => product.id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800">Products</h2>

        <Link to="/home" className="block mb-4 text-blue-600 hover:underline">
          &larr; Go back
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <img
                src={`https://skyva-api.vercel.app${product.image_url}`} // Ensure the full URL is included here
                alt={product.name}
                className="h-80 w-72 object-cover rounded-t-xl"
                onError={(e) => {
                  console.error("Error loading image:", e);
                }}
              />

              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-gray-700 font-semibold">
                    Price: ${product.price}
                  </p>
                  <p className="text-gray-700">Qty: {product.stock_quantity}</p>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-gray-700">Brand: {product.brand}</p>
                  <p className="text-gray-700">Color: {product.color}</p>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-gray-700">Size: {product.size}</p>
                  {product.on_offer ? (
                    <p className="text-green-600 font-semibold">On Offer</p>
                  ) : (
                    <p className="text-gray-700">Not on Offer</p>
                  )}
                </div>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded focus:outline-none focus:bg-red-600 transition duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
