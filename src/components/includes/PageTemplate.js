// Node module imports
import React from "react";
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
class PageTemplate extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 600);
    }

    render() {
        const {
            backgroundColor,
            children,
            className,
            subtitle,
            title,
        } = this.props;
        const pageClass = `page ${className}`;
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
}

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
