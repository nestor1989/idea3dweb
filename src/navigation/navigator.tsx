import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {HomeScreen} from '../screens/HomeScreen';
import { DetailsScreen } from '../screens/DetailsScreen';
import { Things } from '../interfaces/thingsInterface';
//import { CalcuScreen } from '../screens/CalcuScreen';

export type RootStackParams = {
  HomeScreen: undefined,
  DetailsScreen: {thing:Things}
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
      <Stack.Screen name="DetailsScreen" component={ DetailsScreen} />
      
    </Stack.Navigator>
  );
}