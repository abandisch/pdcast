import React from 'react';
import {View, Text, Button} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../lib/types';
import {format} from 'date-fns';

type Props = NativeStackScreenProps<RootStackParamList, 'Episode'>;

// {
//   id: '321321',
//   title: 'Episode 1',
//   timestamp: '1651877877',
//   description: 'This is the description 1',
//   url: 'https://pathtothepodcast.com/ep1.mp3',
// }

function Episode({navigation, route}: Props) {
  console.log('navigation:', navigation);
  console.log('route:', route);

  const handleGoBack = () => {
    navigation.pop();
  };

  const {episode} = route.params;

  return (
    <View style={{margin: 10}}>
      <View style={{alignItems: 'center', marginBottom: 10}}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>{episode.title}</Text>
        <Text style={{fontSize: 14}}>
          {format(new Date(+episode.timestamp * 1000), 'do MMM yyyy')}
        </Text>
      </View>

      <View style={{marginBottom: 20}}>
        <Text style={{fontWeight: 'bold'}}>About</Text>
        <Text>{episode.description}</Text>
      </View>

      <View style={{marginBottom: 20}}>
        <Text>{episode.url}</Text>
      </View>

      <View>
        <Text>PLAYER FOR {episode.url}</Text>
      </View>

      {/* <View>
        <Text>TODO: BUTTON TO NEXT EPISODE</Text>
      </View> */}
    </View>
  );
}

export default Episode;
