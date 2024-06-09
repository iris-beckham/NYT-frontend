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
  const step = 255 / (numColors - 1); // Calculate the step for each color in grayscale
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
        data: [1.32, 1.6, 2.15, 2.79, 3.32, 3.5, 4.0], // y axis
        backgroundColor: generateGrayscaleColors(7), // Apply grayscale colors
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
  };

  return (
    <div>
      {/* <div>MilkPriceChart</div> */}
      <div style={{ height: "400px", width: "600px" }}>
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default MilkPriceChart;
