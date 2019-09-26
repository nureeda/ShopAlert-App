import React from 'react';
import {
  View,TouchableOpacity,
  ImageBackground,Button, Linking
} from 'react-native';
//import Navigation from 'react-navigation';
import CardStack, {Card} from 'react-native-card-stack-swiper';
import CardItem from '../components2/CardItem';
import styles from '../assets2/styles';
import Lotus from '../assets2/data/Lotus';


const Hlotus = () => {

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
          {Lotus.map((item, index) => (
            <Card key={index}>
            <TouchableOpacity onPress={() => Linking.openURL('https://35e7c9fb.ngrok.io/img/bb.php')}>
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

export default Hlotus;