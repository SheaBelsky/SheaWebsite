// Node module imports
import React from "react";

// Include imports
import PageTemplate from "./../includes/PageTemplate";

// Media
import SheaWaterski from "./../../media/Shea_Waterski.jpg";

export default function () {
    return (
        <PageTemplate
            pageCoverImage={"Slope.jpg"}
            title={"About Me"}
        >
            <img src={SheaWaterski} className={"shea-waterski-img"} />
            <p>
                Hi there! I'm Shea Belsky, an <strong>Information Science</strong> student at Cornell University, studying
                <strong> User Experience</strong> and <strong>minoring in Education</strong>. My most recent internship
                was with <strong>IBM Watson</strong> in New York, NY, developing applications using the Watson Developer
                Cloud services and APIs. At Cornell, I am the <strong>Recruitment Director</strong> for Slope Day, the
                <strong> Executive Vice President</strong> of Front-End Development for Cornell Design & Technology Initiative,
                and <strong>Advisor</strong> for Science Olympiad at Cornell.
            </p>
            <p>
                My personal design philosophy considers <strong>everyone</strong> involved in the process of creating or
                using something on the web. Whether you are a developer trying to understand my logic in a web server or
                a user browsing an application I have worked on, I try to <strong>make sure that your experience is
                enjoyable</strong>. <strong>Do you want</strong> to be on this website? <strong>Did you accomplish </strong>
                what you came here to do? Does my <strong>code make sense</strong> for you to understand, or fork for your
                own usage?
            </p>
            <p>
                Ultimately, it's my goal to be a part of the design process for something that people <strong>want to use
                and enjoy using.</strong> If people dislike using or interacting with something I've worked on, I try to
                <strong> figure out what's going on and how it can be improved</strong>, no matter where in the design process
                it is. <strong>I take pride in what I do.</strong> I don't develop or design things that I don't have faith
                and confidence in.
            </p>
        </PageTemplate>
    );
};
