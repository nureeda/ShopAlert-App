/*Example of SQLite Database in React Native*/
import React from 'react';
//For React Navigation Version 2+
//import {createStackNavigator} from 'react-navigation';
//For React Navigation Version 3+
import {createStackNavigator,createAppContainer} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-ionicons'
import {createBottomTabNavigator } from 'react-navigation';
import home from './pages/home';
import login from './pages/login';
import wishlist from './pages/wishlist';
import HomeScreen from './pages/HomeScreen';
import RegisterUser from './pages/RegisterUser';
import UpdateUser from './pages/UpdateUser';
import ViewUser from './pages/ViewUser';
import ViewAllUser from './pages/ViewAllUser';
import ViewAllUser1 from './pages/ViewAllUser';
import DeleteUser from './pages/DeleteUser';
import DeleteUser1 from './pages/DeleteUser';
import สถานที่ประจำ from './pages/สถานที่ประจำ';
import ข้อมูลผู้ใช้ from './pages/ข้อมูลผู้ใช้';
import register from './pages/register';
import การแจ้งเตือน from './pages/การแจ้งเตือน';
import บันทึกรายการ from './pages/บันทึกรายการ';
import location2 from './pages/location2';
import diary from './pages/diary';
import all from './pages/all';
import all2 from './pages/all2';
import web from './pages/web';
import ลบรายการ from './pages/ลบรายการ';
import input1 from './pages/input1';
import input2 from './pages/input2';
import Indicator from './pages/Indicator';
import setting from './pages/setting';
import HomeScreenf from './pages/HomeScreenf';
//import MapsScreen from './pages/MapsScreen';
import MallScreen from './pages/MallScreen';
//import AlertScreen from './pages/AlertScreen';
import SettingScreen from './pages/SettingScreen';
import DetailsScreen from './pages/DetailsScreen';
import ProfileScreen from './pages/ProfileScreen';
import Wishlistf from './pages/Wishlistf';
import แจ้ง from './pages/แจ้ง';
import MapsScreen from './pages/MapsScreen';
import MapView, {Marker} from 'react-native-maps';
import Home from './containers2/Home';
import HShose from './containers2/HShose';
import HWatch from './containers2/HWatch';
import HBackpack from './containers2/HBackpack';
import Hlotus from './containers2/Hlotus';
import Hwatson from './containers2/Hwatson';

//import { createStackNavigator} from 'react-navigation-stack';
 
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ตั้งค่า from './pages/ตั้งค่า';

const HomeStack = createStackNavigator(
  {

    Home: { screen: HomeScreenf },
    Wishlistf: { screen: Wishlistf },
    Wishlist: { screen: wishlist },
    HomeScreen: { screen: HomeScreen },
    setting: { screen: setting },
    web: { screen: web },
    ข้อมูลผู้ใช้: { screen: ข้อมูลผู้ใช้ },
    input1: { screen: input1 },
    RegisterUser: { screen: RegisterUser },
    ViewAllUser: { screen: ViewAllUser },
    DeleteUser: { screen: DeleteUser },
    UpdateUser: { screen: UpdateUser },
    บันทึกรายการ: { screen: บันทึกรายการ },
    all: { screen: all },
    all2: { screen: all2 }, 
    สถานที่ประจำ: { screen: สถานที่ประจำ },
    location2: { screen: location2 },
  ลบรายการ: { screen: ลบรายการ }, 
  FirstPage: { screen: FirstPage },
  SecondPage: { screen: SecondPage }, 
  ตั้งค่า: { screen: ตั้งค่า },
  RegisterUser: { screen: RegisterUser },
    ViewAllUser: { screen: ViewAllUser },
    DeleteUser: { screen: DeleteUser },
    UpdateUser: { screen: UpdateUser },
    SettingScreen: { screen: SettingScreen },
   

  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#FF6666',
      },
      headerTintColor: '#FFFFFF',
      title: 'Setting',
    },
  }
);
/*const AlertStack = createStackNavigator(
  {
    Alert: { screen: แจ้ง },
    Home: { screen: HomeScreenf },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#FF6666',
      },
      headerTintColor: '#FFFFFF',
      title: 'Alert',
    },
  }
);
*/
const MallStack = createStackNavigator(
  {
    //Promotion: { screen: MallScreen },
    
    Promotion : {screen: Home},

    HShose:{screen: HShose,},
    
    HWatch:{screen: HWatch},
    
    HBackpack:{ screen: HBackpack},

    Hlotus:{ screen: Hlotus},

    Hwatson:{ screen: Hwatson}

},
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#FF6666',
      },
      headerTintColor: '#FFFFFF',
      title: 'Store',
    },
  }
);

/*const MapsStack = createStackNavigator(
  {
    Maps: { screen: MapsScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#FF6666',
      },
      headerTintColor: '#FFFFFF',
      title: 'Maps',
    },
  }
);
*/

const SettingsStack = createStackNavigator(
  {
    Settings: { screen: SettingScreen },
    
    
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#FF1493',
      },
      headerTintColor: '#FFFFFF',
      title: 'Diary',
    },
  }
);



const App = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    //Maps: {screen: MapsStack},
    Store: {screen: MallStack},
    //Alert: {screen: แจ้ง},
    Diary: { screen: SettingsStack },
   // menu: { screen: App2 },
  },
  
  { defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
        } else if (routeName === 'Diary') {
          iconName = `ios-list-box`;
        }else if (routeName === 'Store') {
          iconName = `ios-cart`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#FF1493',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(App);

