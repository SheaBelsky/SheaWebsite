// Node module imports
import React from "react";

// Include imports
import PageTemplate from "../includes/PageTemplate";

export default function () {
    return (
        <PageTemplate
            pageCoverImage="NYC.jpg"
            title="Contact"
        >
            <h1 className="center">Let's get in touch!</h1>
            <div>
                <div className="contact-container">
                    <a
                        href="mailto:sheabelsky@gmail.com"
                        className="Mail"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <div className="contact-inner">Email</div>
                    </a>
                    <a
                        href="https://github.com/SheaBelsky"
                        className="GitHub"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <div className="contact-inner">GitHub</div>
                    </a>
                    <a
                        href="https://linkedin.com/in/SheaBelsky"
                        className="LinkedIn"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <div className="contact-inner">LinkedIn</div>
                    </a>
                    <a
                        href="https://medium.com/@sheabelsky"
                        className="Medium"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <div className="contact-inner">Medium</div>
                    </a>
                    <a
                        href="https://twitter.com/sheabelsky"
                        className="Twitter"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <div className="contact-inner">Twitter</div>
                    </a>
                </div>
            </div>
        </PageTemplate>
    );
}
