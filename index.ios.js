import React from 'react';
import { AppRegistry } from 'react-native';

import App from './components/app';

const coffeeApp = () => {
  return (
    <App />
  );
};


AppRegistry.registerComponent('coffeeApp', () => coffeeApp);
