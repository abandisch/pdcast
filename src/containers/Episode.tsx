import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../lib/types';
import {SetupService} from './TrackPlayer/services';

type Props = NativeStackScreenProps<RootStackParamList, 'Episode'>;

function Episode({navigation, route}: Props) {
  console.log('navigation:', navigation);
  console.log('route:', route);

  const [isPlayerReady, setIsPlayerReady] = useState<boolean>(false);

  useEffect(() => {
    async function run() {
      const isSetup = await SetupService();
      setIsPlayerReady(isSetup);
    }

    run();
  }, []);

  const handleGoBack = () => {
    navigation.pop();
  };

  console.log('isPlayerReady', isPlayerReady);

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
