import {Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';

export const Home = ({navigation}: any) => {
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile', {message: 'Come from Home screen'});
        }}>
        <Text>Go to Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Linking', {message: 'Come from Home screen'});
        }}>
        <Text>Go to Linking screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
