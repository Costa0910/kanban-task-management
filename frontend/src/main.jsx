import React from "react";
import ReactDOM from "react-dom/client";
import AppProvider from "../src/context/AppContext.jsx";
import reducer from "../src/context/reducer.js";
import defaultState from "../src/context/initialState.js";
import { getState } from "./utils/localStorage.js";
import "./index.css";
import App from "./App.jsx";

const savedState = getState();

// use local storage to initialize state if exist
const initialState = savedState || defaultState;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider reducer={reducer} initialState={initialState}>
      <App />
    </AppProvider>
  </React.StrictMode>
);
