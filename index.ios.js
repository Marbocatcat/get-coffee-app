import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet } from 'react-native';

import App from './components/app';

const coffeeApp = (props) => {
  return (
    <App />
  )
};


AppRegistry.registerComponent('coffeeApp', () => coffeeApp);
