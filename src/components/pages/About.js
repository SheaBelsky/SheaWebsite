// Node module imports
import React from "react";

// Include imports
import PageTemplate from "../includes/PageTemplate";

// Media
import SheaSuit from "../../media/GoingGhostSmall.png";

export default function () {
    return (
        <PageTemplate
            className="about-container"
            pageCoverImage="Slope.jpg"
            title="About Me"
        >
            <div className="about-column">
                <img src={SheaSuit} className="shea-profile" alt="Shea Belsky in a Pac-Man Suit" />
            </div>
            <div className="about-column">
                <p>
                    Hi there! I'm Shea Belsky, a Master's student in Information Science at Cornell
                    University, studying User Experience.
                </p>
                <p>
                    I interned with Google during the summer of 2018 as a User Experience Engineering
                    Intern. There, I worked on internal prototypes for the Assistant team, aiding designers
                    and researchers in exploring the future of Google Assistant for Android.
                </p>
                <p>
                    My personal design philosophy considers everyone involved in the process of making
                    software. Whether you are a developer, designer, researcher, or user on a project
                    I've worked on, I try to make sure that your experience is enjoyable.
                </p>
                <p>
                    Do you want to be on this website? Did you accomplish what you came here to do?
                    Does everything make sense for you to understand or work with? Can you easily work
                    with and change my code? If you're using my work in research, can you get meaningful
                    information from it?
                </p>
                <p>
                    Ultimately, it's my goal to make something that people want to use and enjoy using.
                    If people dislike using or interacting with something I've worked on, I try to figure
                    out what's going on and how it can be improved, no matter where in the design process it is.
                </p>
            </div>
        </PageTemplate>
    );
}
