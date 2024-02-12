import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/game.js';
import Grid, { HitMiss } from './gameGrid.js';
import PauseButton, { GamePause, Timer } from './PauseButton.js'
export default function App() {

  return (
    <View style={styles.gui}>
      <GamePause>
        <View style={styles.banner}>
          <View style={styles.info}>
            <View style={styles.stats}>
              <Text style={styles.label}> HiScore </Text>
              <Text style={styles.label}> #,###,### </Text>
            </View>
            <View style={styles.stats}>
              <Text style={styles.label}> Level </Text>
              <Text style={styles.label}> ### </Text>
            </View>
            <View style={styles.stats}>
              <Text style={styles.label}> Ratio </Text>
              <Text style={styles.label}> #/# </Text>
            </View>
          </View>
          <View style={styles.info}>
            <View style={styles.stats}>
              <Text style={styles.label}> Score </Text>
              <Text style={styles.label}> #,###,### </Text>
            </View>
            <View style={styles.stats}>
              <Text style={styles.label}> Timer </Text>
              <Timer />
            </View>
            <View style={styles.stats}>
              <Text style={styles.label}> Streak </Text>
              <Text style={styles.label}> #,### </Text>
            </View>
          </View>
        </View>
        <View style={styles.game}>
          <Grid />
        </View>
        <PauseButton />
      </GamePause>
    </View>
  );
};