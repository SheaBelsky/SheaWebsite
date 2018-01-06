// Node module imports
import Fade from  "react-reveal/Fade";
import React from "react";

// Include imports
import PageTemplate from "./../includes/PageTemplate";

export default function () {
    return (
        <PageTemplate fluid={true} pageCoverImage={"Adirondack.jpg"} title={"Work"}>
            <div></div>
            <Fade big className="work" delay={0} duration={800} id="ibm">
                <div className="work-container">
                    <div className="work-pic">
                    </div>
                    <div className="work-desc">
                        <h2>IBM Watson</h2>
                        <h3>Front End Web Developer Intern</h3>
                        <p>
                            <u>Summer 2016:</u> Implemented functionality for user input through speech for the
                            <a href="https://conversation-demo.mybluemix.net/"> Watson Conversation demo app</a>.
                            {/*Check out the <a href="/watson" target="_blank">presentation I gave</a> on how Watson Conversation works!*/}
                        </p>
                        <p>
                            <u>Summer 2017:</u> With the Advanced Client Technology & Solutions team, I developed a video
                            summarization algorithm, API, and client using Watson Developer Cloud services and offerings.</p>

                    </div>
                </div>
            </Fade>
            <Fade big className="work" delay={0} duration={800} id="ezra">
                <div className="work-container">
                    <div className="work-desc">
                        <h2>Ezra Tech</h2>
                        <h3>Chief Information Officer & Chief Technology Officer</h3>
                        <a href="https://www.ezratech.us" target="_blank">Ezra Tech</a> is a full-stack solution for Science
                        Olympiad event management. Created & maintain client experience and server-side processing to aid
                        tournament organizers, coaches, and participants with event logistics. Made with Node.js, Express.js,
                        MongoDB, PugJS, and Semantic UI.
                    </div>
                    <div className="work-pic">
                    </div>
                </div>
            </Fade>
            <Fade big className="work" delay={0} duration={800} id="dti">
                <div className="work-container">
                    <div className="work-pic">
                    </div>
                    <div className="work-desc">
                        <h2>Cornell Design and Technology Initiative</h2>
                        <h3>Executive Vice President for Front End Development</h3>
                        <a href="http://cornelldti.org" target="_blank">Cornell DTI</a> is a group of students who are passionate about
                        making a change in our community through design and technology. As EVP of Front End Development,
                        I coordinate front end developers across all DTI projects, aid individual projects on an ad-hoc basis,
                        interview potential front end developers, and onboard new project team members.
                    </div>
                </div>
            </Fade>
            <Fade big className="work" delay={0} duration={800} id="brh">
                <div className="work-container">
                    <div className="work-desc">
                        <h2>Big Red Hacks</h2>
                        <h3>Front & Back End Development Team Lead</h3>
                        <a href="https://bigredhacks.com" target="_blank">Big Red Hacks</a> is Cornell University's first hackathon.
                        As the Front & Back End Development Team Leads, I work with other team members to plan and implement
                        essential functionality and software for our website. I am also the first point of contact to
                        address issues that are identified on GitHub and in Slack. On the day of the event, I support
                        hackers and event logistics by resolving any critical website errors.
                    </div>
                    <div className="work-pic">
                    </div>
                </div>
            </Fade>
            <Fade big className="work" delay={0} duration={800} id="cornell">
                <div className="work-container">
                    <div className="work-pic">
                    </div>
                    <div className="work-desc">
                        <h2>Information Science Dept.</h2>
                        <h3>Teaching Assistant</h3>
                        Responsibilities include holding walk-in office hours, grading student assignments, addressing questions
                        using Piazza (online class management software) and teaching a 20-student discussion section (1300/2300).
                        <table id="ta-table">
                            <thead>
                                <tr>
                                    <th>Course #</th>
                                    <th>Course Name</th>
                                    <th>Term</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>INFO/CS 1300</td>
                                    <td>Introductory Web Design & Programming</td>
                                    <td>Fall 15/16</td>
                                </tr>
                                <tr>
                                    <td>INFO/CS 2300</td>
                                    <td>Intermediate Web Design & Programming</td>
                                    <td>Spring 16</td>
                                </tr>
                                <tr>
                                    <td>INFO/CS 3300</td>
                                    <td>Data-Driven Web Applications</td>
                                    <td>Spring 17</td>
                                </tr>
                                <tr>
                                    <td>INFO/STS 4240</td>
                                    <td>Designing Technology for Social Impact</td>
                                    <td>Fall 16/17</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Fade>
            <Fade big className="work" delay={0} duration={800} id="slope">
                <div className="work-container">
                    <div className="work-desc">
                        <h2>Slope Day Programming Board</h2>
                        <h3>Recruitment Director (May 2017 - Present)</h3>
                        <a href="http://slopeday.cornell.edu" target="_blank">Slope Day</a> is Cornell University's largest music event,
                        attended by thousands of people. As the Recruitment Director, I redesigned the Slope
                        Day website (in coordination with the Branding Director) with new branding, information, and flavor.
                        Ongoing responsibilities include advertisement to the Cornell student body, organizing committees
                        for members to participate in, and managing our email list.
                        <h3>Volunteer Director (May 2016 - May 2017)</h3>
                        Director in charge of volunteers for Slope Day festival, including Cornell students, faculty, and
                        staff. Recruit volunteers and coordinate their duties, meet with other volunteer leads, and discuss
                        logistics with the rest of the Slope Day Programming Board.
                    </div>
                    <div className="work-pic">
                    </div>
                </div>
            </Fade>
            <Fade big className="work" delay={0} duration={800} id="issa">
                <div className="work-container">
                    <div className="work-pic">
                    </div>
                    <div className="work-desc">
                        <h2>Information Science Student Association</h2>
                        <h3>Advisor (May 2017 - Present)</h3>
                        Aid other executive board members of ISSA with event planning, presence, and other ISSA
                        functions. Plan, organize, and collaborate with other CIS community organizations for
                        a <a href={"http://cornellsun.com/2017/11/07/pollack-addresses-increasing-enrollment-in-computer-science-classes/"}>
                            guest talk by Cornell President Martha Pollack
                        </a>.
                        <h3>President (December 2016 - May 2017)</h3>
                        Preside at general body and executive board meetings, assist event chairs with logistics such as
                        food/room reservation, communicating with guests and faculty, and manage online presence. The President
                        also interacts with members of faculty and staff to increase club presence, and provides outreach
                        to new and prospective Information Science students.
                    </div>
                </div>
            </Fade>
        </PageTemplate>
    );
}
