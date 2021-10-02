import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";
import MediaPlayer from "./MediaPlayer";
import OtherContent from "./OtherConent";

export default function ModalPop(props) {
    const [isOpen, setIsOpen] = React.useState(true);
    const [timer, setTimer] = React.useState(0);
    const [startTime, setStartTime] = React.useState(0);
    const [endTime, setEndTime] = React.useState(0);
    const [title, setTitle] = React.useState("Transitioning...");

    const showModal = () => {
        setIsOpen(true);
        setTitle("Modal Ready");
        document.body.style.backgroundColor = "white";
    };

    const hideModal = () => {
        setIsOpen(false);
        props.onClose();
    };

    const startTimer = () => {
        setStartTime(Date.now());
    };

    const modalLoaded = () => {
        setEndTime(Date.now());
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
                onEnter={startTimer}
                onEntered={modalLoaded}
                onExit={onExit}
                onExited={onExited}
            >
                {props.isMedia && <Modal.Header>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>}
                <Modal.Body>{
                    props.isMedia ? <MediaPlayer />:<OtherContent />}</Modal.Body>
                {props.isMedia && <Modal.Footer>
                    <button onClick={hideModal}>Cancel</button>
                    <button>Save</button>
                </Modal.Footer>}
            </Modal>
        </>
    );
}