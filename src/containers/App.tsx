import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Episode from './Episode';
import {screens} from '../lib/constants';
/*

For next time
 4) Click to see info of pod cast
 5) Play a pod cast
 6) On episode screen, click to see next episode
 *) Android deployment - build APK
 *) Setup OTA (Over The Air) for updates
 *) maybe look at absolute paths (https://betterprogramming.pub/use-absolute-paths-with-react-51ced66f119f)

*/

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name={screens.HOME} component={Home} />
      <Stack.Screen name={screens.EPISODE} component={Episode} />
    </Stack.Navigator>
  );
}

export default App;
