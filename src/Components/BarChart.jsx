import React, { useState, useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import ReactDOM from "react-dom";
import "chart.js/auto";
import TooltipContent from "./TooltipContent";

const BarChart = () => {
  const [data, setData] = useState({
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Bar Chart Example",
        data: [12, 19, 30, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 71, 0.6)", // Red
          "rgba(255, 165, 0, 0.6)", // Orange
          "rgba(255, 165, 0, 0.6)", // Orange
          "rgba(54, 162, 235, 0.6)", // Blue
          "rgba(255, 99, 71, 0.6)", // Red
          "rgba(255, 99, 71, 0.6)", // Red
        ],
      },
    ],
  });

  useEffect(()=>{
    
  },[])

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate new random data with one less bar
      const newData = {
        labels: [...data.labels,Math.floor(Math.random()*100)],
        datasets: [
          {
            ...data.datasets[0],
            data: [...data.datasets[0].data, Math.floor(Math.random()*100)],
            backgroundColor: [...data.datasets[0].backgroundColor, "red"],
          },
        ],
      };

      setData(newData);
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [data]);

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
        external: ({ chart, tooltip }) => {
          if (tooltip && tooltip.dataPoints && tooltip.dataPoints.length) {
            const index = tooltip.dataPoints[0].dataIndex;
            const value = tooltip.dataPoints[0].formattedValue;

            const tooltipContent = (
              <TooltipContent value={value} label={data.labels[index]} />
            );

            const tooltipElement = chart.canvas.parentNode.querySelector(
              "#custom-tooltip"
            );

            if (tooltipElement) {
              ReactDOM.render(tooltipContent, tooltipElement);
              tooltipElement.style.display = "block";

              // Position the tooltip relative to the chart
              const position = chart.canvas.getBoundingClientRect();
              tooltipElement.style.left =
                position.left + tooltip.caretX + "px";
              tooltipElement.style.top =
                position.top + tooltip.caretY + 200 + "px";

                console.log('====',position.left + tooltip.caretX, position.top + tooltip.caretY )
            }
          } else {
            const tooltipElement = chart.canvas.parentNode.querySelector(
              "#custom-tooltip"
            );

            if (tooltipElement) {
              ReactDOM.unmountComponentAtNode(tooltipElement);
              tooltipElement.style.display = "none";
            }
          }
        },
      },
    },
  };

  const chartStyle = {
    backgroundColor: "black",
    width:"100%"
  };

  const tooltipRef = useRef(null);

  return (
    <div style={{height:"400px", backgroundColor:"black"}}>
      <div
        id="custom-tooltip"
        ref={tooltipRef}
        style={{ position: "absolute", display: "none" }}
      ></div>
      <Bar data={data} options={options} style={chartStyle} />
    </div>
  );
};

export default BarChart;
