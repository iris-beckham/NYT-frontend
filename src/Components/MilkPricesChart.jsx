import { Bar, Line } from "react-chartjs-2";
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

const generateRainbowColors = (numColors) => {
  const colors = [];
  for (let i = 0; i < numColors; i++) {
    const hue = (i * 360) / numColors;
    colors.push(`hsl(${hue}, 100%, 50%)`);
  }
  return colors;
};

const MilkPriceChart = () => {
  const [chartData, setChartData] = useState({
    labels: ["1970", "1980", "1990", "2000", "2010", "2020", "2024"], // x axis
    datasets: [
      {
        label: "Milk Prices Over 50 years ($)",
        data: [1.32, 1.6, 2.15, 2.79, 3.32, 3.5, 4.0], // y axis
        backgroundColor: generateRainbowColors(7), // Apply rainbow colors
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
      title: { display: true, text: "Milk Price Chart" },
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





