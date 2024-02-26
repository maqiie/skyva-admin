import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import axios from "axios";

const Analytics = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Votes",
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/analytics");
        const { labels, data } = response.data;
        setData({
          labels: labels,
          datasets: [
            {
              ...data,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const ctx = document.getElementById("analyticsChart");
    const existingChart = Chart.getChart(ctx);
    if (existingChart) {
      existingChart.destroy();
    }

    const newChart = new Chart(ctx, {
      type: "pie",
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
          title: {
            display: true,
            text: "Distribution of Votes",
            color: "black",
            font: {
              size: 16,
              weight: "bold",
            },
          },
        },
      },
    });

    return () => {
      if (newChart) {
        newChart.destroy();
      }
    };
  }, [data]);

  return (
    <div className="h-full flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6">Analytics Dashboard</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <canvas id="analyticsChart"></canvas>
      </div>
    </div>
  );
};

export default Analytics;
