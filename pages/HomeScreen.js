/*Home Screen With buttons to navigate to diffrent options*/
import React from 'react';
import { View,ScrollView } from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import { Text, Picker, StyleSheet ,Component,Image,ActivityIndicator} from 'react-native'

import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });
var db = openDatabase({ name: 'user_db.db', createFromLocation : 1});
var db = openDatabase({ name: 'user_db2.db', createFromLocation : 1});
var db = openDatabase({ name: 'user_db2.db'});
export default class HomeScreen extends React.Component {
  constructor(props) {

    super()
    this.state = {
      showME: true
    }
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

    db.transaction(function(txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='location_lo'",
        [],
        
        function(tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS tbl_user', []);
           
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS location_lo(cid_lo INTEGER PRIMARY KEY AUTOINCREMENT, did INTEGER, name TEXT(20))',
              []
              
            );
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS product(cid_pr INTEGER PRIMARY KEY AUTOINCREMENT, did INTEGER, name TEXT(20))',
              []
              
            );
          }
        }
      );
    });
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        showME: false
      })
    }, 3000)
  }
  
  
  
  render() {
    let pic = {
      uri: 'https://timedotcom.files.wordpress.com/2019/03/ghostsupermarket.jpg'
};
    return (
        <View style={styles.container}>
          {
            this.state.showME ?
            <ActivityIndicator size="large" color="#ff0000" />
:      
<View>
<ScrollView>
        
        <View
          style={{
            flex: 1,
            backgroundColor: '#ffffff',
            flexDirection: 'column',
          }}>
  
  <Image source={pic} style={{width: 400, height: 220 , alignItems : 'center',justifyContent: 'center'}}/>
  
  <Mytext text="ShopAlert" />
          <Mybutton
            title="wishlist"
            customClick={() => this.props.navigation.navigate('สถานที่ประจำ')}
          />
          
         
          
          </View>
          
          </ScrollView>
        
  </View>      
          }        
        </View>   
    );
  }


 
 
}


const styles = StyleSheet.create({
  text: {
     fontSize: 50,
     alignSelf: 'center',
     color: 'red'
  },
  
})
