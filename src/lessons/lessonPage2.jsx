import React from 'react';
import {  View,  Text,  ScrollView,  TouchableOpacity,  StyleSheet,} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import lessonTiers from './lessonTiers';


const LessonPage2 = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { tierId, courseId } = route.params;
    
  // ✅ Find selected course
  const selectedTier = lessonTiers.find((tier) => tier.id === tierId);
  const selectedCourse = selectedTier?.courses.find((course) => course.id === courseId);

  if (!selectedCourse) {
    return (
      <View style={styles.errorBlock}>
        <Text style={styles.errorText}>Course not found bhai 😓</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>📘 {selectedCourse.title}</Text>
      <Text style={styles.subHeader}>Choose a lesson to begin:</Text>

      {selectedCourse.lessons.map((lesson) => (
        <TouchableOpacity
          key={lesson.id}
          style={styles.lessonButton}
          onPress={() =>
            navigation.navigate('lessonPage3', {
              tierId,
              courseId,
              lessonId: lesson.id,
            })
          }
        >
          <Text style={styles.lessonTitle}>{lesson.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    marginTop: 60,
    marginBottom: 8,
  },
  subHeader: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 20,
  },
  lessonButton: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    elevation: 2,
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  errorBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  errorText: {
    fontSize: 18,
    color: '#ff4444',
  },
});

export default LessonPage2;