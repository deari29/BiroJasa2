/**
 * Written by I Gede Ari Putra
 */
import React from 'react';
import Main from './Main';
import { StackNavigator } from 'react-navigation';

export default class App extends React.Component {

	 static navigationOptions = {
    header: null,
  };
  render() {
  	const { navigate } = this.props.navigation;
    return (

      <Main />
      
    );
  }
}