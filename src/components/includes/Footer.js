import React from "react";

import GitHub from "../../media/contact/GitHub.png";
import GitHubActive from "../../media/contact/GitHubActive.png";
import LinkedIn from "../../media/contact/LinkedIn.png";
import LinkedInActive from "../../media/contact/LinkedInActive.png";
import Mail from "../../media/contact/Mail.png";
import MailActive from "../../media/contact/MailActive.png";
import Medium from "../../media/contact/Medium.png";
import MediumActive from "../../media/contact/MediumActive.png";

const IconMap = [
    {
        activeIcon: GitHubActive,
        link: "https://www.github.com/sheabelsky",
        name: "GitHub",
        normalIcon: GitHub,
    },
    {
        activeIcon: LinkedInActive,
        link: "https://www.linkedin.com/in/sheabelsky",
        name: "LinkedIn",
        normalIcon: LinkedIn,
    },
    {
        activeIcon: MailActive,
        link: "mailto:sheabelsky@gmail.com",
        name: "Mail",
        normalIcon: Mail,
    },
    {
        activeIcon: MediumActive,
        link: "https://medium.com/@sheabelsky",
        name: "Medium",
        normalIcon: Medium,
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
                activeIcon,
                link,
                name,
                normalIcon,
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
                <img src={isActive ? activeIcon : normalIcon} alt={`Icon for ${name}`} />
            </a>
        );
    }
}

function Footer() {
    return (
        <div className="footer">
            {
                IconMap.map((icon, index) => (
                    <ContactIcon
                        icon={icon}
                        key={index}
                    />
                ))
            }
        </div>
    );
}

export default Footer;
