import * as React from "react";
import { useEffect } from "react";
import styles from "./DataContainer.module.css";
import QuickChart from "./DataContainer/QuickChart";
import QuickHistogram from "./DataContainer/QuickHistogram";
// import QuickBoxPlot from "./DataContainer/QuickBoxPlot";
import CorrChart from "./DataContainer/CorrChart";

import "handsontable/dist/handsontable.full.css";

import { HotTable } from "@handsontable/react";
// import Handsontable from 'handsontable';

import { useSelector, useDispatch } from "react-redux";

import {
  //   initialize,
  updateData,
  updateSelection,
} from "../../redux/myDataSlice";

// import { useSelector } from 'react-redux';

// register Handsontable's modules
// registerAllModules();

const DataContainer = () => {
  const mydata = useSelector((state) => state.mydata.myData);
  const colHeaderNames = useSelector((state) => state.mydata.colHeaders);

  const dispatch = useDispatch();

  const onBeforeHotChange = (changes) => {
    dispatch(updateData(changes));
    return false;
  };

  const onAfterSelection = (
    r1,
    c1,
    r2,
    c2,
    preventScrolling,
    selectionLayerLevel
  ) => {
    dispatch(
      updateSelection({
        r1: r1,
        c1: c1,
        r2: r2,
        c2: c2,
        l: selectionLayerLevel,
      })
    );
  };

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "/") {
        event.preventDefault();

        // 👇️ your logic here
        window.prompt("sometext", "defaultText");
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <div id="hot-app">
      <div id="quickChart" className={styles.QuickChart}>
        <QuickChart />
        {/* <QuickBoxPlot /> */}
        <QuickHistogram />
        <CorrChart />
      </div>
      <div styleName={styles.hotTable}>
        <HotTable
          data={mydata}
          width="100%"
          height="50vh"
          colHeaders={colHeaderNames}
          // colHeaders={true}
          rowHeaders={true}
          beforeChange={onBeforeHotChange}
          afterSelection={onAfterSelection}
          rowHeights={23}
          colWidths={100}
          selectionMode="multiple" // 'si ngle', 'range' or 'multiple',
          licenseKey="non-commercial-and-evaluation"
        />
      </div>
    </div>
  );
};

export default DataContainer;
