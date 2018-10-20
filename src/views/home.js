import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { connect } from 'react-redux';

import {setValue} from '../actions/action1';

import TextName from '../components/TextName';

class Home extends Component{

  _onPress = () => {
    this.props.setValue("name", "Bob")
  }

  render(){
    console.log("I'm rendering Home")
    return (
      <View style={styles.container}>
        <TextName />
        <Text style={styles.instructions}>I'm {this.props.age} years old</Text>
        <Text style={styles.instructions}>My height is: {this.props.height}</Text>
        <Button 
          title = {'Chnage my data'}
          onPress = {this._onPress}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.reducer1.age,
    height: state.reducer1.height,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setValue: (varName, value) => {
      dispatch(setValue(varName, value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});