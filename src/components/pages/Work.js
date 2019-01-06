// Node module imports
// import { Link } from "react-router-dom";
import React from "react";

// Include imports
import PageTemplate from "../includes/PageTemplate";

// CSS
import "../../styles/pages/work.less";

export default function () {
    return (
        <PageTemplate
            className="work-container"
            fluid
            pageCoverImage="gardens.jpg"
            subtitle="Cue the Hamilton [WORK! WORK!] sound bite"
            title="Work Experience"
        >
            <div className="work" id="google">
                <div className="work-container">
                    <div className="work-desc">
                        <h2>Google</h2>
                        <h3>User Experience Engineering Intern</h3>
                        <h4>May 2018 - August 2018</h4>
                        <p>
                            I worked with Google's Search and Assistant team during the Summer of 2018 as a User Experience Engineering Intern. I worked on internal prototyping, design tools, and infrastructure for designers, researchers, and other User Experience Engineers.
                        </p>
                        <p>
                            See my <a href="https://uxdesign.cc/user-experience-engineering-the-adventure-from-student-to-google-intern-cef990125493" rel="noopener noreferrer" target="_blank">Medium blog post</a> on my internship experience!
                        </p>
                    </div>
                    <div className="work-pic" />
                </div>
            </div>
            <div className="work" id="ibm">
                <div className="work-container">
                    <div className="work-pic" />
                    <div className="work-desc">
                        <h2>IBM Watson</h2>
                        <h3>Front End Web Developer Intern</h3>
                        <p>
                            <u>Summer 2017:</u> With the Advanced Client Technology & Solutions team, I developed a video summarization algorithm, API, and client using Watson Developer Cloud services and offerings.
                        </p>
                        <p>
                            <u>Summer 2016:</u> Implemented functionality for user input through speech for the <a href="https://conversation-demo.mybluemix.net/" rel="noopener noreferrer" target="_blank"> Watson Conversation demo app</a>.
                        </p>
                    </div>
                </div>
            </div>
            <div className="work" id="ezra">
                <div className="work-container">
                    <div className="work-desc">
                        <h2>Ezra Tech</h2>
                        <h3>Co-Founder, CTO, and CIO</h3>
                        <h4>October 2016 - Present</h4>
                        <p>
                            <a href="https://www.ezratech.us" rel="noopener noreferrer" target="_blank">Ezra Tech</a> is a full-stack solution for Science Olympiad event management. Created & maintain client experience and server-side processing to aid tournament organizers, coaches, and participants with event logistics. Made with Node.js, Express.js, MongoDB, PugJS, and Semantic UI.
                        </p>
                    </div>
                    <div className="work-pic" />
                </div>
            </div>
            <div className="work" id="dti">
                <div className="work-container">
                    <div className="work-pic" />
                    <div className="work-desc">
                        <h2>Design & Tech Initiative</h2>
                        <h3>Lead Instructor and Creator of "Trends in Web Development" Course</h3>
                        <h4>April 2018 - Present</h4>
                        <p>
                            A weekly course introducing industry standard web technologies, including React, Node.js, Express, JavaScript ES6, Webpack, Babel, and more. I am the creator and lead instructor for this student-led course, developing the curriculum, slides, and assignments, and working with Cornell administration and faculty.
                        </p>
                        <h3>Developer Lead</h3>
                        <h4>May 2016 - May 2018</h4>
                        <p>
                            <a href="http://cornelldti.org" rel="noopener noreferrer" target="_blank">Cornell DTI</a> is a group of students who are passionate about community impact through technology. As Developer Lead, I supported all developers, aided individual projects, interviewed candidates, and onboarded new members.
                        </p>
                    </div>
                </div>
            </div>
            <div className="work" id="brh">
                <div className="work-container">
                    <div className="work-desc">
                        <h2>Big Red Hacks</h2>
                        <h3>Web Team Lead</h3>
                        <h4>May 2016 - Present</h4>
                        <p>
                            <a href="https://bigredhacks.com" rel="noopener noreferrer" target="_blank">Big Red Hacks</a> is Cornell University's first hackathon. As the Web Team Lead, I work with other team members to plan and implement essential functionality and software for our website. I am also the first point of contact to address issues that are identified on GitHub and in Slack. On the day of the event, I support hackers and event logistics by resolving any critical website errors.
                        </p>
                    </div>
                    <div className="work-pic" />
                </div>
            </div>
            <div className="work" id="cornell">
                <div className="work-container">
                    <div className="work-pic" />
                    <div className="work-desc">
                        <h2>Information Science Dept.</h2>
                        <h3>Graduate Teaching Assistant</h3>
                        <h4>August 2018 - Present</h4>
                        <p>
                            Head TA for INFO 4340, User Experience and Software Development Studio. I work with the professor to develop materials for the course, including homework assignments, projects, and activities. I am a main point of contact for questions regarding course material, questions, or grading issues. I also hold weekly office hours.
                        </p>
                        <h3>Undergraduate Teaching Assistant</h3>
                        <h4>August 2015 - May 2018</h4>
                        <p>
                            Responsibilities include holding walk-in office hours, grading student assignments, addressing questions using Piazza and teaching a 20-student discussion section (1300/2300). Undergraduate TA for INFO/CS 1300, 2300, 3300, 4240, and 4310.
                        </p>
                    </div>
                </div>
            </div>
            <div className="work" id="slope">
                <div className="work-container">
                    <div className="work-desc">
                        <h2>Slope Day Programming Board</h2>
                        <h3>Recruitment Director</h3>
                        <h4>May 2017 - May 2018</h4>
                        <p>
                            <a href="http://slopeday.cornell.edu" rel="noopener noreferrer" target="_blank">Slope Day</a> is Cornell University's largest music event, attended by thousands of people. As the Recruitment Director, I redesigned the Slope Day website with new branding, information, and flavor. I also distributed advertisements to the Cornell student body, organized general body committees to participate in, and managed our email list.
                        </p>
                        <h3>Volunteer Director</h3>
                        <h4>May 2016 - May 2017</h4>
                        <p>
                            Director in charge of volunteers for Slope Day festival, including Cornell students, faculty, and staff. Recruited volunteers and coordinated their duties, met with other volunteer leads, and discussed logistics with the rest of the Slope Day Programming Board.
                        </p>
                    </div>
                    <div className="work-pic" />
                </div>
            </div>
            <div className="work" id="issa">
                <div className="work-container">
                    <div className="work-pic" />
                    <div className="work-desc">
                        <h2>Information Science Student Association</h2>
                        <h3>Advisor</h3>
                        <h4>May 2017 - May 2018</h4>
                        <p>
                            Aided other executive board members of ISSA with event planning, presence, and other ISSA functions. Planned, organized, and collaborated with other CIS community organizations for a <a href="http://cornellsun.com/2017/11/07/pollack-addresses-increasing-enrollment-in-computer-science-classes/" rel="noopener noreferrer" target="_blank">guest talk by Cornell President Martha Pollack</a>.
                        </p>
                        <h3>President</h3>
                        <h4>December 2016 - May 2017</h4>
                        <p>
                            Presided at general body and executive board meetings, assisted event chairs with logistics such as food/room reservation, communicated with guests and faculty, and managed online presence. The President also interacted with members of faculty and staff to increase club presence, and provided outreach to new and prospective students.
                        </p>
                    </div>
                </div>
            </div>
        </PageTemplate>
    );
}
