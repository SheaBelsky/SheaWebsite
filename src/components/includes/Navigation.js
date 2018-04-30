// Node module imports
import React, { Component } from "react";
import { NavLink }          from "react-router-dom";
import NewWindow            from "../../media/NewWindow.png";

const MenuItem = ({content, link}) => {
    return (
        <NavLink
            activeClassName= {"active"}
            className=       {"nav-item"}
            exact
            to=              {link}
        >
            {content}
        </NavLink>
    );
};

export default class extends Component {
    render () {
        return (
            <div className={"nav"}>
                <div className={"nav-title-container"}>
                    <NavLink
                        activeClassName={"ignore"}
                        className={"nav-title"}
                        exact
                        to={"/"}
                    >
                        SHB
                    </NavLink>
                </div>
                <div className={"nav-item-container"}>
                    <MenuItem
                        link=    {"/about"}
                        content= {"About"}
                    />
                    <MenuItem
                        link=    {"/work"}
                        content= {"Work"}
                    />
                    <MenuItem
                        link=    {"/photography"}
                        content= {"Photography"}
                    />
                    <a
                        href=      {"/img/Shea-H-Belsky-Resume.pdf"}
                        className= {"nav-item"}
                        target=    {"_blank"}>
                        Resume
                        <img src={NewWindow} className={"nav-new-window-icon"} />
                    </a>
                    <MenuItem
                        link=    {"/contact"}
                        content= {"Contact"}
                    />
                </div>
            </div>
        );
    }
}
