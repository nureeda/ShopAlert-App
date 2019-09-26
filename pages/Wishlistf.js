import React, { Component } from 'react'; 
import { Text, View, TouchableOpacity, StyleSheet, Button, FlatList  } from 'react-native';
 
export default class Wishlist extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('Title', 'Wishlist'),
      headerStyle: {
        backgroundColor: navigation.getParam('BackgroundColor', '#FF6666'),
      },
      headerTintColor: navigation.getParam('HeaderTintColor', '#FFFFFF'),
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        'สบู่',
        'ยาสระผม',
        'ยาสีฟัน',
        'ผงซักฟอก',
        'น้ำยาล้างจาน',
        'แปรงสีฟัน',
        'ผ้าอนามัย',
        'น้ำยาปรับผ้านุ่ม',
        'ทิชชู่',
        'ปลากระป๋อง',
        'กาแฟ',
        'น้ำตาล',
        'เกลือ',
        'น้ำมันพืช',
        'ไข่ไก่',
        'น้ำปลา',
        'แป้ง',
      ],
    };
  }
  ListViewItemSeparator = () => {
    return (
      <View
        style={{ height: 0.5, width: '100%', backgroundColor: '#CC0000' }}
      />
    );
  };
  showItem(rowData) {
    Alert.alert(rowData);
  }
  renderHeader = () => {
    return (
      <View style={styles.header_footer_style}>
        <Text style={styles.textStyle}> All memos </Text>
      </View>
    );
  };
  
  render() {
    return (
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
    backgroundColor: '#FFFFFF',
  },
  textStyle: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 18,
    padding: 7,
  },
});