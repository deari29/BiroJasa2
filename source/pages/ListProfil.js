/**
 * WRITTEN BY I GEDE ARI PUTRA
 *This page using React Native Component
 *This page provides users dashboard after internal Login Process and Signup Process
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  View,
  TextInput,
  ScrollView,
  Text,
  ImageBackground,
  ListView,
  TouchableHighlight,
  Button
} from 'react-native';

import { Fonts } from '../src/utils/Fonts';
import { Icon,  List, ListItem, Container, Content, Header, Title, Footer, FooterTab }  from 'native-base';
import { StackNavigator } from 'react-navigation';
import Communications from 'react-native-communications';


export default class ListProfil  extends Component<{}>{

  static navigationOptions={
    header: null,
    
  };

  
  
  render() {

    const { navigate } = this.props.navigation;

    return (
  

    <View style={styles.container}>
      <ScrollView>

     

        <TouchableOpacity onPress={()=> navigate('Halamanprofil')}>
        <View style={{alignItems: 'center', justifyContent:'center',backgroundColor:'#e67e22', height: 150, marginBottom: 5}}>
            <Image style = {{height: 70, width: 70, borderRadius: 50}} source={require('../images/profil1.jpg')}/>
            <Text style={{color: 'white'}}>I Gede Ari Putra</Text>
            <TouchableOpacity onPress={() => Communications.phonecall('0123456789', true)}>
            <Text style={{color:'white'}}>085858623281</Text>
            </TouchableOpacity>

             <TouchableOpacity onPress={() => Communications.text('0123456789')}>
          <View style={styles.holder}>
            <Text style={{color:'white'}}>Send a text/iMessage</Text>
          </View>
        </TouchableOpacity>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={{alignItems: 'center', justifyContent:'center',backgroundColor:'#e67e22', height: 150, marginBottom: 5}}>
            <Image style = {{height: 70, width: 70, borderRadius: 50}} source={require('../images/profil2.jpg')}/>
            <Text style={{color: 'white'}}>Jhon Doe</Text>
             <TouchableOpacity onPress={() => Communications.phonecall('0123456789', true)}>
            <Text style={{color:'white'}}>085858623281</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Communications.text('0123456789')}>
          <View style={styles.holder}>
            <Text style={{color:'white'}}>Send a text/iMessage</Text>
          </View>
        </TouchableOpacity>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={{alignItems: 'center', justifyContent:'center',backgroundColor:'#e67e22', height: 150, marginBottom: 5}}>
            <Image style = {{height: 70, width: 70, borderRadius: 50}} source={require('../images/profil3.jpg')}/>
            <Text style={{color: 'white'}}>Lewis Hamilton</Text>
             <TouchableOpacity onPress={() => Communications.phonecall('0123456789', true)}>
            <Text style={{color:'white'}}>085858623281</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Communications.text('0123456789')}>
          <View style={styles.holder}>
            <Text style={{color:'white'}}>Send a text/iMessage</Text>
          </View>
        </TouchableOpacity>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={{alignItems: 'center', justifyContent:'center',backgroundColor:'#e67e22', height: 150, marginBottom: 5}}>
            <Image style = {{height: 70, width: 70, borderRadius: 50}} source={require('../images/profil4.jpg')}/>
            <Text style={{color: 'white'}}>Sebastian VanDoorne</Text>
             <TouchableOpacity onPress={() => Communications.phonecall('0123456789', true)}>
            <Text style={{color:'white'}}>085858623281</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Communications.text('0123456789')}>
          <View style={styles.holder}>
            <Text style={{color:'white'}}>Send a text/iMessage</Text>
          </View>
        </TouchableOpacity>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={{alignItems: 'center', justifyContent:'center',backgroundColor:'#e67e22', height: 150, marginBottom: 5}}>
            <Image style = {{height: 70, width: 70, borderRadius: 50}} source={require('../images/profil5.jpg')}/>
            <Text style={{color: 'white'}}>Fernando Alonso</Text>
             <TouchableOpacity onPress={() => Communications.phonecall('0123456789', true)}>
            <Text style={{color:'white'}}>085858623281</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Communications.text('0123456789')}>
          <View style={styles.holder}>
            <Text style={{color:'white'}}>Send a text/iMessage</Text>
          </View>
        </TouchableOpacity>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={{alignItems: 'center', justifyContent:'center',backgroundColor:'#e67e22', height: 150, marginBottom: 5}}>
            <Image style = {{height: 70, width: 70, borderRadius: 50}} source={require('../images/profil6.jpg')}/>
            <Text style={{color: 'white'}}>Roseberg</Text>
            <TouchableOpacity onPress={() => Communications.phonecall('0123456789', true)}>
            <Text style={{color:'white'}}>085858623281</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Communications.text('0123456789')}>
          <View style={styles.holder}>
            <Text style={{color:'white'}}>Send a text/iMessage</Text>
          </View>
        </TouchableOpacity>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={{alignItems: 'center', justifyContent:'center',backgroundColor:'#e67e22', height: 150, marginBottom: 5}}>
            <Image style = {{height: 70, width: 70, borderRadius: 50}} source={require('../images/profil7.jpg')}/>
            <Text style={{color: 'white'}}>Kevin Magnussen</Text>
             <TouchableOpacity onPress={() => Communications.phonecall('0123456789', true)}>
            <Text style={{color:'white'}}>085858623281</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Communications.text('0123456789')}>
          <View style={styles.holder}>
            <Text style={{color:'white'}}>Send a text/iMessage</Text>
          </View>
        </TouchableOpacity>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={{alignItems: 'center', justifyContent:'center',backgroundColor:'#e67e22', height: 150, marginBottom: 5}}>
            <Image style = {{height: 70, width: 70, borderRadius: 50}} source={require('../images/profil8.jpg')}/>
            <Text style={{color: 'white'}}>Clarke Jane</Text>
            <TouchableOpacity onPress={() => Communications.phonecall('0123456789', true)}>
            <Text style={{color:'white'}}>085858623281</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Communications.text('0123456789')}>
          <View style={styles.holder}>
            <Text style={{color:'white'}}>Send a text/iMessage</Text>
          </View>
        </TouchableOpacity>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={{alignItems: 'center', justifyContent:'center',backgroundColor:'#e67e22', height: 150, marginBottom: 5}}>
            <Image style = {{height: 70, width: 70, borderRadius: 50}} source={require('../images/profil9.jpg')}/>
            <Text style={{color: 'white'}}>Jolyon Palmer</Text>
             <TouchableOpacity onPress={() => Communications.phonecall('0123456789', true)}>
            <Text style={{color:'white'}}>085858623281</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Communications.text('0123456789')}>
          <View style={styles.holder}>
            <Text style={{color:'white'}}>Send a text/iMessage</Text>
          </View>
        </TouchableOpacity>
        </View>
        </TouchableOpacity>
    
       
      </ScrollView>
    </View>

    );
  }
}
    

const styles = StyleSheet.create({

  
});
