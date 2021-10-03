import { useState } from "react";
import ModalPop from "../common/modal/Modal";
import "./videogrid.scss";

export default function VideoGrid(props) {
    const [modalisOpen, setModelOpen] = useState(false);

    function modelOpen() {
        setModelOpen(true);
    };

    function modelClose() {
        setModelOpen(false);
    };

    return (
        <div className="thumbnail">
            <video id="videoPlayer" width="100%" height="150px" poster={props.video.poster} controls muted="muted">
                <source src={props.video.video} type="video/mp4" />
            </video>
            <div className="caption">
                <h3>{props.video.title}</h3>
                <div><button onClick={modelOpen} className="btn btn-primary btn-block">Watch</button></div>
                <p>{props.video.description}</p>
            </div>
            {modalisOpen && <ModalPop video={props.video} isMedia={true} onClose={modelClose} title="testst" />}
        </div>
    )

}