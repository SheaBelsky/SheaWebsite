// Node module imports
import React from "react";
import { NavLink } from "react-router-dom";
import NewWindow from "../../media/NewWindow.png";

const MenuItem = ({ content, link }) => (
    <NavLink
        activeClassName="active"
        className="nav-item"
        exact
        to={link}
    >
        {content}
    </NavLink>
);

function Navigation() {
    return (
        <div className="nav">
            <div className="nav-title-container">
                <NavLink
                    activeClassName="ignore"
                    className="nav-title"
                    exact
                    to="/"
                >
                    SHB
                </NavLink>
            </div>
            <div className="nav-item-container">
                <MenuItem
                    link="/about"
                    content="About"
                />
                <MenuItem
                    link="/work"
                    content="Work"
                />
                <MenuItem
                    link="/photography"
                    content="Photography"
                />
                <a
                    href="/img/Shea-H-Belsky-Resume.pdf"
                    className="nav-item"
                    target="_blank"
                >
                    Resume
                    <img src={NewWindow} className="nav-new-window-icon" alt="New window icon" />
                </a>
                <MenuItem
                    link="/contact"
                    content="Contact"
                />
            </div>
        </div>
    );
}

export default Navigation;
