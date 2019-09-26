/*Custom Button*/
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
const Mybutton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
 
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#f05555',
    height: 50,
    color: '#f05555',
    borderRadius: 100,
    justifyContent: 'center',
    borderWidth: 1,
    width : "50%",
    marginTop: 16,
    marginLeft: 100,
    marginRight: 50,
  },
  text: {
    color: '#FFFFFF',
  },
});
export default Mybutton;