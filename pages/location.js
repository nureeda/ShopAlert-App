/*Screen to register the user*/
import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert, Text } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
//var db = openDatabase({ name: 'UserDatabase.db' });
var db = openDatabase({ name: 'user_db2.db', createFromLocation : 1});
export default class RegisterUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_location: '',
      
    };

    
  }

  
 
  register_user = () => {
    var that = this;
    const { user_location } = this.state;

    //alert(user_name, user_contact, user_address);
    if (user_location) {
          db.transaction(function(tx) {
            tx.executeSql(
              'INSERT INTO location_user (user_location) VALUES (?)',
              [user_location],
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
                          that.props.navigation.navigate('สถานที่ประจำ'),
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
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="สถานที่ต้องการ"
            style={{ flex: 1, justifyContent: 'space-between' }}>
            <Mytextinput
              placeholder="location"
              onChangeText={ user_location => this.setState({ user_location })}
              style={{ padding:10 }}
            />
            

            
            
            <Mybutton
              title="Submit"
              customClick={this.register_user.bind(this)}

              
            />
            <Text>List1: {item.user_location}</Text>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}