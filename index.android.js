import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet } from 'react-native';

import App from './components/app';



export default class root extends Component {
  render() {
    return (
      <App></App>
    );
  }
}


AppRegistry.registerComponent('root', () => root);
