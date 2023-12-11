import React from "react";
import ReactDOM from "react-dom/client";
import AppProvider from "../src/context/AppContext.jsx";
import reducer from "../src/context/reducer.js";
import initialState from "../src/context/initialState.js";
import "./index.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";

// import Root from "./routes/Root.jsx";
// import ErrorPage from "./routes/ErrorPage.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider reducer={reducer} initialState={initialState}>
      <App />
    </AppProvider>
  </React.StrictMode>
);
