/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import { Provider } from 'react-redux';

import configureStore from './store';
const store = configureStore()

import Home from './src/views/home';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store = { store }>
        <Home/>
      </Provider>
    );
  }
}
