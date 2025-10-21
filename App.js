import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './App/component/HomePage';
import  PlayFriendPage1  from "./src/PlayFriend/playFriendPage1";
import  PlayFriendPage2  from "./src/PlayFriend/playFriendPage2";
import  PlayFriendPage3 from "./src/PlayFriend/playFriendPage3";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomePage} />
         <Stack.Screen name="playFriendPage1" component={PlayFriendPage1} />
         <Stack.Screen name="playFriendPage2" component={PlayFriendPage2} />
         <Stack.Screen name="playFriendPage3" component={PlayFriendPage3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
