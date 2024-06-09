import { Line } from "react-chartjs-2";
import { useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Title,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const generateGrayscaleColors = (numColors) => {
  const colors = [];
  const step = 255 / (numColors - 1); // Calculate the step for each color in grayscale
  for (let i = 0; i < numColors; i++) {
    const value = Math.round(step * i);
    colors.push(`rgb(${value}, ${value}, ${value})`);
  }
  return colors;
};

const grayscaleColors = generateGrayscaleColors(3); // Generate 3 grayscale colors

const TrainChart = () => {
  const [chartData, setChartData] = useState({
    labels: ["1970", "1980", "1990", "2000", "2010", "2020"], // x axis
    datasets: [
      {
        label: "MTA Train and Bus Fare (in dollars)",
        data: [0.3, 0.6, 1.15, 1.5, 2.25, 2.9], // y axis
        backgroundColor: "rgba(0, 0, 0, 0)", // No fill for the line area
        borderColor: grayscaleColors[0],
        borderWidth: 2,
        pointBackgroundColor: grayscaleColors[0],
        pointBorderColor: grayscaleColors[0],
        pointRadius: 5,
        pointHoverRadius: 7,
        fill: false, // Don't fill the area under the line
      },
      {
        label: "NYC Ferry Price (in dollars)",
        data: [0.25, 0.5, 0.75, 1, 1.35, 4.0], // y axis
        backgroundColor: "rgba(0, 0, 0, 0)", // No fill for the line area
        borderColor: grayscaleColors[1],
        borderWidth: 2,
        pointBackgroundColor: grayscaleColors[1],
        pointBorderColor: grayscaleColors[1],
        pointRadius: 5,
        pointHoverRadius: 7,
        fill: false, // Don't fill the area under the line
      },
      {
        label: "Gas Price (in dollars)",
        data: [0.36, 1.19, 1.16, 1.56, 2.84, 2.24], // y axis
        backgroundColor: "rgba(0, 0, 0, 0)", // No fill for the line area
        borderColor: grayscaleColors[2],
        borderWidth: 2,
        pointBackgroundColor: grayscaleColors[2],
        pointBorderColor: grayscaleColors[2],
        pointRadius: 5,
        pointHoverRadius: 7,
        fill: false, // Don't fill the area under the line
      },
    ],
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Train/Bus, Ferry and Gas Prices Over 50 Years",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Fare (in dollars)",
        },
      },
    },
    animation: {
      duration: 2000, // duration of the animation in milliseconds
      easing: "easeInOutQuad", // easing function for the animation
    },
  };

  return (
    <div>
      {/* <div>MTA Fare Price Chart</div> */}
      <div style={{ height: "400px", width: "600px" }}>
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default TrainChart;
