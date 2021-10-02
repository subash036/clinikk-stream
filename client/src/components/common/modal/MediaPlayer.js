import React from "react";
import { ReactVideo } from "reactjs-media";

export default function MediaPlayer(props) {
    return (
        <div>
            {/* <ReactVideo
                src="http://localhost:3004/CDS/bigbuck/video/file_example_MP4_480_1_5MG.mp4"
                // poster="http://localhost:3004/CDS/bigbuck/video/file_example_MP4_480_1_5MG.mp4"
                primaryColor="red"
                // other props
            /> */}
            <video id="videoPlayer" width="100%" controls muted="muted" autoplay>
                <source src="http://localhost:3004/CDS/bigbuck/video/file_example_MP4_480_1_5MG.mp4" type="video/mp4" />
            </video>
        </div>
    );
};
