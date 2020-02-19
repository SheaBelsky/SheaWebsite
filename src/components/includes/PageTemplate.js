// Node module imports
import React, { useEffect } from "react";
import propTypes from "prop-types";

// Include imports
import Footer from "./Footer";

/**
 * A template that all other pages on the website inherit from.
 * @param {object} props Object of all properties passed to this page
 * @param {string} props.backgroundColor The background color that the header of this page may have
 * @param {(React.element[]|React.element)} props.children Children of this template
 * @param {string} props.className The CSS class given to this page
 * @param {string} props.subtitle Subtitle that appears in the header
 * @param {string} props.title Title that appears in the header
 */
const PageTemplate = (props) => {
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 600);
    }, []);
    const pageClass = `page ${props.className}`;
    const pageCoverStyles = props.backgroundColor.length > 0
        ? { backgroundColor: props.backgroundColor }
        : undefined;
    return (
        <div className={pageClass} id="page-container">
            <header className="page-cover" style={pageCoverStyles}>
                <h1 className="page-title">
                    {props.title}
                </h1>
                {props.subtitle.length > 0 && (
                    <h2 className="page-subtitle">
                        {props.subtitle}
                    </h2>
                )}
            </header>
            <main className="page-content">
                {props.children}
            </main>
            <Footer />
        </div>
    );
};

PageTemplate.propTypes = {
    backgroundColor: propTypes.string,
    children: propTypes.oneOfType([
        propTypes.arrayOf(propTypes.element),
        propTypes.element,
    ]).isRequired,
    className: propTypes.string.isRequired,
    subtitle: propTypes.string,
    title: propTypes.string.isRequired,
};

PageTemplate.defaultProps = {
    backgroundColor: "",
    subtitle: "",
};

export default PageTemplate;
