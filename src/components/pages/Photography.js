// Node module imports
import React from "react";
import Gallery from "react-grid-gallery";

// Include imports
import PageTemplate from "../includes/PageTemplate";

// CSS
import "../../styles/pages/photography.less";

const imageNames = ["AlanSki.jpg", "HoPlaza.jpg", "McGrawUris.jpg", "BaileyReflection.jpg", "HoliColor.jpg", "Spencer.jpg", "Cascadilla.jpg", "Robin.jpg", "WhiteFlower.jpg", "NEOWISE.jpg", "HunterPath.jpg", "SunriseHunter.jpg", "EzraStatue.jpg", "TelAviv.jpg", "Brad.jpg", "SunsetColorado.jpg", "Gates.jpg", "IsraelSunset.jpg", "CharlesReflection.jpg", "TreeSunset.jpg", "GatesGlass.jpg", "KirkLakeReflection.jpg", "HWUL.jpg", "McGrawCherry.jpg"];

const images = imageNames.map((image) => {
    const { default: defaultSrc } = require(`./../../media/photography/full/${image}`);
    const { default: defaultThumb } = require(`./../../media/photography/thumb/${image}`);
    return {
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
            />
        </PageTemplate>
    );
}

export default Photography;
