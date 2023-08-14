import React from 'react';
import { TouchableOpacity, Text, Linking, StyleSheet, Image, Dimensions } from 'react-native';

interface MyButtonProps {
    url: string;
  }

const ButtonSponsor = ({ url}: MyButtonProps) => {
    const dimensions = Dimensions.get('window');
    const isSmallDevice = dimensions.width < 768
    
    const handleButtonPress = () => {
      Linking.openURL(url);
    };
  
  
  
    return (
      <TouchableOpacity 
          style={styles.button} 
          onPress={handleButtonPress}
          activeOpacity={0.5}
  
          >
  
            <Text style = {[styles.title, isSmallDevice && styles.titleMobile]}>Contribuir</Text>
        
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    button: {
      borderRadius:50,
      //width:200,
      backgroundColor:'#00EDCB',
      //height:60,
      alignContent: 'center',
      alignItems:'center',
      justifyContent:'center',
      fontSize: 16,
      fontWeight: 'bold',
    },
  
    title: {
      fontSize: 20,
      color: 'white',
      textAlign: 'center',
      marginHorizontal:20,
      marginVertical:20
    },
  
    titleMobile: {
      fontSize: 20,
      color: 'white',
      textAlign: 'center',
    },
  
  });

export default ButtonSponsor;