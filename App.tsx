import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from "./src/navigation/navigator";
import React, { useEffect } from 'react';
import {StyleSheet} from 'react-native';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const App = () => {
  
  return (
    <HelmetProvider>
      <Helmet>
      <title>Nuevo Título de Pestaña</title>
        <meta name="description" content="Nueva descripción de la página." />
        <meta property="og:image" content="URL_de_la_miniatura" />
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