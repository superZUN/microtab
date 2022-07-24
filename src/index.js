import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// import reportWebVitals from './reportWebVitals';
import { store } from "./redux/store";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
