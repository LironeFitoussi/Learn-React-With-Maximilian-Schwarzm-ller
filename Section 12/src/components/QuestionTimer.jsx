import { useEffect, useState } from "react";
import Question from "./Question";

export default function QuestionTimer({ timeout, onTimeout }) {
    const [remainingTime, setRemainingTime] = useState(timeout);
    
    useEffect(() => {
        console.log("Setting timeout");
        const timer = setTimeout(onTimeout, timeout);
        return () => {
            clearTimeout(timer);
        };
    }, [timeout, onTimeout]);

    useEffect(() => {
        console.log("Setting interval");
        const interval = setInterval(() => {
            setRemainingTime(prevTime => prevTime - 100);
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div id="question-time">
            <progress value={remainingTime} max={timeout}></progress>
        </div>
    );
}