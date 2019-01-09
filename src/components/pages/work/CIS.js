import React from "react";

import PageTemplate from "../../includes/PageTemplate";

function CIS() {
    return (
        <PageTemplate
            className="work-page-container"
            title="Computing & Information Science"
        >
            <h2>Head Teaching Assistant</h2>
            <h3>August - December 2018</h3>
            <p>
                During the Fall 2018 semester, I was one of the Head Teaching Assistants for <a href="https://classes.cornell.edu/browse/roster/FA18/class/INFO/4340" target="_blank" rel="noopener noreferrer">INFO 4340: User Experience and Software Development Studio</a>, a new studio-based course within Cornell University's Department of Information Science. As a Head Teaching Assistant, I work with the professor to develop materials for the course, including homework assignments, projects, and in-class activities. I attend lectures to aid the professor and students with teaching, their semester-long project, and other course questions. I also hold weekly office hours to aid students with homework, lecture concepts, and projects.
            </p>
            <h2>Undergraduate Teaching Assistant</h2>
            <h3>August 2015 - May 2018</h3>
            <p>
                As an Undergraduate Teaching Assistant, my responsibilities included holding walk-in office hours, grading student assignments, addressing questions using Piazza, attending lectures, and teaching a 20-student discussion section (for INFO/CS 1300 and 2300 only).
            </p>
            <table className="ta-table">
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
                    <tr>
                        <td>INFO 4310</td>
                        <td>Interactive Information Visualization</td>
                        <td>Spring 18</td>
                    </tr>
                </tbody>
            </table>
        </PageTemplate>
    );
}

export default CIS;
