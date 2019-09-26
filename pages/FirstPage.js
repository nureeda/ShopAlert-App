//This is an example code for the popup menu//
import React, { Component } from 'react';
//import react in our code.
import { View, Text, Button } from 'react-native';
//import all the components we are going to use.
import CustomMenu from './component/CustomMenu';
//import our Custom menu component
import CustomMenuIcon from './component/CustomMenuIcon';
//import our Custom Icon menu component
 
class FirstPage extends Component {
  //Navigation option to create menu in header
  static navigationOptions = ({ navigation }) => {
    return {
      //Heading/title of the header
      title: navigation.getParam('Title', 'Popup Menu Example'),
      //Heading style
      headerStyle: {
        backgroundColor: navigation.getParam('BackgroundColor', 'red'),
      },
      //Heading text color
      headerTintColor: navigation.getParam('HeaderTintColor', '#fff'),
      //Heading Menu in Right Side
      headerRight: (
        //Custom menu component
        <CustomMenuIcon
          //Menu Text
          menutext="Menu"
          //Menu View Style
          menustyle={{
            marginRight: 16,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
          //Menu Text Style
          textStyle={{
            color: 'white',
          }}
          //Click functions for the menu items
          option1Click={() => {
            navigation.navigate('SecondPage');
          }}
          option2Click={() => {}}
          option3Click={() => {}}
          option4Click={() => {
            alert('Option 4');
          }}
        />
      ),
    };
  };
 
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, backgroundColor: '#ffdffd' }}>
        <View
          style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            This is an example of menu
            {'\n\n'}
            To see the menu option
            {'\n'}
            Click on "Show Menu"
            {'\n'}
            or
            {'\n'}
            header "Menu"
          </Text>
          <CustomMenu
            //Menu Text
            menutext="Show Menu"
            //Menu View Style
            menustyle={{
              margin: 10,
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
            //Menu Text Style
            textStyle={{
              fontSize: 25,
              marginTop: 16,
              color: 'red',
            }}
            //Click functions for the menu items
            option1Click={() => {
              this.props.navigation.navigate('SecondPage');
            }}
            option2Click={() => {}}
            option3Click={() => {}}
            option4Click={() => {
              alert('Option 4');
            }}
          />
        </View>
      </View>
    );
  }
}
export default FirstPage;