// Node module imports
import React from "react";
import Gallery from "react-grid-gallery";

// Include imports
import PageTemplate from "../includes/PageTemplate";

// CSS
import "../../styles/pages/photography.less";

const imageNames = ["AlanSki.jpg", "HoPlaza.jpg", "McGrawUris.jpg", "BaileyReflection.jpg", "HoliColor.jpg", "SlopeSunset.jpg", "Cascadilla.jpg", "HoliColor2.jpg", "SunriseFlorida.jpg", "CloudsHunter.jpg", "HunterPath.jpg", "SunriseHunter.jpg", "EzraStatue.jpg", "HunterSunrise.jpg", "IsraelStockExchange.jpg", "SunsetColorado.jpg", "Gates.jpg", "IsraelSunset.jpg", "WTC.jpg", "TreeSunset.jpg", "GatesGlass.jpg", "KirkLakeReflection.jpg", "HWUL.jpg", "McGrawCherry.jpg"];

const images = imageNames.map(image => ({
    src: require(`./../../media/photography/full/${image}`),
    thumbnail: require(`./../../media/photography/thumb/${image}`),
    thumbnailHeight: 200,
    thumbnailWidth: 200,
}));

function Photography() {
    return (
        <PageTemplate
            className="photography-container"
            pageCoverImage="slope.jpg"
            subtitle="Memories last a lifetime, photos last forever"
            title="Photography"
        >
            <Gallery
                enableImageSelection={false}
                images={images}
                rowHeight={200}
            />
            {/* <div id="instafeed">
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
            </div> */}
        </PageTemplate>
    );
}

export default Photography;
