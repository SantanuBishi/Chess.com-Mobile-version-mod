// src/PlayFriend/playFriendPage1.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './playinPersonPage1Styles';

export default function PlayinPersonPage1() {
  const navigation = useNavigation();

  const [whitePlayer, setWhitePlayer] = useState('Player-1');
  const [blackPlayer, setBlackPlayer] = useState('Player-2');
  const [timeControl, setTimeControl] = useState('None');
  const [rotateBoard, setRotateBoard] = useState(true);

  const handleStartGame = () => {
    let timeInSeconds = 0;
    if (timeControl === '5 min') timeInSeconds = 300;
    else if (timeControl === '10 min') timeInSeconds = 600;

    navigation.navigate('playinPersonPage2', {
      whitePlayer,
      blackPlayer,
      timeControl: timeInSeconds,
      rotateBoard,
      startTimer: true,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.body}>
      <View style={styles.headerBlock}>
        <Text style={styles.headerIcon}>👥</Text>
        <View style={styles.headerTextBlock}>
          <Text style={styles.headerLabel}>Play in Person</Text>
          <Text style={styles.headerSubtext}>Play with an offline friend</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.label}>White:</Text>
          <TextInput style={styles.input} value={whitePlayer} onChangeText={setWhitePlayer} />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Black:</Text>
          <TextInput style={styles.input} value={blackPlayer} onChangeText={setBlackPlayer} />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Time Control:</Text>
          <TouchableOpacity
            style={styles.select}
            onPress={() => {
              const next = timeControl === 'None' ? '5 min' : timeControl === '5 min' ? '10 min' : 'None';
              setTimeControl(next);
            }}
          >
            <Text style={styles.selectText}>{timeControl}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Board Rotates:</Text>
          <Switch value={rotateBoard} onValueChange={setRotateBoard} />
        </View>

        <TouchableOpacity style={styles.playButton} onPress={handleStartGame}>
          <Text style={styles.playText}>Play</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}