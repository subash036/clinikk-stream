import { useState } from "react"

export default function Counter() {
    let [counter, setCounter] = useState(0);
    const [timerId, setTImerId] = useState(null);
    let timer = [];
    let startTimer;
    startTimer = () => {
        setTImerId(setInterval(() => {
            setCounter(counter++);
        }, 1000));
        console.log(timer);
    };

    function stopTimer() {
        clearInterval(timerId);
    };
    function resetTimer() {
        clearInterval(timerId);
        setCounter(0);
    };

    return (
        <div>
            <p>Conter Value:{counter}</p>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    )
}