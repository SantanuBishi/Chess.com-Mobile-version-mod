import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './App/component/HomePage';
import  PlayFriendPage1  from "./src/PlayFriend/playFriendPage1";
import  PlayinPersonPage1  from "./src/PlayFriend/playinPersonPage1";
import  PlayinPersonPage2 from "./src/PlayFriend/playinPersonPage2";
import PlayBotPage1 from './src/PlayBot/playBotPage1';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomePage} />
         <Stack.Screen name="playFriendPage1" component={PlayFriendPage1} />
         <Stack.Screen name="playinPersonPage1" component={PlayinPersonPage1} />
         <Stack.Screen name="playinPersonPage2" component={PlayinPersonPage2} />
         <Stack.Screen name="playBotPage1" component={PlayBotPage1} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>

  );
}
