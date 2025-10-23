import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Image, StyleSheet, Easing } from 'react-native';

export default function TimerBlock({
  mode, // 'w' or 'b'
  activeColor,
  whiteTime,
  blackTime,
  isRunning,
  timeControl,
}) {
  const rotation = useRef(new Animated.Value(0)).current;
  const rotationDeg = useRef(0);

  const isActive = activeColor === mode;
  const isWhite = mode === 'w';

  // 🔁 Reset rotation when timer becomes inactive
  useEffect(() => {
    if (!isActive) {
      rotationDeg.current = 0;
      rotation.setValue(0);
    }
  }, [isActive]);

  // 🔁 Animate rotation every second when active
  useEffect(() => {
    if (!isActive || !isRunning || timeControl === 0) return;

    const rotateLoop = setInterval(() => {
      rotationDeg.current += 90;

      Animated.timing(rotation, {
        toValue: rotationDeg.current,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start();
    }, 1000);

    return () => clearInterval(rotateLoop);
  }, [isActive, isRunning, timeControl]);

  const rotateStyle = {
    transform: [
      {
        rotate: rotation.interpolate({
          inputRange: [0, 360],
          outputRange: ['0deg', '360deg'],
          extrapolate: 'extend',
        }),
      },
    ],
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const timeText =
    timeControl === 0 ? '--:--' : mode === 'w' ? formatTime(whiteTime) : formatTime(blackTime);

  const bgColor = isActive
    ? isWhite ? '#fff' : '#000'
    : isWhite ? '#444' : '#444';

  const textColor = isActive
    ? isWhite ? '#000' : '#fff'
    : isWhite ? '#888' : '#888';

  let iconSource = null;
  try {
    iconSource =
      mode === 'w'
        ? require('../../assets/clock-white.png')
        : require('../../assets/clock-black.png');
  } catch (e) {
    console.warn('Clock icon missing:', e);
  }

  return (
    <View style={[styles.timerBlock, { backgroundColor: bgColor }]}>
      <View style={styles.iconWrapper}>
        {isActive && iconSource ? (
          <Animated.Image source={iconSource} style={[styles.timerIcon, rotateStyle]} />
        ) : (
          <View style={styles.timerIcon} />
        )}
      </View>
      <Text style={[styles.timerText, { color: textColor }]}>{timeText}</Text>
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
    borderRadius: 9,
    marginTop: 12,
    alignSelf: 'center',
  },
  iconWrapper: {
    width: 24,
    height: 24,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  timerText: {
    fontSize: 18,
    fontWeight: '600',
  },
});