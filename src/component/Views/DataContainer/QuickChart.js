import React from 'react';

import styles from './Chart.module.css';

import { useSelector } from 'react-redux';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import bellCurve from 'highcharts/modules/histogram-bellcurve'; //module

bellCurve(Highcharts); //init module

const QuickChart = () => {
  const selectedData = useSelector((state) => state.mydata.selectedData);

  const options = {
    chart: {
      height: 300,
      zoomType: 'xy',
      labels: {
        enabled: false,
      },
    },
    boost: {
      useGPUTranslations: true,
    },
    title: { text: null },
    xAxis: [
      {
        title: { text: null },
        alignTicks: false,
      },
      {
        title: { text: null },
        alignTicks: false,
        opposite: true,
      },
    ],

    yAxis: [
      {
        title: { text: null },
      },
      {
        title: { text: null },
        opposite: true,
      },
    ],
    plotOptions: {
      histogram: {
        accessibility: {
          point: {
            valueDescriptionFormat:
              '{index}. {point.x:.3f} to {point.x2:.3f}, {point.y}.',
          },
        },
      },
    },

    series: selectedData,
  };
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

export default QuickChart;
