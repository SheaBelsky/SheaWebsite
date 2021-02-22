// Node module imports
import React, { useCallback, useState } from "react";
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

const ContactIcon = (props) => {
    const [isIconActive, setIsIconActive] = useState(false);
    const toggleIsIconActive = useCallback(() => {
        setIsIconActive((oldIsIconActive) => !oldIsIconActive);
    }, []);
    const {
        icon: {
            icon,
            link,
            name,
        },
    } = props;
    // If this icon is being hovered on top of (active), slightly dim the color.
    // Otherwise, the icon will be white in fill.
    const fill = isIconActive ? "grey" : "white";
    return (
        <a
            aria-label={name}
            className="contact-icon"
            href={link}
            onMouseEnter={toggleIsIconActive}
            onMouseLeave={toggleIsIconActive}
            rel="noopener noreferrer"
            target="_blank"
        >
            <SVGInline
                alt=""
                fill={fill}
                svg={icon}
            />
        </a>
    );
};

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
        <footer className="footer">
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
        </footer>
    );
}

export default Footer;
