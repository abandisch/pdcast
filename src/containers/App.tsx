import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Episode from './Episode';

/*

4) Click to see info of pod cast
5) Play a pod cast
*) Setup OTA (Over The Air) for updates

*/

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
