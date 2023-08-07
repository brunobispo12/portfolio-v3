import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ThemeContextProvider from "./context/ThemeContext";
import './i18n'
import { Suspense } from 'react'
import LoadingSuspense from "./utils/components/LoadingSuspense";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Suspense fallback={<LoadingSuspense/>}>
        <App />
      </Suspense>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
