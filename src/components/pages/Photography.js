// Node module imports
import React from "react";

// Include imports
import PageTemplate from "./../includes/PageTemplate";

// Image imports
import Bebee         from "../../media/photography/Bebee.jpg";
import CornellHealth from "../../media/photography/CornellHealth.jpg";
import Fall          from "../../media/photography/Fall.jpg";
import Freedom       from "../../media/photography/Freedom.jpg";
import Gates         from "../../media/photography/Gates.jpg";
import Horse         from "../../media/photography/Horse.jpg";
import Jersey        from "../../media/photography/Jersey.jpg";
import KirkLake      from "../../media/photography/KirkLake.jpg";
import Red           from "../../media/photography/Red.jpg";
import Slope         from "../../media/photography/Slope.jpg";
import Subway        from "../../media/photography/Subway.jpg";
import Taughannock   from "../../media/photography/Taughannock.jpg";
import TowerRoad     from "../../media/photography/TowerRoad.jpg";

const images = [
    {
        original:  Bebee,
        thumbnail: Bebee

    },
    {
        original:  CornellHealth,
        thumbnail: CornellHealth
    },
    {
        original:  Fall,
        thumbnail: Fall
    },
    {
        original:  Freedom,
        thumbnail: Freedom
    },
    {
        original:  Gates,
        thumbnail: Gates
    },
    {
        original:  Horse,
        thumbnail: Horse
    },
    {
        original:  Jersey,
        thumbnail: Jersey
    },
    {
        original:  KirkLake,
        thumbnail: KirkLake
    },
    {
        original:  Red,
        thumbnail: Red
    },
    {
        original:  Slope,
        thumbnail: Slope
    },
    {
        original:  Subway,
        thumbnail: Subway
    },
    {
        original:  Taughannock,
        thumbnail: Taughannock
    },
    {
        original:  TowerRoad,
        thumbnail: TowerRoad
    },
];

export default function () {
    return (
        <PageTemplate
            galleryTitle=   {"Memories last a lifetime. Photos last forever."}
            images=         {images}
            pageCoverImage= {"HunterSnow.jpg"}
            title=          {"Photography"}
        >
        </PageTemplate>
    );
};

