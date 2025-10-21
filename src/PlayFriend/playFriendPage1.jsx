import React from 'react';
import {View,  Text,  TouchableOpacity,  StyleSheet,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './playFriendPage1Styles';


export default function PlayFriendPage1() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      {/* Title */}
      <Text style={styles.title}>Play a Friend</Text>

      {/* Option 1: Play in Person */}
      <TouchableOpacity
        style={styles.optionCard}
        onPress={() => navigation.navigate('playinPersonPage1')}
      >
        <Text style={styles.icon}>👥</Text>
        <Text style={styles.label}>Play in Person</Text>
        <Text style={styles.description}>
          Play together on this device.
        </Text>
      </TouchableOpacity>

      {/* Option 2: Connect and Play */}
      <TouchableOpacity
        style={styles.optionCard}
        onPress={() => navigation.navigate('connectAndPlay')}
      >
        <Text style={styles.icon}>📡</Text>
        <Text style={styles.label}>Connect and Play</Text>
        <Text style={styles.description}>
          Play together using nearby device.
        </Text>
      </TouchableOpacity>
    </View>
  );
}