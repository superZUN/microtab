import React from "react";

import { useSelector } from "react-redux";
import styles from "./Chart.module.css";

import { VictoryChart, VictoryTheme, VictoryScatter } from "victory";

// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';

const CorrChart = () => {
  const selectedDataCorr = useSelector(
    (state) => state.mydata.selectedDataCorr
  );
  const selectedData = useSelector((state) => state.mydata.selectedData);

  // console.log("correlation:", selectedDataCorr);
  const filteredCorr =
    selectedDataCorr != null
      ? selectedDataCorr.filter((d) => d[4] > 0.3)
      : null;

  const scatterDataSet =
    filteredCorr != null
      ? filteredCorr.map((item, i) => {
          console.log("data1:", selectedData[item[0]].data);
          console.log("data2:", selectedData[item[1]].data);
          let scatterData = [];

          for (let i = 0; i < selectedData[item[0]].data.length; i++) {
            // [
            //   { x: 1, y: 2 },
            //   { x: 2, y: 3 }
            // ]
            scatterData.push({
              x: selectedData[item[0]].data[i],
              y: selectedData[item[1]].data[i],
            });
          }

          return scatterData;
        })
      : null;
  // console.log("scatter data:", scatterDataSet[0]);
  // console.log("correlation filtered:", filteredCorr);
  return (
    <div id="CorrChart" className={styles.ChartBox}>
      {filteredCorr != null ? (
        <div className={styles.ChartBox}>
          {filteredCorr.map((item, i) => (
            <div key={i}>
              {item[2]} x {item[3]} : {item[4].toFixed(2)}
              <VictoryChart
                theme={VictoryTheme.material}
                // domain={{ x: [0, 5], y: [0, 7] }}
              >
                <VictoryScatter
                  style={{ data: { fill: "#c43a31" } }}
                  size={1}
                  data={scatterDataSet[i]}
                />
              </VictoryChart>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default CorrChart;
