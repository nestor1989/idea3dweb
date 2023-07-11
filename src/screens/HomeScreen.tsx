import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import thingsAPI from '../api/thingsApi';

export const HomeScreen = ()=>{

    useEffect(() => {
        thingsAPI.get('/search?/page=1')
        .then(resp => {
            console.log(resp)
        })

    }, [])
    
    const [count, setCount] = useState(0);
    return (
        <View style={styles.container}>
        <Text style={styles.title}>You stay at{'\n'}HomeScreen</Text>
        <TouchableOpacity
            onPress={() => setCount(count + 1)}
            style={styles.button}>
            <Text>Click me!</Text>
        </TouchableOpacity>

        <Text>You clicked {count} times!</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#C3E8BD',
      paddingTop: 40,
      paddingHorizontal: 10,
    },
    button: {
      backgroundColor: '#ADBDFF',
      padding: 5,
      marginVertical: 20,
      alignSelf: 'flex-start',
    },
    title: {
      fontSize: 40,
    },
  });