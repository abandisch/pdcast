import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useAppSelector} from '../hooks';
import {selectCurrentPodcast} from '../lib/store/features/podcasts';
import Searchbar from './Searchbar';
import {RootStackParamList, Episode as EpisodeType} from '../lib/types';

const Item = ({title, onPress}: {title: string; onPress: () => void}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={{padding: 10, backgroundColor: 'lightblue', marginBottom: 10}}>
      <Text style={{color: 'black'}}>{title}</Text>
    </View>
  </TouchableOpacity>
);

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

function Home({navigation, route}: Props) {
  console.log('navigation:', navigation);
  console.log('route:', route);

  // const podcastsV1 = useSelector<RootState>(state => state.podcasts.current);
  const podcast = useAppSelector(selectCurrentPodcast);

  const handlePressEpsisode = (episode: EpisodeType) => () => {
    navigation.navigate('Episode', {episode});
  };

  const renderItem = ({item}: {item: EpisodeType}) => (
    <Item title={item.title} onPress={handlePressEpsisode(item)} />
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 10,
      }}>
      <View>
        <Text>Home Screen</Text>
      </View>
      <Searchbar />

      <View style={styles.mb10}>
        {podcast?.episodes && (
          <FlatList
            data={podcast?.episodes}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mb10: {
    marginBottom: 10,
  },
  border: {
    borderColor: 'red',
    borderWidth: 3,
  },
  textInput: {
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    height: 28,
  },
});

export default Home;
