import React from 'react';
import {
  View,TouchableOpacity,
  ImageBackground,Button, Linking
} from 'react-native';
//import Navigation from 'react-navigation';
import CardStack, {Card} from 'react-native-card-stack-swiper';
import CardItem from '../components2/CardItem';
import styles from '../assets2/styles';
import shose from '../assets2/data/shose';


const HShose = () => {

  return (
    
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.bg}>
      <View style={styles.containerHome}>
        
        
        <CardStack
          loop={true}
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          ref={swiper => (this.swiper = swiper)}>
          {shose.map((item, index) => (
            <Card key={index}>
            <TouchableOpacity onPress={() => Linking.openURL('http://72ec2bf5.ngrok.io/img/shop.php')}>
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

export default HShose;