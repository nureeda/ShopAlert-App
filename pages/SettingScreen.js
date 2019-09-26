import React from 'react';
import { FlatList, Text, View ,Image} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import Mybutton from './components/Mybutton';
var db = openDatabase({ name: 'user_db2.db' });
import Swipeout from 'react-native-swipeout';

var swipeoutBtns = [
  {
    text: 'Delete'
  }
]
export default class ViewAllUser extends React.Component {
  constructor(props) {
    super(props);
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
      <View style={{ height: 0.2, width: '100%', backgroundColor: '#808080' }} />

      
    );
  };

  render() {
    let pic = {
      uri: 'https://ibornpretty.com/upload-img/shopping-cart-icon-medium.png'
   };
    return (
      <View>
        <Swipeout right={swipeoutBtns}>
  <View>
    <Text>Swipe me left</Text>
        
        <FlatList
          data={this.state.FlatListItems}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            
            <View key={item.user_id} style={{ backgroundColor: '#ffffff', padding: 30 ,flexDirection:'row'}}>
              
        
              <Image source={pic} style={{width: 50, height: 50}}
                style={{flex:1,alignItems:'flex-start'}}/>

              <View style={{flex:1,alignItems:'flex-end'}}>
               
                <Text> {item.user_list1}
                
                
                </Text>
                
                <Mybutton
          title="ลบรายการ"
          customClick={() => this.props.navigation.navigate('ลบรายการ')}
        />
        
                
              </View>
              
              
            </View>
          )}
        />
        </View>
</Swipeout>
       
      </View>
    );
  }
}