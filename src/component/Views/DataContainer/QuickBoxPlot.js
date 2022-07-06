import React from 'react';

import styles from './Chart.module.css';

import { useSelector } from 'react-redux';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';

HighchartsMore(Highcharts);

const QuickBoxPlot = () => {
  const selectedHeaders = useSelector((state) => state.mydata.selectedHeaders);
  const selectedDataBox = useSelector((state) => state.mydata.selectedDataBox);
  // let selectedDataBox = [
  //   [1, 2, 3, 4, 5],
  //   [2, 3, 4, 5, 6],
  // ];
//   const dispatch = useDispatch();
  const options = {
    chart: {
      type: 'boxplot',
      height: '300px',
    },

    title: {
      text: null,
    },

    legend: {
      enabled: false,
    },

    xAxis: {
      categories: selectedHeaders,
      title: {
        text: null,
      },
    },

    yAxis: {
      title: {
        text: null,
      },
      // plotLines: [
      //   {
      //     value: 932,
      //     color: 'red',
      //     width: 1,
      //     label: {
      //       text: 'Theoretical mean: 932',
      //       align: 'center',
      //       style: {
      //         color: 'gray',
      //       },
      //     },
      //   },
      // ],
    },

    series: [
      {
        name: 'Observations',
        data: selectedDataBox,
        tooltip: {
          headerFormat: '<em>Experiment No {point.key}</em><br/>',
        },
      },
      {
        name: 'Outliers',
        color: Highcharts.getOptions().colors[0],
        type: 'scatter',
        data: [
          // x, y positions where 0 is the first category
          // [0, 644],
          // [4, 718],
          // [4, 951],
          // [4, 969],
        ],
        marker: {
          fillColor: 'white',
          lineWidth: 1,
          lineColor: Highcharts.getOptions().colors[0],
        },
        tooltip: {
          pointFormat: 'Observation: {point.y}',
        },
      },
    ],
  };
//   const chartComponentRef = useRef < HighchartsReact.RefObject > null;
  return (
    <div className={styles.ChartBox}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        // ref={chartComponentRef}
        // {...props}
      />
    </div>
  );
};

export default QuickBoxPlot;
