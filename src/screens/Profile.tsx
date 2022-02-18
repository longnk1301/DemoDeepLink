import {Text, View} from 'react-native';
import React from 'react';

export const Profile = ({route}: any) => {
  const {message} = route.params;

  return (
    <View>
      <Text>Profile</Text>
      {message && <Text>Message: {JSON.stringify(message)}</Text>}
    </View>
  );
};

export default Profile;
