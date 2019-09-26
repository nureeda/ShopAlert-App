import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { AppRegistry, Image } from 'react-native';
import Mybutton from './components/Mybutton';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  render() {
    
    let pic = {
          uri: 'https://www.img.in.th/images/3fc6f1b12de46ebba69a8618c7482786.png'
    };
    
    return (
      
      <View style={[styles.container]}>
        <Image source={pic} style={{width: 250, height: 250}}/>
        
        <Mybutton
          title="SHOPALERT"
          customClick={() => this.props.navigation.navigate('HomeScreen')}
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
    backgroundColor: '#F5B041',
    paddingTop: 20
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 30,
  },
  instructions: {
    textAlign: 'center',
    color: '#F5B041',
    marginBottom: 5,
  },
  
 
});


