/* Package Imports */
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';


const Button = ({ fetchData }) => {
  return (
    <TouchableOpacity
     style={style.button}
     onPress={fetchData}
    >

     <Text style={style.text}>Get Coffee</Text>
    </TouchableOpacity>
  );
};

/* PropTypes stuff */
Button.propTypes = {
  fetchData: PropTypes.func,
};


/* Styling */
const style = StyleSheet.create({
  button: {
      backgroundColor: '#F7A072',
      borderRadius: 10,
      padding: 15,
    },
    text: {
      color: '#333',
      fontFamily: 'Avenir Next',
      fontWeight: '700',
      letterSpacing: 1,
    }
});

export default Button;
