import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
    const [remainingTime, setRemainingTime] = useState(timeout);
    
    useEffect(() => {
        console.log("Setting timeout");
        setTimeout(onTimeout, timeout);
    }, [timeout, onTimeout]);

    useEffect(() => {
        console.log("Setting interval");
        setInterval(() => {
            setRemainingTime(prevTime => prevTime - 100);
        }, 100);
    }, []);

    return (
        <div id="question-time">
            <progress value={remainingTime} max={timeout}></progress>
        </div>
    );
}