// Node module imports
import React from "react";

// Include imports
import PageTemplate from "../includes/PageTemplate";

// Media
import headshot from "../../media/headshot.jpg";

// CSS
import "../../styles/pages/about.less";

function About() {
    return (
        <PageTemplate
            className="about-container"
            pageCoverImage="sunset.jpg"
            subtitle="Doing cool things, one pixel at a time"
            title="About Me"
        >
            <img
                alt="Shea Hunter Belsky headshot"
                className="shea-profile"
                src={headshot}
            />
            <p>
                Hi there! I'm Shea Hunter Belsky, a graduate of Cornell University's Information Science department. I hold a Masters of Professional Studies and Bachelor's of Science in Information Science (concentrating in User Experience), and a minor in Education.
            </p>
            <p>
                I will be joining Wayfair as a Front-End Developer in March of 2019, working on their online storefront to improve customer experience and retention.
            </p>
            <p>
                I work at the intersection of design and technology, solving problems throughout the product design lifecycle. From user research to prototyping, software engineering and testing, I'm at home in developing products and applications at every step of the way.
            </p>
            <p>
                In my free time, I love to snowski, waterski, run, practice photography and cooking, read, and go hiking. If you can't find me, I'm probably skiing!
            </p>
        </PageTemplate>
    );
}

export default About;
