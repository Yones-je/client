import React, { useState, useEffect } from 'react';
import { formatTime } from '../utils';

const Clock = ({ time }) => {
    const [seconds, setSeconds] = useState(time);
    const [timer, setTimer] = useState(formatTime(seconds));
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        const timerID = setInterval(() => {
            setSeconds(seconds - 1);
            setTimer(formatTime(seconds))}, 1000);
        return () => clearInterval(timerID);
      },[seconds, timer]);

    return (
        <div>
            <p>{timer}</p>
            <button onClick={}>Start</button>
            <button onClick={}>Pause</button>
            <button onClick={}>Reset</button>
        </div>
    )
}

export default Clock
