import React from 'react';
import App from './App';
import {store} from '../lib/store/configureStore';
import {Provider} from 'react-redux';

function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Root;
