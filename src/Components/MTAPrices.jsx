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

const prideColors = [
  "rgba(255, 0, 0, 1)", // red
  "rgba(255, 165, 0, 1)", // orange
  "rgba(255, 255, 0, 1)", // yellow
  "rgba(0, 128, 0, 1)", // green
  "rgba(0, 0, 255, 1)", // blue
  "rgba(128, 0, 128, 1)", // purple
];

const TrainChart = () => {
  const [chartData, setChartData] = useState({
    labels: ["1970", "1980", "1990", "2000", "2010", "2020"], // x axis
    datasets: [
      {
        label: "MTA Train and Bus Fare (in dollars)",
        data: [0.3, 0.6, 1.15, 1.5, 2.25, 2.9], // y axis
        backgroundColor: "rgba(0, 0, 0, 0)", // No fill for the line area
        borderColor: prideColors,
        borderWidth: 2,
        pointBackgroundColor: prideColors,
        pointBorderColor: prideColors,
        pointRadius: 5,
        pointHoverRadius: 7,
        fill: false, // Don't fill the area under the line
      },
      {
        label: "NYC Ferry Price (in dollars)",
        data: [0.25, 0.5, 0.75, 1, 1.35, 4.0], // y axis
        backgroundColor: "rgba(0, 0, 0, 0)", // No fill for the line area
        borderColor: prideColors,
        borderWidth: 2,
        pointBackgroundColor: prideColors,
        pointBorderColor: prideColors,
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
      title: { display: true, text: "MTA Fare Prices Over the Past 50 Years" },
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






