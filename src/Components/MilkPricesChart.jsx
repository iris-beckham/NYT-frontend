import { Bar } from "react-chartjs-2";
import { useState } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  Legend,
  LinearScale,
  Tooltip,
  Title,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const generateGrayscaleColors = (numColors) => {
  const colors = [];
  const step = 255 / (numColors - 1);
  for (let i = 0; i < numColors; i++) {
    const value = Math.round(step * i);
    colors.push(`rgb(${value}, ${value}, ${value})`);
  }
  return colors;
};

const MilkPriceChart = () => {
  const [chartData, setChartData] = useState({
    labels: ["1970", "1980", "1990", "2000", "2010", "2020", "2024"], // x axis
    datasets: [
      {
        label: "Milk Prices($)",
        data: [1.32, 1.6, 2.15, 2.79, 3.32, 3.5, 4.0],
        backgroundColor: generateGrayscaleColors(7),
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: { display: true, text: "The Price Of Milk Over 50 years" },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
          color: "gray",
          font: {
            weight: "bold",
            size: "12px",
          },
        },
        ticks: {
          color: "darkgray",
          font: {
            weight: "bold",
          },
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Price (in dollars)",
          color: "gray",
          font: {
            weight: "bold",
            size: "12px",
          },
        },
        ticks: {
          color: "darkgray",
          font: {
            weight: "bold",
          },
        },
      },
    },
  };

  return (
    <div>
      <div className="mr-32 hover:scale-105 hover:shadow-lg hover:shadow-grey-200" style={{ height: "500px", width: "500px" }}>
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default MilkPriceChart;
