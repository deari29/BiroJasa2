/**
 * WRITTEN BY I GEDE ARI PUTRA
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image,
  ScrollView,
  AsyncStorage,
  BackHandler,
} from 'react-native';
import * as firebase from 'firebase';
import { Fonts } from '../src/utils/Fonts';
import Logo from '../components/Logo';
import { StackNavigator } from 'react-navigation';

export default class Signup extends Component<{}>{

   static navigationOptions = {
    header: null,
  };
  
  constructor(props){
    super(props);
    this.state =({
      username : '',
      password : '',
      repassword : '',
      email : '',
      buttonText : 'Sign Up',
      fullName : '',
      alert : false,
      buttonText : 'Sign Up',
      activityIndicatorColor : 'rgba(230,29,76,1)'
    });
}

componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backPressed);
}

componentWillUnmount() {
   BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
}

backPressed = () => {
  const { navigation } = this.props;
  navigation.goBack();
  navigation.state.params.onSelect({ selected: true });
  return true;
}

signUp=()=>{
  if (this.state.password != this.state.repassword || this.state.email == '' || this.state.password == '' ||  this.state.repassword == '' ||  this.state.username == '' ||  this.state.fullName == '' ) {
    this.setState({
      alert : true
    });
  }
  else{

    this.setState({
      activityIndicatorColor : 'white',
      buttonText : ''
});

firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(() => {
      var userId = firebase.auth().currentUser.uid;
      AsyncStorage.multiSet([
          ["email", this.state.email],
          ["password", this.state.password],
          ["userId", userId]
        ]);
      this.writeToDatabase(userId);
    }).catch((error) => {
        alert("error " + error.message );
    });
  }
    
}

writeToDatabase = (userId) => {
  let today = new Date();
  let Times = today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let sortTime = -1*today.getTime();
  var database = firebase.database().ref("users").child(userId);
  database.set({
    userId : userId,
    sortTime : sortTime,
    createdAt : Times,
    email : this.state.email,
    username :this.state.username,
    fullName : this.state.fullName
  }).then((snapshot)=>{

     firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
     
        AsyncStorage.multiSet([
          ["email", this.state.email],
          ["password", this.state.password],
          ["userId", userId],
          ["username", this.state.username]
        ]);
      
      const { navigate } = this.props.navigation;
      navigate('Dashboard');
      
      }).catch((error) => {
          alert("error " + error.message );
         
      });

  });

}

  render(){

     const { navigate } = this.props.navigation
    
    return(

<ImageBackground style={styles.gambarBelakang} source={require('../images/loginsignup.jpg')} blurRadius={0}>

      <View style={styles.container}>

       <View style={styles.logo}>

         <Image style={{width: 130, height: 140}}
          source={require('../images/logo.png')}/>
            <Text style={styles.logoText}>B i r o  J a s a</Text>
      </View>

        <TextInput style={styles.kotakInput} placeholder="Nama" placeholderTextColor='#fff' onChangeText={(fullName)=>this.setState({fullName})}/>
         <TextInput style={styles.kotakInput}  placeholder="username" placeholderTextColor='#fff' onChangeText={(username)=>this.setState({username})}/>
        <TextInput style={styles.kotakInput}  placeholder="Email" placeholderTextColor='#fff' onChangeText={(email)=>this.setState({email})}/>
        <TextInput style={styles.kotakInput}  placeholder="Password"
        secureTextEntry={true} placeholderTextColor='#fff' onChangeText={(password)=>this.setState({password})}/>
        <TextInput style={styles.kotakInput}  placeholder="Confirm Password"
        secureTextEntry={true} placeholderTextColor='#fff' onChangeText={(repassword)=>this.setState({repassword})}/>

        <TouchableOpacity style={styles.loginButn} onPress={()=>this.signUp()}>
          <Text style={styles.TombolLogin}>{this.state.buttonText}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress = {() => navigate('Login')}>
        <Text style = {styles.daftar}>Sudah Punya Akun? Silahkan Masuk.</Text>
        </TouchableOpacity>
      </View>
</ImageBackground>

    );
  }
}

const styles = StyleSheet.create({

  gambarBelakang: {
    flex :1
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
   
  },

  daftar: {
    color: '#ffff'
  },

   kotakInput: {
    width:300,
    borderColor: '#fff',
    paddingVertical: 20,
    marginTop: 20,
    backgroundColor:'transparent'


  },
  TombolLogin: {
    fontSize: 25,
    color: '#02ff06',
    textAlign: 'center',
    fontFamily: Fonts.OstrichSansmdm
  },
  loginButn: {
    width: 150,
    height: 40,
    backgroundColor: '#000',
    borderRadius: 27,
    marginVertical: 15,
    justifyContent: 'center'
  },

   logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
   
  },

  logoText: {
    fontSize: 25,
    color:'#000',
    fontFamily: Fonts.OstrichSansmdm
  }
});


