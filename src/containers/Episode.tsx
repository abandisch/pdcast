import React from 'react';
import {View, Text, Button} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../lib/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Episode'>;

function Episode({navigation, route}: Props) {
  console.log('navigation:', navigation);
  console.log('route:', route);

  const handleGoBack = () => {
    navigation.pop();
  };

  return (
    <View>
      <View>
        <Text>Episode Screen</Text>
      </View>
      <View>
        <Button title="Go Back" onPress={handleGoBack} />
      </View>
    </View>
  );
}

export default Episode;
