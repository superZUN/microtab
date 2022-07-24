import { createSlice, current } from "@reduxjs/toolkit";

import * as statFuncs from "./statFunctions";
import * as myFuncs from "./myDataSliceFunction";
import Arraystat from "arraystat";

// export const mydataState = () => {
//   myData: [];
//   selectedData: [];
//   selectedDataIsAvailable: false;
//   selectedDataCorr: [];
//   selectedDataCorrIsAvailable: false;
//   colHeaders: [];
//   selectedHeaders: [];
//   selectedDataBox: [];
// };

const DATA_CNT = 1000;

const genInitData = (r, c) => {
  let arr = [];
  for (let i = 0; i < r; i++) {
    let row = [];
    for (let j = 0; j < c; j++) {
      if (j % 3 === 0) row.push(Math.random() * (i + 1) * Math.cos(i + 1));
      else if (j % 3 === 1)
        row.push(
          (Math.random() * (i + 1) * Math.sin(i + 1) * Math.sin(i + 1)) / 2
        );
      else if (j % 3 === 2) row.push(Math.random() * 100 + j * 100);
      // row.push(null);
    }
    arr.push(row);
  }
  // console.log(arr);
  return arr;
};

const initialState = {
  myData: genInitData(DATA_CNT, 26),
  selectedData: [],
  selectedDataCorr: [],
  selectedDataIsAvailable: false,
  colHeaders: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "AA",
  ],
  selectedHeaders: [],
  selectedDataBox: [],
  selectedDataHistogram: [],
};

export const mydataSlice = createSlice({
  name: "myData",
  initialState,
  reducers: {
    initialize: (state) => {
      // console.log('hi');
      state.myData = [
        [1, 0, 0],
        [2, 0, 0],
        [3, 0, 0],
      ];
    },
    updateData: (state, action) => {
      // console.log('updateData', action);
      const newData = [...state.myData];

      action.payload.forEach(([row, column, oldValue, newValue]) => {
        let rows = newData.length;
        let cols = newData[0].length;
        if (row >= rows) {
          newData.push([]);
        }
        if (column >= cols) {
          for (let i = 0; i < newData.length; i++) newData[i].push(null);
        }
        newValue === null
          ? (newData[row][column] = null)
          : (newData[row][column] = newValue * 1);
        // console.log(newData);
      });

      state.myData = newData;
    },
    updateSelection: (state, action) => {
      let c1, c2, r1, r2, l;

      const data = current(state.myData);
      // console.log(current(state.myData));

      let selection = [];

      //data 유무 확인 (all null 이면?)
      let dataFlag = false;

      //C1,C2,R1,R2 정의
      [c1, c2, r1, r2] = myFuncs.defineRC(action.payload);

      //multi selection일 때 selection추가 일 경우 selectedData  초기화 하지 않음.
      l = action.payload.l;

      //layerLevel에 따라 데이터 비우거나 추가하기
      if (l === 0) {
        state.selectedHeaders = [];
        state.selectedData = [];
        state.selectedDataBox = [];
        state.selectedDataHistogram = [];
      } else {
        state.selectedData = [...state.selectedData];
        state.selectedDataBox = [...state.selectedDataBox];
        state.selectedHeaders = [...state.selectedHeaders];
        state.selectedDataHistogram = [...state.selectedDataHistogram];
      }
      // console.log("payload", action.payload);
      // console.log("payload", state.selectedHeaders);

      // console.log('selectedHeader:', state.selectedHeaders);

      //data 유효성 검사 :데이터가 하나라도 있으면 flag=true
      for (let c = c1; c <= c2; c++) {
        for (let r = r1; r <= r2; r++) {
          if (data[r][c] != null) dataFlag = true;
        }
      }
      // dataFlag = true;
      //check data is available?
      if (dataFlag) {
        for (let c = c1; c <= c2; c++) {
          let tmpRow = [];
          for (let r = r1; r <= r2; r++) {
            //null data가 나오면 -> null 이후에 data가 있나 확인하고, 데이터를 추가함
            if (data[r][c] === null) {
              let checkEOD = true;
              for (let i = r; i <= r2; i++) {
                checkEOD = data[i][c] != null ? false : checkEOD;
              }
              if (checkEOD) break;
            }
            tmpRow.push(data[r][c]);
          }
          selection.push(tmpRow);
          state.selectedHeaders.push(state.colHeaders[c]);
        }
      } else {
        selection.push([0]);
      }
      // console.log("selectedHeaders", state.selectedHeaders);
      //공통 State update
      for (let i = 0; i <= c2 - c1; i++) {
        let cnt = state.selectedHeaders.length - 1 - (c2 - c1) + i;
        cnt = cnt < 0 ? 0 : cnt;
        let plotHistogram = myFuncs.getHistogramData(selection[i]);

        let plotLine = {
          label: state.selectedHeaders[cnt],
          data: selection[i],
          borderColor: myFuncs.colorSet[cnt][0],
          backgroundColor: myFuncs.colorSet[cnt][1],
        };
        //boxplot
        let boxData = [
          Arraystat(selection[i]).min,
          Arraystat(selection[i]).q1,
          Arraystat(selection[i]).median,
          Arraystat(selection[i]).q3,
          Arraystat(selection[i]).max,
        ];

        // state.selectedData.push(plotData);
        // state.selectedData.push(plotHistogram);
        state.selectedData.push(plotLine);
        state.selectedDataHistogram.push(plotHistogram);
        state.selectedDataBox.push(boxData);
      }

      //2*5 이상일 때 상관계수 분석
      if (
        state.selectedData.length >= 2 &&
        state.selectedData[1].data.length >= 5
      ) {
        let corrResult = [];
        for (let i = 0; i < state.selectedData.length; i++) {
          for (let j = i + 1; j < state.selectedData.length; j++) {
            // console.log('d1:', state.selectedData[(i + 1) * 2 - 1].data);
            // console.log('d2:', state.selectedData[j * 2 - 1].data);

            corrResult.push([
              state.selectedHeaders[i],
              state.selectedHeaders[j],
              statFuncs.getCorrelation(
                state.selectedData[i].data,
                state.selectedData[j].data
              ),
              // ttest(selection[i], selection[j], { mu: 0 }).pValue(),
            ]);
          }
        }
        state.selectedDataCorr = corrResult;
        // console.log(state.selectedDataCorr);
      } else {
        state.selectedDataCorr = null;
      }
      // console.log(state.selectedDataCorr);
    },
  },
});

// Action creators are generated for each case reducer function
export const { initialize, updateData, updateSelection } = mydataSlice.actions;

export default mydataSlice.reducer;
