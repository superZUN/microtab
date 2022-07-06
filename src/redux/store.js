import { configureStore } from '@reduxjs/toolkit';
import mydataReducer from './myDataSlice';

export const store = configureStore({
  reducer: {
    mydata: mydataReducer,
  },
});

// import { configureStore } from '@reduxjs/toolkit';
// import mydataReducer from './myDataSlice';

// export const store = configureStore({
//   reducer: {
//     mydata: mydataReducer,
//   },
// });
