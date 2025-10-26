// src/components/LessonBoard/LessonBoard.js

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { lessonPositions } from './lessonPositions';
import ChessBoard from '../Chessboard/Chessboard';
import { parseFEN } from '../utlis/fenParser';
import { validateMove } from '../utlis/validateMove';


const LessonBoard = ({ lessonId }) => {
  const lessonData = lessonPositions[lessonId];
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [positionMap, setPositionMap] = useState({});

  useEffect(() => {
    if (lessonData && lessonData.challenges[currentChallengeIndex]) {
      const challenge = lessonData.challenges[currentChallengeIndex];
      setPositionMap(parseFEN(challenge.position));
      setSelectedSquare(null);
      setFeedback('');
    }
  }, [currentChallengeIndex, lessonData]);

  if (!lessonData) {
    return (
      <View style={styles.messageBox}>
        <Text style={styles.errorText}>Lesson not found bhai!</Text>
      </View>
    );
  }

  if (currentChallengeIndex >= lessonData.challenges.length) {
    return (
      <View style={styles.messageBox}>
        <Text style={styles.title}>🎉 Lesson Complete!</Text>
        <Text style={styles.hint}>Tu toh tactical beast nikla bhai!</Text>
      </View>
    );
  }

  const challenge = lessonData.challenges[currentChallengeIndex];

  const handleSquarePress = (square) => {
    if (!selectedSquare) {
      setSelectedSquare(square);
    } else {
      const move = `${selectedSquare}${square}`;
      const isCorrect = validateMove(move, challenge.correctMove);

      if (isCorrect) {
        setFeedback('✅ Sahi move bhai!');
        setPositionMap((prevMap) => {
          const newMap = { ...prevMap };
          newMap[square] = newMap[selectedSquare];
          delete newMap[selectedSquare];
          return newMap;
        });

        setTimeout(() => {
          setSelectedSquare(null);
          setFeedback('');
          setCurrentChallengeIndex((prev) => prev + 1);
        }, 1000);
      } else {
        setFeedback('❌ Galat move bhai!');
        setSelectedSquare(null);
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{lessonData.title}</Text>
      <Text style={styles.pgn}>{lessonData.pgn}</Text>

      <View style={styles.challengeBox}>
        <Text style={styles.goal}>🎯 {challenge.goal}</Text>
        <ChessBoard
          positionMap={positionMap}
          legalMoves={[]} // stub
          highlightSquares={{ from: selectedSquare, to: null }}
          onSquarePress={handleSquarePress}
        />
        <Text style={styles.hint}>💡 Hint: {challenge.hint}</Text>
        <Text style={{ color: feedback.includes('✅') ? 'green' : 'red', marginTop: 8 }}>
          {feedback}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  pgn: {
    fontFamily: 'monospace',
    backgroundColor: '#1e1e1e',
    color: '#ccc',
    padding: 10,
    marginBottom: 16,
    borderRadius: 6,
  },
  challengeBox: {
    marginBottom: 24,
    padding: 12,
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
  },
  goal: {
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  hint: {
    fontStyle: 'italic',
    color: '#aaa',
    marginTop: 8,
  },
  messageBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: '#ff4444',
  },
});

export default LessonBoard;