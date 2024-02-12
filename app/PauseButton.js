import React, { createContext, useContext, useState, useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from '../styles/game.js';

const PauseGame = createContext();

export const GamePause = ({ children }) => {
    const [paused, setPaused] = useState(false);
    const togglePause = () => {
        setPaused(paused => !paused);
    };

    return (
        <PauseGame.Provider value={{ paused, togglePause }}>
            {children}
        </PauseGame.Provider>
    );
};

export const usePause = () => useContext(PauseGame);

const PauseButton = () => {
    const { paused, togglePause } = usePause();
    
    return (
        <Pressable style={({ pressed }) => [
            styles.pause,
            {
                backgroundColor: paused ? 'red' : 'green',
            },
        ]} onPress={togglePause}>
            <View>
                <Text style={{ fontSize: 32 }}>
                    {paused ? ' PAUSED! ' : ' PLAYING! '}
                </Text>
            </View> 
        </Pressable>
    );
};

export default PauseButton;

export const Timer = () => {
    const SECOND = 1000;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const [timer, setTimer] = useState(0);
    const [running, setRunning] = useState(true);

    useEffect(() => {
        let ticks;
        if (!running ) return;

        if (timer < HOUR) {
            ticks = setInterval(() => {
                setTimer(prevTimer => prevTimer += SECOND);
            }, SECOND);
        } else {
            clearInterval(ticks);
            setRunning(false);
        }
        
        return () => clearInterval(ticks);
    }, [running, timer]);

    const regex = (time) => {
        const hours = Math.floor(time / HOUR);
        const mins = Math.floor((time % HOUR) / MINUTE);
        const secs = Math.floor((time % MINUTE) / SECOND);
        return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const restart = () => {
        setTimer(0);
        setRunning(true);
    };

    return (
        <Text style={styles.label}>{regex(timer)}</Text>
    );
};