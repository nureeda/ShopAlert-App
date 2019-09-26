/*Home Screen With buttons to navigate to diffrent options*/
import React from 'react';
import { View,ScrollView } from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import { openDatabase } from 'react-native-sqlite-storage';
import {  Switch, Text,StyleSheet,Picker } from 'react-native'
//var db = openDatabase({ name: 'UserDatabase.db' });
var db = openDatabase({ name: 'user_db.db', createFromLocation : 1});
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    db.transaction(function(txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='tbl_user'",
        [],
        function(tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS tbl_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS tbl_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
              []
            );
          }
        }
      );
    });

    state = {department: ''}
    updateDepartment = (department) => {
       this.setState({ department: department })
    }
 
      super();
      this.state = {
         switch1Value: false,
      }

      super();
      this.state = {
         switch2Value: false,
      }
   }
   toggleSwitch1 = (value) => {
      this.setState({switch1Value: value})
   }

   toggleSwitch2 = (value) => {
    this.setState({switch2Value: value})
 }
    
  

  
   
 
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'hhh',
          flexDirection: 'column',
        }}>
        <Mytext text="ข้อมูลผู้ใช้"/>
        <Mybutton
          title="registerUser"
          customClick={() => this.props.navigation.navigate('RegisterUser')}
        />
        <Mybutton
          title="User"
          customClick={() => this.props.navigation.navigate('ViewAllUser')}
        />
        <Mybutton
          title="DeleteUser"
          customClick={() => this.props.navigation.navigate('DeleteUser')}
        />
        <Mybutton
          title="UpdateUser"
          customClick={() => this.props.navigation.navigate('UpdateUser')}
        />
        
        <View style={[styles.container, styles.horizontal]}>
            <Text>เปิดการแจ้งเตือน</Text><Switch onValueChange = {this.toggleSwitch1} value = {this.state.switch1Value}/>
            <View> 
         <View style={[styles.container2, styles.horizontal2]}>
         <Text>เปิดการระบุตำแหน่ง</Text><Switch onValueChange = {this.toggleSwitch2} value = {this.state.switch2Value}/>        
         </View>

         <Picker selectedValue = {this.state.department} onValueChange = {this.updateDepartment}>
               <Picker.Item label = "ภาษาไทย" value = "ภาษาไทย" />
               <Picker.Item label = "English" value = "English" />
        </Picker>
        </View>
            <Text style = {styles.text}>{this.state.department}</Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      color: '#ffffff', 
  },

  container2: {
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      color: '#ffffff',
  },

  

  text: {
      alignItems: 'center',
      fontSize: 30,
      alignSelf: 'center',
      color: 'red',
      flexDirection: 'row',
      //justifyContent: 'space-around',
   },

  
  horizontal: {
     
  flexDirection: 'row',
  //justifyContent: 'space-around',
  paddingTop: 0
  },

  horizontal2: {
     
      flexDirection: 'row',
      //justifyContent: 'space-around',
      paddingTop: 0
      }

 
});