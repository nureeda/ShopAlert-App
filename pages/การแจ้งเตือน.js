import React from 'react';
import { View, Button, Text, Switch, DatePickerAndroid, TimePickerAndroid, ToastAndroid} from 'react-native';
import Mytext from './components/Mytext';

export default class MyApp extends React.Component {
   constructor() {
      super();
      this.state = { iyear : 2020, imonth : 3, iday : 9}
      this.state = { ihour : 10, iminute : 30}
      this.state = {
        switch1Value: false,
     }  
   }
   toggleSwitch1 = (value) => {
    this.setState({switch1Value: value})
 }
   render() {
      return(     
              
         <View style={{  marginTop:50, flex : 1, alignItems : "center" }}>
            <Mytext text="Alert" />
            <Button title="Open DatePicker"
             onPress={ async () => {
              const { action, year, month, day } = await DatePickerAndroid.open({date : new Date()});
              if (action === DatePickerAndroid.dateSetAction) 
              { this.setState({ iyear : year, imonth: month, iday: day }); }
              if (action === DatePickerAndroid.dismissedAction)                         
              { console.log("Dismissed"); }
             }}
            />
            <Text>Date {this.state.iday} {this.state.imonth} {this.state.iyear}</Text>


          <View style={{  marginTop:75, flex : 1, alignItems : "center" }}>
            <Button title="Open TimePicker"
             onPress={ async () => {
              const { action, hour, minute } = await TimePickerAndroid.open({ hour : 11, minute : 30, is24Hour : false });
              if (action === TimePickerAndroid.timeSetAction)                             
              { this.setState({ ihour : hour, iminute: minute}); }
              if (action === TimePickerAndroid.dismissedAction)
              { console.log("Dismissed"); }
            }}
         />
         <Text>Date {this.state.ihour} {this.state.iminute}</Text>


         <View style={{  paddingTop:50, flex : 1, alignItems : "center" }}>
         <Text>Notifications</Text>
            <Switch onValueChange = {this.toggleSwitch1} value = {this.state.switch1Value}/>
        </View>
      </View>
    </View>
      );
   }
}