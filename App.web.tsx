import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigation/navigator';
import React from 'react';
import {StyleSheet} from 'react-native';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const App = () => {
  return (
    <HelmetProvider>
      <Helmet>
      <title>Idea 3D</title>
        <meta name="description" content="Impresión 3D en la palma de tu mano" />
        <meta property="og:image" content={'./assets/idea-logo-circ.png'} />
      </Helmet>
    <NavigationContainer>
      <>
      
          <Navigator/>

      </>
      </NavigationContainer>
    </HelmetProvider>
  )
};

export default App;