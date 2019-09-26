import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { AppRegistry, Image } from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import { openDatabase } from 'react-native-sqlite-storage';
//var db = openDatabase({ name: 'UserDatabase.db' });
var db = openDatabase({ name: 'user_db.db', createFromLocation : 1});
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        
      </View>
    );
  }
}


export default class App extends Component {
  render() {
    let pic = {
          uri: 'https://www.img.in.th/images/77bf978c39933882cf1c1a1231d87adf.png'
    };

    
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Shop Alert</Text>
        
        <Image source={pic} style={{width: 200, height: 200}}/>
        
        <Mybutton
          title="Login"
          customClick={() => this.props.navigation.navigate('login')}
        />
        <Mybutton
          title="Register"
          customClick={() => this.props.navigation.navigate('RegisterUser')}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 20,
  },
 
});