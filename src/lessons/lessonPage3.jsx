// src/screens/lessonPage3.jsx

import React from 'react';
import { View, StyleSheet } from 'react-native';
import LessonBoard from './lessonBoard';


const LessonPage3 = ({ route }) => {
  const { lessonId } = route.params;

  return (
    <View style={styles.container}>
      <LessonBoard lessonId={lessonId} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default LessonPage3;