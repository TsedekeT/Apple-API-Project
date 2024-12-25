// import React from "react";
// import ReactDOM from "react-dom";
// // import "./index.css";
// import App from "./App";
// // import reportWebVitals from "./reportWebVitals";

// // Bootstrap CSS import 
// import 'bootstrap/dist/css/bootstrap.min.css';


// ReactDOM.render(<App />, document.getElementById("root"));



import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Bootstrap CSS import 
import 'bootstrap/dist/css/bootstrap.min.css';

// React 18 uses createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
