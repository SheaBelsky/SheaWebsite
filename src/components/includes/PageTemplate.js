// Node module imports
import Fade                 from "react-reveal/Fade";
import React, { Component } from "react";
import ImageGallery         from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";

const PageGallery = ({images, galleryTitle}) => {
    if (typeof images === "object" && images.length > 0) {
        return (
            <div className={"gallery-page"}>
                <h1 className={"gallery-title"}>{galleryTitle}</h1>
                <ImageGallery
                    items=                {images}
                    lazyLoad=             {true}
                    showFullscreenButton= {false}
                    showPlayButton=       {false}
                    slideInterval=        {2000}
                />
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
};

export default class extends Component {
    render () {
        const pageClass       = `page${this.props.fluid === true ? " fluid" : ""}`;
        const pageCoverPhoto  = require(`../../media/${this.props.pageCoverImage}`);
        const pageCoverStyles = {
            background: `no-repeat center center url('${pageCoverPhoto}')`,
            backgroundSize: "cover"
        };

        return (
            <Fade className={pageClass} delay={0} duration={800} id="page-container">
                <div className={"page-cover"} style={pageCoverStyles}>
                    <div className={"page-title"}>
                        {this.props.title}
                    </div>
                </div>
                <div className={"page-content"}>
                    <PageGallery
                        images=       {this.props.images}
                        galleryTitle= {this.props.galleryTitle}
                    />
                    {this.props.children}
                </div>
            </Fade>
        );
    }
}
