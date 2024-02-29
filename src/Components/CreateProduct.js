
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ProductForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     size: "Medium",
//     color: "",
//     stock_quantity: "",
//     brand: "",
//     category_id: "",
//     on_offer: false,
//   });

//   const [currentUser, setCurrentUser] = useState(null);
//   const [notification, setNotification] = useState(null);

//   useEffect(() => {
//     // Fetch the logged-in user data from local storage
//     const authToken = localStorage.getItem("authToken");
//     if (authToken) {
//       // Parse the authorization bearer to extract user information
//       const user = parseAuthToken(authToken);
//       setCurrentUser(user);
//     }
//   }, []);

//   const parseAuthToken = (authToken) => {
//     // Extract user information from the authorization bearer
//     // This is where you would parse the bearer token and extract user data
//     // For example, if your token is in the format: Bearer <user_data>, you can extract <user_data> here
//     // Replace this with your logic to parse the authorization bearer and extract user information
//     return authToken;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setFormData({
//       ...formData,
//       image: file,
//     });
//   };

//   const handleCheckboxChange = (e) => {
//     const { name, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: checked,
//     });
//   };

//   const createProduct = async (productData) => {
//     try {
//       const authToken = localStorage.getItem("authToken");
//       if (!authToken) {
//         throw new Error("Authentication token not found");
//       }

//       const response = await axios.post(
//         "http://localhost:3001/products/create_product",
//         productData,
//         {
//           headers: {
//             Authorization: `Bearer ${authToken}`,
//           },
//         }
//       );
//       console.log(response.data);
//       return response.data;
//     } catch (error) {
//       console.error("Error creating product:", error);
//       throw error;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Nest formData under 'product' key
//       const productData = { product: formData };

//       const createdProduct = await createProduct(productData);
//       console.log("Product created:", createdProduct);

//       // Clear form data
//       setFormData({
//         name: "",
//         description: "",
//         price: "",
//         size: "Medium",
//         color: "",
//         stock_quantity: "",
//         brand: "",
//         category_id: "",
//         on_offer: false,
//       });

//       // Show notification
//       setNotification("Product created successfully!");
      
//       // Clear notification after 3 seconds
//       setTimeout(() => {
//         setNotification(null);
//       }, 3000);

//     } catch (error) {
//       console.error("Error creating product:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100">
//       <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
//         <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
//           Create New Product
//         </h1>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-sm font-semibold text-gray-700 mb-1"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               id="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2"
//               placeholder="Enter product name"
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="description"
//               className="block text-sm font-semibold text-gray-700 mb-1"
//             >
//               Description
//             </label>
//             <textarea
//               name="description"
//               id="description"
//               value={formData.description}
//               onChange={handleChange}
//               className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 resize-none py-2"
//               placeholder="Enter product description"
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="price"
//               className="block text-sm font-semibold text-gray-700 mb-1"
//             >
//               Price
//             </label>
//             <input
//               type="number"
//               name="price"
//               id="price"
//               value={formData.price}
//               onChange={handleChange}
//               step="0.01"
//               className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2"
//               placeholder="Enter product price in TZS"
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="size"
//               className="block text-sm font-semibold text-gray-700 mb-1"
//             >
//               Size
//             </label>
//             <select
//               name="size"
//               id="size"
//               value={formData.size}
//               onChange={handleChange}
//               className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2"
//             >
//               <option value="Small">Small</option>
//               <option value="Medium">Medium</option>
//               <option value="Large">Large</option>
//             </select>
//           </div>
//           <div>
//             <label
//               htmlFor="color"
//               className="block text-sm font-semibold text-gray-700 mb-1"
//             >
//               Color
//             </label>
//             <input
//               type="text"
//               name="color"
//               id="color"
//               value={formData.color}
//               onChange={handleChange}
//               className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2"
//               placeholder="Enter product color"
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="stock_quantity"
//               className="block text-sm font-semibold text-gray-700 mb-1"
//             >
//               Stock Quantity
//             </label>
//             <input
//               type="number"
//               name="stock_quantity"
//               id="stock_quantity"
//               value={formData.stock_quantity}
//               onChange={handleChange}
//               className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2"
//               placeholder="Enter stock quantity"
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="brand"
//               className="block text-sm font-semibold text-gray-700 mb-1"
//             >
//               Brand
//             </label>
//             <input
//               type="text"
//               name="brand"
//               id="brand"
//               value={formData.brand}
//               onChange={handleChange}
//               className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2"
//               placeholder="Enter brand"
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="image"
//               className="block text-sm font-semibold text-gray-700 mb-1"
//             >
//               Image
//             </label>
//             <input
//               type="file"
//               accept="image/*"
//               name="image"
//               id="image"
//               onChange={handleImageChange}
//               className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2"
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="category_id"
//               className="block text-sm font-semibold text-gray-700 mb-1"
//             >
//               Category ID
//             </label>
//             <input
//               type="number"
//               name="category_id"
//               id="category_id"
//               value={formData.category_id}
//               onChange={handleChange}
//               className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2"
//               placeholder="Enter category ID"
//             />
//           </div>
//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               name="on_offer"
//               id="on_offer"
//               checked={formData.on_offer}
//               onChange={handleCheckboxChange}
//               className="mr-2 leading-tight text-blue-500 focus:outline-none"
//             />
//             <label htmlFor="on_offer" className="text-sm text-gray-700">
//               On Offer
//             </label>
//           </div>
//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//             >
//               Create Product
//             </button>
//           </div>
//         </form>
//         {notification && (
//           <div className="mt-4 bg-green-200 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
//             <strong className="font-bold">Success!</strong>
//             <span className="block sm:inline"> {notification}</span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductForm;
import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    size: "Medium",
    color: "",
    stock_quantity: "",
    brand: "",
    category_id: "",
    on_offer: false,
    image: null,
  });

  const [currentUser, setCurrentUser] = useState(null);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      const user = parseAuthToken(authToken);
      setCurrentUser(user);
    }
  }, []);

  const parseAuthToken = (authToken) => {
    return authToken;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const createProduct = async (productData) => {
    try {
      const authToken = localStorage.getItem("authToken");
      if (!authToken) {
        throw new Error("Authentication token not found");
      }

      const response = await axios.post(
        "http://localhost:3001/products/create_product",
        productData,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error creating product:", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('product[name]', formData.name);
      formDataToSend.append('product[description]', formData.description);
      formDataToSend.append('product[price]', parseFloat(formData.price));
      formDataToSend.append('product[size]', formData.size);
      formDataToSend.append('product[color]', formData.color);
      formDataToSend.append('product[stock_quantity]', parseInt(formData.stock_quantity));
      formDataToSend.append('product[brand]', formData.brand);
      formDataToSend.append('product[category_id]', parseInt(formData.category_id));
      formDataToSend.append('product[on_offer]', formData.on_offer === "true" || formData.on_offer === true);
      formDataToSend.append('product[image]', formData.image);
  
      // Create the product using axios
      const authToken = localStorage.getItem("authToken");
      if (!authToken) {
        throw new Error("Authentication token not found");
      }
  
      const response = await axios.post(
        "http://localhost:3001/products/create_product",
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      
      // Clear form data
      setFormData({
        name: "",
        description: "",
        price: "",
        size: "Medium",
        color: "",
        stock_quantity: "",
        brand: "",
        category_id: "",
        on_offer: false,
        image: null,
      });
  
      // Show notification
      setNotification("Product created successfully!");
  
      // Clear notification after 3 seconds
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };
  
      

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Create New Product
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-3 rounded-md"
              placeholder="Enter product name"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 resize-none py-2 px-3 rounded-md"
              placeholder="Enter product description"
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-semibold text-gray-700 mb-1">
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              value={formData.price}
              onChange={handleChange}
              step="0.01"
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-3 rounded-md"
              placeholder="Enter product price in TZS"
            />
          </div>
          <div>
            <label htmlFor="size" className="block text-sm font-semibold text-gray-700 mb-1">
              Size
            </label>
            <select
              name="size"
              id="size"
              value={formData.size}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-3 rounded-md"
            >
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div>
            <label htmlFor="color" className="block text-sm font-semibold text-gray-700 mb-1">
              Color
            </label>
            <input
              type="text"
              name="color"
              id="color"
              value={formData.color}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-3 rounded-md"
              placeholder="Enter product color"
            />
          </div>
          <div>
            <label htmlFor="stock_quantity" className="block text-sm font-semibold text-gray-700 mb-1">
              Stock Quantity
            </label>
            <input
              type="number"
              name="stock_quantity"
              id="stock_quantity"
              value={formData.stock_quantity}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-3 rounded-md"
              placeholder="Enter stock quantity"
            />
          </div>
          <div>
            <label htmlFor="brand" className="block text-sm font-semibold text-gray-700 mb-1">
              Brand
            </label>
            <input
              type="text"
              name="brand"
              id="brand"
              value={formData.brand}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-3 rounded-md"
              placeholder="Enter brand"
            />
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-semibold text-gray-700 mb-1">
              Image
            </label>
            <input
              type="file"
              accept="image/*"
              name="image"
              id="image"
              onChange={handleImageChange}
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-3 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="category_id" className="block text-sm font-semibold text-gray-700 mb-1">
              Category ID
            </label>
            <input
              type="number"
              name="category_id"
              id="category_id"
              value={formData.category_id}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-3 rounded-md"
              placeholder="Enter category ID"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="on_offer"
              id="on_offer"
              checked={formData.on_offer}
              onChange={handleCheckboxChange}
              className="mr-2 leading-tight text-blue-500 focus:outline-none"
            />
            <label htmlFor="on_offer" className="text-sm text-gray-700">
              On Offer
            </label>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Create Product
            </button>
          </div>
        </form>
        {notification && (
          <div className="mt-4 bg-green-200 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline"> {notification}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductForm;
