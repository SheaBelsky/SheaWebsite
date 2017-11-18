// Node module imports
import React from "react";

// Include imports
import PageTemplate from "./../includes/PageTemplate";

import GitHub    from "./../../media/contact/GitHub.png";
import Instagram from "./../../media/contact/Instagram.png";
import LinkedIn  from "./../../media/contact/LinkedIn.png";
import Mail      from "./../../media/contact/Mail.png";

export default function () {
    return (
        <PageTemplate
            pageCoverImage={"NYC.jpg"}
            title={"Contact"}
        >
            <h1 className={"center"}>I'm all over the place!</h1>
            <div>
                <div className={"contact-container"}>
                    <a
                        href=      {"https://github.com/shbelsky"}
                        className= {"GitHub"}
                        target=    {"_blank"}
                    >
                        <div className={"contact-inner"}>GitHub</div>
                    </a>
                    <a
                        href=      {"https://instagram.com/shbelsky"}
                        className= {"Instagram"}
                        target=    {"_blank"}
                    >
                        <div className={"contact-inner"}>Instagram</div>
                    </a>
                    <a
                        href=      {"https://linkedin.com/in/sheabelsky"}
                        className= {"LinkedIn"}
                        target=    {"_blank"}
                    >
                        <div className={"contact-inner"}>LinkedIn</div>
                    </a>
                    <a
                        href=      {"mailto:shb95@cornell.edu"}
                        className= {"Mail"}
                        target=    {"_blank"}
                    >
                        <div className={"contact-inner"}>Email</div>
                    </a>
                </div>
            </div>
        </PageTemplate>
    );
};
