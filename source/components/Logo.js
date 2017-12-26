import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Fonts } from '../src/utils/Fonts';
export default class Logo extends Component<{}>{
	render(){
		return(

			<View style={styles.container}>

				 <Image style={{width: 130, height: 140}}
          source={require('../images/logo.png')}/>
            <Text style={styles.logoText}>B i r o  J a s a</Text>
      </View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  logoText: {
    fontSize: 25,
    color:'#000',
    marginBottom:26,
    paddingBottom: 60,
    fontFamily: Fonts.OstrichSansmdm
  }
  
});
