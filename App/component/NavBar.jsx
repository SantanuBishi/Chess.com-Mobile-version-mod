import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import styles from './Styles/NavBarStyles';

const tabs = [
  { label: 'Home', icon: require('../../assets/home2.png') },
  { label: 'Puzzles', icon: require('../../assets/Puzzle.png') },
  { label: 'Learn', icon: require('../../assets/Lesson.png') },
];

export default function NavBar() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <View style={styles.navBar}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.label}
          style={styles.tab}
          onPress={() => setActiveTab(tab.label)}
        >
          <Image
            source={tab.icon}
            style={[
              styles.icon,
              activeTab === tab.label && styles.activeIcon,
            ]}
          />
          <Text
            style={[
              styles.label,
              activeTab === tab.label && styles.activeLabel,
            ]}
          >
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
