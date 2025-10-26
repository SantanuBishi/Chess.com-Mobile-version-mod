import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './App/component/HomePage';
import  PlayFriendPage1  from "./src/PlayFriend/playFriendPage1";
import  PlayinPersonPage1  from "./src/PlayFriend/playinPersonPage1";
import  PlayinPersonPage2 from "./src/PlayFriend/playinPersonPage2";
import  LessonPage1  from "./src/lessons/lessonPage1";
import LessonPage2 from './src/lessons/lessonPage2';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomePage} />
         <Stack.Screen name="playFriendPage1" component={PlayFriendPage1} />
         <Stack.Screen name="playinPersonPage1" component={PlayinPersonPage1} />
         <Stack.Screen name="playinPersonPage2" component={PlayinPersonPage2} />
          <Stack.Screen name="lessonPage1" component={LessonPage1} />
          <Stack.Screen name="lessonPage2" component={LessonPage2} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
