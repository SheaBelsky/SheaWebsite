// Node Module imports
import { createBrowserHistory } from "history";
import React from "react";
import {
    Route, Router, Switch, withRouter,
} from "react-router-dom";

// Routes
import Navigation from "./includes/Navigation";
import Routes from "./Routes";


// Require these files so Webpack outputs them
require("./../media/favicon.ico");
require("./../media/resume/Shea-H-Belsky-Resume.pdf");

// Easter egg
const consoleCSS = "background:#476174;color:white;font-family:Arial;padding:5px 5px 5px 3px;border-radius:5px;line-height:20px;";
console.log("%cHello there, traveller!", consoleCSS);
console.log("%cMy website's open source!", consoleCSS);
console.log("%chttps://www.github.com/sheabelsky/sheawebsite", consoleCSS);
console.log("%cAnd may I offer you a gif in this wonderful time?", consoleCSS);
console.log("%chttps://i.imgur.com/MGG3Er1.gif", consoleCSS);

// Google Analytics
// Source: https://stackoverflow.com/a/44036258/2246272
const customHistory = createBrowserHistory();
const initGA = (history) => {
    (function (i, s, o, g, r, a, m) {
        i.GoogleAnalyticsObject = r; i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments);
        }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m);
    }(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga"));
    ga("create", "UA-73975402-1", "auto");
    ga("send", "pageview");
    history.listen((location) => {
        ga("send", "pageview", location.pathname);
    });
};
initGA(customHistory);

function App() {
    return (
        <div>
            <Router history={customHistory}>
                <div>
                    <Navigation />
                    <Routes />
                </div>
            </Router>
        </div>
    );
}

export default App;
