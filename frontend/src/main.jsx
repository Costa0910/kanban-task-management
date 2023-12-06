import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AppProvider from "../src/context/AppContext.jsx";
import reducer from "../src/context/reducer.js";
import initialState from "../src/context/initialState.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider reducer={reducer} initialState={initialState}>
      <App />
    </AppProvider>
  </React.StrictMode>
);
