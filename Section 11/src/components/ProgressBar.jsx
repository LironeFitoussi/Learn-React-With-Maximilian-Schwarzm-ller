import { useState, useEffect } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setRemainingTime((prev) => prev - 10);
    } , 10);

    return () => {
      clearInterval(timerInterval);
    }
  } ,[]);
  return (
    <progress value={remainingTime} max={timer} />
  );
}