// Node module imports
import React from "react";

// Include imports
import PageTemplate from "./../includes/PageTemplate";

// Image imports
const Bebee         = require("../../media/photography/Bebee.jpg");
const CornellHealth = require("../../media/photography/CornellHealth.jpg");
const Fall          = require("../../media/photography/Fall.jpg");
const Freedom       = require("../../media/photography/Freedom.jpg");
const Gates         = require("../../media/photography/Gates.jpg");
const Horse         = require("../../media/photography/Horse.jpg");
const Jersey        = require("../../media/photography/Jersey.jpg");
const KirkLake      = require("../../media/photography/KirkLake.jpg");
const Red           = require("../../media/photography/Red.jpg");
const Slope         = require("../../media/photography/Slope.jpg");
const Subway        = require("../../media/photography/Subway.jpg");
const Taughannock   = require("../../media/photography/Taughannock.jpg");
const TowerRoad     = require("../../media/photography/TowerRoad.jpg");

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

