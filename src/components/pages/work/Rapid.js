import React from "react";
import Gallery from "react-grid-gallery";
import PageTemplate from "../../includes/PageTemplate";

const thumbnailHeight = 200;
const thumbnailWidth = 200;

const imageNames = ["brainstorming.jpg", "part1_surface.jpg", "part1_surface2.jpg", "shape_prototype1.jpg", "shape_prototype2.jpg", "part2_prototype1.jpg", "final1.jpg", "final2.jpg", "poster.png", "schematic.png"];

const images = imageNames.map((image) => {
    const { default: defaultSrc } = require(`./../../../media/work/rapid/full/${image}`);
    const { default: defaultThumb } = require(`./../../../media/work/rapid/thumb/${image}`);
    return {
        src: defaultSrc,
        thumbnail: defaultThumb,
        thumbnailHeight,
        thumbnailWidth,
    };
});

function Rapid() {
    return (
        <PageTemplate
            className="work-page-container"
            subtitle="Project: The Music Box"
            title="INFO 4320: Rapid Prototyping and Physical Computing"
        >
            <p>
                During the Fall of 2018, I worked with Chelsea Chan to develop a semester-long project using Arduino, Adafruit, and other hardware components. We constructed two devices that explore the relationship between physical location in space and its corresponding output sound.
            </p>
            <p>
                A two-color surface serves as the platform for the devices; blue represents the pitch of a device, red being its volume. The maximum of each color exist in opposite corners of the surface, while the absence of both colors (black) and combination of both colors (purple) exist across from each other in the other two corners, with black being the origin (0,0) and purple being the maximum for both dimensions (100,100). Color sensors under each device would read the color of the surface, calculate its pitch and volume, and communicate this information over Bluetooth to a computer.
            </p>
            <p>
                A capacative touch sensor on the top of the device, in addition to an RGB color ring, allow users to select from one of four instruments. Each device was the grouping of similar instruments; for example, one device had the electric guitar, ukelele, acoustic guitar, and bass guitar as its four choices. These four instruments were laser cut onto acryllic in four opposite locations on a circle; around the circle sat an RGB color ring, which would correspond one instrument to a color on the ring. When a user touches their finger on the capacative touch surface, the selected area is transmitted on a specific Bluetooth channel that corresponds to its instrument in the macOS applications Audio MIDI Setup and SimpleSynth. The act of touching causes the RGB ring to light up in a unique color.
            </p>
            <p>
                For our final presentation, two of these devices were fabricated: one that grouped together guitar instruments, and another that grouped together piano instruments. An image gallery of the full design process, from prototyping to final design, of the device can be seen below.
            </p>

            <p>
                For a video demonstration of the devices in action, <a href="https://drive.google.com/file/d/122zjg4x-F5F7VW0GKzZxjs4uKJZHMWoX/view?usp=sharing" target="_blank" rel="noopener noreferrer">click here!</a>
            </p>
            <Gallery
                enableImageSelection={false}
                images={images}
                rowHeight={200}
            />
        </PageTemplate>
    );
}

export default Rapid;
