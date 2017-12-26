import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class Note extends React.Component {
  render() {
    return (
    <View key={this.props.keyval} style={styles.catatan}>
    <Text style={styles.textCatat}>{this.props.val.tanggal}</Text>
    <Text style={styles.textCatat}>{this.props.val.catatan}</Text>

    <TouchableOpacity onPress={this.props.hapusMethod} style={styles.hapusCatatan}>

      <Text style={styles.hapusText}>Hapus</Text>
      
    </TouchableOpacity>
        
    </View>    

        
    );
  } 
}

const styles = StyleSheet.create({
  catatan: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed',
},

textCatat: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#E91E63',
},

hapusCatatan: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980b9',
    padding: 20,
    top: 10,
    bottom: 10,
    right: 10,
},

hapusText: {
    color: 'white',
},
  
});
