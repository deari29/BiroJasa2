/**
 * WRITTEN BY I GEDE ARI PUTRA
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';

import {StackNavigator} from 'react-navigation';

import Signup from './source/pages/Signup';
import Login from './source/pages/Login';
import Dashboard from './source/pages/Dashboard';
import Halamanprofil from './source/pages/Halamanprofil';
import Detilschool from './source/pages/Detilschool';


import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';

export default class App extends Component<{}> {
  
  render() {
    return (
      <Halamanprofil/>
    );
  }
}

const styles = StyleSheet.create({
  
});
