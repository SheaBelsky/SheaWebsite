// Node module imports
import React from "react";
import {
    Route, Switch, withRouter,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// Includes imports
import HomeHero from "./includes/HomeHero";
import Navigation from "./includes/Navigation";

// Page imports
import About from "./pages/About";
import Contact from "./pages/Contact";
import Photography from "./pages/Photography";
import Work from "./pages/Work";

// Work pages

function Routes(props) {
    const { location } = props;
    return (
        <div>
            <Navigation />
            <TransitionGroup className="transitioner">
                <CSSTransition
                    classNames="fade"
                    key={location.key}
                    timeout={{
                        enter: 500,
                        exit: 500,
                    }}
                    mountOnEnter={true}
                    unmountOnExit={true}
                >
                    <div>
                        <Switch location={location}>
                            <Route exact path="/" component={HomeHero} />    {/* Home Page */}
                            <Route exact path="/about" component={About} />    {/* About Page */}
                            <Route exact path="/photography" component={Photography} /> {/* Photography Page */}
                            <Route exact path="/work" component={Work} />    {/* Work Page */}
                            <Route exact path="/contact" component={Contact} />    {/* Contact Page */}
                        </Switch>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default withRouter(Routes);
