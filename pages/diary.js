/*Screen to register the user*/
import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
import Mytext from './components/Mytext';
var db = openDatabase({ name: 'user_db.db', createFromLocation : 1});
 
export default class RegisterUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: ''
    };
  }
 
  register_user = () => {
    var that = this;
    const { user_name } = this.state;

    //alert(user_name, user_contact, user_address);
    if (user_name) {
          db.transaction(function(tx) {
            tx.executeSql(
              'INSERT INTO table_user (user_name) VALUES (?)',
              [user_name],
              (tx, results) => {
                console.log('Results', results.rowsAffected);
                if (results.rowsAffected > 0) {
                  Alert.alert(
                    'Success',
                    'You are Registered Successfully',
                    [
                      {
                        text: 'Ok',
                        onPress: () =>
                          that.props.navigation.navigate('HomeScreen'),
                      },
                    ],
                    { cancelable: false }
                  );
                } else {
                  alert('Registration Failed');
                }
              }
            );
          });
    } else {
      alert('Please enter your list');
    }
  };
 
  render() {
    return (
      <ImageBackground
        style={{ flex: 1 }}
        source={{
          uri:
            'https://i.pinimg.com/736x/af/f2/83/aff2830fbb02c51b2ed725a30f054a42.jpg',
        }}
        >
      <View style={{ backgroundColor: 'white', flex: 1 }}>
          <Mytext text="Diary" />
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}>
            <Mytextinput
              placeholder=""
              onChangeText={user_name => this.setState({ user_name })}
              style={{ padding:10 }}
            />
            <Mytextinput
              placeholder=""
              onChangeText={user_name => this.setState({ user_name })}
              style={{ padding:10 }}
            />
            <Mytextinput
              placeholder=""
              onChangeText={user_name => this.setState({ user_name })}
              style={{ padding:10 }}
            />
            <Mytextinput
              placeholder=""
              onChangeText={user_name => this.setState({ user_name })}
              style={{ padding:10 }}
            />
            <Mytextinput
              placeholder=""
              onChangeText={user_name => this.setState({ user_name })}
              style={{ padding:10 }}
            />
            
            <Mybutton
              title="Submit"
              customClick={this.register_user.bind(this)}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
      </ImageBackground>
    );
  }
}

