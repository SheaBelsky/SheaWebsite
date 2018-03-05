// Node Module imports
import React                            from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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

const consoleCSS = "background: #476174; color: white; font-family: Arial; padding: 5px 5px 5px 3px; border-radius: 5px; line-height: 20px;";

console.log("%cHello there traveller!", consoleCSS);

console.log("%cMy website's open source!", consoleCSS);

console.log("%chttps://www.github.com/shbelsky/sheawebsite", consoleCSS);

console.log("%cAnd may I offer you a gif in this troubling time?", consoleCSS);

console.log("%chttps://i.imgur.com/MGG3Er1.gif", consoleCSS);

export default function () {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
}
