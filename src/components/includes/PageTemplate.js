// Node module imports
import React from "react";
import propTypes from "prop-types";

// Include imports
import Footer from "./Footer";

function PageTemplate(props) {
    const {
        backgroundColor,
        children,
        className,
        fluid,
        subtitle,
        title,
    } = props;
    const pageClass = `page${fluid === true ? " fluid" : ""} ${className}`;
    const pageCoverStyles = backgroundColor.length > 0
        ? { backgroundColor }
        : undefined;
    return (
        <div className={pageClass} id="page-container">
            <div className="page-cover" style={pageCoverStyles}>
                <div className="page-title">
                    {title}
                </div>
                {subtitle.length > 0 && (
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

PageTemplate.propTypes = {
    backgroundColor: propTypes.string,
    children: propTypes.oneOfType([
        propTypes.arrayOf(propTypes.element),
        propTypes.element,
    ]).isRequired,
    className: propTypes.string.isRequired,
    fluid: propTypes.bool,
    subtitle: propTypes.string,
    title: propTypes.string.isRequired,
};

PageTemplate.defaultProps = {
    backgroundColor: "",
    fluid: false,
    subtitle: "",
};

export default PageTemplate;
