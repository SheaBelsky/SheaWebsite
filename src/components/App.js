// Node Module imports
import React, { Fragment } from "react";
import { createBrowserHistory } from "history";
import propTypes from "prop-types";
import {
    Route, Router, Switch,
} from "react-router-dom";
import ReactCSSTransitionReplace from "react-css-transition-replace";

// Includes imports
import Navigation from "./includes/Navigation";

// Main pages
import Home from "./pages/Home";
import Photography from "./pages/Photography";
import Work from "./pages/Work";

// Work pages
import AutismStories from "./pages/work/AutismStories";
import BRH from "./pages/work/BRH";
import CIS from "./pages/work/CIS";
import DTI from "./pages/work/DTI";
import Ezra from "./pages/work/Ezra";
import Google from "./pages/work/Google";
import IBM from "./pages/work/IBM";
import ISSA from "./pages/work/ISSA";
import Mentra from "./pages/work/Mentra";
import Rapid from "./pages/work/Rapid";
import SDPB from "./pages/work/SDPB";
import Wayfair from "./pages/work/Wayfair";

// Require these files so Webpack outputs them
require("../media/favicon.ico");
require("../media/resume/Shea-H-Belsky-Resume.pdf");

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
        <Switch className="switch" location={location}>
            <Route exact path="/" component={Home} /> {/* Home Page */}
            <Route exact path="/photography" component={Photography} /> {/* Photography Page */}
            <Route exact path="/work" component={Work} />  {/* Work Page */}

            {/* Work Routes */}
            <Route exact path="/work/autism-stories" component={AutismStories} /> {/* Autism Stories */}
            <Route exact path="/work/brh" component={BRH} /> {/* BigRed//Hacks Page */}
            <Route exact path="/work/cis" component={CIS} /> {/* Cornell CIS Page */}
            <Route exact path="/work/dti" component={DTI} /> {/* Cornell DTI Page */}
            <Route exact path="/work/ezra" component={Ezra} /> {/* Ezra Page */}
            <Route exact path="/work/google" component={Google} /> {/* Google Page */}
            <Route exact path="/work/ibm" component={IBM} /> {/* IBM Page */}
            <Route exact path="/work/issa" component={ISSA} /> {/* ISSA Page */}
            <Route exact path="/work/mentra" component={Mentra} /> {/* Mentra Page */}
            <Route exact path="/work/rapid" component={Rapid} /> {/* Rapid Prototyping Page */}
            <Route exact path="/work/slopeday" component={SDPB} /> {/* Rapid Prototyping Page */}
            <Route exact path="/work/wayfair" component={Wayfair} /> {/* Wayfair Page */}

            { /* 404 */}
            <Route path="*" exact={true} component={Home} />
        </Switch>
    );
}

SwitchContainer.propTypes = {
    location: propTypes.object.isRequired,
};

function App() {
    return (
        <Router history={customHistory}>
            <Fragment>
                <Navigation />
                <Route
                    render={({ location }) => (
                        <ReactCSSTransitionReplace
                            transitionName="fade-wait"
                            transitionEnterTimeout={1000}
                            transitionLeaveTimeout={1000}
                        >
                            <SwitchContainer
                                className="switchContainer"
                                location={location}
                                key={location.pathname}
                            />
                        </ReactCSSTransitionReplace>
                    )}
                />
            </Fragment>
        </Router>
    );
}

export default App;
