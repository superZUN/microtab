import React from "react";

import { useSelector } from "react-redux";
import styles from "./Chart.module.css";

// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';

const CorrChart = () => {
  const selectedDataCorr = useSelector(
    (state) => state.mydata.selectedDataCorr
  );
  // console.log("correlation:", selectedDataCorr);
  const filteredCorr =
    selectedDataCorr != null
      ? selectedDataCorr.filter((d) => d[2] > 0.3)
      : null;
  // console.log("correlation filtered:", filteredCorr);
  return (
    <div id="CorrChart" className={styles.ChartBox}>
      {filteredCorr != null ? (
        <div className={styles.ChartBox}>
          {filteredCorr.map((item, i) => (
            <div key={i}>
              {item[0]} x {item[1]} : {item[2].toFixed(2)}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default CorrChart;
