import "./audiogrid.scss";
export default function AudioGrid(props) {
    return (
        <div className="thumbnail">
            <audio width="100%" className="audio-player" controls>
                <source src={props.audio.audio} type="audio/ogg" />
                <source src={props.audio.audio} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <div className="caption">
                <h3>{props.audio.title}</h3>
                <p>{props.audio.description}</p>
            </div>
        </div>
    )

}