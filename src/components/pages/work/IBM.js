import React from "react";

import PageTemplate from "../../includes/PageTemplate";

function IBM() {
    return (
        <PageTemplate
            className="work-page-container"
            title="IBM Watson"
        >
            <h2>Front End Web Developer Intern</h2>
            <h3>Summer 2017</h3>
            <p>
                With the Advanced Client Technology & Solutions team, I developed a video summarization algorithm, API, and client using Watson Developer Cloud services and offerings.
            </p>
            <h3>Summer 2016</h3>
            <p>
                Implemented functionality for user input through speech for the <a href="https://conversation-demo.mybluemix.net/" rel="noopener noreferrer" target="_blank"> Watson Conversation demo app</a>.
            </p>
        </PageTemplate>
    );
}

export default IBM;
