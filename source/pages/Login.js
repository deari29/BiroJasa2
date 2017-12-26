/**
 * WRITTEN BY I GEDE ARI PUTRA
 */

import React, { Component } from 'react'; //import komponen dasar dari modul react.
import {
  Platform, //platform berfungsi untuk mensinkronisasikan platform yang sudah terinisiasi di android dan ios.
  StyleSheet, //Stylesheet berfungsi untuk menyediakan modul styling component react dan dinyatakan dengan konstan yang berbeda.
  Text, //berfungsi untuk menyediakan komponen teks dalam react.
  View, //berfungsi untuk menampilkan dan untuk wrapping penampilan komponen dan propertinya.
  TouchableOpacity,//berfungsi untuk memberikan komponen Tombol dengan feedback berupa opacity yang nilainya mengecil dan membesar.
  TextInput,//berfungsi untuk memberikan komponen input text untuk memasukkan teks.
  ImageBackground,//berfungsi untuk memberikan child di dalam komponen ex: ketika ingin menaruh sebuah teks diatas gammbar ataupun menaruh gambar diatas gambar.
  Image, //berfungsi untuk menampilkan gambar yang diberikan source url nya.
  BackHandler,//
  Modal,//
  AsyncStorage// berfungsi untuk memberikan akses ke database internal smartphone.
} from 'react-native';


import { Fonts } from '../src/utils/Fonts'; //url ini sebagai referensi untuk penambahan font yang ditambahkan melalui folder asset dan dependencies.
import Logo from '../components/Logo';//halaman url logo ini berfungsi untuk menyediakan logo dan bisa dipanggil di setiap halaman lainnya.
import { StackNavigator } from 'react-navigation';//url ini berfungsi untuk memberikan library navigasi halaman yang bertipe StackNavigator.
import * as firebase from 'firebase';//url ini berfungsi memberikan semua fungsi library dari firebase.


var konfig = {
    apiKey: "AIzaSyDBeCTUOwUasWCl6__XtX6lSkKkVLh47Tg",
    authDomain: "project2-ca7aa.firebaseapp.com",
    databaseURL: "https://project2-ca7aa.firebaseio.com",
    projectId: "project2-ca7aa",
    storageBucket: "",
    messagingSenderId: "870687333602"

};//pembuatan variabel konfig untuk men menyediakan apiKey dan authorization domain ,database url pada web apps ke dalam aplikasi ini.


const firebaseApps = firebase.initializeApp(konfig);//pembuatan constant dengan nama firebaseApps dan berfungsi untuk menginisialisasi variabel konfig.

export default class Login extends Component<{}>{

  static navigationOptions = {
    header: null,
  }; //properti opsi navigasi ditambahkan dalam hal ini diberikan nilai header:null.

  constructor(props){
    super(props);
    this.state =({
      email : '',
      password : '',
      activityIndicatorColor : 'rgba(230,29,76,1)',
      loginText : 'login',
      modalShow : false,
      selected: false,
      alert : false,
      firebaseError : false
    });

}//fungsi konstruktor untuk meng construct dan memberikan sekumpulan variabel dan dinyatakan dengan (this.state) dimana variabel variabel ini akan dipanggil berdasarkan propertinya.

onSelect = data => {
    this.setState(data);
  };

  onPress = () => {
      const { navigate } = this.props.navigation;
      BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
      navigate("Signup", { onSelect: this.onSelect });
  };

  login=()=>{
    if (this.state.email == '' || this.state.password == '') {
      this.setState({
        alert : true
      });
    }
    else{

        this.setState({
          activityIndicatorColor : 'white',
          loginText : '',
          modalShow : true
        });

        const { navigate } = this.props.navigation;//pembuatan constanta pengenal variabel props navigasi.

          firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {

                //mendapatkan user id dari AsyncStorage.
                var userId = firebase.auth().currentUser.uid;
                var database = firebase.database().ref("users").child(userId);
                database.once('value',(snapshot)=>{

                  AsyncStorage.multiSet([
                    ["email", this.state.email],
                    ["password", this.state.password],
                    ["userId", userId],
                    ["username", snapshot.val().username]
                  ]);

                });
                this.setState({
                  modalShow : false
                });
                navigate('Dashboard');

            }).catch((error) => {

                this.setState({
                  firebaseError : true,
                  activityIndicatorColor : 'rgba(230,29,76,1)',
                  loginText : 'Login',
                  modalShow : false
                });
            });

    }

  }

componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backPressed);
}

componentDidUpdate=()=>{

    BackHandler.addEventListener('hardwareBackPress', this.backPressed);

}

componentWillUnmount() {
   BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
}

backPressed = () => {
  BackHandler.exitApp();
  return true;
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

				<TextInput style={styles.kotakInput} placeholder="Email" placeholderTextColor='#fff' onChangeText={(email)=>this.setState({email})}/>
        <TextInput style={styles.kotakInput} placeholder="Password"
        secureTextEntry={true} placeholderTextColor='#fff' onChangeText={(password)=>this.setState({password})}/>

        <TouchableOpacity style={styles.loginButn} onPress={()=>this.login()}>
          <Text style={styles.TombolLogin}>{this.state.loginText}</Text>
        </TouchableOpacity>

				<TouchableOpacity onPress={()=>this.onPress()}>
				<Text style = {styles.daftar}>Tidak ada akun ? Silahkan Daftar.</Text>
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
logoText: {
    fontSize: 25,
    color:'#000',
    marginBottom:26,
    paddingBottom: 60,
    fontFamily: Fonts.OstrichSansmdm
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60

  },

  logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },

  daftar: {
  	color: '#ffff'
  },

   kotakInput: {
    width:300,
    borderColor: '#fff',
    paddingVertical: 20,
    marginTop: 20,
    backgroundColor:'transparent',


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
  }
});

module.exports = Login;