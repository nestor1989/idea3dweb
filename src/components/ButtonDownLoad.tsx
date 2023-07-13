import React from 'react';
import { TouchableOpacity, Text, Linking, StyleSheet } from 'react-native';

interface MyButtonProps {
    url: string;
    text: string;
  }

const ButtonDownload = ({ url, text }: MyButtonProps) => {
  const handleButtonPress = () => {
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 50,
    width:125,
    height:50,
    alignContent: 'center'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ButtonDownload;