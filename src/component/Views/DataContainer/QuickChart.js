import React from "react";

import styles from "./Chart.module.css";

import { useSelector } from "react-redux";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const QuickChart = () => {
  const selectedData = useSelector((state) => state.mydata.selectedData);
  // const selectedHeaders = useSelector((state) => state.mydata.selectedHeaders);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };
  let labels = [];
  if (selectedData[0]) labels = selectedData[0].data.map((a, i) => i);

  const data = {
    labels,
    datasets: selectedData,
  };
  // console.log(data)

  return (
    <div className={styles.ChartBox}>
      <Line options={options} data={data} />
    </div>
  );
};

export default QuickChart;
