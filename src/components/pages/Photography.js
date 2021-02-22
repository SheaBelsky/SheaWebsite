// Node module imports
import React from "react";
import Gallery from "react-grid-gallery";

// Include imports
import PageTemplate from "../includes/PageTemplate";

// CSS
import "../../styles/pages/photography.less";

const imageNames = [
    {
        alt: "Alan Belsky waterskiing",
        name: "AlanSki.jpg",
    },
    {
        alt: "Cornell University's Ho Plaza",
        name: "HoPlaza.jpg",
    },
    {
        alt: "McGraw Hall and Uris Hall",
        name: "McGrawUris.jpg",
    },
    {
        alt: "Reflection of the sunset on Bailey Plaza",
        name: "BaileyReflection.jpg",
    },
    {
        alt: "Cornell University's Holi Festival",
        name: "HoliColor.jpg",
    },
    {
        alt: "Spencer Belsky telemark skiing",
        name: "Spencer.jpg",
    },
    {
        alt: "Time lapse of Cascadilla Gorge",
        name: "Cascadilla.jpg",
    },
    {
        alt: "A photogenic robin bird strikes a pose",
        name: "Robin.jpg",
    },
    {
        alt: "A white flower",
        name: "WhiteFlower.jpg",
    },
    {
        alt: "The NEOWISE comet as seen in the summer of 2020",
        name: "NEOWISE.jpg",
    },
    {
        alt: "Hunter Mountain Fire Tower Trail during the fall",
        name: "HunterPath.jpg",
    },
    {
        alt: "Sunrise at Hunter Mountain Ski Resort",
        name: "SunriseHunter.jpg",
    },
    {
        alt: "Statue of Ezra Cornell",
        name: "EzraStatue.jpg",
    },
    {
        alt: "The Tel Aviv Financial Stock Exchange, looking up to the ceiling",
        name: "TelAviv.jpg",
    },
    {
        alt: "Brad Kantor waterskiing",
        name: "Brad.jpg",
    },
    {
        alt: "Sunset from Colorado, during the 2019 wildfires",
        name: "SunsetColorado.jpg",
    },
    {
        alt: "Gates Hall at Cornell University",
        name: "Gates.jpg",
    },
    {
        alt: "Sunset as seen over the Israeli desert",
        name: "IsraelSunset.jpg",
    },
    {
        alt: "Winter sunset over the Charles River",
        name: "CharlesReflection.jpg",
    },
    {
        alt: "Sunset of a tree over Libe Slope at Cornell",
        name: "TreeSunset.jpg",
    },
    {
        alt: "The interior of Gates Hall",
        name: "GatesGlass.jpg",
    },
    {
        alt: "Reflection of the sunset on Kirk Lake, Mahopac NY",
        name: "KirkLakeReflection.jpg",
    },
    {
        alt: "Rehearsal photo from Hamlet Wakes Up Late, Fall 2017",
        name: "HWUL.jpg",
    },
    {
        alt: "McGraw Clock Tower at Cornell University peeks through cherry blossoms",
        name: "McGrawCherry.jpg",
    },
];

const images = imageNames.map((image) => {
    const { default: defaultSrc } = require(`./../../media/photography/full/${image.name}`);
    const { default: defaultThumb } = require(`./../../media/photography/thumb/${image.name}`);
    return {
        alt: image.alt,
        caption: image.alt,
        src: defaultSrc,
        thumbnail: defaultThumb,
        thumbnailHeight: 200,
        thumbnailWidth: 200,
    };
});

function Photography() {
    return (
        <PageTemplate
            className="photography-container"
            subtitle="Memories last a lifetime, photos last forever"
            title="Photography"
        >
            <Gallery
                enableImageSelection={false}
                images={images}
                rowHeight={200}
                // The image gallery is not accessible by default
                // Render each image within a button so they can be tabbed to
                // on a keyboard
                thumbnailImageComponent={(info) => {
                    const { imageProps } = info;
                    return (
                        <button className="photography-galleryButton" key={imageProps.key} onClick={info.onClick} type="button">
                            <img
                                alt={imageProps.alt}
                                src={imageProps.src}
                                style={imageProps.style}
                            />
                        </button>
                    );
                }}
            />
        </PageTemplate>
    );
}

export default Photography;
