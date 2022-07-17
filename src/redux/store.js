import { configureStore } from "@reduxjs/toolkit";
import mydataReducer from "./myDataSlice";

export const store = configureStore({
  reducer: {
    mydata: mydataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

// **** for big data
// const store = configureStore({
//   // ...
// middleware: (getDefaultMiddleware) => getDefaultMiddleware({
//   immutableCheck: {

//       // Ignore state paths, e.g. state for 'items':
//       ignoredPaths: ['items.data']

//   },
//   serializableCheck: { ignoredPaths: ['some.nested.path'] }
// })
// })

// import { configureStore } from '@reduxjs/toolkit';
// import mydataReducer from './myDataSlice';

// export const store = configureStore({
//   reducer: {
//     mydata: mydataReducer,
//   },
// });
