import React from "react";
import styles from "./Chart.module.css";
import { useSelector } from "react-redux";
import { VictoryChart, VictoryHistogram } from "victory";

const colorSet = [
  ["rgb(103, 58, 183)", "rgba(103, 58, 183, 0.5)"],
  ["rgb(255, 152, 0)", "rgba(255, 152, 0, 0.5)"],
  ["rgb(156, 39, 176)", "rgba(156, 39, 176, 0.5)"],
  ["rgb(0, 188, 212)", "rgba(0, 188, 212, 0.5)"],
  ["rgb(103, 58, 183)", "rgba(103, 58, 183, 0.5)"],
  ["rgb(33, 150, 243)", "rgba(33, 150, 243, 0.5)"],
  ["rgb(244, 67, 54)", "rgba(244, 67, 54, 0.5)"],
  ["rgb(63, 81, 181)", "rgba(63, 81, 181, 0.5)"],
  ["rgb(255, 87, 34)", "rgba(255, 87, 34, 0.5)"],
  ["rgb(121, 85, 72)", "rgba(121, 85, 72, 0.5)"],
  ["rgb(255, 193, 7)", "rgba(255, 193, 7, 0.5)"],
  ["rgb(158, 158, 158)", "rgba(158, 158, 158, 0.5)"],
  ["rgb(232, 30, 99)", "rgba(232, 30, 99, 0.5)"],
  ["rgb(255, 235, 59)", "rgba(255, 235, 59, 0.5)"],
  ["rgb(0, 150, 136)", "rgba(0, 150, 136, 0.5)"],
  ["rgb(76, 175, 80)", "rgba(76, 175, 80, 0.5)"],
  ["rgb(96, 125, 139)", "rgba(zzz, 0.5)"],
  ["rgb(0,0,0)", "rgba(0,0,0, 0.5)"],
];

export function QuickHistogram() {
  const selectedDataHistogram = useSelector(
    (state) => state.mydata.selectedDataHistogram
  );
  //   const selectedHeaders = useSelector((state) => state.mydata.selectedHeaders);

  //   let d = selectedDataHistogram[0];
  //   let d2 = selectedDataHistogram[1];

  let chartStyle = selectedDataHistogram.map((d, i) => ({
    data: { fill: colorSet[i][0], opacity: 0.3 },
  }));

  return (
    <div className={styles.ChartBox}>
      <VictoryChart>
        {selectedDataHistogram.map((d, i) => (
          <VictoryHistogram
            width={300}
            style={chartStyle[i]}
            data={d}
            animate={{ duration: 500 }}
          />
        ))}

        {/* <VictoryHistogram
          style={{ data: { fill: "#00ff33", opacity: 0.3 } }}
          data={d2}
          animate={{ duration: 500 }}
        /> */}
      </VictoryChart>
    </div>
  );
}

export default QuickHistogram;
