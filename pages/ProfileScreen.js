import React, {Component} from 'react';
import { Platform, Text, View, TouchableOpacity, StyleSheet, AppRegistry, Image, TextInput } from 'react-native';
 
export default class ProfileScreen extends Component {
  state = {
    email: '',
    password: '',
    confirm: '',
    name: '',
    age: '',
    phone:''
  }
  render() {
    let pic = {
          uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    };
    return (
      <View style={styles.container}>
        <Image source={pic} style={{width: 100, height: 100}}/>
        <Greeting name='Profile' />
      <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "Email"
             placeholderTextColor = "#0078FB"
             autoCapitalize = "none"
             onChangeText = {(text)=>this.setState({ email: text })}/>            
      <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "Password"
             placeholderTextColor = "#0078FB"
             autoCapitalize = "none"
             onChangeText = {(text)=>this.setState({ password: text })}/>
      <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "Confirm password"
             placeholderTextColor = "#0078FB"
             autoCapitalize = "none"
             onChangeText = {(text)=>this.setState({ confirm: text })}/>
      <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "Name"
             placeholderTextColor = "#0078FB"
             autoCapitalize = "none"
             onChangeText = {(text)=>this.setState({ name: text })}/> 
      <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "Age"
             placeholderTextColor = "#0078FB"
             autoCapitalize = "none"
             onChangeText = {(text)=>this.setState({ age: text })}/> 
      <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "Phone number"
             placeholderTextColor = "#0078FB"
             autoCapitalize = "none"
             onChangeText = {(text)=>this.setState({ phone: text })}/>                       
        </View>
    );
  }
}


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
        <Text style={styles.instructions}> {this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#000000',
    marginBottom: 5,
  },
  container: {
    paddingTop: 50,
    alignItems: 'center'
  },

  input: {
    margin: 10,
    height: 40,
    width: 300,
    borderColor: '#0078FB',
    borderWidth: 1
  },
});