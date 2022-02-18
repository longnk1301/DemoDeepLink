import {Text, View, Linking} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';

const HOME_URL = 'app://demodeeplinks/Home';
const PROFILE_URL = 'app://demodeeplinks/Profile/come-from-url';

export const LinkingScreen = () => {
  return (
    <View>
      <Text>Linking</Text>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(HOME_URL);
        }}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(PROFILE_URL);
        }}>
        <Text>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LinkingScreen;
