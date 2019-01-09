// Node module imports
import React from "react";
import propTypes from "prop-types";
import SVGInline from "react-svg-inline";

// Icon imports
import GitHub from "../../media/contact/GitHub.svg";
import LinkedIn from "../../media/contact/LinkedIn.svg";
import Mail from "../../media/contact/Mail.svg";
import Medium from "../../media/contact/Medium.svg";

// Provide each icon with an image, link, and name
const IconMap = [
    {
        icon: GitHub,
        link: "https://www.github.com/sheabelsky",
        name: "GitHub",
    },
    {
        icon: LinkedIn,
        link: "https://www.linkedin.com/in/sheabelsky",
        name: "LinkedIn",
    },
    {
        icon: Mail,
        link: "mailto:sheabelsky@gmail.com",
        name: "Mail",
    },
    {
        icon: Medium,
        link: "https://medium.com/@sheabelsky",
        name: "Medium",
    },
];

class ContactIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
        };
    }

    // When the icon is hovered on top of, set the icon to be active (dimmed slighty in fill)
    handleMouseEnter() {
        this.setState({ isActive: true });
    }

    // When the icon is hovered away from, set the icon to be inactive (white in fill)
    handleMouseLeave() {
        this.setState({ isActive: false });
    }

    render() {
        const {
            icon: {
                icon,
                link,
                name,
            },
        } = this.props;
        const {
            isActive,
        } = this.state;
        // If this icon is being hovered on top of (active), slightly dim the color.
        // Otherwise, the icon will be white in fill.
        const fill = isActive ? "grey" : "white";
        return (
            <a
                className="contact-icon"
                href={link}
                onMouseEnter={this.handleMouseEnter.bind(this)}
                onMouseLeave={this.handleMouseLeave.bind(this)}
                rel="noopener noreferrer"
                target="_blank"
            >
                <SVGInline
                    alt={`Icon for ${name}`}
                    fill={fill}
                    svg={icon}
                />
            </a>
        );
    }
}

// PropTypes for a ContactIcon
ContactIcon.propTypes = {
    icon: propTypes.shape({
        icon: propTypes.string.isRequired,
        link: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
    }).isRequired,
};

function Footer() {
    return (
        <div className="footer">
            <div>© 2018 Shea Hunter Belsky</div>
            <div className="footer-icons">
                {
                    IconMap.map((icon, index) => (
                        <ContactIcon
                            icon={icon}
                            key={index}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Footer;
