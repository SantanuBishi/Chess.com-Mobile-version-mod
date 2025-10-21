// src/PlayFriend/playFriendPage2.jsx
import React, { useState } from 'react';
import { View,  Text,  TextInput,  TouchableOpacity,  Switch,  StyleSheet,  ScrollView,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './playFriendPage2Styles';


export default function PlayFriendPage2() {
  const navigation = useNavigation();

  const [whitePlayer, setWhitePlayer] = useState('Player-1');
  const [blackPlayer, setBlackPlayer] = useState('Player-2');
  const [timeControl, setTimeControl] = useState('None');
  const [rotateBoard, setRotateBoard] = useState(true);

  const handleStartGame = () => {
    console.log('Starting game with settings:', {
      whitePlayer,
      blackPlayer,
      timeControl,
      rotateBoard,
    });

    navigation.navigate('playFriendPage3', {
      whitePlayer,
      blackPlayer,
      timeControl,
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
        <Text style={styles.headerSubtext}>Play with a offline friend</Text>
      </View>
    </View>


      <View style={styles.container}>
        

        <View style={styles.row}>
          <Text style={styles.label}>White:</Text>
          <TextInput
            style={styles.input}
            value={whitePlayer}
            onChangeText={setWhitePlayer}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Black:</Text>
          <TextInput
            style={styles.input}
            value={blackPlayer}
            onChangeText={setBlackPlayer}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Time Control:</Text>
          <TouchableOpacity
            style={styles.select}
            onPress={() => {
              // You can replace this with a modal or dropdown later
              const next = timeControl === 'None' ? '5 min' : timeControl === '5 min' ? '10 min' : 'None';
              setTimeControl(next);
            }}
          >
            <Text style={styles.selectText}>{timeControl}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Board Rotates:</Text>
          <Switch
            value={rotateBoard}
            onValueChange={setRotateBoard}
          />
        </View>

        <TouchableOpacity style={styles.playButton} onPress={handleStartGame}>
          <Text style={styles.playText}>Play</Text>
        
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}