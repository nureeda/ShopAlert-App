/*This is an example of CountDown Timer*/
import React, { Component } from 'react';
//import React in our project
import { View } from 'react-native';
//import all the component we need in our project
import CountDown from 'react-native-countdown-component';
//import CountDown to show the timer
import moment from 'moment';
//import moment to help you play with date and time
import {  Button, Text, DatePickerAndroid} from 'react-native';
import {  Modal,  TouchableHighlight,TimePickerAndroid,ScrollView} from 'react-native';
import Mybutton from './components/Mybutton';

export default class App extends Component {
  constructor(props) {
    super(props);
    //initialize the counter duration

    this.state = { modalVisible: true,}
    this.state = { iyear : 2020, imonth : 3, iday : 9}
   

    this.state = {
      totalDuration: '',
    };
  }
  componentDidMount() {
    var that = this;
    //We are showing the coundown timer for a given expiry date-time
    //If you are making a quize type app then you need to make a simple timer
    //which can be done by using the simple like given below
    //that.setState({ totalDuration: 30 }); //which is 30 sec
    var date = moment()
      .utcOffset('')
      .format('YYYY-MM-DD hh:mm:ss');
    //Getting the current date-time with required formate and UTC   
    var expirydate = '2019-08-19 00:00:00';//You can set your own date-time
    //Let suppose we have to show the countdown for above date-time 
    var diffr = moment.duration(moment(expirydate).diff(moment(date)));
    //difference of the expiry date-time given and current date-time
    var hours = parseInt(diffr.asHours());
    var minutes = parseInt(diffr.minutes());
    var seconds = parseInt(diffr.seconds());
    var d = hours * 60 * 60 + minutes * 60 + seconds;
    //converting in seconds
    that.setState({ totalDuration: d });
    //Settign up the duration of countdown in seconds to re-render
  }

  
  render() {
    
    console.log(this.state.totalDuration);
    return (<Modal animationType="slide" transparent={ false }
    visible={this.state.modalVisible}
    presentationStyle ="formSheet"
    onRequestClose={()=> {console.log("onRequestClose");}}>
        <ScrollView>
    <View style={{ marginTop : 100, flex : 1, alignItems : "center" }}>
       <View style={{ flex : 1, alignItems : "center" }}>
             <Text>I am a modal. Ain't I cool??</Text>
             <TouchableHighlight style={{ marginTop : 100 }} onPress={() => { this.setState({ modalVisible : false }); }}>
                <Text>Tap me to hide modal</Text>
             </TouchableHighlight>
        </View>
    </View>

    <View style={{ marginTop : 100, flex : 1, alignItems : "center" }}>
            <Button title="Open DatePickerAndroid"
             onPress={ async () => {
              const { action, year, month, day } = await DatePickerAndroid.open({date : new Date()});
              if (action === DatePickerAndroid.dateSetAction) 
              { this.setState({ iyear : year, imonth: month, iday: day }); }
              if (action === DatePickerAndroid.dismissedAction)                         
              { console.log("Dismissed"); }
             }}
            />
            <Text>Date {this.state.iday} {this.state.imonth} {this.state.iyear}</Text>
         </View>

<View style={{ marginTop : 100, flex : 1, alignItems : "center" }}>
            <Button title="Open TimePickerAndroid"
             onPress={ async () => {
              const { action, hour, minute } = await TimePickerAndroid.open({ hour : 11, minute : 30, is24Hour : false });
              if (action === TimePickerAndroid.timeSetAction)                             
              { this.setState({ ihour : hour, iminute: minute}); }
              if (action === TimePickerAndroid.dismissedAction)
              { console.log("Dismissed"); }
             }}
            />
            <Text>Date {this.state.ihour} {this.state.iminute}</Text>
         </View>


      <View style={{ flex: 1, justifyContent: 'center' }}>
        <CountDown
          until={this.state.totalDuration}
          //duration of countdown in seconds
          timetoShow={('H', 'M', 'S')}
          //formate to show
          onFinish={() => alert('finished')}
          //on Finish call
          onPress={() => alert('hello')}
          //on Press call
          size={20}
        />
         <Mybutton
          title="เสร็จสิ้น"
          customClick={() => this.props.navigation.navigate('HomeScreenf')}
        />
      </View>
      </ScrollView>
      
      </Modal>

    );
  }
}