// Node module imports
import React from "react";

import Footer from "./Footer";

function PageTemplate(props) {
    const {
        children,
        className,
        fluid,
        pageCoverImage,
        title,
    } = props;
    const pageClass = `page${fluid === true ? " fluid" : ""} ${className}`;
    const pageCoverPhotoURL = require(`../../media/panoramas/${pageCoverImage}`);
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
            <Footer />
        </div>
    );
}

export default PageTemplate;
