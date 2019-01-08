import React from "react";

import PageTemplate from "../../includes/PageTemplate";

function DTI() {
    return (
        <PageTemplate
            className="work-page-container"
            title="Cornell Design & Tech Initiative"
        >
            <h2>Lead Instructor and Creator of "Trends in Web Development" Course</h2>
            <h3>April - December 2018</h3>
            <p>
                A weekly course introducing industry standard web technologies, including React, Node.js, Express, JavaScript ES6, Webpack, Babel, and more. I am the creator and lead instructor for this student-led course, developing the curriculum, slides, and assignments, and working with Cornell administration and faculty.
            </p>
            <h2>Developer Lead</h2>
            <h3>May 2016 - May 2018</h3>
            <p>
                <a href="http://cornelldti.org" rel="noopener noreferrer" target="_blank">Cornell DTI</a> is a group of students who are passionate about community impact through technology. As Developer Lead, I supported all developers, aided individual projects, interviewed candidates, and onboarded new members.
            </p>
        </PageTemplate>
    );
}

export default DTI;
