// Node Module imports
import React             from "react";
import ReactDOM          from "react-dom";

// Component Imports
import App                   from "./components/App";
import RegisterServiceWorker from "./components/includes/RegisterServiceWorker";

// CSS Imports
import "./styles/site.less";

ReactDOM.render(
    <App />,
    document.getElementById("root"),
);

RegisterServiceWorker();