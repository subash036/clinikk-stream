import React from "react";
import { ReactVideo } from "reactjs-media";

export default function MediaPlayer(props) {
    console.log("🚀 ~ file: MediaPlayer.js ~ line 6 ~ MediaPlayer ~ props.video", props.poster)
    return (
        <div>
            <ReactVideo
                src={props.video}
                poster={props.poster}
                primaryColor="red"
            />
        </div>
    );
};
