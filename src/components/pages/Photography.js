// Node module imports
import React from "react";
import Instafeed from "react-instafeed";

// Include imports
import PageTemplate from "../includes/PageTemplate";

// CSS
import "../../styles/pages/photography.less";

function Photography() {
    const instafeedTarget = "instafeed";

    return (
        <PageTemplate
            className="photography-container"
            pageCoverImage="slope.jpg"
            title="Photography"
        >
            <div id="instafeed">
                <a href="https://instagram.com/sheabelsky">Follow me on Instagram!</a>
                <Instafeed
                    limit="12"
                    resolution="standard_resolution"
                    sortBy="most-recent"
                    target={instafeedTarget}
                    template='<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>'
                    userId="2945057900"
                    clientId="488c364a82fe45838306c866e6145018"
                    accessToken="2945057900.488c364.a5b861b1fe8b495fb9f9257075f98db5"
                />
            </div>
        </PageTemplate>
    );
}

export default Photography;
