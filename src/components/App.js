// Node Module imports
import { createBrowserHistory } from "history";
import React, { lazy, Suspense } from "react";
import {
    Route, Router, Switch,
} from "react-router-dom";
import ReactCSSTransitionReplace from "react-css-transition-replace";

// Includes imports
import Loading from "./includes/Loading";
import Navigation from "./includes/Navigation";

// Lazy import routes
const About = lazy(() => import("./pages/About"));
const Home = lazy(() => import("./pages/Home"));
const Photography = lazy(() => import("./pages/Photography"));
const Work = lazy(() => import("./pages/Work"));

// Work pages
const BRH = lazy(() => import("./pages/work/brh"));
const CIS = lazy(() => import("./pages/work/CIS"));
const DTI = lazy(() => import("./pages/work/DTI"));
const Ezra = lazy(() => import("./pages/work/Ezra"));
const Google = lazy(() => import("./pages/work/Google"));
const IBM = lazy(() => import("./pages/work/IBM"));
const ISSA = lazy(() => import("./pages/work/ISSA"));
const Wayfair = lazy(() => import("./pages/work/Wayfair"));

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

function SwitchContainer({ location }) {
    return (
        <Suspense fallback={Loading}>
            <Switch className="switch" location={location}>
                <Route exact path="/" render={props => <Home {...props} />} /> {/* Home Page */}
                <Route exact path="/about" render={props => <About {...props} />} /> {/* About Page */}
                <Route exact path="/photography" render={props => <Photography {...props} />} /> {/* Photography Page */}
                <Route exact path="/work" render={props => <Work {...props} />} />  {/* Work Page */}

                {/* Work Routes */}
                <Route exact path="/work/brh" render={props => <BRH {...props} />} /> {/* BigRed//Hacks Page */}
                <Route exact path="/work/cis" render={props => <CIS {...props} />} /> {/* Cornell CIS Page */}
                <Route exact path="/work/dti" render={props => <DTI {...props} />} /> {/* Cornell DTI Page */}
                <Route exact path="/work/ezra" render={props => <Ezra {...props} />} /> {/* Ezra Page */}
                <Route exact path="/work/google" render={props => <Google {...props} />} /> {/* Google Page */}
                <Route exact path="/work/ibm" render={props => <IBM {...props} />} /> {/* IBM Page */}
                <Route exact path="/work/issa" render={props => <ISSA {...props} />} /> {/* ISSA Page */}
                <Route exact path="/work/wayfair" render={props => <Wayfair {...props} />} /> {/* Wayfair Page */}
            </Switch>
        </Suspense>
    );
}

function App() {
    return (
        <Router history={customHistory}>
            <div>
                <Navigation />
                <Route
                    render={({ location }) => (
                        <SwitchContainer
                            className="switchContainer"
                            location={location}
                            key={location.pathname}
                        />
                    )}
                />
            </div>
        </Router>
    );
}

export default App;
