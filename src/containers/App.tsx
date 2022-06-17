import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Searchbar from './Searchbar';

/*
1) Textbox for the Podcast URL
2) Button to get the pod casts
3) List to show the pod casts
4) Click to see info of pod cast
5) Play a pod cast
*/

interface ItemIFace {
  id: string;
  title: string;
}

const Item = ({title}: {title: string}) => (
  <View>
    <Text>{title}</Text>
  </View>
);

function App() {
  const DATA: ItemIFace[] = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First pod cast',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second pod cast',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third pod cast',
    },
  ];

  const renderItem = ({item}: {item: ItemIFace}) => <Item title={item.title} />;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 10,
      }}>
      <Searchbar />

      <View style={styles.mb10}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
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
