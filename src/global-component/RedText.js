import React from 'react';
import {Text, StyleSheet} from 'react-native';

function RedText(props){
  return (
    <Text style = {styles.container}>
      {props.text}
    </Text>
  )
}

export default RedText

const styles = StyleSheet.create({
  container: {
    color: 'red'
  }
});