import React from "react";
import Modal from "react-bootstrap/Modal";
import MediaPlayer from "../media/MediaPlayer";
import OtherContent from "./OtherConent";
import "./modal.scss";
export default function ModalPop(props) {
    const [isOpen, setIsOpen] = React.useState(true);

    const [title, setTitle] = React.useState("Transitioning...");
    const hideModal = () => {
        setIsOpen(false);
        props.onClose();
    };
    const onExit = () => {
        setTitle("Goodbye 😀");
    };

    const onExited = () => {
        document.body.style.backgroundColor = "green";
    };

    return (
        <>
            <Modal
                show={isOpen}
                onHide={hideModal}
                onExit={onExit}
                onExited={onExited}
            >
                {!props.isMedia && <Modal.Header>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>}
                <Modal.Body>{
                    props.isMedia ? <MediaPlayer video={props.video.video} poster={props.video.poster} /> : <OtherContent />}</Modal.Body>
                {props.isMedia && <Modal.Footer>
                    <button className="btn btn-primary btn-block" onClick={hideModal}>Close</button>
                </Modal.Footer>}
            </Modal>
        </>
    );
}