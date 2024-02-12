import React, { useState, useEffect } from 'react';
import { Pressable, View, Text } from 'react-native';
import styles from '../styles/game.js';

const Grid = () => {
    const [grid] = useState(Array(5).fill(Array(5).fill(false)));
    const [hits, setHits] = useState(0);
    const [misses, setMisses] = useState(0);
    const [highlightedCells, setHighlightedCells] = useState([]);

    useEffect(() => {
        const timer = setInterval(() => {
            const randomCells = [];
            for (let i = 0; i < Math.min(7, 15); i++) {
                const randomRow = Math.floor(Math.random() * 5);
                const randomCol = Math.floor(Math.random() * 5);
                randomCells.push({ row: randomRow, col: randomCol });
            }
            setHighlightedCells(randomCells);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handlePress = (row, col) => {
        if (highlightedCells.some(cell => cell.row === row && cell.col === col)) {
            setHits(hits + 1);
            setHighlightedCells(prevCells => prevCells.filter(cell => !(cell.row === row && cell.col === col))); 
        } else {
            setMisses(misses + 1);
        }
    };

    return (
        <View style={styles.grid}>
            <Text style={styles.counter}>Hits: {hits} </Text>
            <Text style={styles.counter}>Misses: {misses} </Text>
            {grid.map((row, rowIndex) => (
                <View key={rowIndex} style={styles.row}>
                    {row.map((_, colIndex) => (
                        <Pressable
                            key={colIndex}
                            style={[
                                styles.cell,
                                highlightedCells.some(cell => cell.row === rowIndex && cell.col === colIndex) ? styles.highlighted : null,
                            ]}
                            onPress={() => handlePress(rowIndex, colIndex)}
                        />
                    ))}
                </View>
            ))}
        </View>
    );
};

export default Grid;
