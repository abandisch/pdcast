import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import App from './App';
import {store} from '../lib/store/configureStore';
import TrackPlayer from 'react-native-track-player';

function Root() {
  useEffect(() => {
    const setup = async () => {
      await TrackPlayer.setupPlayer();
    };
    setup();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </Provider>
  );
}

export default Root;
