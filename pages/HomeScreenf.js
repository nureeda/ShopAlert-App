import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Button,Image, ScrollView,ViewPagerAndroid, ImageBackground } from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
//import CustomMenu from './component/CustomMenu';
//import CustomMenuIcon from './component/CustomMenuIcon';
import { SliderBox } from 'react-native-image-slider-box';
import { Card } from 'react-native-elements';
import CustomMenu from './component/CustomMenu';
import CustomMenuIcon from './component/CustomMenuIcon';


class HomeScreenf extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('Title', 'ShopAlert'),
      
      headerStyle: {
        backgroundColor: navigation.getParam('BackgroundColor', '#FF1493'),
      },
        headerTintColor: navigation.getParam('HeaderTintColor', '#FFFFFF'),
        headerRight: (
        <CustomMenuIcon
        menutext="Menu"
        menustyle={{
          marginRight: 16,
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
        textStyle={{
          color: 'white',
        }}
        option1Click={() => {
          navigation.navigate('บันทึกรายการ');
        }}
        option2Click={() => {
          navigation.navigate('ตั้งค่า');
        }}
        
      />
      ),
      
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://ustatic.priceza.com/img/upload/review-washing-machine%E2%80%8E-1140x310-84871.jpg',
        'http://imagecenter.lord-of-deb.com/whatsale/sale_image/5d58d09c7c600-0.jpg',
        'http://imagecenter.lord-of-deb.com/whatsale/sale_image/5d54e08f3978a-0.jpg',
        'http://imagecenter.lord-of-deb.com/whatsale/sale_image/5d539b66c7fb5-0.jpg'
      ]
    };
    const slides = [
      {
        key: '฿299',
        title: 'สก็อตต์เอ็กตร้า ',
        uri: 'https://img.priceza.com/img1/3046/0001/3046-20190407105004-10582344568191271.jpg',
        backgroundColor: '#FFFFFF',
      },
      {
        key: '฿186',
        title: 'ดาวน์นี่ ฟิวชั่น ',
        uri: 'https://img.priceza.com/img2/20005/0001/20005-20190208085533-11031329984454067.jpg',
        backgroundColor: '#FFFFFF',
      },
      {
        key: '฿79',
        title: 'เนสกาแฟ ',
        uri: 'https://secure.ap-tescoassets.com/assets/TH/362/8850124003362/ShotType1_225x225.jpg',
        backgroundColor: '#FFFFFF',
      },
      {
        key: '฿138',
        title: 'Coffee ',
        uri: 'https://img.priceza.com/img2/20005/0001/20005-20190207095502-10948496500019249.jpg',
        backgroundColor: '#FFFFFF',
      },
      {
        key: '฿59',
        title: 'Kit Kat ',
        uri: 'https://img.priceza.com/img2/20005/0001/20005-20190208085526-11031322785347307.jpg',
        backgroundColor: '#FFFFFF',
      },
      {
        key: '฿409',
        title: 'เปา เอ็ม.วอช ',
        uri: 'https://img.priceza.com/img2/3264/0001/3264-20190220165124-12096708173780779.jpg',
        backgroundColor: '#FFFFFF',
      },
    ];
    global.slides = slides;

    const slides1 = [
      {
        key: '฿1750',
        title: 'เสื้อแจ็คเก็ต ',
        uri: 'https://thumbor-live.supersports.co.th/7HclvT1bVKi9CddUpCsv2LnPqnc=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static-catalog.supersports.co.th/p/adidas-8825-81393-1.jpg',
        backgroundColor: '#FFFFFF',
      },
      {
        key: '฿186',
        title: 'เสื้อแฟชั่น ',
        uri: 'https://img.ltwebstatic.com/images2_pi/2019/07/19/15635223452408403293_thumbnail_405x552.jpg',
        backgroundColor: '#FFFFFF',
      },
      {
        key: '฿1529',
        title: 'รองเท้าวิ่งผู้หญิง ',
        uri: 'https://thumbor-live.supersports.co.th/N-dZbmwZuHQA9O0FRaJsHdvHjCM=/fit-in/236x345/filters:quality(90):fill(ffffff)/http://static-catalog.supersports.co.th/p/adidas-9076-19683-1.jpg',
        backgroundColor: '#FFFFFF',
      },
      {
        key: '฿299',
        title: 'ลิปสติก',
        uri: 'data:image/jpeg;base64,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',
        backgroundColor: '#FFFFFF',
      },
      {
        key: '฿399',
        title: 'แป้งตลับ',
        uri: 'http://www.prsociety.net/wp-content/uploads/2015/07/%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%E0%B9%81%E0%B8%9B%E0%B9%89%E0%B8%87%E0%B8%9E%E0%B8%B1%E0%B8%9F%E0%B8%9A%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A3%E0%B9%88%E0%B8%B2Babalah.jpg',
        backgroundColor: '#FFFFFF',
      },
      {
        key: '฿409',
        title: 'เปา เอ็ม.วอช ',
        uri: 'https://img.priceza.com/img2/3264/0001/3264-20190220165124-12096708173780779.jpg',
        backgroundColor: '#FFFFFF',
      },
    ];
    global.slides1 = slides1;
  }
  onPressLearnMore() {
    alert('OK');
  }

  render() {
    return (
      
      <View style={styles.container}>
        <ScrollView>
        <SliderBox
          images={this.state.images}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
        />
        </ScrollView>
      <View>
      
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
              this.props.navigation.navigate('บันทึกรายการ');
            }}
            option2Click={() => {
              this.props.navigation.navigate('ตั้งค่า');
            }}
          />
           
        </View>
      </View>
     
<Card
  containerStyle={{
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
  }}>
  <View
    style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <Text style={{ color: '#606070', fontWeight: 'bold' }}>
      Recommended for You
    </Text>
    <Text style={{ color: '#228B22' }} onPress={() => alert('MORE')}>
      MORE
    </Text>
  </View>
  <View style={{ flexDirection: 'row', width: '100%' }}>
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      {global.slides.map((item, key) => (
        <View style={{ margin: 5 }} key={key}>
          <Image
            source={{
              uri: item.uri,
            }}
            style={{ width: 70, height: 70, margin: 10 }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{ color: '#494949', fontWeight: '200' }}
              onPress={() => {
                alert('Title ' + item.title + ' Clicked');
              }}>
              {item.title}
            </Text>
            <Text style={{ color: '#228B22' }}>⋮</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{ color: '#FF0000', fontWeight: '200' }}>
              {item.key}
            </Text>
            <Text style={{ color: '#228B22' }}>{item.text}</Text>
            
          </View>
        </View>
      ))}
    </ScrollView>
  </View>
</Card>
<Card
  containerStyle={{
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
  }}>
  <View
    style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <Text style={{ color: '#606070', fontWeight: 'bold' }}>
    Popular
    </Text>
    <Text style={{ color: '#228B22' }} onPress={() => alert('MORE')}>
      MORE
    </Text>
  </View>
  <View style={{ flexDirection: 'row', width: '100%' }}>
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      {global.slides1.map((item, key) => (
        <View style={{ margin: 5 }} key={key}>
          <Image
            source={{
              uri: item.uri,
            }}
            style={{ width: 70, height: 70, margin: 10 }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{ color: '#494949', fontWeight: '200' }}
              onPress={() => {
                alert('Title ' + item.title + ' Clicked');
              }}>
              {item.title}
            </Text>
            <Text style={{ color: '#228B22' }}>⋮</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{ color: '#FF0000', fontWeight: '200' }}>
              {item.key}
            </Text>
            <Text style={{ color: '#228B22' }}>{item.text}</Text>
            
          </View>
        </View>
      ))}
    </ScrollView>
  </View>
</Card>
</View>
</View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width : "100%", 
    height :"100%",
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
},
});


export default HomeScreenf;


 
