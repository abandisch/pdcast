import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useAppSelector} from '../hooks';
import {selectCurrentPodcast} from '../lib/store/features/podcasts';
import Searchbar from './Searchbar';
import {Episode} from '../lib/types/podcast';

/*

4) Click to see info of pod cast
5) Play a pod cast

*/

const Item = ({title}: {title: string}) => (
  <View>
    <Text>{title}</Text>
  </View>
);

function App() {
  // const podcastsV1 = useSelector<RootState>(state => state.podcasts.current);
  const podcast = useAppSelector(selectCurrentPodcast);

  const renderItem = ({item}: {item: Episode}) => <Item title={item.title} />;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 10,
      }}>
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

export default App;
