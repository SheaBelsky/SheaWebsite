import React from "react";
import SVGInline from "react-svg-inline";

import GitHub from "../../media/contact/GitHub.svg";
import LinkedIn from "../../media/contact/LinkedIn.svg";
import Mail from "../../media/contact/Mail.svg";
import Medium from "../../media/contact/Medium.svg";

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

    handleHover() {
        const { isActive } = this.state;
        this.setState({ isActive: !isActive });
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
        return (
            <a
                className="contact-icon"
                href={link}
                onMouseEnter={this.handleHover.bind(this)}
                onMouseLeave={this.handleHover.bind(this)}
                rel="noopener noreferrer"
                target="_blank"
            >
                <SVGInline
                    alt={`Icon for ${name}`}
                    fill={isActive ? "grey" : "white"}
                    svg={icon}
                />
            </a>
        );
    }
}

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
