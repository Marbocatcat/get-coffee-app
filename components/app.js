import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 'unknown',
    }
  };

  fetchData = (props) => {
    alert("Fetching comes from here");
  };

  /* Grab Current Position */
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
        this.setState({ position });
      },
      (error) => alert(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    )
  };

  render() {
    return (
      <View style={ style.container }>
        <TouchableOpacity
         style={ style.touch }
         onPress={ this.fetchData }>

         <Text style={ style.text }>Get Coffee</Text>
        </TouchableOpacity>
      </View>
    )
  }
};



const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EFD9CE",
  },
  touch: {
    backgroundColor: "#F7A072",
    borderRadius: 10,
    padding: 15,
  },
  text: {
    color: "#333",
    fontFamily: "Avenir Next",
    fontWeight: "700",
    letterSpacing: 1,
  }
});
