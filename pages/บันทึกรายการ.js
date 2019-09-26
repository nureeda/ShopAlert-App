/*Screen to register the user*/
import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert, ImageBackground} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
import { Text, TouchableOpacity, StyleSheet, Button, FlatList  } from 'react-native';
//var db = openDatabase({ name: 'UserDatabase.db' });
var db = openDatabase({ name: 'user_db2.db', createFromLocation : 1});


export default class RegisterUser extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('Title', 'Wishlist'),
      headerStyle: {
        backgroundColor: navigation.getParam('BackgroundColor', '#FF1493'),
      },
      headerTintColor: navigation.getParam('HeaderTintColor', '#FFFFFF'),
    };
  };
  
 
  constructor(props) {
    super(props);
    this.state = {
      user_list1: '',
      
    };
    this.state = {
      FlatListItems: [],
    };
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM tbl_user', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        this.setState({
          FlatListItems: temp,
        });
      });
    });

    
  }
  ListViewItemSeparator = () => {
    return (
      <View
        style={{ height: 0.5, width: '100%', backgroundColor: '#BFEFFF' }}
      />
    );
  };
  showItem(rowData) {
    Alert.alert(rowData);
  }

  
 
  register_user = () => {
    var that = this;
    const { user_list1 } = this.state;

    //alert(user_name, user_contact, user_address);
    if (user_list1) {
          db.transaction(function(tx) {
            tx.executeSql(
              'INSERT INTO tbl_user (user_list1) VALUES (?)',
              [user_list1],
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
                          that.props.navigation.navigate('SettingScreen'),
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

  renderHeader = () => {
    return (
      <View >
        <Mybutton
              title="Submit"
              customClick={this.register_user.bind(this)}
            />
        <Text style={styles.textStyle}> All memos </Text>
      </View>
    );
  };
 
  render() {
    return (
      

      <View style={{ backgroundColor: 'white', flex: 2 }}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="รายการที่ต้องการ"
            style={{ flex: 2, justifyContent: 'space-between' }}>
            <Mytextinput
              placeholder="เพิ่มสินค้า"
              onChangeText={ user_list1 => this.setState({ user_list1 })}
              style={{ padding:30 }}
            />

<View style={styles.MainContainer}>
        <FlatList
          data={this.state.dataSource}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          renderItem={({ item }) => (
            <Text
              style={styles.rowViewContainer}
              onPress={this.showItem.bind(this, item)}>
              {item}
            </Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <FlatList
          data={this.state.FlatListItems}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            
           
                <Text> {item.user_list1}
                
                </Text>
                
                
            
          )}
        />
      </View>
            

            
            
            

         

         
        
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
      
    );
  }
  
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 20,
  },
  rowViewContainer: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  header_footer_style: {
    width: '100%',
    height: 45,
    backgroundColor: '#FF6666',
  },
  textStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    padding: 7,
  },
});