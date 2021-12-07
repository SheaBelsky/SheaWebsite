// Node module imports
import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

// Include imports
import PageTemplate from "../includes/PageTemplate";

// CSS
import "../../styles/pages/work.less";

// Icon imports
import APCIcon from "../../media/work/APC.jpg";
import BRHIcon from "../../media/work/BRH.png";
import CornellCISIcon from "../../media/work/CornellCIS.png";
import DTIIcon from "../../media/work/DTI.png";
import EzraIcon from "../../media/work/Ezra.png";
import GoogleIcon from "../../media/work/Google.png";
import HubSpotIcon from "../../media/work/HubSpot.png";
import ISSAIcon from "../../media/work/ISSA.png";
import MentraIcon from "../../media/work/Mentra.png";
import RapidIcon from "../../media/work/Rapid.png";
import SDPBIcon from "../../media/work/SDPB.png";
import WatsonIcon from "../../media/work/Watson.png";
import WayfairIcon from "../../media/work/Wayfair.png";

function WorkTile(props) {
    const {
        backgroundColor,
        destination,
        icon,
        subtitle,
        title,
    } = props;
    const tileStyles = {
        backgroundColor,
    };
    return (
        <Link
            aria-label={`${title}, ${subtitle}`}
            className="workTile"
            to={destination}
            style={tileStyles}
        >
            <img alt="" aria-hidden={true} src={icon} className="workTile__icon" />
            <h2 aria-hidden={true} className="workTile__title">
                {title}
            </h2>
            <h3 aria-hidden={true} className="workTile__subtitle">
                {subtitle}
            </h3>
        </Link>
    );
}

WorkTile.propTypes = {
    backgroundColor: propTypes.string.isRequired,
    destination: propTypes.string.isRequired,
    icon: propTypes.string.isRequired,
    subtitle: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
};

function Work() {
    return (
        <PageTemplate
            className="work-container"
            title="Work Experience"
        >
            <WorkTile
                backgroundColor="#393939"
                destination="/work/hubspot"
                icon={HubSpotIcon}
                title="HubSpot"
                subtitle="Senior Software Engineer I"
            />
            <WorkTile
                backgroundColor="#1d355e"
                destination="/work/autism-stories"
                icon={APCIcon}
                title="Autism Stories"
                subtitle="Featured on Podcast"
            />
            <WorkTile
                backgroundColor="#7D297F"
                destination="/work/wayfair"
                icon={WayfairIcon}
                title="Wayfair"
                subtitle="Engineer II, Tech Lead"
            />
            <WorkTile
                backgroundColor="#9840F5"
                destination="/work/mentra"
                icon={MentraIcon}
                subtitle="Tech Lead"
                title="Mentra"
            />
            <WorkTile
                backgroundColor="red"
                destination="/work/ezra"
                icon={EzraIcon}
                title="Ezra Tech, LLC"
                subtitle="Co-Founder, CTO, CIO"
            />
            <WorkTile
                backgroundColor="#0057C8"
                destination="/work/google"
                icon={GoogleIcon}
                title="Google"
                subtitle="User Experience Engineer Intern"
            />
            <WorkTile
                backgroundColor="#6F6F6F"
                destination="/work/dti"
                icon={DTIIcon}
                subtitle="Creator of 'Trends in Web Development', Developer Lead"
                title="Cornell Design & Tech Initiative"
            />
            <WorkTile
                backgroundColor="teal"
                destination="/work/rapid"
                icon={RapidIcon}
                subtitle="Project: The Music Box"
                title="INFO 4320: Rapid Prototyping"
            />
            <WorkTile
                backgroundColor="cadetblue"
                destination="/work/cis"
                icon={CornellCISIcon}
                subtitle="Undergraduate and Head Teaching Assistant"
                title="Computing and Information Science"
            />
            <WorkTile
                backgroundColor="black"
                destination="/work/ibm"
                icon={WatsonIcon}
                subtitle="Front-End Developer Intern"
                title="IBM Watson"
            />
            <WorkTile
                backgroundColor="navy"
                destination="/work/issa"
                icon={ISSAIcon}
                subtitle="President and Co-President"
                title="Information Science Student Association"
            />
            <WorkTile
                backgroundColor="red"
                destination="/work/brh"
                icon={BRHIcon}
                subtitle="Web Team Lead, Volunteer Coordinator"
                title="BigRed//Hacks"
            />
            <WorkTile
                backgroundColor="tomato"
                destination="/work/slopeday"
                icon={SDPBIcon}
                subtitle="Volunteer Director, Recrutment Director"
                title="Slope Day Programming Board"
            />

        </PageTemplate>
    );
}

export default Work;
