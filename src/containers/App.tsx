import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAppSelector} from '../hooks';
import {selectCurrentPodcast} from '../lib/store/features/podcasts';
import Searchbar from './Searchbar';
import {Episode as EpisodeType} from '../lib/types/podcast';

/*

3) add navigation
4) Click to see info of pod cast
5) Play a pod cast
*) Setup OTA (Over The Air) for updates

*/

const Item = ({title, onPress}: {title: string; onPress: () => void}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={{padding: 10, backgroundColor: 'lightblue', marginBottom: 10}}>
      <Text style={{color: 'black'}}>{title}</Text>
    </View>
  </TouchableOpacity>
);

function Home({navigation, route}: any) {
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

function Episode({navigation, route}: any) {
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

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Episode" component={Episode} />
    </Stack.Navigator>
  );
}

export default App;
