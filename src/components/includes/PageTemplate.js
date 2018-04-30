// Node module imports
import Fade                 from "react-reveal/Fade";
import React, { Component } from "react";

export default class extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render () {
        const pageClass       = `page${this.props.fluid === true ? " fluid" : ""} ${this.props.className}`;
        const pageCoverPhoto  = require(`../../media/${this.props.pageCoverImage}`);
        const pageCoverStyles = {
            background: `no-repeat center center url('${pageCoverPhoto}')`,
            backgroundSize: "cover"
        };

        return (
            <Fade className={pageClass} delay={0} duration={800} id="page-container">
                <div className={"page-cover"} style={pageCoverStyles}>
                    <div className={"page-title"}>
                        {this.props.title}
                    </div>
                </div>
                <div className={"page-content"}>
                    {this.props.children}
                </div>
            </Fade>
        );
    }
}
