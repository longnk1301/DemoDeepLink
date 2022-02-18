/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import ProfileScreen from './src/screens/Profile';
import LinkingScreen from './src/screens/Linking';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Linking" component={LinkingScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer
      linking={{
        prefixes: ['app://demodeeplinks'],
        config: {
          screens: {
            Home: 'Home',
            Profile: {
              path: 'Profile/:message',
              parse: {
                message: message => `${message}`,
              },
            },
            Linking: 'Linking',
          },
        },
      }}>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
