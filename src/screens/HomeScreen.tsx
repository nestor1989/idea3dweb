import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
import { useThings } from '../hooks/useThings';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThingCard } from '../components/ThingCard';

export const HomeScreen = ()=>{

    const {thingsPopular, isLoading} = useThings();
    const {top} = useSafeAreaInsets();


    if (isLoading){
        return(
            <View style = {{flex:1, justifyContent:'center', alignContent: 'center'}}>
                <ActivityIndicator color='blue' size={100}/>
            </View>
        );
    }

    return (
        <View style={styles.container}>
        <Text style={styles.title}>{thingsPopular[1]?.name}</Text>
        <ThingCard thing={thingsPopular[1]} />

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