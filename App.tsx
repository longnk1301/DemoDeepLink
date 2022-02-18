/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import ProfileScreen from './src/screens/Profile';
import LinkingScreen from './src/screens/Linking';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {Alert} from 'react-native';

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
  const handleDynamicLink = (link: {url: string}) => {
    Alert.alert(JSON.stringify(link.url));
    // Handle dynamic link inside your own application
    if (link.url === 'https://invertase.io/offer') {
      // ...navigate to your offers screen
    }
  };

  //Foreground events
  useEffect(() => {
    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    // When the component is unmounted, remove the listener
    return () => unsubscribe();
  }, []);

  //Background/Quit events
  useEffect(() => {
    dynamicLinks()
      .getInitialLink()
      .then(link => {
        if (link?.url === 'https://invertase.io/offer') {
          // ...set initial route as offers screen
        }
      });
  }, []);

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
