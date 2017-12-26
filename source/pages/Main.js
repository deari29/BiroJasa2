
import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Note from './Note';
export default class Main extends React.Component {

    
    constructor(props) {
      super(props);
      this.state= {
        arrayCatatan: [],
        teksCatatan: '', 

      }
    }
  render() {

    let notes = this.state.arrayCatatan.map((val, key) => {

      return <Note key={key} keyval={key} val={val}
              hapusMethod={ ()=> this.deleteNote(key) }/>
    });

    return (
    <View style = {styles.container}>
        
          <View style = {styles.header}>
            <Text style = {styles.headerText}>- LIST JASA -</Text> 
          </View>

      <ScrollView style = {styles.scrollContainer}>
      {notes}
      </ScrollView>

        <View style={styles.footer}>

          <TextInput
          style ={styles.textInput}
          onChangeText={(teksCatatan) => this.setState({teksCatatan})}
          value={this.state.teksCatatan}
          placeholder='Tambahkan'
          placeholderTextColor='white'
          underlineColorAndroid='transparent'>       
          </TextInput>
        </View>  
        <TouchableOpacity onPress={this.tambahCatatan.bind(this) }style = {styles.addButton}>

            <Text style = {styles.addButtonText}>+</Text>


        </TouchableOpacity>

      </View>    

        
    );
  }

  tambahCatatan(){

    if (this.state.teksCatatan){

      var d = new Date();
      this.state.arrayCatatan.push({

        'tanggal': d.getFullYear() +
        "/" +  (d.getMonth() + 1) +
        "/" + d.getDate(),
        'catatan' : this.state.teksCatatan
      });
      this.setState({ arrayCatatan: this.state.arrayCatatan })
      this.setState({ teksCatatan: '' });
    }

  }
deleteNote(key){

    this.state.arrayCatatan.splice(key, 1);
    this.setState({ arrayCatatan: this.state.arrayCatatan })

}

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
},

header: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
},

headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26,
},

scrollContainer: {
    flex: 3,
    marginBottom: 100
},

footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
},

textInput: {
    alignSelf: 'stretch',
    color: 'black',
    padding: 20,
    backgroundColor: 'grey',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
},

addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#E91E63',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
},

addButtonText: {
    color: '#fff',
    fontSize: 24,
},
  
});
