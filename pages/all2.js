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
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM location_user', [], (tx, results) => {
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
      uri: 'https://www.img.in.th/images/81eb5cbf05f0e87cbda8714ae2eab79e.png'
   };
    return (
      <View>
          
        
        <FlatList
          data={this.state.FlatListItems}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            
            <View key={item.user_id} style={{ backgroundColor: '#66FF66', padding: 30 ,flexDirection:'row'}}>
              
              <Image source={pic} style={{width: 0.000001, height: 0.00001}}
                style={{flex:2,alignItems:'flex-start'}}/>

              <View style={{flex:2,alignItems:'flex-end'}}>
               
                <Text>location: {item.user_location}
                
                </Text>
                
                
              </View>
              
            </View>
          )}
        />
      </View>
    );
  }
}