import React from "react";

import PageTemplate from "../../includes/PageTemplate";

function IBM() {
    return (
        <PageTemplate
            className="work-page-container"
            title="IBM Watson"
        >
            <section>
                <h2>Front End Web Developer Intern</h2>
                <h3>June - August 2017</h3>
                <p>
                    I worked in IBM Watson's Astor Place office, developing tools and prototypes that implemented various Watson services and offerings. With the Advanced Client Technology and Solutions team, I developed a video summarization algorithm, API, and web client, and presented my findings to team members and IBM Watson offering management.
                </p>
            </section>
            <section>
                <h3>June - August 2016</h3>
                <p>
                    During the summer of 2016, I worked in IBM Watson's Littleton Office on the Watson Engagement Advisor App Squad. Here, I add the ability for users to speak to the <a href="https://github.com/watson-developer-cloud/car-dashboard" rel="noopener noreferrer" target="_blank"> Watson Conversation Car Dashboard demo</a> with their computer's microphone. This functionality more realistically emulates how clients would interact with Watson in a car, versus only being able to communicate with a keyboard.
                </p>
                <p>
                    I also worked on a Pokemon GO chat application that enabled users to speak to a fascimile of Professor Oak from Pokemon, and ask it questions regarding Pokemon GO. Check out the <a href="https://github.com/SheaBelsky/ProfessorWatson" rel="noopener noreferrer" target="_blank">source code</a> here!
                </p>
            </section>
        </PageTemplate>
    );
}

export default IBM;
