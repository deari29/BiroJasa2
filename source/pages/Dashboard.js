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
  ImageBackground
} from 'react-native';
import { Fonts } from '../src/utils/Fonts';
import Drawer from 'react-native-drawer';
import { Icon, Button, List, ListItem, Container, Content, Header, Title, Footer, FooterTab }  from 'native-base';
import { StackNavigator } from 'react-navigation';
export default class Dashboard  extends Component<{}>{

  static navigationOptions={
    header: null,
    
  };

  closeControlPanel = () => {
    this._drawer.close();
  };
  openControlPanel = () => {
    this._drawer.open();
  };
  
  render() {

    const { navigate } = this.props.navigation;

    return (
  
<Drawer
  ref={(ref) => this._drawer = ref}
  type="overlay"
  content={
    <View style={styles.drawerr}>
    <View style={{alignItems: 'center', justifyContent:'center',backgroundColor:'#013243', height: 150}}>
     <Image style = {{height: 70, width: 70, borderRadius: 50}} source={require('../images/profil1.jpg')}/>
     <Text style={{color: 'white'}}>I Gede Ari Putra</Text>
     <Text style={{color:'white'}}>085858623281</Text>
    </View>
    <ScrollView>
    <List>
    <ListItem>
    <Button style={styles.tombolDrawer} onPress={() => navigate('Halamanprofil2')}>
      <Icon name="person" style={{color: 'black'}}/>
      </Button>
      <Text>Profile</Text>
</ListItem>

<ListItem>
    <Button style={styles.tombolDrawer} onPress={() => navigate('Halamanprofil')}>
      <Icon name="settings" style={{color: 'black'}}/>
      </Button>
      <Text>Settings</Text>
</ListItem>

<ListItem>
    <Button style={styles.tombolDrawer} onPress={() => navigate('Halamanprofil2')}>
      <Icon name="bookmarks" style={{color: 'black'}}/>
      </Button>
      <Text>Contribute</Text>
</ListItem>

<ListItem>
    <Button style={styles.tombolDrawer} onPress={() => navigate('Login')}>
      <Icon name="exit" style={{color: 'black'}}/>
      </Button>
      <Text>Log Out</Text>
</ListItem>

    
      </List>
      </ScrollView>
    </View>
  }
  tapToClose={true}
  openDrawerOffset={0.2}
  panCloseMask={0.2}
  closedDrawerOffset={-3}
  styles={drawerStyles}
  tweenHandler={(ratio) => ({
    main: { opacity:(2-ratio)/2 }
  })}
  >
    <View style={styles.container}>
              <TouchableOpacity onPress = {() => this.openControlPanel()}>
              <Icon name="menu" />
              </TouchableOpacity>
             <TextInput style={styles.textinput}
            underlineColorAndroid='transparent'
            placeholder='Cari Jasa'/>
      
          <ScrollView>

          <TouchableOpacity onPress={() => navigate('ListProfil')}>
         
         <ImageBackground style={styles.imagewrap}
          source={require('../images/gambar1.jpg')}>          
          </ImageBackground>

          </TouchableOpacity>

          <TouchableOpacity onPress={()=> navigate('ListProfil')}>
    
          <Image style={styles.imagewrap}
          source={require('../images/gambar2.jpg')}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> navigate('ListProfil')}>
    
          <Image style={styles.imagewrap}
          source={require('../images/gambar3.jpg')}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> navigate('ListProfil')}>
    
          <Image style={styles.imagewrap}
          source={require('../images/gambar4.png')}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> navigate('ListProfil')}>
    
          <Image style={styles.imagewrap}
          source={require('../images/gambar5.jpg')}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> navigate('ListProfil')}>
    
          <Image style={styles.imagewrap}
          source={require('../images/gambar6.jpg')}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> navigate('ListProfil')}>
    
          <Image style={styles.imagewrap}
          source={require('../images/gambar7.jpg')}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> navigate('ListProfil')}>
    
          <Image style={styles.imagewrap}
          source={require('../images/gambar8.jpg')}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> navigate('ListProfil')}>
          <Image style={styles.imagewrap}
          source={require('../images/gambar9.png')}/>
          </TouchableOpacity>

          </ScrollView>


      </View>
</Drawer>



      
     
    );
  }
}
    

const styles = StyleSheet.create({

  menudrawer:{
    color: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: '#252525'
  },

  photogrid: {
    flex: 1,
    padding: 2,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  imagewrap: {
    padding: 2,
    height: 120,
    width: (Dimensions.get('window').width / 1) - 2 ,
    paddingVertical: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },

  textinput: {
    textAlign: 'center',
    padding: 1,
    marginTop: 5,
    marginBottom:10,
    backgroundColor:'#fff'
  },
  paragraph: {
    textAlign: 'center',
    color: 'white',
    fontFamily: Fonts.OstrichSansmdm,
    fontSize: 25
},
drawerr:{
    height: '100%',
    width: '80%',
    backgroundColor: 'white'
},

tombolDrawer: {
  margin: 5,
  backgroundColor: 'transparent'
},

baris1: {
  flexDirection: 'row'
}, 

baris2:{
  flexDirection: 'row'
}, 

baris3:{
  flexDirection: 'row'
}

});
const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}