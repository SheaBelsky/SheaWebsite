// Node module imports
import React from "react";

import Footer from "./Footer";

function PageTemplate(props) {
    const {
        children,
        className,
        fluid,
        subtitle,
        title,
    } = props;
    const pageClass = `page${fluid === true ? " fluid" : ""} ${className}`;
    return (
        <div className={pageClass} id="page-container">
            <div className="page-cover">
                {title && (
                    <div className="page-title">
                        {title}
                    </div>
                )}
                {subtitle && (
                    <div className="page-subtitle">
                        {subtitle}
                    </div>
                )}
            </div>
            <div className="page-content">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default PageTemplate;
