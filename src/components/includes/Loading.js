import React from "react";

import PageTemplate from "./PageTemplate";

function Loading() {
    return (
        <PageTemplate
            className="loading-container"
            subtitle="Something awesome will be here soon, please wait!"
            title="Loading..."
        >
            Page loading...
        </PageTemplate>
    );
}

export default Loading;
