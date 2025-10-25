import React from 'react';
import {  View,  Text,  ScrollView,  TouchableOpacity,  Image,} from 'react-native';
import styles from './Styles/HomePageStyles';
import NavBar from './NavBar';import { useNavigation } from '@react-navigation/native';



const mockGames = [
  { id: 'g1', opponent: 'Bot', result: 'win', accuracy: 92 },
  { id: 'g2', opponent: 'Player123', result: 'loss', accuracy: 78 },
  { id: 'g3', opponent: 'Bot', result: 'draw', accuracy: 65 },
];

function getAccuracyColor(value) {
  if (value >= 90) return styles.high;
  if (value >= 70) return styles.medium;
  return styles.low;
}

function ResultIcon({ result }) {
  const colorMap = {
    win: '#4caf50',
    loss: '#f44336',
    draw: '#9e9e9e',
  };
  const labelMap = {
    win: 'Won',
    loss: 'Loss',
    draw: 'Draw',
  };

}

function CTAButton({ label, subtext, icon, featureIcon, onPress }) {
  return (
    
    <TouchableOpacity style={styles.cta} onPress={onPress}>
      <Image source={icon} style={styles.iconLeft} />
      <View style={styles.textBlock}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.subtext}>{subtext}</Text>
        {featureIcon && <Image source={featureIcon} style={styles.featureIcon} />}
      </View>
    </TouchableOpacity>
  );
}

export default function HomePage() {
  const navigation = useNavigation();
  return (
    
    <View style={{ flex: 1 }}>
      
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.header}>Chess</Text>

        <View style={styles.ctaBlock}>
          <CTAButton
            label="Play a Friend"
            subtext="Challenge any level"
            icon={require('../../assets/playABot.png')}
            featureIcon={require('../../assets/playAFriend.png')}
            onPress={()=>navigation.navigate('playFriendPage1')}
          />
          <CTAButton
            label="Play a Bot"
            subtext="Challenge any level"
            icon={require('../../assets/playABot.png')}
            featureIcon={require('../../assets/Bot.png')}
          />
          <CTAButton
            label="New Puzzle"
            subtext="Solve daily puzzles"
            icon={require('../../assets/dailyPuzzle.png')}
            featureIcon={require('../../assets/Puzzle.png')}
          />
          <CTAButton
            label="Lessons"
            subtext="Learn from masters"
            icon={require('../../assets/nextLesson.png')}
            featureIcon={require('../../assets/Lesson.png')}
            onPress={()=>navigation.navigate('lessonPage1')}
          />
          <CTAButton
            label="Coach"
            subtext="Train your skills"
            icon={require('../../assets/playCoach.png')}
            featureIcon={require('../../assets/Coach.png')}
          />
        </View>

        <View style={styles.gameHistory}>
          <Text style={styles.historyHeader}>Game History</Text>
          {mockGames.map((game) => (
            <View key={game.id} style={styles.row}>
              <Text style={styles.opponent}>vs {game.opponent}</Text>
              <View style={styles.rightBlock}>
                <ResultIcon result={game.result} />
                <Text style={[styles.accuracy, getAccuracyColor(game.accuracy)]}>
                  {game.accuracy}%
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <NavBar />
    </View>
  );
}
