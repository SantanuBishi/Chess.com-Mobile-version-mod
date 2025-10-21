import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Image, StyleSheet } from 'react-native';

export default function TimerBlock({
  activeColor,
  whiteTime,
  blackTime,
  isRunning,
  timeControl,
}) {
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!isRunning || timeControl === 0) return;

    const rotateLoop = setInterval(() => {
      Animated.timing(rotation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        rotation.setValue(0);
      });
    }, 1000);

    return () => clearInterval(rotateLoop);
  }, [isRunning, activeColor]);

  const rotateStyle = {
    transform: [
      {
        rotate: rotation.interpolate({
          inputRange: [0, 1,],
          outputRange: ['0deg', '360deg'],
        }),
      },
    ],
  };

  let iconSource;
  try {
    iconSource =
      activeColor === 'w'
        ? require('../../assets/clock-white.png')
        : require('../../assets/clock-black.png');
  } catch (e) {
    console.warn('Clock icon missing:', e);
    iconSource = null;
  }

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const timeText =
    timeControl === 0 ? '--:--' : activeColor === 'w' ? formatTime(whiteTime) : formatTime(blackTime);

  const isWhite = activeColor === 'w';

  return (
    <View
      style={[
        styles.timerBlock,
        { backgroundColor: isWhite ? '#fff' : '#000' },
      ]}
    >
      {iconSource && (
        <Animated.Image source={iconSource} style={[styles.timerIcon, rotateStyle]} />
      )}
      <Text style={[styles.timerText, { color: isWhite ? '#000' : '#fff' }]}>
        {timeText}
      </Text>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  timerBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    marginTop: 12,
    alignSelf: 'center',
  },
  timerIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
    resizeMode: 'contain',
  },
  timerText: {
    fontSize: 18,
    fontWeight: '600',
  },
});