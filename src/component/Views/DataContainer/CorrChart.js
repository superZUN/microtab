import React from 'react';

import { useSelector } from 'react-redux';
import styles from './Chart.module.css';

// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';

const CorrChart = () => {
  const selectedDataCorr = useSelector(
    (state) => state.mydata.selectedDataCorr
  );
  return (
    <div id="CorrChart" className={styles.ChartBox}>
      {selectedDataCorr != null ? (
        <div className={styles.ChartBox}>
          {selectedDataCorr.map((item) => (
            <div>
              {item[0]} x {item[1]} : {item[2]}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default CorrChart;
