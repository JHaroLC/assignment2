import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import styles from '../styles/game.js';

const Timer = () => {
    const SECOND = 1000;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const [timer, tick] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let ticks;
        if (running && timer < HOUR) {
            ticks = setInterval(() => {
                tick((lastTick) => (lastTick += SECOND));
            }, SECOND);
        } else if (timer === 0) {
            clearInterval(ticks);
            setRunning(true);
        }
        return () => clearInterval(ticks);
    }, [running]);

    const regex = (time) => {
        const hours = Math.floor(time / HOUR);
        const mins = Math.floor((time % HOUR) / MINUTE);
        const secs = Math.floor((time % MINUTE) / SECOND);
        return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const restart = () => {
        tick(0);
        setRunning(false);
    };

    return (
        <Text style={styles.label}>{regex(timer)}</Text>
    );
};

export default Timer;