/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import './src/globals'
import React, { Component } from 'react';
import LoginView from './src/views/login'
import {
  AppRegistry,
  Text
} from 'react-native';


export default class StarWarsAwesomeCharacters extends Component {
  render() {
    return (
     <LoginView/>
    );
  }
}

AppRegistry.registerComponent('StarWarsAwesomeCharacters', () => StarWarsAwesomeCharacters);
