// Node Module imports
import { createBrowserHistory }  from "history";
import React                     from "react";
import { Route, Router, Switch } from "react-router-dom";

// Includes imports
import HomeHero              from "./includes/HomeHero";
import Navigation            from "./includes/Navigation";

require("./../media/favicon.ico");
require("./../media/resume/Shea-H-Belsky-Resume.pdf");

// Page imports
import About       from "./pages/About";
import Contact     from "./pages/Contact";
import Photography from "./pages/Photography";
import Work        from "./pages/Work";

// Easter egg
const consoleCSS = "background:#476174;color:white;font-family:Arial;padding:5px 5px 5px 3px;border-radius:5px;line-height:20px;";
console.log("%cHello there, traveller!", consoleCSS);
console.log("%cMy website's open source!", consoleCSS);
console.log("%chttps://www.github.com/shbelsky/sheawebsite", consoleCSS);
console.log("%cAnd may I offer you a gif in this wonderful time?", consoleCSS);
console.log("%chttps://i.imgur.com/MGG3Er1.gif", consoleCSS);

// Google Analytics
// Source: https://stackoverflow.com/a/44036258/2246272
const history = createBrowserHistory();
const initGA = (history) => {
    (function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,"script","https://www.google-analytics.com/analytics.js","ga");
    ga("create", "UA-73975402-1", "auto");
    ga("send", "pageview");
    history.listen((location) => {
        ga("send", "pageview", location.pathname);
    });
};
initGA(history);

export default function () {
    return (
        <Router history={ history }>
            <div>
                <Navigation />
                <Switch>
                    <Route exact path={"/"}            component={ HomeHero } />      {/* Home Page */}
                    <Route exact path={"/about"}       component={ About }    />      {/* About Page */}
                    <Route exact path={"/photography"} component={ Photography }   /> {/* Photography Page */}
                    <Route exact path={"/work"}        component={ Work }     />      {/* Work Page */}
                    <Route exact path={"/contact"}     component={ Contact }  />      {/* Contact Page */}
                </Switch>
            </div>
        </Router>
    );
}
