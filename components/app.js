/* Package Imports */
import React, { Component } from 'react';
import { View, StyleSheet,} from 'react-native';


/* Components */
import Button from '../components/Button/Button';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 'unknown',
    }
  };

  /* YELP API Fetch */
  fetchData = (props) => {
    alert("Fetching comes from here");
  };

  /* Grabs Current Position */
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
        <Button
         fetchData={ this.fetchData }/>
      </View>
    )
  }
};

/* Style */
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EFD9CE",
  },
});
