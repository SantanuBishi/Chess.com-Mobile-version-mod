import React from 'react';
import {  View,  Text,  ScrollView,  TouchableOpacity,  StyleSheet,  Image,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import lessonTiers from './lessonTiers';


const LessonPage1 = () => {
  const navigation = useNavigation();

  const handleCoursePress = (tierId, courseId) => {
    navigation.navigate('lessonPage2', { tierId, courseId });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerBlock}>
        <Image
          source={require('../../assets/Lesson.png')}
          style={styles.headerIcon}
        />
        <Text style={styles.header}>Choose Your Lesson</Text>
      </View>

      {lessonTiers.map((tier) => (
        <View key={tier.id} style={styles.tierBlock}>
          <Text style={styles.tierTitle}>{tier.title}</Text>
          {tier.courses.map((course) => (
            <TouchableOpacity
              key={course.id}
              style={styles.courseButton}
              onPress={() => handleCoursePress(tier.id, course.id)}
            >
              <Text style={styles.courseTitle}>{course.title}</Text>
              <Text style={styles.courseMeta}>
                ⭐ {course.rating} | {course.lessons.length} Lessons
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  headerBlock: {
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center',
    paddingVertical: 24,
    marginTop: 60,
  },
  headerIcon: {
    width: 32,
    height: 32,
    marginRight: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    color: 'white',
  },
  tierBlock: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  tierTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
    color: '#fff',
  },
  courseButton: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    elevation: 2,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  courseMeta: {
    fontSize: 14,
    color: '#fff',
    marginTop: 4,
  },
});

export default LessonPage1;
