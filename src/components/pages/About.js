// Node module imports
import React from "react";

// Include imports
import PageTemplate from "./../includes/PageTemplate";

// Media
import SheaSuit     from "./../../media/GoingGhostSmall.png";

export default function () {
    return (
        <PageTemplate
            className={"about-container"}
            pageCoverImage={"Slope.jpg"}
            title={"About Me"}
        >
            <div className={"about-column"}>
                <img src={SheaSuit} className={"shea-profile"} />
            </div>
            <div className={"about-column"}>
                <p>
                    Hi there! I'm Shea Belsky, an <strong>Information Science</strong> student at Cornell University, studying
                    <strong> User Experience</strong> and <strong>minoring in Education</strong>. I'll be interning with <strong>Google</strong> this summer as a <strong>User Experience Engineering Intern</strong>. At Cornell, I am the <strong>Recruitment Director</strong> for Slope Day Programming Board, the <strong>Developer Lead</strong> for Cornell Design & Tech Initiative, and <strong>Advisor</strong> for Science Olympiad at Cornell.
                </p>
                <p>
                    My personal design philosophy considers <strong>everyone</strong> involved in the process of making web apps. Whether you are a developer, designer, or user on a site I've worked on, I try to <strong>make sure that your experience is enjoyable</strong>. <strong>Do you want</strong> to be on this website? <strong>Did you accomplish</strong> what you came here to do? Does everything <strong>make sense</strong> for you to understand or work with?
                </p>
                <p>
                    Ultimately, it's my goal to make something that people <strong>want to use and enjoy using.</strong> If people dislike using or interacting with something I've worked on, I try to <strong> figure out what's going on and how it can be improved</strong>, no matter where in the design process it is.
                </p>
            </div>
        </PageTemplate>
    );
};
