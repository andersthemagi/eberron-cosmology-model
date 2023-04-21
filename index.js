import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App.js";

// ReactDom.render(<App />, document.getElementById("root"))
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);