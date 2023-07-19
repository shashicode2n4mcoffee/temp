import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const LineGraph = () => {
  const [data, setData] = useState({
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Dataset 1",
        data: [10, 20, 30, 40, 50, 60],
        borderColor: "rgba(255, 99, 71, 1)", // Red
        backgroundColor: "rgba(255, 99, 71, 0.2)", // Red (with opacity)
      },
      {
        label: "Dataset 2",
        data: [15, 25, 35, 45, 55, 65],
        borderColor: "rgba(54, 162, 235, 1)", // Blue
        backgroundColor: "rgba(54, 162, 235, 0.2)", // Blue (with opacity)
      },
    ],
  });

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate new random data with one less bar
      const newData = {
        labels: [...data.labels, Math.floor(Math.random() * 100)],
        datasets: [
          {
            ...data.datasets[0],
            data: [...data.datasets[0].data, Math.floor(Math.random() * 100)],
            borderColor: "rgba(255, 99, 71, 1)",
            backgroundColor: "rgba(255, 99, 71, 0.2)",
          },
          {
            ...data.datasets[1],
            data: [...data.datasets[1].data, Math.floor(Math.random() * 100)],
            borderColor: "rgba(54, 162, 235, 1)",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
          },
        ],
      };

      setData(newData);
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [data]);

  const chartStyle = {
    backgroundColor: "black",
  };

  return (
    <div style={{ height: "400px", backgroundColor: "black" }}>
      <Line data={data} options={options} style={chartStyle} />
    </div>
  );
};

export default LineGraph;
