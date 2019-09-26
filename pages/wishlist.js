/*Home Screen With buttons to navigate to diffrent options*/
import React from 'react';
import { View,ScrollView } from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import { openDatabase } from 'react-native-sqlite-storage';
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
  }
 
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#FF6666',
          flexDirection: 'column',
        }}>
        <Mytext text="Wishlist" />
        <Mybutton
          title="สถานที่ประจำ"
          customClick={() => this.props.navigation.navigate('สถานที่ประจำ')}
        />
        <Mybutton
          title="ต่างสถานที่่"
          customClick={() => this.props.navigation.navigate('บันทึกรายการ')}
        />
       
      </View>
    );
  }
}