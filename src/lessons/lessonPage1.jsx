import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const lessonTiers = [
  {
    id: 'newToChess',
    title: '🟢 New To Chess',
    courses: [
      { id: 'c1', title: 'Learn To Play Chess', rating: 1, lessons: [
          { id: 'l1', title: 'The King and the Goal' },
          { id: 'l2', title: 'The Queen' },
          { id: 'l3', title: 'The Rook' },
          { id: 'l4', title: 'The Bishop' },
          { id: 'l5', title: 'The Knight' },
          { id: 'l6', title: 'The Pawn' },
          { id: 'l7', title: 'Pawn Promotion' },
          { id: 'l8', title: 'En Passant' },
          { id: 'l9', title: 'Moving and Capturing' },
          { id: 'l10', title: 'Check' },
          { id: 'l11', title: 'Getting Out of Check' },
          { id: 'l12', title: 'Checkmate' },
          { id: 'l13', title: 'Castling' },
        ], },
      { id: 'c2', title: 'Playing The Game', rating: 2,  lessons: [
          { id: 'l14', title: 'The Board and the Setup' },
          { id: 'l15', title: 'Game Play' },
          { id: 'l16', title: 'Winning & Drawing' },
          { id: 'l17', title: 'Basic Strategy' },
          { id: 'l18', title: 'Mistakes to Avoid' },
          { id: 'l19', title: 'Basic Strategies Part 2' },
          { id: 'l20', title: 'Opening Principles' },
        ], },
    ],
  },
  {
    id: 'beginner',
    title: '🔵 Beginner',
    courses: [
      { id: 'c3', title: 'Opening Principles', rating: 3, lessons: [
          { id: 'l21', title: 'Control the Center' },
          { id: 'l22', title: 'Develop Your Pieces' },
          { id: 'l23', title: 'Castle Early' },
          { id: 'l24', title: 'Connect the Rooks' },
          { id: 'l25', title: 'Basic Opening Advice' },
        ] },
      { id: 'c4', title: 'Winning the Game', rating: 3, lessons: [
         { id: 'l26', title: 'What is Checkmate?' },
          { id: 'l27', title: 'The Queen & King Checkmate' },
          { id: 'l28', title: 'The Two Rook Checkmate' },
          { id: 'l29', title: 'Avoiding Stalemate' },
          { id: 'l30', title: 'Simple Endgames' },
        ]  },
      { id: 'c5', title: 'Capturing Pieces', rating: 4, lessons: [
         { id: 'l31', title: 'Piece Value' },
         { id: 'l32', title: 'Hanging Pieces' },
         { id: 'l33', title: 'Defending Pieces' },
         { id: 'l34', title: 'Capturing Techniques' },
         { id: 'l35', title: 'Trading Material' },
         { id: 'l36', title: 'Understanding Threats' },
         { id: 'l37', title: 'Simple Tactics' },
         { id: 'l38', title: 'More Tactics' },
         { id: 'l39', title: 'Practice Captures' },
      ] },
      { id: 'c6', title: 'Finding Checkmate', rating: 3, lessons: [
        { id: 'l40', title: 'Back Rank Mate' },
         { id: 'l41', title: 'Smothered Mate' },
         { id: 'l42', title: 'Diagonal Mate' },
         { id: 'l43', title: 'The King Hunt' },
         { id: 'l44', title: 'Basic Mate Patterns' },
         { id: 'l45', title: 'Practice Checkmate' },
      ] },
    ],
  },
  {
    id: 'intermediate',
    title: '🟣 Intermediate',
    courses: [
      { id: 'c8', title: 'Endgame Mastery', rating: 5, lessons: [] },
      { id: 'c9', title: 'Advanced Tactics', rating: 5, lessons: [] },
      { id: 'c10', title: 'Positional Play', rating: 5, lessons: [] },
      { id: 'c11', title: 'Calculation Drills', rating: 5, lessons: [] },
      { id: 'c12', title: 'Opening Repertoire', rating: 5, lessons: [] },
      { id: 'c13', title: 'Imbalances', rating: 5, lessons: [] },
      { id: 'c14', title: 'Master Level Challenges', rating: 5, lessons: [] },
    ],
  },
  {
    id: 'advance',
    title: '🔴 Advance',
    courses: [
      { id: 'c15', title: 'Strategic Planning', rating: 4, lessons: [] },
      { id: 'c16', title: 'Dynamic Play', rating: 4, lessons: [] },
    ],
  },
  {
    id: 'mastery',
    title: '⚫ Mastery',
    courses: [
      { id: 'c17', title: 'GM Repertoire', rating: 5, lessons: [] },
      { id: 'c18', title: 'Tournament Prep', rating: 5, lessons: [] },
    ],
  },
];

const LessonPage1 = () => {
  const navigation = useNavigation();

  const handleCoursePress = (tierId, courseId) => {
    navigation.navigate('LessonPage2', { tierId, courseId });
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
              <Text style={styles.courseMeta}>⭐ {course.rating} | {course.lessons.length} Lessons</Text>
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
