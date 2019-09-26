import React from 'react';
import {
  View,TouchableOpacity,
  ImageBackground,Button, Linking
} from 'react-native';
//import Navigation from 'react-navigation';
import CardStack, {Card} from 'react-native-card-stack-swiper';
import CardItem from '../components2/CardItem';
import styles from '../assets2/styles';
import Backpack from '../assets2/data/Backpack';


const HBackpack = () => {

  return (
    
    <ImageBackground
      source={require('../assets2/images/bg.png')}
      style={styles.bg}>
      <View style={styles.containerHome}>
        
        
        <CardStack
          loop={true}
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          ref={swiper => (this.swiper = swiper)}>
          {Backpack.map((item, index) => (
            <Card key={index}>
            <TouchableOpacity onPress={() => Linking.openURL('http://d5a3af58.ngrok.io/img/Shoes.PHP')}>
              <CardItem
                image={item.image}
                name={item.name}
                description={item.description}
                matches={item.match}
                actions
                onPressLeft={() => this.swiper.swipeLeft()}
                onPressRight={() => this.swiper.swipeRight()} 
              />
               </TouchableOpacity>
            </Card>
          ))}
        </CardStack>
        
    

    
  </View>
    </ImageBackground>

    

         
  );
};

export default HBackpack;