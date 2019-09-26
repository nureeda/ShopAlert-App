import React from 'react';
import styles from '../assets2/styles';

import {ScrollView,View,Text,TouchableOpacity,ImageBackground,FlatList} from 'react-native';
import CardItem from '../components2/CardItem';
import demo_shoe from '../assets2/data/demo_shoe';
import demo_watch from '../assets2/data/demo_watch';
import demo_backpack from '../assets2/data/demo_backpack';
import demo_lotus from '../assets2/data/demo_lotus';
import demo_watson from '../assets2/data/demo_watson';


const Home = (props) => {
    const{navigate}=props.navigation
 
  return (
    <ImageBackground
      source={require('../assets2/images/77.jpg')}
      style={styles.bg}>
      <View style={styles.containerMatches}>
        <ScrollView>
          <View style={styles.top}>
            
            
          </View>

            <FlatList
            numColumns={1}
            data={demo_lotus}
            renderItem={({item}) => (
              < TouchableOpacity onPress = {() => {props.navigation.navigate('Hlotus')}} >
                
                <CardItem
                  image={item.image}
                  name={item.name}
                 
                  variant
                />
              </TouchableOpacity>
            )}
          />
          <FlatList
            numColumns={1}
            data={demo_watson}
            renderItem={({item}) => (
              < TouchableOpacity onPress = {() => {props.navigation.navigate('Hwatson')}} >
                
                <CardItem
                  image={item.image}
                  name={item.name}
                 
                  variant
                />
              </TouchableOpacity>
            )}
          />
          <FlatList
            numColumns={1}
            data={demo_shoe}
            renderItem={({item}) => (
              < TouchableOpacity onPress = {() => {props.navigation.navigate('HShose')}} >
                
                <CardItem
                  image={item.image}
                  name={item.name}
                 
                  variant
                />
              </TouchableOpacity>
            )}
          />
           <FlatList
            numColumns={1}
            data={demo_watch}
            renderItem={({item}) => (
              < TouchableOpacity onPress = {() => {props.navigation.navigate('HWatch')}} >
                
                <CardItem
                  image={item.image}
                  name={item.name}
                 
                  variant
                />
              </TouchableOpacity>
            )}
          />
           <FlatList
            numColumns={1}
            data={demo_backpack}
            renderItem={({item}) => (
              < TouchableOpacity onPress = {() => {props.navigation.navigate('HBackpack')}} >
                
                <CardItem
                  image={item.image}
                  name={item.name}
                 
                  variant
                />
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Home;