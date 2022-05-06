import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

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

function Searchbar() {
  const [urlText, onChangeUrlText] = React.useState('');

  const handleSubmit = () => {
    console.log('pressed the submit button - url:', urlText);
  };

  return (
    <View>
      <View style={styles.mb10}>
        <Text>Podcast URL:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={onChangeUrlText}
          value={urlText}
        />
      </View>

      <View style={styles.mb10}>
        <TouchableOpacity onPress={handleSubmit}>
          <View
            style={{
              backgroundColor: 'aquamarine',
              width: '100%',
              borderRadius: 5,
              alignItems: 'center',
              padding: 10,
            }}>
            <Text>Get Podcast</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Searchbar;
