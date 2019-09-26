import React, {Component} from 'react';
import { Platform, StyleSheet, AppRegistry, Image, Text,ScrollView,  TextInput, View ,Alert, TouchableHighlight} from 'react-native';
import Mybutton from './components/Mybutton';
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
    paddingTop: 100,
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
export default class Touchables extends Component {
  state = {
    email: '',
    password: '',
    confirm: '',
    name: '',
    age: '',
    phone:''
  }
  _onPressButton(email, pass) {
    alert('email: ' + email + ' password: ' + pass+ ' confirm: ' + confirm + ' name: ' + name + ' age: ' + age+ ' phone: ' + phone)
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }

 
  render() {
    let pic = {
          uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    };
    return (
      <ScrollView>
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
        <TouchableHighlight 
          onPress={()=>this._onPressButton(this.state.email, this.state.password)} 
          onLongPress={this._onLongPressButton}
          underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
             <Mybutton
          title="Submit"
          customClick={() => this.props.navigation.navigate('HomeScreen')}
        />                    
        </View>
        </ScrollView>
    );
  }
}


