import React from 'react';
import { FlatList, Text, View ,Image} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'user_db2.db' });
export default class ViewAllUser1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [],
    };
    db.transaction1(tx => {
      tx.executeSql1('SELECT * FROM tbl_user', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        this.setState1({
          FlatListItems: temp,
        });
      });
    });
  }
  ListViewItemSeparator1 = () => {
    return (
      <View style={{ height: 0.2, width: '100%', backgroundColor: '#808080' }} />
    );
  };
  render() {
    let pic = {
      uri: 'http://school.gcms.in.th/datas/gallery/4/9.jpg'
   };
    return (
      <View>
        
        <FlatList
          data={this.state.FlatListItems}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            
            <View key={item.user_id} style={{ backgroundColor: '#66FF66', padding: 5 ,flexDirection:'row'}}>
              
              <Image source={pic} style={{width: 100, height: 100}}
                style={{flex:1,alignItems:'flex-start'}}/>

              <View style={{flex:2,alignItems:'flex-end'}}>
                <Text >Id: {item.user_id}</Text>
                <Text>Name: {item.user_list1}</Text>

                <Text>Name: {item.user_list2}</Text>

                <Text>Name: {item.user_list3}</Text>
              </View>
              
            </View>
          )}
        />
      </View>
    );
  }
}