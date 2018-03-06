/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  NativeModules,
  TouchableOpacity,
} from 'react-native';

type Props = {};

export default class App extends Component<Props> {
  NavigationBar = NativeModules.NavigationBar

  showNavBar = () => {
    this.NavigationBar.showNavigationBar();
  };

  hideNavBar = () => {
    this.NavigationBar.hideNavigationBar();
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.showNavBar}><Text>SHOW</Text></TouchableOpacity>
        <TouchableOpacity onPress={this.hideNavBar}><Text>HIDE</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
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
