// Node module imports
import React from "react";
import propTypes from "prop-types";
import { NavLink } from "react-router-dom";

// Asset imports
import NewWindow from "../../media/NewWindow.png";

/**
 * Represents a unique link in the navigation that goes to anothe rpage within the website
 * @param {string} content The inner text of the link
 * @param {string} link The page to which the link will go to
 */
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

MenuItem.propTypes = {
    content: propTypes.string.isRequired,
    link: propTypes.string.isRequired,
};

function Navigation() {
    return (
        <nav className="nav">
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
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Resume
                    <img alt="" src={NewWindow} className="nav-new-window-icon" />
                </a>
            </div>
        </nav>
    );
}

export default Navigation;
