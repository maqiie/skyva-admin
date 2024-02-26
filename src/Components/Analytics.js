// import React, { useEffect, useState } from "react";
// import { LineChart, PieChart } from "react-ui-analytics";
// import axios from "axios";

// const Analytics = () => {
//   const [lineChartData, setLineChartData] = useState([]);
//   const [pieChartData, setPieChartData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch data for line chart
//         const lineChartResponse = await axios.get(
//           "http://localhost:3001/analytics/line"
//         );
//         setLineChartData(lineChartResponse.data);

//         // Fetch data for pie chart
//         const pieChartResponse = await axios.get(
//           "http://localhost:3001/analytics/pie"
//         );
//         setPieChartData(pieChartResponse.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="h-full flex flex-col items-center justify-center bg-gray-100">
//       <h1 className="text-3xl font-semibold mb-6">Analytics Dashboard</h1>
//       <div className="bg-white rounded-lg shadow-md p-6">
//         {/* Line Chart */}
//         <h2 className="text-xl font-semibold mb-4">Line Chart</h2>
//         <LineChart
//           data={lineChartData}
//           xLabel="Date"
//           yLabel="Value"
//           width={600}
//           height={300}
//         />

//         {/* Pie Chart */}
//         <h2 className="text-xl font-semibold mb-4 mt-8">Pie Chart</h2>
//         <PieChart
//           data={pieChartData}
//           width={400}
//           height={300}
//           legendPosition="right"
//         />
//       </div>
//     </div>
//   );
// };

// export default Analytics;
