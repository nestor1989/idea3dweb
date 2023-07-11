import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {HomeScreen} from '../screens/HomeScreen';
//import { CalcuScreen } from '../screens/CalcuScreen';

export type RootStackParams = {
  HomeScreen: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle:{
                backgroundColor:'white'
            }
        }}>
      <Stack.Screen name="HomeScreen" component={ HomeScreen} />
      
    </Stack.Navigator>
  );
}