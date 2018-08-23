// Node module imports
import React, { Component } from "react";

class PageTemplate extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const {
            children,
            className,
            fluid,
            pageCoverImage,
            title,
        } = this.props;
        const pageClass = `page${fluid === true ? " fluid" : ""} ${className}`;
        const pageCoverPhotoURL = require(`../../media/${pageCoverImage}`);
        const pageCoverStyles = {
            background: `no-repeat center center url('${pageCoverPhotoURL}')`,
            backgroundSize: "cover",
        };

        return (
            <div className={pageClass} id="page-container">
                <div className="page-cover" style={pageCoverStyles}>
                    <div className="page-title">
                        {title}
                    </div>
                </div>
                <div className="page-content">
                    {children}
                </div>
            </div>
        );
    }
}

export default PageTemplate;
