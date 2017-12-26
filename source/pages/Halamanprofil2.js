/**
 *WRITTEN BY I GEDE ARI PUTRA
 *This page using React Native Component + Updated New Fonts + HeaderImageScrollView
 *Future update apps will be upgraded with some Firebase Data and CRUD Systems.
 *Upgraded functions for supported Create, Update, Delete Procedure Using Javascript ES6 Babel Compiler Version
 *~Enjoyy!
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  View,
  Dimensions,
  Text,
  ScrollView,
  StatusBar
} from 'react-native';
import { Fonts } from '../src/utils/Fonts';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import { StackNavigator } from 'react-navigation';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Badge } from 'native-base';

export default class Halamanprofil2  extends Component<{}>{

  static navigationOptions = {
    header: null,
  };


  render() {

    const { navigate } = this.props.navigation;

    return (
    <View style={styles.container}>
<HeaderImageScrollView
      maxHeight={250}
      minHeight={150}
      renderHeader={() => (
        <ImageBackground style={styles.headerBackgroud} source={require('../images/loginsignup2.jpg')} >

          <View style ={styles.header}>

                <TouchableOpacity>

                    <View style = {styles.profilepicwrap}>
                    <Image style = {styles.profilepic} source={require('../images/profil1.jpg')}/>
                    </View>

                </TouchableOpacity>

             <Text style ={styles.name}>I  G E D E  A R I  P U T R A</Text>
             <Text style ={styles.jasa}>- P H O T O G R A P H E R -</Text>
             <Text style ={styles.jasa}>- Contact: 085858623281 Based In Bali -</Text>
  
          </View>



        </ImageBackground>


      )}
    >

<View>

        <TriggeringView onHide={() => console.log('text hidden')} >

            <View style={styles.bar}>

                 <TouchableOpacity style ={[styles.barItem, styles.barseparator]} onPress={()=>navigate('App')}> 

                         <View >
                             
                             <Text style={styles.barBottom}>L I S T  J A S A</Text>
                         </View>

                 </TouchableOpacity>

                 <TouchableOpacity style={styles.barItem}>

                         <View>
                           
                             <Text style={styles.barBottom}>T E S T I M O N I</Text>
                         </View>

                 </TouchableOpacity>
          
            </View>

            <View style={styles.preview}>

            <TouchableOpacity style={styles.barItem2}>

                         <View>
                             <Text style={styles.barBottom2}>W H A T    I    D O</Text>
                         </View>

                 </TouchableOpacity>
            </View>

<ImageBackground style={styles.headerBackgroud} source={require('../images/headerstyle.jpg')} blurRadius={1}>
      <ScrollView>
         <View style={styles.photoGrid}>

                <TouchableOpacity>
                          <View style={styles.photoWrap}>
                            <Image style={styles.photo} source={require('../images/imgsatu.jpg')}/>
                          </View>
                </TouchableOpacity>

                <TouchableOpacity>
                          <View style={styles.photoWrap}>
                            <Image style={styles.photo} source={require('../images/imgdua.jpg')}/>
                          </View>
                </TouchableOpacity>

                <TouchableOpacity>
                          <View style={styles.photoWrap}>
                            <Image style={styles.photo} source={require('../images/imgtiga.jpg')}/>
                          </View>
                </TouchableOpacity>

                <TouchableOpacity>
                          <View style={styles.photoWrap}>
                            <Image style={styles.photo} source={require('../images/imgempat.jpg')}/>
                          </View>
                </TouchableOpacity>

                <TouchableOpacity>
                          <View style={styles.photoWrap}>
                            <Image style={styles.photo} source={require('../images/imglima.jpg')}/>
                          </View>
                </TouchableOpacity>

                <TouchableOpacity>
                          <View style={styles.photoWrap}>
                            <Image style={styles.photo} source={require('../images/imgenam.jpg')}/>
                          </View>
                </TouchableOpacity>

                <TouchableOpacity>
                          <View style={styles.photoWrap}>
                            <Image style={styles.photo} source={require('../images/gambar7.jpg')}/>
                          </View>
                </TouchableOpacity>

                <TouchableOpacity>
                          <View style={styles.photoWrap}>
                            <Image style={styles.photo} source={require('../images/gambar8.jpg')}/>
                          </View>
                </TouchableOpacity>

                <TouchableOpacity>
                          <View style={styles.photoWrap}>
                            <Image style={styles.photo} source={require('../images/gambar9.png')}/>
                          </View>
                </TouchableOpacity>

              </View>

           </ScrollView>

        </ImageBackground>

      </TriggeringView>

    </View>

  </HeaderImageScrollView>

   <Footer>
          <FooterTab style={{backgroundColor:'black'}}>
            <Button vertical onPress={() => navigate('Dashboard')}>
              <Icon name="apps" style={{color:'white'}}/>
              <Text style={{color:'white'}}>Service</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" style={{color: 'white'}} />
              <Text style={{color:'white'}}>Camera</Text>
            </Button>
            <Button vertical>
              <Icon name="star-half" style={{color:'white'}} />
              <Text style={{color:'white'}}>Favourites</Text>
            </Button>
            <Button vertical onPress={() => navigate('ListProfil')}>
              <Icon name="settings" style={{color:'white'}}/>
              <Text style={{color:'white'}}>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>

</View>
  
     
    );
  }
}

      

const styles = StyleSheet.create({

 
  headerBackgroud:{

    flex : 1,
    width: null,
    alignSelf: 'stretch'
  },

  header:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0, 0.5)'
  },

  profilepicwrap:{
    width: 120,
    height: 120,
    borderRadius: 100,
    borderColor : 'rgba(0,0,0, 0.4)',
    borderWidth: 10
  },

  profilepic:{
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 1
  },
  name: {
    marginTop: 20,
    fontSize: 30,
    color: '#fff',
    fontFamily: Fonts.OstrichSansmdm
  },
  jasa:{
    fontSize: 20,
    color: '#38f5ff',
    fontFamily: Fonts.OstrichSansmdm
 },

 bar: {
    backgroundColor: 'black',
    borderTopWidth:0,
    flexDirection: 'row'
  },

  barseparator:{
    borderRightWidth: 4,
    borderRightColor: 'white'
  },

  barTop:{
    color:'#fff',
    fontSize: 25,
    fontFamily: Fonts.OstrichSansmdm
  },

  barItem:{
    flex: 1,
    padding: 18,
    alignItems: 'center',
    backgroundColor: '#112233'
  },
 
 barBottom:{
    color:'white',
    fontSize: 18,
    fontFamily: Fonts.OstrichSansmdm
 },

headerBackgroud:{

    flex : 1,
    width: null,
    alignSelf: 'stretch'
  },

 photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap'
 },

 photoWrap:{
    margin: 2,
    height: 120,
    width: (Dimensions.get('window').width / 2) - 4
 },

 photo:{
    flex: 1,
    width: null,
    alignSelf: 'stretch'
 },

 container:{
  flex: 1
 },

 preview:{
  marginTop: 5,
 },

 barTop2:{
    color:'#fff',
    fontSize: 25,
    fontFamily: Fonts.OstrichSansmdm
  },

  barItem2:{
    flex: 1,
    padding: 18,
    alignItems: 'center',
    backgroundColor: '#462446'
  },
 
 barBottom2:{
    color:'white',
    fontSize: 18,
    fontFamily: Fonts.OstrichSansbld
 },

});