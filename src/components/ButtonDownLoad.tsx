import React from 'react';
import { TouchableOpacity, Text, Linking, StyleSheet, Image } from 'react-native';

interface MyButtonProps {
    url: string;
  }

const ButtonDownload = ({ url}: MyButtonProps) => {
  const handleButtonPress = () => {
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity 
        style={styles.button} 
        onPress={handleButtonPress}
        activeOpacity={0.5}>

          <Image
            source={require('../assets/google-play-badge.png')}
            style={styles.buttonImageIconStyle}
            />
      
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius:25 ,
    width:258,
    height:100,
    alignContent: 'center'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  buttonImageIconStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
  },
});

export default ButtonDownload;