/*Screen to register the user*/
import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });
var db = openDatabase({ name: 'user_db2.db'});
var db = openDatabase({ name: 'user_db.db', createFromLocation : 1});
export default class RegisterUserinput1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cid_lo : '',
      did : '',
      name : '',
    };

    
  }

  
 
  register_userinput1 = () => {
    var that = this;
    const { cid_lo } = this.state;
    const { did } = this.state;
    const { name } = this.state;

    //alert(user_name, user_contact, user_address);
    if (cid_lo) {
        if (did) {
          if (name) {
            db.transaction(function(tx) {
              tx.executeSql(
                'INSERT INTO location_lo (cid_lo, did, name) VALUES (?,?,?)',
                [cid_lo,did,name],
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
            alert('Please fill Address');
          }
        } else {
          alert('Please fill Contact Number');
        }
      } else {
        alert('Please fill Name');
      }
    };
   
 
    render() 
    {
     
      return (
  
       
        <View style={{ backgroundColor: 'white', flex: 1 }}>
         
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'space-between' }}>
              <Mytextinput
                placeholder="Enter cid location"
                onChangeText={cid_lo => this.setState({ cid_lo })}
                style={{ padding:10 }}
              />
              <Mytextinput
                placeholder="Enter did location"
                onChangeText={did => this.setState({ did })}
                maxLength={10}
                keyboardType="numeric"
                style={{ padding:10 }}
              />
              <Mytextinput
                placeholder="Enter location"
                onChangeText={name => this.setState({ name })}
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                style={{ textAlignVertical: 'top',padding:10 }}
              />
              <Mybutton
                title="Submit"
                customClick={this.register_userinput1.bind(this)}
              />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      );
    }
  }