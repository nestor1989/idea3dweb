import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigation/navigator';
import React from 'react';
import {StyleSheet} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <>
      
          <Navigator/>

      </>
      </NavigationContainer>
  )
};

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

export default App;